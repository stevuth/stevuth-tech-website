
import { db } from './firebase';
import { collection, getDocs, query, where, limit, orderBy, FirestoreError } from 'firebase/firestore';
import imageData from '@/lib/placeholder-images.json';

export interface Post {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  date: string;
  author: string;
  category: string;
  content: string;
  aiHint: string;
}

// A helper function to convert Firestore snapshot to a Post object
const postFromDoc = (doc: any): Post => {
  const data = doc.data();
  return {
    id: doc.id,
    slug: data.slug || '',
    title: data.title || '',
    excerpt: data.excerpt || '',
    imageUrl: data.imageUrl || imageData.blog.default.src,
    date: data.date || '',
    author: data.author || '',
    category: data.category || '',
    content: data.content || '',
    aiHint: data.aiHint || imageData.blog.default.hint,
  };
};

const handleFirestoreError = (error: unknown, context: string): [] | null => {
  console.error(`Error in ${context}:`, error);

  if (error instanceof FirestoreError) {
    // This handles specific Firestore SDK errors
    switch (error.code) {
      case 'permission-denied':
        console.error(`
          ============================================================
          FIREBASE PERMISSION DENIED IN ${context.toUpperCase()}
          ------------------------------------------------------------
          This is a security rules issue. Go to your Firebase project,
          then Build > Firestore Database > Rules tab, and ensure your
          rules allow this operation. For a public blog, you need:
          
          rules_version = '2';
          service cloud.firestore {
            match /databases/{database}/documents {
              match /posts/{postId} {
                allow read: if true; // Allows anyone to read posts
                allow write: if false; // Or your auth logic for admin
              }
            }
          }

          Click 'Publish' after making the change.
          ============================================================
        `);
        break;
      case 'not-found':
         console.error(`
          ============================================================
          FIREBASE DATABASE/COLLECTION NOT FOUND IN ${context.toUpperCase()}
          ------------------------------------------------------------
          1. Check that the 'projectId' in your .env.local file matches
             your Firebase project ID.
          2. Ensure you have created a Firestore database in your
             Firebase project.
          3. Ensure you have a collection named 'posts'.
          ============================================================
        `);
        break;
      default:
        console.error(`A Firestore error occurred (${error.code}): ${error.message}`);
    }
  } else if (error instanceof Error) {
    // This handles generic JavaScript errors (like ReferenceError from a typo)
    console.error(`A JavaScript error occurred in ${context}: ${error.name} - ${error.message}`);
    console.error(error.stack);
  } else {
    // Fallback for any other type of error
    console.error(`An unknown error of type ${typeof error} occurred in ${context}.`);
  }
  
  // To prevent app crashes, always return an expected type.
  if (context.startsWith('getPost')) {
    return null;
  }
  return [];
};


export async function getPosts(options: { limit?: number } = {}): Promise<Post[]> {
  try {
    const postsRef = collection(db, 'posts');
    let q = query(postsRef, orderBy('date', 'desc'));
    if (options.limit) {
      q = query(postsRef, orderBy('date', 'desc'), limit(options.limit));
    }
    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) {
      return [];
    }
    return querySnapshot.docs.map(postFromDoc);
  } catch (error) {
    handleFirestoreError(error, 'getPosts');
    return [];
  }
}

export async function getPost(slug: string): Promise<Post | null> {
  try {
    const postsRef = collection(db, 'posts');
    const q = query(postsRef, where('slug', '==', slug), limit(1));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      console.log(`No post found with slug: ${slug}`);
      return null;
    }
    
    const doc = querySnapshot.docs[0];
    return postFromDoc(doc);
  } catch (error) {
     handleFirestoreError(error, `getPost with slug: ${slug}`);
     return null;
  }
}

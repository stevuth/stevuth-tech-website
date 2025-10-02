
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
    switch (error.code) {
      case 'permission-denied':
        console.error(`
          ============================================================
          FIREBASE PERMISSION DENIED
          ------------------------------------------------------------
          This is a security rules issue. Please go to your Firebase
          console, select your project, go to Build > Firestore Database >
          Rules tab, and ensure your rules allow read access.
          For a public blog, you can use:
          
          rules_version = '2';
          service cloud.firestore {
            match /databases/{database}/documents {
              match /posts/{postId} {
                allow read: if true;
                allow write: if false; // Or your auth logic
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
          FIREBASE DATABASE NOT FOUND
          ------------------------------------------------------------
          This means the server could not find your Firestore database.
          Please check the following:
          1. The 'projectId' in your .env.local file matches your
             Firebase project ID exactly.
          2. You have created a Firestore database in your Firebase
             project.
          3. The 'Cloud Firestore API' is enabled in your Google Cloud
             project console.
          ============================================================
        `);
        break;
      case 'unauthenticated':
        console.error("Firestore unauthenticated. The request does not have valid authentication credentials.");
        break;
      default:
        console.error(`A Firestore error occurred (${error.code}): ${error.message}`);
    }
  } else {
    console.error("An unknown error occurred while fetching data from Firestore.");
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
      q = query(posts-ref, orderBy('date', 'desc'), limit(options.limit));
    }
    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) {
      // It's not an error if there are no posts, just return an empty array.
      return [];
    }
    return querySnapshot.docs.map(postFromDoc);
  } catch (error) {
    // Gracefully handle errors and return an empty array to prevent crashes.
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
     // Gracefully handle errors and return null.
     handleFirestoreError(error, `getPost with slug: ${slug}`);
     return null;
  }
}

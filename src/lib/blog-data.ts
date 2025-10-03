
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
    if (error.code === 'permission-denied') {
        console.error(`
          =======================================================================
          CRITICAL: FIREBASE PERMISSION DENIED IN \`${context.toUpperCase()}\`
          -----------------------------------------------------------------------
          This is a security rules issue. Your app does not have permission to
          access the 'posts' collection. You MUST update your rules in the
          Firebase Console.

          1. COPY THE RULES BELOW:
          --------------------------
          rules_version = '2';
          service cloud.firestore {
            match /databases/{database}/documents {
              match /posts/{postId} {
                // Allow anyone to read blog posts
                allow read: if true;

                // ONLY allow logged-in users to write, update, or delete
                allow write: if request.auth != null;
              }
            }
          }
          --------------------------

          2. PASTE INTO FIREBASE CONSOLE:
          Click this link to go directly to your rules page:
          https://console.firebase.google.com/project/stevuth-tech-backend/firestore/rules

          3. PUBLISH:
          Delete the existing rules, paste the new ones, and click "Publish".
          =======================================================================
        `);
      } else {
        console.error(`A Firestore error occurred in ${context} (${error.code}): ${error.message}`);
      }
  } else if (error instanceof Error) {
    console.error(`A JavaScript error occurred in ${context}: ${error.name} - ${error.message}`);
    console.error(error.stack);
  } else {
    console.error(`An unknown error of type ${typeof error} occurred in ${context}.`);
  }
  
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

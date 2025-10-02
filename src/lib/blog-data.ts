
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
        console.error("Firestore permission denied. Please check your security rules in the Firebase console.");
        break;
      case 'not-found':
        console.error("Firestore database not found or API not enabled. Please ensure you have created a Firestore database in the Firebase Console and that the 'Cloud Firestore API' is enabled in your Google Cloud project.");
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
  
  // Return a value that matches the function's expected return type
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
    return handleFirestoreError(error, 'getPosts') as Post[];
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
     return handleFirestoreError(error, `getPost with slug: ${slug}`) as null;
  }
}

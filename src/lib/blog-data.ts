import { db } from './firebase';
import { collection, getDocs, query, where, limit, orderBy, FirestoreError } from 'firebase/firestore';

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
    imageUrl: data.imageUrl || '',
    date: data.date || '',
    author: data.author || '',
    category: data.category || '',
    content: data.content || '',
    aiHint: data.aiHint || '',
  };
};

const handleFirestoreError = (error: unknown, context: string) => {
  if (error instanceof FirestoreError) {
    if (error.code === 'permission-denied') {
      console.error(`Firestore permission denied in ${context}. Please check your security rules in the Firebase console.`);
    } else {
      console.error(`Firestore error in ${context} (${error.code}):`, error.message);
    }
  } else {
    console.error(`An unknown error occurred in ${context}:`, error);
  }
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

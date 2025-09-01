import { db } from './firebase';
import { collection, getDocs, query, where, limit, orderBy } from 'firebase/firestore';

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
    console.error("Error fetching posts from Firestore:", error);
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
    console.error(`Error fetching post with slug ${slug}:`, error);
    return null;
  }
}

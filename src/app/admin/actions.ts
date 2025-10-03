
"use server";

import { z } from "zod";
import { db } from "@/lib/firebase";
import { collection, addDoc, Timestamp, doc, updateDoc, FirestoreError } from "firebase/firestore";
import imageData from '@/lib/placeholder-images.json';
import { revalidatePath } from "next/cache";
import { redirect } from 'next/navigation';

const postSchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters."),
  slug: z.string().min(5, "Slug must be at least 5 characters.").regex(/^[a-z0-9-]+$/, "Slug must be lowercase with no spaces."),
  excerpt: z.string().min(10, "Excerpt must be at least 10 characters."),
  content: z.string().min(20, "Content must be at least 20 characters."),
  imageUrl: z.string().url("Please upload an image or use the default.").or(z.literal("")),
  author: z.string().min(2, "Author name must be at least 2 characters."),
  category: z.string().min(3, "Category must be at least 3 characters."),
  aiHint: z.string().optional(),
});

export type State = {
  errors?: {
    title?: string[];
    slug?: string[];
    excerpt?: string[];
    content?: string[];
    imageUrl?: string[];
    author?: string[];
    category?: string[];
    aiHint?: string[];
  };
  message: string;
};

const handleFirestoreError = (error: unknown): string => {
  if (error instanceof FirestoreError) {
    console.error(`Firestore Error (${error.code}): ${error.message}`);
    if (error.code === 'permission-denied') {
      return "PERMISSION DENIED: Your security rules are blocking this. Ensure you've updated the rules in the Firebase Console to allow writes for authenticated users. The rule should be 'allow write: if request.auth != null;'.";
    }
    return `A Firestore error occurred: ${error.message} (Code: ${error.code})`;
  }
  if (error instanceof Error) {
    console.error(`Generic Error: ${error.message}`);
    return error.message;
  }
  return "An unknown error occurred.";
};


export async function createPost(prevState: State, formData: FormData): Promise<State> {
  const validatedFields = postSchema.safeParse({
    title: formData.get("title"),
    slug: formData.get("slug"),
    excerpt: formData.get("excerpt"),
    content: formData.get("content"),
    imageUrl: formData.get("imageUrl"),
    author: formData.get("author"),
    category: formData.get("category"),
    aiHint: formData.get("aiHint"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Validation failed. Please check the fields.",
    };
  }

  const { aiHint, imageUrl, ...postData } = validatedFields.data;

  try {
    const newPost = {
      ...postData,
      imageUrl: imageUrl || imageData.blog.default.src,
      aiHint: aiHint || imageData.blog.default.hint,
      date: new Date().toISOString().split('T')[0],
      createdAt: Timestamp.now(),
    };
    
    await addDoc(collection(db, "posts"), newPost);
    
  } catch (error: unknown) {
    const errorMessage = handleFirestoreError(error);
    return {
        message: `Could not create post: ${errorMessage}`,
    };
  }

  // Revalidate paths and redirect
  revalidatePath('/admin');
  revalidatePath('/blog');
  redirect('/admin');
}

export async function updatePost(postId: string, prevState: State, formData: FormData): Promise<State> {
    if (!postId) return { message: "Post ID is missing." };

    const validatedFields = postSchema.safeParse({
        title: formData.get("title"),
        slug: formData.get("slug"),
        excerpt: formData.get("excerpt"),
        content: formData.get("content"),
        imageUrl: formData.get("imageUrl"),
        author: formData.get("author"),
        category: formData.get("category"),
        aiHint: formData.get("aiHint"),
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: "Validation failed. Please check the fields.",
        };
    }

    const { aiHint, imageUrl, ...postData } = validatedFields.data;

    try {
        const postRef = doc(db, "posts", postId);
        await updateDoc(postRef, {
            ...postData,
            imageUrl: imageUrl || imageData.blog.default.src,
            aiHint: aiHint || imageData.blog.default.hint,
        });
    } catch (error: unknown) {
        const errorMessage = handleFirestoreError(error);
        return {
            message: `Could not update post: ${errorMessage}`,
        };
    }

    // Revalidate paths and redirect
    revalidatePath('/admin');
    revalidatePath(`/blog/${postData.slug}`);
    redirect('/admin');
}

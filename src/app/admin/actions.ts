
"use server";

import { z } from "zod";
import { db } from "@/lib/firebase";
import { collection, addDoc, Timestamp, doc, updateDoc } from "firebase/firestore";
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
    let errorMessage = "An unknown error occurred while creating the post.";
    if (error instanceof Error) {
        errorMessage = `Could not create post: ${error.message}`;
    }
    console.error("Error creating post:", error);
    
    return {
        message: errorMessage,
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
        let errorMessage = "An unknown error occurred while updating the post.";
        if (error instanceof Error) {
            errorMessage = `Could not update post: ${error.message}`;
        }
        console.error("Error updating post:", error);
        
        return {
            message: errorMessage,
        };
    }

    // Revalidate paths and redirect
    revalidatePath('/admin');
    revalidatePath(`/blog/${postData.slug}`);
    redirect('/admin');
}

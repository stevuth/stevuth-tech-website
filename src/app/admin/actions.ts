
"use server";

import { z } from "zod";
import { db } from "@/lib/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
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

// This function will not return a state object anymore.
// It will either throw an error or redirect.
export async function createPost(formData: FormData) {
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
    // In a real app, you'd want a better way to communicate this back.
    // For now, we'll just log it. The form should have client-side validation anyway.
    console.error("Validation failed:", validatedFields.error.flatten().fieldErrors);
    // You could redirect to an error page or back to the form with a query param.
    // For now, we just won't proceed.
    return;
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
    console.error("Error creating post:", error);
    // In a real app, you should handle this more gracefully,
    // maybe redirecting to a page with an error message.
    // For now, just throwing will show the Next.js error boundary.
    throw new Error("Could not create post. Please check Firestore permissions and network status.");
  }

  // Revalidate the admin path to show the new post.
  revalidatePath('/admin');
  
  // Redirect to the admin dashboard on success.
  redirect('/admin');
}

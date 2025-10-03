
"use client";

import { useActionState, useRef, useState, useEffect } from "react";
import { useFormStatus } from "react-dom";
import { createPost, updatePost, type State } from "../actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ImageUploader } from "@/components/ImageUploader";
import imageData from '@/lib/placeholder-images.json';
import MDEditor from '@uiw/react-md-editor';
import rehypeSanitize from 'rehype-sanitize';
import type { Post } from "@/lib/blog-data";

const initialState: State = {
  message: "",
  errors: undefined,
};

function SubmitButton({ isEditing }: { isEditing: boolean }) {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? (isEditing ? "Updating..." : "Creating...") : (isEditing ? "Update Post" : "Create Post")}
    </Button>
  );
}

export function PostForm({ post }: { post?: Post }) {
  const isEditing = !!post;
  const formAction = isEditing && post ? updatePost.bind(null, post.id) : createPost;
  const [state, dispatchFormAction] = useActionState(formAction, initialState);
  
  const [content, setContent] = useState(post?.content || "**Hello world!!!**");
  const [imageUrl, setImageUrl] = useState(post?.imageUrl || imageData.blog.default.src);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (post) {
      setContent(post.content);
      setImageUrl(post.imageUrl);
    }
  }, [post]);

  return (
    <form ref={formRef} action={dispatchFormAction} className="space-y-6">
       {state.message && <p className="text-sm text-destructive">{state.message}</p>}
      <div className="space-y-2">
        <Label htmlFor="title">Title</Label>
        <Input id="title" name="title" placeholder="Post Title" required minLength={5} defaultValue={post?.title} />
        {state.errors?.title && <p className="text-sm text-destructive">{state.errors.title[0]}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="slug">Slug</Label>
        <Input id="slug" name="slug" placeholder="post-title" required minLength={5} defaultValue={post?.slug} />
        {state.errors?.slug && <p className="text-sm text-destructive">{state.errors.slug[0]}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="excerpt">Excerpt</Label>
        <Textarea id="excerpt" name="excerpt" placeholder="A short summary of the post..." rows={3} required minLength={10} defaultValue={post?.excerpt} />
        {state.errors?.excerpt && <p className="text-sm text-destructive">{state.errors.excerpt[0]}</p>}
      </div>

      <div className="space-y-2">
        <Label>Content</Label>
        <div data-color-mode="dark">
            <MDEditor
              value={content}
              onChange={(value) => setContent(value || "")}
              previewOptions={{
                rehypePlugins: [[rehypeSanitize]],
              }}
              height={400}
            />
        </div>
        <input type="hidden" name="content" value={content} />
        {state.errors?.content && <p className="text-sm text-destructive">{state.errors.content[0]}</p>}
      </div>

       <div className="space-y-2">
         <Label htmlFor="imageUrl">Featured Image</Label>
         <ImageUploader onUploadSuccess={setImageUrl} initialImage={imageUrl} />
         <Input type="hidden" name="imageUrl" value={imageUrl} />
         {state.errors?.imageUrl && <p className="text-sm text-destructive">{state.errors.imageUrl[0]}</p>}
      </div>

       <div className="space-y-2">
        <Label htmlFor="aiHint">Image AI Hint</Label>
        <Input id="aiHint" name="aiHint" placeholder="e.g. 'tech code'" defaultValue={post?.aiHint || imageData.blog.default.hint} />
         {state.errors?.aiHint && <p className="text-sm text-destructive">{state.errors.aiHint[0]}</p>}
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="author">Author</Label>
          <Input id="author" name="author" placeholder="Author Name" defaultValue={post?.author || "Admin"} required minLength={2} />
           {state.errors?.author && <p className="text-sm text-destructive">{state.errors.author[0]}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="category">Category</Label>
          <Input id="category" name="category" placeholder="Post Category" defaultValue={post?.category || "General"} required minLength={3} />
          {state.errors?.category && <p className="text-sm text-destructive">{state.errors.category[0]}</p>}
        </div>
      </div>

      <div>
        <SubmitButton isEditing={isEditing} />
      </div>
    </form>
  );
}

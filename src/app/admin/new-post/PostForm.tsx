
"use client";

import { useState } from "react";
import { useFormStatus } from "react-dom";
import { createPost } from "../actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ImageUploader } from "@/components/ImageUploader";
import imageData from '@/lib/placeholder-images.json';
import MDEditor from '@uiw/react-md-editor';
import rehypeSanitize from 'rehype-sanitize';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Creating..." : "Create Post"}
    </Button>
  );
}

export function PostForm() {
  const [imageUrl, setImageUrl] = useState(imageData.blog.default.src);
  const [content, setContent] = useState("**Hello world!!!**");

  return (
    <form action={createPost} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="title">Title</Label>
        <Input id="title" name="title" placeholder="Post Title" required minLength={5} />
      </div>

      <div className="space-y-2">
        <Label htmlFor="slug">Slug</Label>
        <Input id="slug" name="slug" placeholder="post-title" required minLength={5} pattern="^[a-z0-9-]+$" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="excerpt">Excerpt</Label>
        <Textarea id="excerpt" name="excerpt" placeholder="A short summary of the post..." rows={3} required minLength={10} />
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
      </div>

       <div className="space-y-2">
         <Label htmlFor="imageUrl">Featured Image</Label>
         <ImageUploader onUploadSuccess={setImageUrl} />
         <Input type="hidden" name="imageUrl" value={imageUrl} />
      </div>

       <div className="space-y-2">
        <Label htmlFor="aiHint">Image AI Hint</Label>
        <Input id="aiHint" name="aiHint" placeholder="e.g. 'tech code'" defaultValue={imageData.blog.default.hint} />
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="author">Author</Label>
          <Input id="author" name="author" placeholder="Author Name" defaultValue="Admin" required minLength={2} />
        </div>

        <div className="space-y-2">
          <Label htmlFor="category">Category</Label>
          <Input id="category" name="category" placeholder="Post Category" defaultValue="General" required minLength={3} />
        </div>
      </div>

      <div>
        <SubmitButton />
      </div>
    </form>
  );
}

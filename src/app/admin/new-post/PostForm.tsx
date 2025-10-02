
"use client";

import { useActionState, useEffect, useState } from "react";
import { useFormStatus } from "react-dom";
import { createPost } from "../actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { ImageUploader } from "@/components/ImageUploader";
import { useRouter } from "next/navigation";
import imageData from '@/lib/placeholder-images.json';
import MDEditor from '@uiw/react-md-editor';
import rehypeSanitize from 'rehype-sanitize';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";

const initialState = {
  message: "",
  errors: undefined,
  success: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Creating..." : "Create Post"}
    </Button>
  );
}

export function PostForm() {
  const [state, formAction] = useActionState(createPost, initialState);
  const [imageUrl, setImageUrl] = useState(imageData.blog.default.src);
  const [content, setContent] = useState("**Hello world!!!**");
  const { toast } = useToast();
  const router = useRouter();

  useEffect(() => {
    if (state.success) {
      toast({
        title: "Success!",
        description: state.message,
      });
      // Redirect to the admin dashboard on success.
      router.push('/admin');
    }
  }, [state.success, state.message, router, toast]);

  return (
    <form action={formAction} className="space-y-6">
       {state.errors?._form && (
         <Alert variant="destructive">
            <Terminal className="h-4 w-4" />
            <AlertTitle>Error Creating Post</AlertTitle>
            <AlertDescription>
                {state.errors._form[0]}
            </AlertDescription>
        </Alert>
       )}
      <div className="space-y-2">
        <Label htmlFor="title">Title</Label>
        <Input id="title" name="title" placeholder="Post Title" required />
        {state.errors?.title && <p className="text-sm text-destructive">{state.errors.title[0]}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="slug">Slug</Label>
        <Input id="slug" name="slug" placeholder="post-title" required />
        {state.errors?.slug && <p className="text-sm text-destructive">{state.errors.slug[0]}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="excerpt">Excerpt</Label>
        <Textarea id="excerpt" name="excerpt" placeholder="A short summary of the post..." rows={3} required />
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
         <ImageUploader onUploadSuccess={setImageUrl} />
         <Input type="hidden" name="imageUrl" value={imageUrl} />
         {state.errors?.imageUrl && <p className="text-sm text-destructive">{state.errors.imageUrl[0]}</p>}
      </div>

       <div className="space-y-2">
        <Label htmlFor="aiHint">Image AI Hint</Label>
        <Input id="aiHint" name="aiHint" placeholder="e.g. 'tech code'" defaultValue={imageData.blog.default.hint} />
        {state.errors?.aiHint && <p className="text-sm text-destructive">{state.errors.aiHint[0]}</p>}
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="author">Author</Label>
          <Input id="author" name="author" placeholder="Author Name" defaultValue="Admin" required />
          {state.errors?.author && <p className="text-sm text-destructive">{state.errors.author[0]}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="category">Category</Label>
          <Input id="category" name="category" placeholder="Post Category" defaultValue="General" required />
          {state.errors?.category && <p className="text-sm text-destructive">{state.errors.category[0]}</p>}
        </div>
      </div>

      <div>
        <SubmitButton />
      </div>
    </form>
  );
}

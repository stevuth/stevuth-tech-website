
import { AnimatedWrapper } from "@/components/layout/AnimatedWrapper";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PostForm } from "../../new-post/PostForm";
import { getPost } from "@/lib/blog-data";
import { notFound } from 'next/navigation';

export default async function EditPostPage({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="pt-16">
      <section className="bg-secondary/30">
        <div className="container px-4 md:px-6 py-10">
          <AnimatedWrapper>
            <h1 className="text-3xl md:text-4xl font-headline font-bold">Edit Post</h1>
            <p className="mt-2 text-muted-foreground">
              Modify the details of your existing blog post.
            </p>
          </AnimatedWrapper>
        </div>
      </section>

      <section className="py-10 md:py-12">
        <div className="container px-4 md:px-6">
          <AnimatedWrapper>
            <Card>
              <CardHeader>
                <CardTitle>Edit: {post.title}</CardTitle>
                <CardDescription>Update the fields below and save your changes.</CardDescription>
              </CardHeader>
              <CardContent>
                <PostForm post={post} />
              </CardContent>
            </Card>
          </AnimatedWrapper>
        </div>
      </section>
    </div>
  );
}

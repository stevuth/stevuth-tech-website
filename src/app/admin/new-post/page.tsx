import { AnimatedWrapper } from "@/components/layout/AnimatedWrapper";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PostForm } from "./PostForm";
import { BackButton } from "@/components/layout/BackButton";

export default function NewPostPage() {
  return (
    <div className="pt-16">
      <section className="bg-secondary/30 relative">
        <BackButton />
        <div className="container px-4 md:px-6 py-10">
          <AnimatedWrapper>
            <h1 className="text-3xl md:text-4xl font-headline font-bold mt-4">Create New Post</h1>
            <p className="mt-2 text-muted-foreground">
              Fill out the form below to publish a new blog article.
            </p>
          </AnimatedWrapper>
        </div>
      </section>

      <section className="py-10 md:py-12">
        <div className="container px-4 md:px-6">
          <AnimatedWrapper>
            <Card className="animated-border">
              <CardHeader>
                <CardTitle>New Blog Post</CardTitle>
                <CardDescription>Enter the details for your new post.</CardDescription>
              </CardHeader>
              <CardContent>
                <PostForm />
              </CardContent>
            </Card>
          </AnimatedWrapper>
        </div>
      </section>
    </div>
  );
}

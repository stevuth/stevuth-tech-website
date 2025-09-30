import { AnimatedWrapper } from "@/components/layout/AnimatedWrapper";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle, FileText, Edit, Trash2 } from "lucide-react";
import type { Metadata } from 'next';
import { getPosts } from "@/lib/blog-data";
import Link from "next/link";

export const revalidate = 0; // Always fetch fresh data

export const metadata: Metadata = {
  title: 'Admin Dashboard',
  robots: {
    index: false,
    follow: false,
  }
};

export default async function AdminPage() {
  const posts = await getPosts();

  return (
    <div className="pt-16">
      <section className="bg-secondary/30">
        <div className="container px-4 md:px-6 py-10">
           <AnimatedWrapper>
            <h1 className="text-3xl md:text-4xl font-headline font-bold">Admin Dashboard</h1>
            <p className="mt-2 text-muted-foreground">
                Manage your website content.
            </p>
          </AnimatedWrapper>
        </div>
      </section>

      <section className="py-10 md:py-12">
        <div className="container px-4 md:px-6">
          <AnimatedWrapper>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="text-2xl">Blog Posts</CardTitle>
                  <CardDescription>Create, edit, and delete blog posts.</CardDescription>
                </div>
                <Button asChild>
                  <Link href="/admin/new-post">
                    <PlusCircle className="mr-2 h-4 w-4" />
                    New Post
                  </Link>
                </Button>
              </CardHeader>
              <CardContent>
                <div className="border rounded-lg">
                  <div className="divide-y">
                    {posts.length > 0 ? (
                      posts.map(post => (
                        <div key={post.id} className="flex items-center justify-between p-4 hover:bg-muted/50">
                          <div className="flex items-center gap-4">
                            <FileText className="h-6 w-6 text-muted-foreground" />
                            <div>
                              <p className="font-semibold">{post.title}</p>
                              <p className="text-sm text-muted-foreground">Category: {post.category} | Published: {post.date}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button variant="outline" size="sm" disabled>
                              <Edit className="mr-2 h-4 w-4" />
                              Edit
                            </Button>
                            <Button variant="destructive" size="sm" disabled>
                              <Trash2 className="mr-2 h-4 w-4" />
                              Delete
                            </Button>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="p-8 text-center text-muted-foreground">
                        No posts found. Add your first post to see it here.
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedWrapper>
        </div>
      </section>
    </div>
  );
}

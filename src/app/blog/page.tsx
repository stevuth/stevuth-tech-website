
import Image from "next/image";
import Link from "next/link";
import { getPosts, Post } from "@/lib/blog-data";
import { AnimatedWrapper } from "@/components/layout/AnimatedWrapper";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import type { Metadata } from 'next';
import { BackButton } from "@/components/layout/BackButton";

export const revalidate = 3600; // Revalidate every hour

export const metadata: Metadata = {
  title: 'Blog - Insights from The Best Tech Company in Nigeria',
  description: 'Read articles from Stevuth Tech, the best tech company in Nigeria. Get insights on web development, SEO, and technology trends for businesses in Lagos and beyond.',
  keywords: ["tech blog Nigeria", "web development Nigeria blog", "Stevuth Tech blog", "SEO tips", "Lagos tech scene"],
  alternates: {
    canonical: '/blog',
  },
};

const BlogPostCard = ({ post, index }: { post: Post, index: number }) => (
  <AnimatedWrapper animation="fade-in-up" delay={index * 150}>
    <Card className="h-full flex flex-col overflow-hidden transition-shadow hover:shadow-xl">
      <CardHeader className="p-0">
        <Link href={`/blog/${post.slug}`} className="block relative aspect-video w-full">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            data-ai-hint={post.aiHint}
          />
        </Link>
      </CardHeader>
      <CardContent className="flex-grow p-6">
        <Badge variant="secondary" className="mb-2">{post.category}</Badge>
        <CardTitle className="text-xl leading-snug mb-2">
          <Link href={`/blog/${post.slug}`} className="text-primary hover:text-accent transition-colors">
            {post.title}
          </Link>
        </CardTitle>
        <p className="text-muted-foreground text-sm line-clamp-3">{post.excerpt}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex justify-between items-center text-sm text-muted-foreground">
        <span>{post.date}</span>
        <Link href={`/blog/${post.slug}`} className="text-accent hover:underline flex items-center gap-1">
          Read More <ArrowRight className="h-4 w-4" />
        </Link>
      </CardFooter>
    </Card>
  </AnimatedWrapper>
);

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="pt-16">
      <section className="bg-primary text-primary-foreground py-10 md:py-12">
        <div className="container px-4 md:px-6">
          <AnimatedWrapper>
            <BackButton />
            <h1 className="text-3xl md:text-4xl font-headline font-bold text-white mt-4">Our Blog</h1>
            <p className="mt-4 text-base md:text-lg max-w-3xl text-primary-foreground/80">
              Insights, tutorials, and news from the forefront of technology and design in Nigeria.
            </p>
          </AnimatedWrapper>
        </div>
      </section>

      <section className="py-10 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <BlogPostCard key={post.id} post={post} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

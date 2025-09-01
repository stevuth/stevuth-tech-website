import Image from "next/image";
import Link from "next/link";
import { posts, Post } from "@/lib/blog-data";
import { AnimatedWrapper } from "@/components/layout/AnimatedWrapper";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - Stevuth Tech',
  description: 'Explore articles and insights from the Stevuth Tech team on web development, design, and technology trends in Nigeria.',
  keywords: ["Stevuth Tech blog", "web development Nigeria blog", "tech insights", "UI/UX design articles"],
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

export default function BlogPage() {
  return (
    <div>
      <section className="bg-primary text-primary-foreground py-10 md:py-12 text-center">
        <AnimatedWrapper>
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-white">Our Blog</h1>
          <p className="mt-4 text-base md:text-lg max-w-3xl mx-auto text-primary-foreground/80">
            Insights, tutorials, and news from the forefront of technology and design.
          </p>
        </AnimatedWrapper>
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

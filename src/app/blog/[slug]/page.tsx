import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getPost, getPosts } from '@/lib/blog-data';
import { AnimatedWrapper } from '@/components/layout/AnimatedWrapper';
import { Badge } from '@/components/ui/badge';
import { Calendar, User } from 'lucide-react';
import type { Metadata, ResolvingMetadata } from 'next';
import ReactMarkdown from 'react-markdown';
import rehypeSanitize from 'rehype-sanitize';

export const revalidate = 3600; // Revalidate every hour

type Props = {
  params: { slug: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const post = await getPost(params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
      images: [
        {
          url: post.imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
        ...previousImages,
      ],
    },
  }
}

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map(post => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="pt-16">
      <section className="bg-primary text-primary-foreground py-12 md:py-16">
        <AnimatedWrapper>
          <div className="container max-w-4xl px-4 md:px-6">
            <Badge variant="secondary" className="mb-4 text-sm">{post.category}</Badge>
            <h1 className="text-3xl md:text-4xl font-headline font-bold text-white">{post.title}</h1>
            <div className="flex items-center gap-6 mt-6 text-sm text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
            </div>
          </div>
        </AnimatedWrapper>
      </section>

      <section className="py-8 md:py-10">
        <div className="container max-w-4xl px-4 md:px-6">
          <AnimatedWrapper>
            <div className="relative aspect-video w-full rounded-lg overflow-hidden shadow-2xl mb-8">
              <Image
                src={post.imageUrl}
                alt={post.title}
                fill
                sizes="100vw"
                priority
                className="object-cover"
                data-ai-hint={post.aiHint}
              />
            </div>
            <article 
              className="prose dark:prose-invert lg:prose-xl max-w-none prose-headings:text-foreground prose-a:text-accent hover:prose-a:text-accent/90 prose-strong:text-foreground"
            >
               <ReactMarkdown rehypePlugins={[rehypeSanitize]}>{post.content}</ReactMarkdown>
            </article>
          </AnimatedWrapper>
        </div>
      </section>
    </div>
  );
}

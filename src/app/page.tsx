
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { AnimatedWrapper } from '@/components/layout/AnimatedWrapper';
import { ArrowRight, Code, Brush, Rocket, Zap, Smartphone, Target, Globe, ShieldCheck } from 'lucide-react';
import { getPosts } from '@/lib/blog-data';
import { Badge } from '@/components/ui/badge';
import type { Metadata } from 'next';
import imageData from '@/lib/placeholder-images.json';

export const revalidate = 3600; // Revalidate every hour

export const metadata: Metadata = {
  title: 'Stevuth Tech - Driving Growth Across Industries in Nigeria',
  description: 'Stevuth Tech is a leading multi-sector company in Nigeria, specializing in Agro-allied, Healthcare, Travels & Tourism, and Contracting services. Your trusted partner for growth and development.',
  keywords: [
    "Stevuth Tech",
    "Agro-allied services Nigeria",
    "Healthcare diagnostics Nigeria",
    "Travels and tours Nigeria",
    "General contracting Nigeria",
    "Veterinary services Ota",
    "Human resources Nigeria",
    "Orphanage support Nigeria",
    "Fumigation services Ogun State"
  ],
  alternates: {
    canonical: '/',
  },
};

const services = [
  {
    icon: <Code className="h-10 w-10 text-accent" />,
    title: 'Custom Website Development',
    description: 'Tailored websites built from scratch to meet unique business needs.',
    href: '/services#custom-website-development',
    image: imageData.home.customWebsite.src,
    aiHint: imageData.home.customWebsite.hint,
  },
  {
    icon: <Brush className="h-10 w-10 text-accent" />,
    title: 'UI/UX & Brand Design',
    description: 'Engaging, user-friendly designs and creative brand visuals that align with your website.',
    href: '/services#ui-ux-design',
    image: imageData.home.uiUx.src,
    aiHint: imageData.home.uiUx.hint,
  },
  {
    icon: <Rocket className="h-10 w-10 text-accent" />,
    title: 'Performance & Optimization',
    description: 'Enhancing website performance, speed, and search engine ranking.',
    href: '/services#speed-optimization',
    image: imageData.home.performance.src,
    aiHint: imageData.home.performance.hint,
  },
];

const benefits = [
  {
    icon: <Rocket className="h-10 w-10" />,
    title: "Fast Delivery",
    description: "Get your website live in as little as 7 days.",
  },
  {
    icon: <Zap className="h-10 w-10" />,
    title: "No Hidden Costs",
    description: "One-time payment, no monthly fees.",
  },
  {
    icon: <Smartphone className="h-10 w-10" />,
    title: "Mobile-First Design",
    description: "Optimized for users on phones.",
  },
  {
    icon: <Target className="h-10 w-10" />,
    title: "Conversion-Focused",
    description: "Designed to turn visitors into paying customers.",
  },
  {
    icon: <Globe className="h-10 w-10" />,
    title: "Trusted by Businesses",
    description: "From startups to growing brands worldwide.",
  },
  {
    icon: <ShieldCheck className="h-10 w-10" />,
    title: "Ongoing Support",
    description: "We don’t just build, we stay to support you.",
  },
];

export default async function Home() {
  const featuredPosts = await getPosts({ limit: 3 });

  return (
    <div className="flex flex-col">
      <section className="relative h-screen w-full flex items-center justify-start text-left text-white overflow-hidden">
        <video
          src="/desktop-hero-video.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute z-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative z-20 container px-4 md:px-6">
          <AnimatedWrapper>
            <h1 className="text-3xl md:text-4xl font-headline font-bold tracking-tighter mb-4 text-white">
             Your Next Customer Is Online, <br /> Let’s Get Their Attention
            </h1>
            <p className="max-w-xl text-md md:text-lg text-slate-200 mb-8">
              We build modern mobile-friendly websites that attract engage and convert visitors into paying customers. No monthly fees, no hidden charges, just powerful websites designed to grow your business.
            </p>
            <Button asChild size="lg" variant="cta" className="bg-accent hover:bg-accent/90 text-accent-foreground !mx-0">
              <Link href="/contact">Start My Project</Link>
            </Button>
          </AnimatedWrapper>
        </div>
      </section>
      
      <section className="py-10 md:py-12 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <AnimatedWrapper animation="slide-in-left">
              <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl">
                 <Image
                  src={imageData.home.meetStevuth.src}
                  alt="Team collaboration"
                  fill
                  sizes="100vw"
                  priority
                  className="object-cover"
                  data-ai-hint={imageData.home.meetStevuth.hint}
                 />
              </div>
            </AnimatedWrapper>
            <AnimatedWrapper animation="slide-in-right">
              <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">Meet Stevuth Tech</h2>
              <p className="text-muted-foreground mb-6 text-sm md:text-base">
                We are a dynamic and forward-thinking web development agency, built on a foundation of integrity and a relentless pursuit of excellence. At Stevuth Tech, we are a team of innovators and industry experts dedicated to creating exceptional digital experiences that drive growth.
              </p>
              <Button asChild variant="cta" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/about">Read More</Link>
              </Button>
            </AnimatedWrapper>
          </div>
        </div>
      </section>

      <section className="bg-primary/5">
        <div className="container px-4 md:px-6 py-10 md:py-12 text-center">
            <AnimatedWrapper>
              <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">What We Do</h2>
              <p className="max-w-3xl mx-auto text-muted-foreground mb-6">
                Delivering expertise in web development, design, and performance optimization.
              </p>
            </AnimatedWrapper>
        </div>
        <div>
            {services.map((service, index) => (
                <div key={service.title} className={'bg-primary/5'}>
                    <div className="container px-4 md:px-6 py-10">
                        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 items-center">
                           <AnimatedWrapper animation="slide-in-left" className={index % 2 === 1 ? 'md:order-2' : ''}>
                                <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl">
                                    <Image
                                      src={service.image}
                                      alt={service.title}
                                      fill
                                      sizes="(max-width: 768px) 100vw, 50vw"
                                      className="object-cover"
                                      data-ai-hint={service.aiHint}
                                    />
                                </div>
                            </AnimatedWrapper>
                            <AnimatedWrapper animation="slide-in-right" className={index % 2 === 1 ? 'md:order-1' : ''}>
                                <div className="flex items-center gap-4 mb-4">
                                    {service.icon}
                                </div>
                                <h3 className="text-2xl md:text-3xl font-headline font-bold mb-4">{service.title}</h3>
                                <p className="text-muted-foreground mb-6 max-w-md">{service.description}</p>
                                <Button asChild variant="link" className="p-0 h-auto text-accent hover:text-accent/90">
                                    <Link href={service.href}>
                                        Learn More <ArrowRight className="h-4 w-4 ml-2" />
                                    </Link>
                                </Button>
                            </AnimatedWrapper>
                        </div>
                    </div>
                </div>
            ))}
             <div className="text-center py-10">
                <Button asChild size="lg" variant="cta" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    <Link href="/services">View All Services</Link>
                </Button>
            </div>
        </div>
      </section>
      
      <section className="bg-accent text-accent-foreground">
        <div className="container px-4 md:px-6 py-10 text-center">
          <AnimatedWrapper>
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-white mb-4">Ready to Build Your Digital Future?</h2>
            <Button asChild size="lg" variant="cta" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </AnimatedWrapper>
        </div>
      </section>

      <section className="py-10 md:py-12 bg-background">
        <div className="container px-4 md:px-6 text-center">
          <AnimatedWrapper>
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">Why Partner With Us?</h2>
            <p className="max-w-3xl mx-auto text-muted-foreground mb-12">
              We're more than just developers. We're partners in your success, committed to delivering excellence at every step.
            </p>
          </AnimatedWrapper>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
               <AnimatedWrapper 
                key={benefit.title} 
                animation={index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'} 
                delay={index * 150}
              >
                <Card className="h-full text-center bg-card hover:bg-card/80 hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent mb-4">
                      {benefit.icon}
                    </div>
                    <CardTitle className="text-xl font-bold">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              </AnimatedWrapper>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-10 md:py-12 bg-primary/5">
        <div className="container px-4 md:px-6 text-center">
          <AnimatedWrapper>
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">From Our Blog</h2>
            <p className="max-w-3xl mx-auto text-muted-foreground mb-12">
              Stay updated with our latest insights on technology, design, and business growth.
            </p>
          </AnimatedWrapper>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <AnimatedWrapper key={post.id} animation="fade-in-up" delay={index * 150}>
                <Card className="h-full flex flex-col overflow-hidden transition-shadow hover:shadow-xl text-left">
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
                    <Badge variant="secondary" className="mb-2 text-sm">{post.category}</Badge>
                    <CardTitle className="text-lg leading-snug mb-2 font-bold">
                      <Link href={`/blog/${post.slug}`} className="text-primary hover:text-accent transition-colors">
                        {post.title}
                      </Link>
                    </CardTitle>
                    <p className="text-muted-foreground text-sm line-clamp-3">{post.excerpt}</p>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <Button asChild variant="link" className="p-0 h-auto text-accent hover:text-accent/90">
                      <Link href={`/blog/${post.slug}`}>
                        Read Full Article <ArrowRight className="h-4 w-4 ml-2" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </AnimatedWrapper>
            ))}
          </div>
          <AnimatedWrapper className="mt-12">
            <Button asChild size="lg" variant="cta" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/blog">View All Articles</Link>
            </Button>
          </AnimatedWrapper>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6 py-10 text-center">
          <AnimatedWrapper>
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4 text-white">Let's Build Something Great Together</h2>
            <p className="max-w-2xl mx-auto mb-6 text-primary-foreground/80">
             Contact us today to discuss your project and discover how we can help you succeed.
            </p>
            <Button asChild size="lg" variant="cta" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </AnimatedWrapper>
        </div>
      </section>
    </div>
  );
}

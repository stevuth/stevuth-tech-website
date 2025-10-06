

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { AnimatedWrapper } from '@/components/layout/AnimatedWrapper';
import { ArrowRight, Code, Brush, Rocket, Zap, Smartphone, Target, Globe, ShieldCheck, Check } from 'lucide-react';
import { getPosts } from '@/lib/blog-data';
import { Badge } from '@/components/ui/badge';
import type { Metadata } from 'next';
import imageData from '@/lib/placeholder-images.json';
import { CardDescription } from '@/components/ui/card';
import { Particle } from '@/components/layout/Particle';

export const revalidate = 3600; // Revalidate every hour

export const metadata: Metadata = {
  title: 'Best Website Development Agency in Nigeria - Stevuth Tech',
  description: 'As the best website development agency in Nigeria, Stevuth Tech offers custom web design, e-commerce solutions, and SEO services to help your business grow. Contact the top tech company in Lagos today.',
  keywords: [
    "best website development agency in Nigeria",
    "top tech company in Nigeria",
    "web design Lagos",
    "custom website development Nigeria",
    "e-commerce developers in Nigeria",
    "SEO services Lagos",
    "Stevuth Tech",
    "get a website in Nigeria",
    "professional web designers"
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
    image: "/custom web.jpg",
    aiHint: "developer coding on laptop",
  },
  {
    icon: <Brush className="h-10 w-10 text-accent" />,
    title: 'UI/UX & Brand Design',
    description: 'Engaging, user-friendly designs and creative brand visuals that align with your website.',
    href: '/services#ui-ux-design',
    image: "/ux.jpg",
    aiHint: "ui design mockup",
  },
  {
    icon: <Rocket className="h-10 w-10 text-accent" />,
    title: 'SEO Services',
    description: 'On-page optimization to help websites rank higher on Google.',
    href: '/services#seo-services',
    image: "/seo.jpg",
    aiHint: "seo analytics chart",
  },
];

const benefits = [
  {
    icon: <Rocket className="h-10 w-10 text-accent" />,
    title: "Fast Delivery",
    description: "Get your website live in as little as 7 days.",
  },
  {
    icon: <Zap className="h-10 w-10 text-accent" />,
    title: "No Hidden Costs",
    description: "One-time payment, no monthly fees.",
  },
  {
    icon: <Smartphone className="h-10 w-10 text-accent" />,
    title: "Mobile-First Design",
    description: "Optimized for users on phones.",
  },
  {
    icon: <Target className="h-10 w-10 text-accent" />,
    title: "Conversion-Focused",
    description: "Designed to turn visitors into paying customers.",
  },
  {
    icon: <Globe className="h-10 w-10 text-accent" />,
    title: "Trusted by Businesses",
    description: "From startups to growing brands worldwide.",
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-accent" />,
    title: "Ongoing Support",
    description: "We don’t just build, we stay to support you.",
  },
];

const homePackages = [
  {
    title: "Starter Package",
    price: "₦100,000",
    priceUsd: "$70",
    description: "For individuals & very small businesses.",
    features: [
      "1–3 pages (Home, About, Contact)",
      "Mobile responsive design",
      "Contact form",
      "Basic SEO optimization",
      "1 Year Hosting & Domain",
      "Google Business Profile setup",
      "Professional Email Address Setup",
    ],
    cta: "Order Now",
    isPopular: false,
  },
  {
    title: "Standard Package",
    price: "₦200,000",
    priceUsd: "$135",
    description: "Best for growing businesses.",
    features: [
      "Up to 7 pages (Home, About, Services, Contact, etc.)",
      "Custom design & branding",
      "Blog setup (optional)",
      "Full SEO optimization (on-page + indexing)",
      "1 Year Hosting & Domain",
      "Google Business Profile setup",
      "Social media integration",
      "Google Analytics integration",
      "Professional Email Address Setup",
    ],
    cta: "Order Now",
    isPopular: true,
  },
  {
    title: "Premium Package",
    price: "₦350,000",
    priceUsd: "$240",
    description: "Perfect for e-commerce businesses.",
    features: [
      "Online store setup (unlimited products)",
      "Payment integration (Paystack, Flutterwave, Stripe)",
      "Shopping cart & order management",
      "Customer accounts & login",
      "Advanced SEO optimization",
      "1 Year Hosting & Domain",
      "Google Business Profile setup",
      "Google Analytics integration",
      "Google Maps integration",
      "Professional Email Address Setup",
    ],
    cta: "Order Now",
    isPopular: false,
  },
];

const whatsAppNumber = "2349016772065";

const createWhatsAppLink = (packageName: string) => {
  const message = `Hello, I'm interested in the ${packageName}. Please provide more details.`;
  return `https://wa.me/${whatsAppNumber}?text=${encodeURIComponent(message)}`;
};

export default async function Home() {
  const featuredPosts = await getPosts({ limit: 3 });

  return (
    <div className="flex flex-col">
      <section className="relative h-[calc(100vh)] w-full flex items-center justify-start text-left text-white overflow-hidden pt-16">
        <video
          src="/desktop-hero-video.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute z-0 w-full h-full object-cover top-0 left-0"
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
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground w-auto !mx-0">
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
                  alt="Team collaboration at the best website development agency in Nigeria"
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

      <section className="bg-background">
        <div className="container px-4 md:px-6 py-10 md:py-12 text-center">
            <AnimatedWrapper>
              <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">What We Do</h2>
              <p className="max-w-3xl mx-auto text-muted-foreground mb-6">
                Delivering expertise in web development, design, and performance optimization.
              </p>
            </AnimatedWrapper>
        </div>
        <div className="bg-background">
            {services.map((service, index) => (
                <div key={service.title} className={'bg-background'}>
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
             <div className="text-center py-10 bg-background">
                <Button asChild size="lg" variant="cta" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    <Link href="/services">View All Services</Link>
                </Button>
            </div>
        </div>
      </section>

      <section className="py-10 md:py-12 bg-primary/5">
        <div className="container px-4 md:px-6 text-center">
           <AnimatedWrapper>
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">Our Pricing</h2>
            <p className="max-w-3xl mx-auto text-muted-foreground mb-12">
              Transparent pricing for every business size. No hidden fees, just results.
            </p>
          </AnimatedWrapper>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
            {homePackages.map((pkg, index) => (
              <AnimatedWrapper 
                key={pkg.title} 
                animation="fade-in-up" 
                delay={index * 150}
              >
                <Card className={`h-full flex flex-col bg-transparent animated-border ${pkg.isPopular ? 'border-accent border-2 shadow-accent/20 shadow-lg' : 'hover:shadow-xl transition-shadow'}`}>
                    {pkg.isPopular && (
                       <Badge variant="secondary" className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 text-sm font-bold">
                           Most Popular
                       </Badge>
                    )}
                  <CardHeader className="pt-8">
                    <CardTitle className="text-2xl font-bold">{pkg.title}</CardTitle>
                     <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-extrabold text-foreground">{pkg.price}</span>
                        {pkg.priceUsd && <span className="text-muted-foreground">{pkg.priceUsd}</span>}
                    </div>
                    <CardDescription>{pkg.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="space-y-3">
                      {pkg.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="flex-col items-stretch gap-4 pt-4">
                    <Button asChild size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                      <Link href={createWhatsAppLink(pkg.title)} target="_blank">
                        {pkg.cta} <ArrowRight className="h-4 w-4 ml-2" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </AnimatedWrapper>
            ))}
          </div>
           <AnimatedWrapper className="mt-12">
            <Button asChild size="lg" variant="outline" className="text-accent hover:text-accent hover:bg-accent/10 border-accent">
              <Link href="/pricing">View All Plans</Link>
            </Button>
          </AnimatedWrapper>
        </div>
      </section>
      
      <section className="py-10 md:py-12 bg-primary/5">
        <div className="container px-4 md:px-6 text-center">
          <AnimatedWrapper>
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">Innovation That Sets Us Apart</h2>
            <p className="max-w-3xl mx-auto text-muted-foreground mb-12">
              We're more than just developers. We're partners in your success, committed to delivering excellence at every step.
            </p>
          </AnimatedWrapper>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
               <AnimatedWrapper 
                key={benefit.title} 
                animation='zoom-in'
                delay={index * 150}
              >
                <Card className="text-center bg-background hover:shadow-xl transition-all duration-300 hover:scale-105 animated-border">
                  <CardHeader className="p-4">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 mb-3">
                      {React.cloneElement(benefit.icon, { className: 'h-8 w-8 text-accent' })}
                    </div>
                    <CardTitle className="text-lg font-bold text-foreground">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <p className="text-muted-foreground text-sm">{benefit.description}</p>
                  </CardContent>
                </Card>
              </AnimatedWrapper>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 md:py-12 futuristic-bg">
        <div className="container px-4 md:px-6 text-center">
          <AnimatedWrapper>
             <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">In Partnership With DesignRush</h2>
             <p className="max-w-3xl mx-auto text-muted-foreground mb-8">
                We are recognized by industry leaders for our commitment to quality and excellence.
             </p>
            <div className="relative flex justify-center group">
               <div id="particles-js" className="absolute inset-0 z-0">
                  <Particle />
               </div>
              <Link href="https://www.designrush.com/agency/profile/stevuth-tech" rel="dofollow" target="_blank" className="relative z-10">
                <div className="animate-pulse-glow absolute inset-[-8px] rounded-full bg-accent/30 blur-xl group-hover:scale-125 transition-transform duration-500"></div>
                <Image
                  src="/design rush.png"
                  alt="Stevuth Tech's 2025 rating badge on DesignRush, the industry-leading B2B Marketplace connecting brands with agencies"
                  width={150}
                  height={175}
                  className="transition-transform duration-500 group-hover:scale-110 animate-float"
                />
              </Link>
            </div>
          </AnimatedWrapper>
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
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-white mb-4">Let's Build Something Great Together</h2>
            <p className="max-w-2xl mx-auto mb-6 text-primary-foreground/80">
             Contact us today to discuss your project and discover how we can help you succeed.
            </p>
            <Button asChild size="lg" variant="cta" className="bg-accent hover:bg-accent/90 text-accent-foreground border border-black">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </AnimatedWrapper>
        </div>
      </section>
    </div>
  );
}

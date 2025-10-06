
import Image from "next/image";
import { CheckCircle, Target, Globe, Users, TrendingUp, ShieldCheck, Lightbulb } from "lucide-react";
import { AnimatedWrapper } from "@/components/layout/AnimatedWrapper";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from 'next';
import imageData from '@/lib/placeholder-images.json';
import { BackButton } from "@/components/layout/BackButton";

export const metadata: Metadata = {
  title: 'About The Best Web Development Agency in Nigeria | Stevuth Tech',
  description: 'Discover the mission and values of Stevuth Tech, the best website development agency in Nigeria. Learn why top businesses in Lagos and beyond trust us for web solutions.',
  keywords: ["about Stevuth Tech", "best web development agency Nigeria", "top tech company in Lagos", "our mission", "web design company profile"],
  alternates: {
    canonical: '/about',
  },
};

const values = [
  {
    icon: <Target className="h-10 w-10 text-accent" />,
    title: "Innovation & Excellence",
    description: "We constantly push boundaries and embrace new technologies to deliver exceptional results and set new industry standards.",
    aiHint: "innovation technology",
  },
  {
    icon: <CheckCircle className="h-10 w-10 text-accent" />,
    title: "Integrity & Transparency",
    description: "Our operations are guided by strong ethical principles, ensuring trust and honesty in all our client partnerships and dealings.",
    aiHint: "trust handshake",
  },
  {
    icon: <Globe className="h-10 w-10 text-accent" />,
    title: "Global Standards",
    description: "With a deep understanding of modern web trends, we create digital experiences that are competitive and effective on a global scale.",
    aiHint: "global connections",
  },
  {
    icon: <Users className="h-10 w-10 text-accent" />,
    title: "Client-Centricity",
    description: "Our clients are at the heart of everything we do. We are dedicated to understanding their needs and exceeding their expectations.",
    aiHint: "customer support",
  },
];

const trustFactors = [
  {
    icon: <TrendingUp className="h-10 w-10 text-primary" />,
    title: "Proven Expertise",
    description: "With seasoned experience in navigating complex digital challenges, we deliver on our promises with precision and deep industry knowledge."
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    title: "Unwavering Reliability",
    description: "Our commitment to quality and transparency is the cornerstone of our operations. Clients trust us to act in their best interest, every single time."
  },
  {
    icon: <Lightbulb className="h-10 w-10 text-primary" />,
    title: "Continuous Innovation",
    description: "We are relentlessly driven to find better, smarter, and more effective ways to build websites and applications, ensuring our partners stay ahead of the curve."
  }
];

export default function AboutPage() {
  return (
    <div className="pt-16">
      <section className="bg-primary text-primary-foreground py-10 md:py-12 relative">
        <BackButton />
        <div className="container px-4 md:px-6 text-left">
          <AnimatedWrapper>
            <h1 className="text-3xl md:text-4xl font-headline font-bold text-white mt-4">About Stevuth Tech</h1>
            <p className="mt-4 text-base md:text-lg max-w-3xl text-primary-foreground/80">
              Learn about our journey, our purpose, and the values that drive us to be the best website development agency in Nigeria.
            </p>
          </AnimatedWrapper>
        </div>
      </section>

      <section className="py-10 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-10 items-center">
            <AnimatedWrapper animation="slide-in-left">
              <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src={imageData.about.story.src}
                  alt="Office of Stevuth Tech, the best website development agency in Nigeria"
                  fill
                  sizes="100vw"
                  priority
                  className="object-cover"
                  data-ai-hint={imageData.about.story.hint}
                />
              </div>
            </AnimatedWrapper>
            <AnimatedWrapper animation="slide-in-right">
              <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">Our Story & Mission</h2>
              <p className="text-muted-foreground mb-4">
                Stevuth Tech was founded with a singular vision: to empower businesses by building exceptional digital experiences. Fueled by a commitment to quality and innovation, we specialize in creating high-performance websites, applications, and brand identities that drive growth.
              </p>
              <p className="text-muted-foreground">
                Our mission is to be a catalyst for our clients' success. We achieve this by translating their vision into reality through cutting-edge technology, user-centric design, and an unwavering focus on delivering measurable results.
              </p>
            </AnimatedWrapper>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-12">
        <div className="container px-4 md:px-6 text-center">
          <AnimatedWrapper>
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">Why Trust Us?</h2>
            <p className="max-w-3xl mx-auto text-muted-foreground mb-8">
              Our success is built on a foundation of trust, earned through dedication and excellence in every project.
            </p>
          </AnimatedWrapper>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trustFactors.map((factor, index) => (
              <AnimatedWrapper key={factor.title} animation="fade-in-up" delay={index * 150}>
                <div className="p-6">
                   <div className="flex items-center justify-center h-20 w-20 rounded-full bg-accent/10 mb-6 mx-auto">
                    {factor.icon}
                  </div>
                  <h3 className="text-xl font-headline font-bold mb-2">{factor.title}</h3>
                  <p className="text-muted-foreground">{factor.description}</p>
                </div>
              </AnimatedWrapper>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary/5">
        <div className="container px-4 md:px-6 py-10 text-center">
          <AnimatedWrapper>
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">Our Core Values</h2>
            <p className="max-w-2xl mx-auto text-muted-foreground mb-6">
              These principles are the bedrock of our company culture and guide our decisions every day.
            </p>
          </AnimatedWrapper>
        </div>
        <div className="container px-4 md:px-6 py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                  <AnimatedWrapper key={value.title} animation="fade-in-up" delay={index * 150}>
                       <div className="text-center p-4 bg-background rounded-lg shadow-md h-full animated-border border-2 border-transparent">
                            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-accent/10 mb-4 mx-auto">
                                {value.icon}
                            </div>
                            <h3 className="text-xl font-headline font-bold mb-2">{value.title}</h3>
                            <p className="text-muted-foreground text-sm">{value.description}</p>
                       </div>
                  </AnimatedWrapper>
              ))}
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6 py-10 text-center">
          <AnimatedWrapper>
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-white mb-4">Ready to Build With Us?</h2>
            <p className="max-w-2xl mx-auto mb-6">
              Let's create something amazing together. Reach out to discuss how we can bring your ideas to life.
            </p>
            <Button asChild size="lg" variant="cta" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/contact">Talk to Us Today</Link>
            </Button>
          </AnimatedWrapper>
        </div>
      </section>
    </div>
  );
}

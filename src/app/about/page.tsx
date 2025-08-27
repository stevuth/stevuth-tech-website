import Image from "next/image";
import { CheckCircle, Target, Globe, Users, TrendingUp, ShieldCheck, Lightbulb } from "lucide-react";
import { AnimatedWrapper } from "@/components/layout/AnimatedWrapper";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
    description: "Our operations are guided by strong ethical principles, ensuring trust and honesty in all our partnerships and dealings.",
    aiHint: "trust handshake",
  },
  {
    icon: <Globe className="h-10 w-10 text-accent" />,
    title: "Global Perspective",
    description: "With a deep understanding of global markets, we create opportunities and build connections that transcend borders.",
    aiHint: "global connections",
  },
  {
    icon: <Users className="h-10 w-10 text-accent" />,
    title: "Customer-Centricity",
    description: "Our clients are at the heart of everything we do. We are dedicated to understanding their needs and exceeding their expectations.",
    aiHint: "customer support",
  },
];

const trustFactors = [
  {
    icon: <TrendingUp className="h-10 w-10 text-primary" />,
    title: "Proven Experience",
    description: "With over a decade of navigating complex market dynamics, our seasoned expertise ensures we deliver on our promises with precision and deep industry knowledge."
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    title: "Unwavering Reliability",
    description: "Our commitment to integrity and transparency is the cornerstone of our operations. Clients trust us to act in their best interest, every single time."
  },
  {
    icon: <Lightbulb className="h-10 w-10 text-primary" />,
    title: "Continuous Innovation",
    description: "We are relentlessly driven to find better, smarter, and more effective ways to achieve our goals, ensuring our partners always stay ahead of the curve."
  }
];

export default function AboutPage() {
  return (
    <div>
      <section className="bg-primary text-primary-foreground py-10 md:py-12 text-center">
        <AnimatedWrapper>
          <h1 className="text-4xl md:text-5xl font-headline font-bold">About Right Focus Intl</h1>
          <p className="mt-4 text-base md:text-lg max-w-3xl mx-auto text-primary-foreground/80">
            Learn about our journey, our purpose, and the values that drive us forward.
          </p>
        </AnimatedWrapper>
      </section>

      <section className="py-10 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-10 items-center">
            <AnimatedWrapper animation="slide-in-left">
              <div className="relative aspect-square rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="https://i.postimg.cc/pT2xGg4R/Whisk-beca591b52.jpg"
                  alt="Company history collage"
                  fill
                  className="object-cover"
                  data-ai-hint="corporate history"
                />
              </div>
            </AnimatedWrapper>
            <AnimatedWrapper animation="slide-in-right">
              <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">Our History & Mission</h2>
              <p className="text-muted-foreground mb-4">
                With a singular vision, Right Focus Intl began as a specialized contracting firm. Fueled by a commitment to quality and strategic diversification, we have expanded our footprint across key sectors including agro-allied industries, healthcare, and global tourism.
              </p>
              <p className="text-muted-foreground">
                Our mission is to be a catalyst for growth and development, creating sustainable value for our stakeholders, communities, and partners. We achieve this by maintaining an unwavering focus on operational excellence, integrity, and innovation in every endeavor.
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
              Our success is built on a foundation of trust, earned through decades of dedication and excellence.
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
              These principles are the bedrock of our corporate culture and guide our decisions every day.
            </p>
          </AnimatedWrapper>
        </div>
        <div className="container px-4 md:px-6 py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                  <AnimatedWrapper key={value.title} animation="fade-in-up" delay={index * 150}>
                       <div className="text-center p-6 bg-background rounded-lg shadow-md h-full">
                            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-accent/10 mb-6 mx-auto">
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
      
      <section className="py-10 md:py-12">
        <div className="container px-4 md:px-6 text-center">
          <AnimatedWrapper>
            <p className="text-sm text-muted-foreground max-w-4xl mx-auto">
              Right Focus International is a duly registered company under the Corporate Affairs Commission (CAC) with registration number BN 2701057, operating across Agro-Allied, Healthcare, Travels & Tourism, Contracting, and General Merchandising.
            </p>
          </AnimatedWrapper>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6 py-10 text-center">
          <AnimatedWrapper>
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">Ready to Grow With Us?</h2>
            <p className="max-w-2xl mx-auto mb-6">
              Let's build a prosperous future together. Reach out to discuss how we can achieve your goals.
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

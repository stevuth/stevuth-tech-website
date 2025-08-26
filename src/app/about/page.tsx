import Image from "next/image";
import { CheckCircle, Target, Globe, Users } from "lucide-react";
import { AnimatedWrapper } from "@/components/layout/AnimatedWrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const values = [
  {
    icon: <Target className="h-10 w-10 text-accent" />,
    title: "Innovation & Excellence",
    description: "We constantly push boundaries and embrace new technologies to deliver exceptional results and set new industry standards.",
    aiHint: "innovation technology",
    image: "https://picsum.photos/1200/800?random=1",
  },
  {
    icon: <CheckCircle className="h-10 w-10 text-accent" />,
    title: "Integrity & Transparency",
    description: "Our operations are guided by strong ethical principles, ensuring trust and honesty in all our partnerships and dealings.",
    aiHint: "trust handshake",
    image: "https://picsum.photos/1200/800?random=2",
  },
  {
    icon: <Globe className="h-10 w-10 text-accent" />,
    title: "Global Perspective",
    description: "With a deep understanding of global markets, we create opportunities and build connections that transcend borders.",
    aiHint: "global connections",
    image: "https://picsum.photos/1200/800?random=3",
  },
  {
    icon: <Users className="h-10 w-10 text-accent" />,
    title: "Customer-Centricity",
    description: "Our clients are at the heart of everything we do. We are dedicated to understanding their needs and exceeding their expectations.",
    aiHint: "customer support",
    image: "https://picsum.photos/1200/800?random=4",
  },
];

export default function AboutPage() {
  return (
    <div>
      <section className="bg-primary text-primary-foreground py-10 md:py-12 text-center">
        <AnimatedWrapper>
          <h1 className="text-4xl md:text-5xl font-headline font-bold">About Right Focus International</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-primary-foreground/80">
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
                  src="https://picsum.photos/800/800"
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
                Founded over a decade ago with a singular vision, Right Focus International began as a specialized contracting firm. Fueled by a commitment to quality and strategic diversification, we have expanded our footprint across key sectors including agro-allied industries, healthcare, and global tourism.
              </p>
              <p className="text-muted-foreground">
                Our mission is to be a catalyst for growth and development, creating sustainable value for our stakeholders, communities, and partners. We achieve this by maintaining an unwavering focus on operational excellence, integrity, and innovation in every endeavor.
              </p>
            </AnimatedWrapper>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-12 bg-secondary">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-10 items-center">
            <AnimatedWrapper animation="slide-in-left" className="md:order-2">
              <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="https://picsum.photos/800/450"
                  alt="Vision for the future"
                  fill
                  className="object-cover"
                  data-ai-hint="future vision"
                />
              </div>
            </AnimatedWrapper>
            <AnimatedWrapper animation="slide-in-right" className="md:order-1">
              <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">Our Vision</h2>
              <p className="text-muted-foreground">
                To be a globally recognized leader across multiple industries, renowned for our innovative solutions, unwavering commitment to quality, and positive impact on society. We envision a future where our strategic initiatives foster economic prosperity and enhance quality of life worldwide.
              </p>
            </AnimatedWrapper>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-12">
        <div className="container px-4 md:px-6 text-center">
          <AnimatedWrapper>
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">Our Core Values</h2>
            <p className="max-w-2xl mx-auto text-muted-foreground mb-6">
              These principles are the bedrock of our corporate culture and guide our decisions every day.
            </p>
          </AnimatedWrapper>
        </div>
        <div>
          {values.map((value, index) => (
             <div key={value.title} className={index % 2 === 0 ? 'bg-background' : 'bg-primary/5'}>
                <div className="container px-4 md:px-6 py-10 md:py-12">
                    <div className="grid md:grid-cols-2 gap-6 lg:gap-10 items-center">
                        <AnimatedWrapper animation="slide-in-left" className={index % 2 === 1 ? 'md:order-2' : ''}>
                            <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl">
                                <Image
                                src={value.image}
                                alt={value.title}
                                fill
                                className="object-cover"
                                data-ai-hint={value.aiHint}
                                />
                            </div>
                        </AnimatedWrapper>
                        <AnimatedWrapper animation="slide-in-right" className={index % 2 === 1 ? 'md:order-1' : ''}>
                            <div className="flex items-center gap-4 mb-4">
                                {value.icon}
                            </div>
                            <h3 className="text-2xl md:text-3xl font-headline font-bold mb-4">{value.title}</h3>
                            <p className="text-muted-foreground mb-6 max-w-md">{value.description}</p>
                        </AnimatedWrapper>
                    </div>
                </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

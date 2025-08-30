import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AnimatedWrapper } from '@/components/layout/AnimatedWrapper';
import { HardHat, ShoppingCart, CheckCircle, Target, Globe, ArrowRight, BriefcaseMedical, Network, Stethoscope, Users, Sparkles, Plane, Baby, GraduationCap, Code, Brush, Rocket } from 'lucide-react';
import type { Metadata } from 'next';
import { RotatingBenefits } from '@/components/layout/RotatingBenefits';

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
    aiHint: 'web development',
    image: 'https://picsum.photos/600/400',
  },
  {
    icon: <Brush className="h-10 w-10 text-accent" />,
    title: 'UI/UX & Brand Design',
    description: 'Engaging, user-friendly designs and creative brand visuals that align with your website.',
    href: '/services#ui-ux-design',
    aiHint: 'digital network',
    image: 'https://picsum.photos/600/400',
  },
  {
    icon: <Rocket className="h-10 w-10 text-accent" />,
    title: 'Performance & Optimization',
    description: 'Enhancing website performance, speed, and search engine ranking.',
    href: '/services#speed-optimization',
    aiHint: 'rocket launch',
    image: 'https://picsum.photos/600/400',
  },
];

const values = [
  {
    icon: <Target className="h-8 w-8 text-primary" />,
    title: 'Innovation',
    description: 'We leverage cutting-edge solutions to drive progress and efficiency in every sector we operate.',
  },
  {
    icon: <CheckCircle className="h-8 w-8 text-primary" />,
    title: 'Trust & Integrity',
    description: 'Our business is built on a foundation of transparency, reliability, and ethical practices.',
  },
  {
    icon: <Globe className="h-8 w-8 text-primary" />,
    title: 'Global Reach',
    description: 'With a worldwide network, we connect opportunities and deliver value across continents.',
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative h-[calc(100vh)] w-full flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <video
          src="/hero-video.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute z-0 w-auto min-w-full min-h-full max-w-none object-cover"
        />
        <div className="relative z-20 container px-4 md:px-6">
          <AnimatedWrapper>
            <h1 className="text-4xl md:text-5xl font-headline font-bold tracking-tighter mb-4 text-white">
             Your Next Customer Is Online, Let’s Get Their Attention
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-200 mb-8">
              We build modern mobile-friendly websites that attract engage and convert visitors into paying customers. No monthly fees, no hidden charges, just powerful websites designed to grow your business.
            </p>
            <Button asChild size="lg" variant="cta" className="bg-accent hover:bg-accent/90 text-accent-foreground">
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
                  src="https://i.postimg.cc/pT2xGg4R/Whisk-beca591b52.jpg"
                  alt="Team collaboration"
                  fill
                  sizes="100vw"
                  priority
                  className="object-cover"
                  data-ai-hint="corporate team"
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
                                    sizes="100vw"
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

      <RotatingBenefits />
      
      <section className="bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6 py-10 text-center">
          <AnimatedWrapper>
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">Let's Build Something Great Together</h2>
            <p className="max-w-2xl mx-auto mb-6">
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

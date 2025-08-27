import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AnimatedWrapper } from '@/components/layout/AnimatedWrapper';
import { HardHat, ShoppingCart, CheckCircle, Target, Globe, ArrowRight, BriefcaseMedical, Network, Stethoscope, Users, Sparkles, Plane, Baby, GraduationCap } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Right Focus Crew Intl - Driving Growth Across Industries in Nigeria',
  description: 'Right Focus Crew Intl is a leading multi-sector company in Nigeria, offering top-tier services in Agro-allied industries, Healthcare, Travels & Tours, and General Contracting. Partner with us for excellence and innovation.',
  keywords: ["Right Focus Crew Intl Nigeria", "Agro-allied services", "Healthcare solutions Nigeria", "Travel agency Nigeria", "Contracting company Lagos", "Veterinary clinic Ota", "HR outsourcing Nigeria"],
  alternates: {
    canonical: '/',
  },
};

const services = [
  {
    icon: <BriefcaseMedical className="h-10 w-10 text-accent" />,
    title: 'Veterinary Medical Services',
    description: 'Comprehensive veterinary services including medical treatments, boarding, farm consultations, pet travel clearance, and professional training.',
    href: '/services',
    aiHint: 'veterinary clinic',
    image: 'https://i.postimg.cc/TYLkVzZ5/Chat-GPT-Image-Aug-27-2025-11-46-57-AM.png',
  },
  {
    icon: <Network className="h-10 w-10 text-accent" />,
    title: 'Network Services',
    description: 'Integrated digital solutions including e-commerce, secure payments, and global trade services.',
    href: '/services',
    aiHint: 'digital network',
    image: 'https://i.postimg.cc/8CfG6XT1/Whisk-ebb171bffb.jpg',
  },
  {
    icon: <Stethoscope className="h-10 w-10 text-accent" />,
    title: 'Human Diagnostic Services',
    description: 'Offering a range of vital health diagnostic services to monitor and manage your well-being.',
    href: '/services',
    aiHint: 'health diagnostics',
    image: 'https://i.postimg.cc/Dzkjxxqf/Whisk-8f29c728c8.jpg',
  },
  {
    icon: <Users className="h-10 w-10 text-accent" />,
    title: 'Human Resources & Outsourcing',
    description: 'Connecting talent with opportunities through specialized recruitment and outsourcing services across various sectors.',
    href: '/services',
    aiHint: 'human resources recruitment',
    image: 'https://i.postimg.cc/bvPcFxbP/Whisk-b6498e7b87.jpg',
  },
   {
    icon: <Sparkles className="h-10 w-10 text-accent" />,
    title: 'Farm & Home Cleaning',
    description: 'Professional cleaning services for residential, commercial, and agricultural properties, from fumigation to laundry.',
    href: '/services',
    aiHint: 'professional cleaning',
    image: 'https://i.postimg.cc/kX97Hddz/Whisk-f3c2b5e9e7.jpg',
  },
  {
    icon: <Plane className="h-10 w-10 text-accent" />,
    title: 'Travels & Tours',
    description: 'Seamless flight bookings, curated tours, and visa assistance.',
    href: '/services',
    aiHint: 'travel tourism',
    image: 'https://i.postimg.cc/dtLcpQxW/Whisk-e405484ec8.jpg',
  },
  {
    icon: <Baby className="h-10 w-10 text-accent" />,
    title: 'Orphanage Home',
    description: 'Providing a safe and nurturing environment for children in need, offering care, education, and support.',
    href: '/services',
    aiHint: 'happy children',
    image: 'https://i.postimg.cc/J4pr9dxq/result-0.png',
  },
  {
    icon: <GraduationCap className="h-10 w-10 text-accent" />,
    title: 'Tutorial Center',
    description: 'Specialized tutorial services for various examinations and educational programs.',
    href: '/services',
    aiHint: 'education classroom',
    image: 'https://i.postimg.cc/V63J3ZFv/aiease-1756298208694.jpg',
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
      <section className="relative h-[70vh] md:h-[80vh] w-full flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10" />
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold tracking-tighter mb-4">
              Driving Growth Across Industries with Focus & Integrity
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-200 mb-6">
              Right Focus Crew Intl is a dynamic, multi-sector company committed to excellence and innovation.
            </p>
            <Button asChild size="lg" variant="cta" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/services">Explore Our Services</Link>
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
              <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">Who We Are</h2>
              <p className="text-muted-foreground mb-6 text-sm md:text-base">
                We are a dynamic and forward-thinking conglomerate, built on a foundation of integrity and a relentless pursuit of excellence. At Right Focus Crew Intl, we are a team of innovators and industry experts dedicated to creating sustainable value and driving growth across diverse sectors.
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
              <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">Solutions We Provide</h2>
              <p className="max-w-3xl mx-auto text-muted-foreground mb-6">
                Delivering expertise across Agro-Allied, Healthcare, Tourism, and more.
              </p>
            </AnimatedWrapper>
        </div>
        <div>
            {services.map((service, index) => (
                <div key={service.title} className={index % 2 === 0 ? 'bg-background' : 'bg-primary/5'}>
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
        </div>
      </section>
      
      <section className="bg-accent text-accent-foreground">
        <div className="container px-4 md:px-6 py-10 text-center">
          <AnimatedWrapper>
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">Partner with Right Focus Crew Intl today — let’s grow together.</h2>
            <Button asChild size="lg" variant="cta" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </AnimatedWrapper>
        </div>
      </section>

      <section className="py-8 md:py-10 bg-background">
        <div className="container px-4 md:px-6">
           <AnimatedWrapper className="text-center">
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-3">Why Choose Us?</h2>
            <p className="max-w-2xl mx-auto text-muted-foreground mb-4">
              Our core values are the pillars of our success and your guarantee of satisfaction.
            </p>
          </AnimatedWrapper>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-center">
            {values.map((value, index) => (
              <AnimatedWrapper key={value.title} animation="fade-in-up" delay={index * 150}>
                <div className="p-4">
                  <div className="flex items-center justify-center h-14 w-14 rounded-full bg-accent/10 mb-4 mx-auto">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-headline font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              </AnimatedWrapper>
            ))}
          </div>
        </div>
      </section>
      
      <section className="bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6 py-10 text-center">
          <AnimatedWrapper>
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">Partner with Us Today</h2>
            <p className="max-w-2xl mx-auto mb-6">
              Let's build a prosperous future together. Reach out to discuss how we can achieve your goals.
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

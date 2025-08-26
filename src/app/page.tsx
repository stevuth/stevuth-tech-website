import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AnimatedWrapper } from '@/components/layout/AnimatedWrapper';
import { Sprout, HeartPulse, PlaneTakeoff, HardHat, ShoppingCart, Smartphone, CheckCircle, Target, Globe } from 'lucide-react';

const services = [
  {
    icon: <Sprout className="h-10 w-10 text-accent" />,
    title: 'Agro-allied',
    description: 'Pioneering sustainable farming, processing, and food distribution.',
    href: '/services#agro-allied',
  },
  {
    icon: <HeartPulse className="h-10 w-10 text-accent" />,
    title: 'Healthcare',
    description: 'Providing essential medical supplies and fostering community health.',
    href: '/services#healthcare',
  },
  {
    icon: <PlaneTakeoff className="h-10 w-10 text-accent" />,
    title: 'Travels & Tourism',
    description: 'Seamless flight bookings, curated tours, and visa assistance.',
    href: '/services#travels',
  },
  {
    icon: <HardHat className="h-10 w-10 text-accent" />,
    title: 'Contracting',
    description: 'Excellence in construction, procurement, and supply chain solutions.',
    href: '/services#contracting',
  },
  {
    icon: <ShoppingCart className="h-10 w-10 text-accent" />,
    title: 'General Merchandising',
    description: 'Your trusted partner for diverse and quality product sourcing.',
    href: '/services#merchandising',
  },
  {
    icon: <Smartphone className="h-10 w-10 text-accent" />,
    title: 'Recharge & Data',
    description: 'Bulk printing and distribution of recharge cards and data subscriptions.',
    href: '/services#recharge-data',
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
      <section className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <Image
          src="https://picsum.photos/1920/1080"
          alt="Global business operations"
          fill
          className="object-cover"
          priority
          data-ai-hint="global business"
        />
        <div className="relative z-20 container px-4 md:px-6">
          <AnimatedWrapper>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-headline font-bold tracking-tighter mb-4">
              Driving Growth Across Industries with Focus & Integrity
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-200 mb-8">
              Right Focus International is a dynamic, multi-sector company committed to excellence and innovation.
            </p>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/services">Explore Our Services</Link>
            </Button>
          </AnimatedWrapper>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedWrapper animation="slide-in-left">
              <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl">
                 <Image
                  src="https://picsum.photos/600/800"
                  alt="Team collaboration"
                  fill
                  className="object-cover"
                  data-ai-hint="corporate team"
                 />
              </div>
            </AnimatedWrapper>
            <AnimatedWrapper animation="slide-in-right">
              <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">About Right Focus International</h2>
              <p className="text-muted-foreground mb-6">
                Founded on the principles of precision and dedication, Right Focus International has grown into a diversified conglomerate. We are committed to delivering superior value and driving sustainable growth across all our ventures, from local communities to the global marketplace.
              </p>
              <Button asChild variant="outline">
                <Link href="/about">Read More</Link>
              </Button>
            </AnimatedWrapper>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="container px-4 md:px-6 text-center">
          <AnimatedWrapper>
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">Our Core Services</h2>
            <p className="max-w-2xl mx-auto text-muted-foreground mb-12">
              We offer a diverse portfolio of services, each managed with expert focus and a commitment to quality.
            </p>
          </AnimatedWrapper>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedWrapper key={service.title} delay={index * 100}>
                <Link href={service.href}>
                  <Card className="text-left h-full hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 group">
                    <CardHeader className="flex-row items-center gap-4">
                      {service.icon}
                      <CardTitle className="font-headline text-2xl group-hover:text-accent transition-colors">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{service.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              </AnimatedWrapper>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
           <AnimatedWrapper className="text-center">
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">Why Choose Us?</h2>
            <p className="max-w-2xl mx-auto text-muted-foreground mb-12">
              Our core values are the pillars of our success and your guarantee of satisfaction.
            </p>
          </AnimatedWrapper>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {values.map((value, index) => (
              <AnimatedWrapper key={value.title} animation="fade-in-up" delay={index * 150}>
                <div className="p-6">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-accent/10 mb-6 mx-auto">
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
        <div className="container px-4 md:px-6 py-16 text-center">
          <AnimatedWrapper>
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">Partner with Us Today</h2>
            <p className="max-w-2xl mx-auto mb-8">
              Let's build a prosperous future together. Reach out to discuss how we can achieve your goals.
            </p>
            <Button asChild size="lg" variant="secondary" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </AnimatedWrapper>
        </div>
      </section>
    </div>
  );
}

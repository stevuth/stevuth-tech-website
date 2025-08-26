import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AnimatedWrapper } from '@/components/layout/AnimatedWrapper';
import { HardHat, ShoppingCart, CheckCircle, Target, Globe, ArrowRight, BriefcaseMedical, Network, Stethoscope, Users, Sparkles, Plane } from 'lucide-react';

const services = [
  {
    icon: <BriefcaseMedical className="h-10 w-10 text-accent" />,
    title: 'Veterinary Medical Center',
    description: 'Comprehensive veterinary services including medical treatments, boarding, and professional training.',
    href: '/services#veterinary',
    aiHint: 'veterinary clinic',
    image: 'https://picsum.photos/1200/800?random=7',
  },
  {
    icon: <Network className="h-10 w-10 text-accent" />,
    title: 'Network Services',
    description: 'Integrated digital solutions including e-commerce, secure payments, and global trade services.',
    href: '/services#network-services',
    aiHint: 'digital network',
    image: 'https://picsum.photos/1200/800?random=8',
  },
  {
    icon: <Stethoscope className="h-10 w-10 text-accent" />,
    title: 'Human Diagnostic Services',
    description: 'Offering a range of vital health diagnostic services to monitor and manage your well-being.',
    href: '/services#human-diagnostics',
    aiHint: 'health diagnostics',
    image: 'https://picsum.photos/1200/800?random=9',
  },
  {
    icon: <Users className="h-10 w-10 text-accent" />,
    title: 'Human Resources & Outsourcing',
    description: 'Connecting talent with opportunities through specialized recruitment and outsourcing services across various sectors.',
    href: '/services#human-resources',
    aiHint: 'human resources recruitment',
    image: 'https://picsum.photos/1200/800?random=10',
  },
   {
    icon: <Sparkles className="h-10 w-10 text-accent" />,
    title: 'Farm & Home Cleaning',
    description: 'Professional cleaning services for residential, commercial, and agricultural properties, from fumigation to laundry.',
    href: '/services#farm-home-cleaning',
    aiHint: 'professional cleaning',
    image: 'https://picsum.photos/1200/800?random=11',
  },
  {
    icon: <Plane className="h-10 w-10 text-accent" />,
    title: 'Travels & Tours',
    description: 'Seamless flight bookings, curated tours, and visa assistance.',
    href: '/services#travels-tours',
    aiHint: 'travel tourism',
    image: 'https://picsum.photos/1200/800?random=12',
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
      <section className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center text-center text-white overflow-hidden">
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

      <section className="bg-background">
        <div className="container px-4 md:px-6 py-16 md:py-24 text-center">
            <AnimatedWrapper>
              <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">Our Core Services</h2>
              <p className="max-w-3xl mx-auto text-muted-foreground mb-12">
                We offer a diverse portfolio of services, each managed with expert focus and a commitment to quality. From agriculture to technology, we deliver excellence across the board.
              </p>
            </AnimatedWrapper>
        </div>
        <div>
            {services.map((service, index) => (
                <div key={service.title} className={index % 2 === 0 ? 'bg-background' : 'bg-primary/5'}>
                    <div className="container px-4 md:px-6 py-16 md:py-24">
                        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
                           <AnimatedWrapper animation="slide-in-left" className={index % 2 === 1 ? 'md:order-2' : ''}>
                                <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl">
                                    <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover"
                                    data-ai-hint={service.aiHint}
                                    />
                                </div>
                            </AnimatedWrapper>
                            <AnimatedWrapper animation="slide-in-right" className={index % 2 === 1 ? 'md:order-1' : ''}>
                                <div className="flex items-center gap-4 mb-4">
                                    {service.icon}
                                </div>
                                <h3 className="text-3xl md:text-4xl font-headline font-bold mb-4">{service.title}</h3>
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

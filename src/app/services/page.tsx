
import Image from "next/image";
import { Code, Brush, Rocket, Layers, Check } from "lucide-react";
import { AnimatedWrapper } from "@/components/layout/AnimatedWrapper";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services - Stevuth Tech | Nigeria',
  description: 'Explore the diverse range of web development and design services offered by Stevuth Tech in Nigeria. Find expert solutions for your needs.',
  keywords: [
    "Stevuth Tech services",
    "Custom Website Development",
    "E-Commerce Development",
    "UI/UX Design",
    "SEO Services",
    "SaaS Development"
  ],
  alternates: {
    canonical: '/services',
  },
};

const serviceCategories = [
  {
    category: "Core Web Services",
    icon: <Code className="h-10 w-10 text-accent" />,
    services: [
      {
        id: "custom-website-development",
        title: "Custom Website Development",
        description: "Tailored websites built from scratch to meet unique business needs.",
        imageUrl: "/images/services/custom-website-development.jpg",
        aiHint: "custom code",
      },
      {
        id: "ecommerce-development",
        title: "E-Commerce Development",
        description: "Fully functional online stores with payment integration, inventory, and shipping features.",
        imageUrl: "/images/services/ecommerce-development.jpg",
        aiHint: "online store",
      },
      {
        id: "business-website-design",
        title: "Business Website Design",
        description: "Professional websites for companies, startups, and SMEs to build credibility online.",
        imageUrl: "/images/services/business-website-design.jpg",
        aiHint: "corporate building",
      },
      {
        id: "landing-page-design",
        title: "Landing Page Design",
        description: "High-converting landing pages designed for marketing campaigns and promotions.",
        imageUrl: "/images/services/landing-page-design.jpg",
        aiHint: "marketing chart",
      },
      {
        id: "web-application-development",
        title: "Web Application Development",
        description: "Advanced, interactive web apps such as dashboards, SaaS platforms, and custom solutions.",
        imageUrl: "/images/services/web-application-development.jpg",
        aiHint: "saas dashboard",
      },
    ]
  },
  {
    category: "Design & Branding",
    icon: <Brush className="h-10 w-10 text-accent" />,
    services: [
      {
        id: "ui-ux-design",
        title: "UI/UX Design",
        description: "Engaging and user-friendly designs that deliver smooth experiences for visitors.",
        imageUrl: "/images/services/ui-ux-design.jpg",
        aiHint: "design wireframe",
      },
      {
        id: "brand-identity-design",
        title: "Brand Identity Design",
        description: "Creative logos, color palettes, and brand visuals that align with your website.",
        imageUrl: "/images/services/brand-identity-design.jpg",
        aiHint: "brand logo",
      },
    ]
  },
  {
    category: "Performance & Optimization",
    icon: <Rocket className="h-10 w-10 text-accent" />,
    services: [
       {
        id: "website-maintenance",
        title: "Website Maintenance & Support",
        description: "Continuous updates, bug fixes, backups, and security checks.",
        imageUrl: "/images/services/website-maintenance.jpg",
        aiHint: "website support",
      },
      {
        id: "speed-optimization",
        title: "Website Speed Optimization",
        description: "Enhancing performance to make websites load faster.",
        imageUrl: "/images/services/speed-optimization.jpg",
        aiHint: "fast loading",
      },
      {
        id: "seo-services",
        title: "SEO Services",
        description: "On-page optimization to help websites rank higher on Google.",
        imageUrl: "/images/services/seo-services.jpg",
        aiHint: "seo ranking",
      },
      {
        id: "mobile-optimization",
        title: "Mobile Optimization",
        description: "Fully responsive websites optimized for all devices.",
        imageUrl: "/images/services/mobile-optimization.jpg",
        aiHint: "responsive design",
      },
    ]
  },
  {
    category: "Advanced Solutions",
    icon: <Layers className="h-10 w-10 text-accent" />,
    services: [
      {
        id: "saas-development",
        title: "SaaS Development",
        description: "Custom software-as-a-service platforms for businesses.",
        imageUrl: "/images/services/saas-development.jpg",
        aiHint: "software platform",
      },
      {
        id: "api-development",
        title: "API Development & Integration",
        description: "Connecting websites with payment gateways, CRMs, and other tools.",
        imageUrl: "/images/services/api-development.jpg",
        aiHint: "api integration",
      },
      {
        id: "booking-systems",
        title: "Booking & Reservation Systems",
        description: "Online booking solutions for hotels, events, and service providers.",
        imageUrl: "/images/services/booking-systems.jpg",
        aiHint: "booking calendar",
      },
      {
        id: "marketplace-development",
        title: "Marketplace Development",
        description: "Multi-vendor platforms for buying and selling products, cars, or real estate.",
        imageUrl: "/images/services/marketplace-development.jpg",
        aiHint: "e-commerce marketplace",
      },
    ]
  }
];

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://your-live-url.com";

const ServiceSection = ({ service, index }: { service: (typeof serviceCategories)[0]['services'][0], index: number }) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": service.title,
    "provider": {
      "@type": "Organization",
      "name": "Stevuth Tech"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Nigeria"
    },
    "name": service.title,
    "description": service.description,
    "image": service.imageUrl,
    "url": `${siteUrl}/services#${service.id}`
  };

  return (
    <div id={service.id} className="grid md:grid-cols-2 gap-6 lg:gap-10 items-center">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        key={service.id + '-ld'}
      />
      <AnimatedWrapper animation="slide-in-left" className={index % 2 === 1 ? 'md:order-2' : ''}>
        <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl">
          <Image
            src={service.imageUrl}
            alt={service.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={index === 0}
            className="object-cover"
            data-ai-hint={service.aiHint}
          />
        </div>
      </AnimatedWrapper>
      <AnimatedWrapper animation="slide-in-right" className={index % 2 === 1 ? 'md:order-1' : ''}>
        <h3 className="text-2xl font-headline font-bold">{service.title}</h3>
        <p className="text-muted-foreground mt-2 mb-4">{service.description}</p>
        <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
          <Link href="/contact">Get a Quote</Link>
        </Button>
      </AnimatedWrapper>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <div>
      <section className="bg-primary text-primary-foreground py-10 md:py-12 text-center">
        <AnimatedWrapper>
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-white">Our Services</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-primary-foreground/80">
            Expert solutions to build, brand, and boost your online presence.
          </p>
        </AnimatedWrapper>
      </section>

      {serviceCategories.map((category, categoryIndex) => (
        <section key={category.category} className={`py-10 md:py-12 ${categoryIndex % 2 === 1 ? 'bg-secondary' : 'bg-background'}`}>
          <div className="container px-4 md:px-6">
            <AnimatedWrapper>
              <div className="flex items-center gap-4 mb-8">
                {category.icon}
                <h2 className="text-3xl md:text-4xl font-headline font-bold">{category.category}</h2>
              </div>
            </AnimatedWrapper>
            <div className="grid gap-12">
              {category.services.map((service, serviceIndex) => (
                <ServiceSection key={service.id} service={service} index={serviceIndex} />
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}


import Image from "next/image";
import { Code, Brush, Rocket, Layers, Check } from "lucide-react";
import { AnimatedWrapper } from "@/components/layout/AnimatedWrapper";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from 'next';
import imageData from '@/lib/placeholder-images.json';

export const metadata: Metadata = {
  title: 'Web Development Services in Nigeria by Stevuth Tech',
  description: 'Explore expert web development services in Nigeria from Stevuth Tech. We offer custom websites, e-commerce, UI/UX design, and SEO to make you the best in your industry.',
  keywords: [
    "web development services Nigeria",
    "custom website development",
    "e-commerce development Nigeria",
    "UI/UX design Lagos",
    "SEO services Nigeria",
    "best tech company in Nigeria for web services"
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
        imageUrl: "/custom web.jpg",
        aiHint: "developer coding on laptop",
      },
      {
        id: "ecommerce-development",
        title: "E-Commerce Development",
        description: "Fully functional online stores with payment integration, inventory, and shipping features.",
        imageUrl: imageData.services.ecommerce.src,
        aiHint: imageData.services.ecommerce.hint,
      },
      {
        id: "business-website-design",
        title: "Business Website Design",
        description: "Professional websites for companies, startups, and SMEs to build credibility online.",
        imageUrl: "/business web.jpg?v=2",
        aiHint: "corporate building",
      },
      {
        id: "landing-page-design",
        title: "Landing Page Design",
        description: "High-converting landing pages designed for marketing campaigns and promotions.",
        imageUrl: "/landing.jpg",
        aiHint: "website landing page",
      },
      {
        id: "web-application-development",
        title: "Web Application Development",
        description: "Advanced, interactive web apps such as dashboards, SaaS platforms, and custom solutions.",
        imageUrl: "/web app.jpg",
        aiHint: "dashboard analytics",
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
        imageUrl: "/ux.jpg",
        aiHint: "ui design mockup",
      },
      {
        id: "brand-identity-design",
        title: "Brand Identity Design",
        description: "Creative logos, color palettes, and brand visuals that align with your website.",
        imageUrl: "/brand iden.jpg",
        aiHint: "brand logo design",
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
        imageUrl: "/web support.jpg",
        aiHint: "man fixing gears",
      },
      {
        id: "speed-optimization",
        title: "Website Speed Optimization",
        description: "Enhancing performance to make websites load faster.",
        imageUrl: "/web speed.jpg",
        aiHint: "fast loading speed",
      },
      {
        id: "seo-services",
        title: "SEO Services",
        description: "On-page optimization to help websites rank higher on Google.",
        imageUrl: "/seo.jpg",
        aiHint: "seo analytics chart",
      },
      {
        id: "mobile-optimization",
        title: "Mobile Optimization",
        description: "Fully responsive websites optimized for all devices.",
        imageUrl: "/mobile.jpg",
        aiHint: "mobile phone responsive",
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
        imageUrl: "/web saas.jpg",
        aiHint: "saas platform interface",
      },
      {
        id: "api-development",
        title: "API Development & Integration",
        description: "Connecting websites with payment gateways, CRMs, and other tools.",
        imageUrl: "/api.jpg",
        aiHint: "api code integration",
      },
      {
        id: "booking-systems",
        title: "Booking & Reservation Systems",
        description: "Online booking solutions for hotels, events, and service providers.",
        imageUrl: "/booking.jpg",
        aiHint: "online booking calendar",
      },
      {
        id: "marketplace-development",
        title: "Marketplace Development",
        description: "Multi-vendor platforms for buying and selling products, cars, or real estate.",
        imageUrl: "/marketplace.jpg?v=2",
        aiHint: "online marketplace products",
      },
    ]
  }
];

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://stevuth.web.app";

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
          <Link href="/contact">Let’s Discuss Your Project</Link>
        </Button>
      </AnimatedWrapper>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <div className="pt-16">
      <section className="bg-primary text-primary-foreground py-10 md:py-12">
        <div className="container px-4 md:px-6 text-left">
          <AnimatedWrapper>
            <h1 className="text-3xl md:text-4xl font-headline font-bold text-white">Our Services</h1>
            <p className="mt-4 text-base md:text-lg max-w-3xl text-primary-foreground/80">
              Expert solutions from Nigeria's best web development agency to build, brand, and boost your online presence.
            </p>
          </AnimatedWrapper>
        </div>
      </section>

      {serviceCategories.map((category, categoryIndex) => (
        <section key={category.category} className={`py-10 md:py-12 ${categoryIndex % 2 === 1 ? 'bg-secondary/10' : 'bg-background'}`}>
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

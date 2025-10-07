
import Image from "next/image";
import { Code, Brush, Rocket, Layers, Check } from "lucide-react";
import { AnimatedWrapper } from "@/components/layout/AnimatedWrapper";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from 'next';
import imageData from '@/lib/placeholder-images.json';
import { BackButton } from "@/components/layout/BackButton";

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
        description: "We build fully tailored websites from the ground up, designed around your business goals, optimized for performance, and scalable for future growth.",
        imageUrl: "/custom web.jpg",
        aiHint: "developer coding on laptop",
      },
      {
        id: "ecommerce-development",
        title: "E-Commerce Development",
        description: "We develop secure, high-performing online stores with integrated payments, inventory systems, and smooth checkout experiences that drive conversions.",
        imageUrl: imageData.services.ecommerce.src,
        aiHint: imageData.services.ecommerce.hint,
      },
      {
        id: "business-website-design",
        title: "Business Website Design",
        description: "Our business websites are built to enhance credibility, improve online visibility, and strengthen brand identity through professional, modern design.",
        imageUrl: "/business web.jpg?v=2",
        aiHint: "corporate building",
      },
      {
        id: "landing-page-design",
        title: "Landing Page Design",
        description: "We design focused, high-converting landing pages built for campaigns, product launches, and lead generation, turning visitors into customers.",
        imageUrl: "/landing.jpg",
        aiHint: "website landing page",
      },
      {
        id: "web-application-development",
        title: "Web Application Development",
        description: "From dashboards to SaaS platforms, we develop dynamic web applications that offer seamless user experiences and advanced functionality.",
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
        description: "We craft intuitive, user-centered interfaces that make every interaction smooth and engaging, balancing beauty with usability.",
        imageUrl: "/ux.jpg",
        aiHint: "ui design mockup",
      },
      {
        id: "brand-identity-design",
        title: "Brand Identity Design",
        description: "Our creative team shapes visual identities that express your brand’s personality, from logos and color palettes to full brand systems.",
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
        description: "We provide ongoing care for your website, including updates, bug fixes, backups, and security monitoring, to keep it running smoothly.",
        imageUrl: "/web support.jpg",
        aiHint: "man fixing gears",
      },
      {
        id: "speed-optimization",
        title: "Website Speed Optimization",
        description: "We fine-tune your website for lightning-fast load times, improving user satisfaction and boosting SEO performance.",
        imageUrl: "/web speed.jpg",
        aiHint: "fast loading speed",
      },
      {
        id: "seo-services",
        title: "SEO Services",
        description: "We optimize your site structure, content, and metadata to help you rank higher on search engines and attract quality traffic.",
        imageUrl: "/seo.jpg",
        aiHint: "seo analytics chart",
      },
      {
        id: "mobile-optimization",
        title: "Mobile Optimization",
        description: "We ensure your website looks and performs flawlessly on all screen sizes, from smartphones to tablets and desktops.",
        imageUrl: "/mobile.jpg?v=2",
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
        description: "We build secure, scalable software-as-a-service platforms that empower businesses to deliver cloud-based products and services.",
        imageUrl: "/web saas.jpg?v=2",
        aiHint: "saas platform interface",
      },
      {
        id: "api-development",
        title: "API Development & Integration",
        description: "We connect your systems through custom APIs, integrating payment gateways, CRMs, and third-party tools for smoother operations.",
        imageUrl: "/api.jpg",
        aiHint: "api code integration",
      },
      {
        id: "booking-systems",
        title: "Booking & Reservation Systems",
        description: "We create reliable booking platforms for hotels, events, and service-based businesses with real-time scheduling and payment features.",
        imageUrl: "/booking.jpg?v=2",
        aiHint: "online booking calendar",
      },
      {
        id: "marketplace-development",
        title: "Marketplace Development",
        description: "We build multi-vendor marketplaces where buyers and sellers can easily connect, list products, and manage transactions securely.",
        imageUrl: "/marketplace.jpg?v=2",
        aiHint: "online marketplace products",
      },
    ]
  }
];

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.stevuthtech.com";

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
      <section className="bg-primary text-primary-foreground py-10 md:py-12 relative">
        <BackButton />
        <div className="container px-4 md:px-6 text-left">
          <AnimatedWrapper>
            <h1 className="text-3xl md:text-4xl font-headline font-bold text-white mt-4">Our Services</h1>
            <p className="mt-4 text-base md:text-lg max-w-3xl text-primary-foreground/80">
              Expert solutions from Nigeria's best web development agency to build, brand, and boost your online presence.
            </p>
          </AnimatedWrapper>
        </div>
      </section>

      {serviceCategories.map((category, categoryIndex) => (
        <section key={category.category} className={`py-10 md:py-12 ${categoryIndex % 2 === 1 ? 'bg-primary/5' : 'bg-background'}`}>
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

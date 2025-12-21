

import { Check, ArrowRight } from "lucide-react";
import { AnimatedWrapper } from "@/components/layout/AnimatedWrapper";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from 'next';
import { Badge } from "@/components/ui/badge";
import { BackButton } from "@/components/layout/BackButton";

export const metadata: Metadata = {
  title: 'Affordable Website Pricing in the UK | Stevuth Tech',
  description: 'Explore website development pricing from the best agency in the UK. We offer transparent pricing for starter sites, e-commerce stores, and custom solutions in London and beyond.',
  keywords: ["website pricing UK", "web design pricing London", "e-commerce website cost UK", "affordable websites UK", "best web developer pricing"],
  alternates: {
    canonical: '/pricing',
  },
};

const packages = [
  {
    title: "Starter Package",
    price: "Contact for Price",
    priceUsd: "",
    description: "For individuals & very small businesses.",
    features: [
      "1–3 pages (Home, About, Contact)",
      "Mobile responsive design",
      "Contact form",
      "Basic SEO optimization",
      "1 Year Hosting & Domain",
      "Google Business Profile setup",
      "Professional Email Address Setup",
    ],
    delivery: "5 days",
    cta: "Order Now",
    isPopular: false,
  },
  {
    title: "Standard Package",
    price: "Contact for Price",
    priceUsd: "",
    description: "Best for growing businesses.",
    features: [
      "Up to 7 pages (Home, About, Services, Contact, etc.)",
      "Custom design & branding",
      "Blog setup (optional)",
      "Full SEO optimization (on-page + indexing)",
      "1 Year Hosting & Domain",
      "Google Business Profile setup",
      "Social media integration",
      "Google Analytics integration",
      "Professional Email Address Setup",
    ],
    delivery: "7–10 days",
    cta: "Order Now",
    isPopular: true,
  },
  {
    title: "Premium Package",
    price: "Contact for Price",
    priceUsd: "",
    description: "Perfect for e-commerce businesses.",
    features: [
      "Online store setup (unlimited products)",
      "Payment integration (Paystack, Flutterwave, Stripe)",
      "Shopping cart & order management",
      "Customer accounts & login",
      "Advanced SEO optimization",
      "1 Year Hosting & Domain",
      "Google Business Profile setup",
      "Google Analytics integration",
      "Google Maps integration",
      "Professional Email Address Setup",
    ],
    delivery: "10–14 days",
    cta: "Order Now",
    isPopular: false,
  },
  {
    title: "Pro Package",
    price: "Contact for Price",
    priceUsd: "",
    description: "For startups & enterprises needing advanced solutions.",
    features: [
      "Custom-built solution (Marketplace, SaaS, etc.)",
      "Unlimited pages & features",
      "API integrations (WhatsApp, payment gateways, etc.)",
      "Advanced SEO optimization",
      "1 Year Hosting & Domain",
      "Google Business Profile setup",
      "Professional Email Address Setup",
      "Free 1-Month Support",
    ],
    delivery: "3–5 weeks",
    cta: "Order Now",
    isPopular: false,
  },
    {
    title: "Custom Package",
    price: "Price On Request",
    priceUsd: "",
    description: "Tailored for unique solutions outside the listed packages.",
    features: [
      "Fully customized website or web app",
      "Features built specifically for your business",
      "API & third-party integrations",
      "Advanced functionalities (booking systems, dashboards)",
      "SEO optimization",
      "Hosting & Google Business Profile included",
      "Professional Email Address Setup",
    ],
    delivery: "Depends on project scope",
    cta: "Request a Quote",
    isPopular: false,
  },
];

const whatsAppNumber = "442079460123";

const createWhatsAppLink = (packageName: string) => {
  const message = `Hello, I'm interested in the ${packageName}. Please provide more details.`;
  return `https://wa.me/${whatsAppNumber}?text=${encodeURIComponent(message)}`;
};

export default function PricingPage() {
  return (
    <div className="pt-16">
      <section className="bg-primary text-primary-foreground py-10 md:py-12 relative">
        <BackButton />
        <div className="container px-4 md:px-6 text-left">
          <AnimatedWrapper>
            <h1 className="text-3xl md:text-4xl font-headline font-bold text-white mt-4">Website Development Pricing</h1>
            <p className="mt-4 text-base md:text-lg max-w-3xl text-primary-foreground/80">
              Affordable, transparent pricing from the best web development agency in the UK. Let's build something amazing.
            </p>
          </AnimatedWrapper>
        </div>
      </section>

      <section className="pb-10 md:pb-12">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
            {packages.map((pkg, index) => {
              const ctaLink = pkg.title === 'Custom Package' 
                ? "/contact"
                : createWhatsAppLink(pkg.title);
              
              const ctaText = "Order Now";

              return (
                <AnimatedWrapper 
                  key={pkg.title} 
                  animation="fade-in-up" 
                  delay={index * 150}
                  className={pkg.title === "Pro Package" || pkg.title === "Custom Package" ? "md:col-span-2 lg:col-span-1" : ""}
                >
                  <Card className={`h-full flex flex-col bg-transparent animated-border ${pkg.isPopular ? 'border-accent border-2 shadow-accent/20 shadow-lg' : 'hover:shadow-xl transition-shadow'}`}>
                      {pkg.isPopular && (
                        <Badge variant="secondary" className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 text-sm font-bold">
                            Most Popular
                        </Badge>
                      )}
                    <CardHeader className="pt-8">
                      <CardTitle className="text-2xl font-bold">{pkg.title}</CardTitle>
                      <div className="flex items-baseline gap-2">
                          <span className="text-3xl font-extrabold text-foreground">{pkg.price}</span>
                          {pkg.priceUsd && <span className="text-muted-foreground">{pkg.priceUsd}</span>}
                      </div>
                      <CardDescription>{pkg.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <ul className="space-y-3">
                        {pkg.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3">
                            <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter className="flex-col items-stretch gap-4 pt-4">
                      <Button asChild size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                        <Link href={ctaLink} target={pkg.title !== 'Custom Package' ? '_blank' : '_self'}>
                          {ctaText} <ArrowRight className="h-4 w-4 ml-2" />
                        </Link>
                      </Button>
                      <p className="text-center text-sm text-muted-foreground">Delivery: {pkg.delivery}</p>
                    </CardFooter>
                  </Card>
                </AnimatedWrapper>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

    

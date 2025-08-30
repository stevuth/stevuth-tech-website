import Image from "next/image";
import { HardHat, ShoppingCart, Check, BriefcaseMedical, Network, Stethoscope, Users, Sparkles, Plane, Baby, GraduationCap, Heart } from "lucide-react";
import { AnimatedWrapper } from "@/components/layout/AnimatedWrapper";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services - Stevuth Tech | Nigeria',
  description: 'Explore the diverse range of services offered by Stevuth Tech in Nigeria, including Veterinary, Healthcare Diagnostics, Travels & Tours, HR, Cleaning, and more. Find expert solutions for your needs.',
  keywords: [
    "Stevuth Tech services",
    "Veterinary services Nigeria",
    "Human diagnostics Nigeria",
    "Travel agency Lagos",
    "HR services Nigeria",
    "Cleaning services Ogun",
    "Orphanage support",
    "Tutorial center Nigeria"
  ],
  alternates: {
    canonical: '/services',
  },
};

const services = [
  {
    id: "veterinary",
    icon: <BriefcaseMedical className="h-10 w-10 text-accent" />,
    title: "Veterinary Medical Services",
    description: "Comprehensive veterinary services including medical treatments, boarding, farm consultations, pet travel clearance, and professional training.",
    imageUrl: "https://i.postimg.cc/TYLkVzZ5/Chat-GPT-Image-Aug-27-2025-11-46-57-AM.png",
    features: ["Boarding Facilities", "Vaccinations & Treatments", "Farm Visitation & Consultation", "Pet Travel Clearance", "Training Institute"],
    aiHint: "veterinary clinic",
  },
  {
    id: "network-services",
    icon: <Network className="h-10 w-10 text-accent" />,
    title: "Network Services",
    description: "Integrated digital solutions including e-commerce, secure payments, and global trade services. We facilitate everything from online shopping to international cryptocurrency transactions.",
    imageUrl: "https://i.postimg.cc/8CfG6XT1/Whisk-ebb171bffb.jpg",
    features: ["E-commerce", "Buy Recharge Cards & Data", "E-trading", "Receive & Pay Money Worldwide", "Register with Govt/CAC", "Import & Export", "Cryptocurrency"],
    aiHint: "digital network",
  },
  {
    id: "human-diagnostics",
    icon: <Stethoscope className="h-10 w-10 text-accent" />,
    title: "Human Diagnostic Services",
    description: "Offering a range of vital health diagnostic services including body weight assessment, pregnancy tests, blood pressure and blood sugar monitoring, and testing for various conditions like malaria, typhoid, infections, HIV/AIDS, and fertility issues.",
    imageUrl: "https://i.postimg.cc/Dzkjxxqf/Whisk-8f29c728c8.jpg",
    features: ["Body Weight", "Pregnancy", "Blood Pressure", "Blood Sugar", "Malaria", "Typhoid", "Infections", "HIV/AIDS", "Fertility"],
    aiHint: "health diagnostics",
  },
  {
    id: "human-resources",
    icon: <Users className="h-10 w-10 text-accent" />,
    title: "Human Resources & Outsourcing Services",
    description: "We provide specialized recruitment and outsourcing services, connecting qualified professionals with opportunities in various sectors. Our services cover farm jobs, security, teaching, cleaning, laboratory technicians, and agri-business.",
    imageUrl: "https://i.postimg.cc/bvPcFxbP/Whisk-b6498e7b87.jpg",
    features: ["Farm Jobs", "Security Jobs", "Teaching Jobs", "Cleaning Jobs", "Laboratory Technicians", "Agri-business"],
    aiHint: "human resources recruitment",
  },
  {
    id: "farm-home-cleaning",
    icon: <Sparkles className="h-10 w-10 text-accent" />,
    title: "Farm & Home Cleaning",
    description: "Professional cleaning services for residential, commercial, and agricultural properties, including fumigation, pest control, laundry, and bush clearing.",
    imageUrl: "https://i.postimg.cc/kX97Hddz/Whisk-f3c2b5e9e7.jpg",
    features: ["Fumigation", "Pest Control", "Home Cleaning", "Dry Cleaning & Laundry", "Office Cleaning", "Bush Clearing"],
aiHint: "professional cleaning",
  },
  {
    id: "travels-tours",
    icon: <Plane className="h-10 w-10 text-accent" />,
    title: "Travels & Tours",
    description: "Seamless flight bookings, curated tours, and visa assistance for all your travel needs.",
    imageUrl: "https://i.postimg.cc/dtLcpQxW/Whisk-e405484ec8.jpg",
    features: ["Tourist Visa", "Flight Ticket Bookings", "All Visa Applications", "International Passport Procurement", "Religious Pilgrims", "Hotel Reservation", "Work Visa", "Study Visa"],
    aiHint: "travel tourism",
  },
  {
    id: "orphanage-home",
    icon: <Baby className="h-10 w-10 text-accent" />,
    title: "Orphanage Home",
    description: "Providing a safe and nurturing environment for children in need, offering care, education, and support.",
    imageUrl: "https://i.postimg.cc/J4pr9dxq/result-0.png",
    features: ["Safe & Loving Home", "Quality Education", "Healthcare & Nutrition", "Recreational Activities", "Adoption Services"],
    aiHint: "happy children",
  },
  {
    id: "tutorial-center",
    icon: <GraduationCap className="h-10 w-10 text-accent" />,
    title: "Tutorial Center",
    description: "Specialized tutorial services for various examinations and educational programs, including adult education and international test preparation.",
    imageUrl: "https://i.postimg.cc/V63J3ZFv/aiease-1756298208694.jpg",
    features: ["Adult Night School", "WAEC", "JAMB", "SAT", "TOEFL", "IELTS"],
    aiHint: "education classroom",
  },
];

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://your-live-url.com";
const ServiceSection = ({ service, index }: { service: (typeof services)[0], index: number }) => {
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
    <section id={service.id} className={`py-10 md:py-12 ${index % 2 === 1 ? 'bg-secondary' : 'bg-background'}`}>
       <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container px-4 md:px-6">
        <div className={`grid md:grid-cols-2 gap-6 lg:gap-10 items-center`}>
          <AnimatedWrapper animation="slide-in-left" className={index % 2 === 1 ? 'md:order-2' : ''}>
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl">
              <Image
                src={service.imageUrl}
                alt={service.title}
                fill
                sizes="100vw"
                priority={index === 0}
                className="object-cover"
                data-ai-hint={service.aiHint}
              />
            </div>
          </AnimatedWrapper>
          <AnimatedWrapper animation="slide-in-right" className={index % 2 === 1 ? 'md:order-1' : ''}>
            <div className="flex items-center gap-4 mb-4">
              {service.icon}
              <h2 className="text-2xl md:text-3xl font-headline font-bold">{service.title}</h2>
            </div>
            <p className="text-muted-foreground mb-6">{service.description}</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mb-6">
              {service.features.map(feature => (
                <li key={feature} className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-sm font-medium">{feature}</span>
                </li>
              ))}
            </ul>
             {service.id === 'orphanage-home' ? (
               <Card className="bg-primary/5 mt-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl font-headline">
                    <Heart className="h-6 w-6 text-accent" />
                    Donate to Support Our Cause
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <p>Your generous donations help us provide care and support to children in need.</p>
                  <p className="font-semibold">Account Number: <span className="font-mono">1016055464</span></p>
                  <p className="font-semibold">Bank Name: <span className="font-mono">Zenith Bank Plc</span></p>
                  <p className="font-semibold">Account Name: <span className="font-mono">Stevuth Tech</span></p>
                </CardContent>
              </Card>
             ) : (
              <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/contact">Contact for Service</Link>
              </Button>
             )}
          </AnimatedWrapper>
        </div>
      </div>
    </section>
  );
}


export default function ServicesPage() {
  return (
    <div>
      <section className="bg-primary text-primary-foreground py-10 md:py-12 text-center">
        <AnimatedWrapper>
          <h1 className="text-4xl md:text-5xl font-headline font-bold">Solutions We Provide</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-primary-foreground/80">
            A diverse portfolio of expert services, delivered with focus and integrity.
          </p>
        </AnimatedWrapper>
      </section>

      {services.map((service, index) => (
        <ServiceSection key={service.id} service={service} index={index} />
      ))}
    </div>
  );
}

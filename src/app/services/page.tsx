import Image from "next/image";
import { HardHat, ShoppingCart, Check, BriefcaseMedical, Network, Stethoscope, Users, Sparkles, Plane } from "lucide-react";
import { AnimatedWrapper } from "@/components/layout/AnimatedWrapper";

const services = [
  {
    id: "veterinary",
    icon: <BriefcaseMedical className="h-10 w-10 text-accent" />,
    title: "Veterinary Medical Center",
    description: "Comprehensive veterinary services including medical treatments, boarding, farm consultations, pet travel clearance, and professional training.",
    imageUrl: "https://picsum.photos/1200/800?random=7",
    features: ["Boarding Facilities", "Vaccinations & Treatments", "Farm Visitation & Consultation", "Pet Travel Clearance", "Training Institute"],
    aiHint: "veterinary clinic",
  },
  {
    id: "network-services",
    icon: <Network className="h-10 w-10 text-accent" />,
    title: "Network Services",
    description: "Integrated digital solutions including e-commerce, secure payments, and global trade services. We facilitate everything from online shopping to international cryptocurrency transactions.",
    imageUrl: "https://picsum.photos/1200/800?random=8",
    features: ["E-commerce", "Buy Recharge Cards & Data", "E-trading", "Receive & Pay Money Worldwide", "Register with Govt/CAC", "Import & Export", "Cryptocurrency"],
    aiHint: "digital network",
  },
  {
    id: "human-diagnostics",
    icon: <Stethoscope className="h-10 w-10 text-accent" />,
    title: "Human Diagnostic Services",
    description: "Offering a range of vital health diagnostic services including body weight assessment, pregnancy tests, blood pressure and blood sugar monitoring, and testing for various conditions like malaria, typhoid, infections, HIV/AIDS, and fertility issues.",
    imageUrl: "https://picsum.photos/1200/800?random=9",
    features: ["Body Weight", "Pregnancy", "Blood Pressure", "Blood Sugar", "Malaria", "Typhoid", "Infections", "HIV/AIDS", "Fertility"],
    aiHint: "health diagnostics",
  },
  {
    id: "human-resources",
    icon: <Users className="h-10 w-10 text-accent" />,
    title: "Human Resources & Outsourcing Services",
    description: "We provide specialized recruitment and outsourcing services, connecting qualified professionals with opportunities in various sectors. Our services cover farm jobs, security, teaching, cleaning, laboratory technicians, and agri-business.",
    imageUrl: "https://picsum.photos/1200/800?random=10",
    features: ["Farm Jobs", "Security Jobs", "Teaching Jobs", "Cleaning Jobs", "Laboratory Technicians", "Agri-business"],
    aiHint: "human resources recruitment",
  },
  {
    id: "farm-home-cleaning",
    icon: <Sparkles className="h-10 w-10 text-accent" />,
    title: "Farm & Home Cleaning",
    description: "Professional cleaning services for residential, commercial, and agricultural properties, including fumigation, pest control, laundry, and bush clearing.",
    imageUrl: "https://picsum.photos/1200/800?random=11",
    features: ["Fumigation", "Pest Control", "Home Cleaning", "Dry Cleaning & Laundry", "Office Cleaning", "Bush Clearing"],
    aiHint: "professional cleaning",
  },
  {
    id: "travels-tours",
    icon: <Plane className="h-10 w-10 text-accent" />,
    title: "Travels & Tours",
    description: "Seamless flight bookings, curated tours, and visa assistance for all your travel needs.",
    imageUrl: "https://picsum.photos/1200/800?random=12",
    features: ["Tourist Visa", "Flight Ticket Bookings", "All Visa Applications", "International Passport Procurement", "Religious Pilgrims", "Hotel Reservation", "Work Visa", "Study Visa"],
    aiHint: "travel tourism",
  },
];

const ServiceSection = ({ service, index }: { service: (typeof services)[0], index: number }) => (
  <section id={service.id} className={`py-16 md:py-24 ${index % 2 === 1 ? 'bg-secondary' : 'bg-background'}`}>
    <div className="container px-4 md:px-6">
      <div className={`grid md:grid-cols-2 gap-12 lg:gap-16 items-center`}>
        <AnimatedWrapper animation="slide-in-left" className={index % 2 === 1 ? 'md:order-2' : ''}>
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl">
            <Image
              src={service.imageUrl}
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
            <h2 className="text-3xl md:text-4xl font-headline font-bold">{service.title}</h2>
          </div>
          <p className="text-muted-foreground mb-6">{service.description}</p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
            {service.features.map(feature => (
              <li key={feature} className="flex items-center gap-2">
                <Check className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-sm font-medium">{feature}</span>
              </li>
            ))}
          </ul>
        </AnimatedWrapper>
      </div>
    </div>
  </section>
);


export default function ServicesPage() {
  return (
    <div>
      <section className="bg-primary text-primary-foreground py-20 md:py-28 text-center">
        <AnimatedWrapper>
          <h1 className="text-4xl md:text-6xl font-headline font-bold">Our Services</h1>
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

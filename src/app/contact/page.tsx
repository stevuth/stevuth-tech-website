import { AnimatedWrapper } from "@/components/layout/AnimatedWrapper";
import { ContactForm } from "./ContactForm";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import Link from 'next/link';

const phoneNumbers = [
  { number: "+2348139940522" },
  { number: "+2349121715042" },
  { number: "+2348035289834" },
  { number: "+971586946934" },
];

export default function ContactPage() {
  return (
    <div>
      <section className="bg-primary text-primary-foreground py-10 md:py-12 text-center">
        <AnimatedWrapper>
          <h1 className="text-4xl md:text-5xl font-headline font-bold">Contact Us</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-primary-foreground/80">
            We're here to help. Reach out to us with your questions or proposals.
          </p>
        </AnimatedWrapper>
      </section>

      <section className="py-10 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-12 gap-6">
            <div className="md:col-span-12 lg:col-span-7">
              <AnimatedWrapper>
                <h2 className="text-2xl md:text-3xl font-headline font-bold mb-2">Send us a message</h2>
                <p className="text-muted-foreground mb-6">Fill out the form below and we'll get back to you as soon as possible.</p>
                <ContactForm />
              </AnimatedWrapper>
            </div>
            <div className="md:col-span-12 lg:col-span-5">
              <AnimatedWrapper animation="slide-in-right">
                <div className="bg-secondary p-6 md:p-8 rounded-lg">
                  <h3 className="text-2xl font-headline font-bold mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <Phone className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">Phone</h4>
                        <div className="flex flex-col space-y-1">
                          {phoneNumbers.map((phone) => (
                             <a key={phone.number} href={`tel:${phone.number}`} className="text-muted-foreground hover:text-accent transition-colors break-all">{phone.number}</a>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Mail className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">Email</h4>
                        <a href="mailto:info@rightfocus.com" className="text-muted-foreground hover:text-accent transition-colors break-all">info@rightfocus.com</a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <MapPin className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">Address</h4>
                        <p className="text-muted-foreground">4, Ogooluwa Street off Cele - Ifihan, Baba Mushin, Olaotan B/S, ljoko Road, Sango Ota, Ogun State.</p>
                      </div>
                    </div>
                     <div className="flex items-start gap-4">
                      <MessageCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">WhatsApp</h4>
                        <Link href="https://wa.me/2348139940522" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                            Chat with us
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedWrapper>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


import { AnimatedWrapper } from "@/components/layout/AnimatedWrapper";
import { ContactForm } from "./ContactForm";
import { Mail } from "lucide-react";
import type { Metadata } from 'next';
import { BackButton } from "@/components/layout/BackButton";

export const metadata: Metadata = {
  title: 'Contact The Best Web Development Agency in the UK',
  description: 'Get in touch with Stevuth Tech, the best web development agency in the UK. Whether you are in London or anywhere else, our team is ready to discuss your project.',
  keywords: ["contact best web development agency UK", "Stevuth Tech contact", "London web developer contact", "website design inquiry UK"],
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
  return (
    <div className="pt-16">
      <section className="bg-primary text-primary-foreground py-10 md:py-12 relative">
        <BackButton />
        <div className="container px-4 md:px-6">
          <AnimatedWrapper>
            <h1 className="text-3xl md:text-4xl font-headline font-bold text-white mt-4">Contact Us</h1>
            <p className="mt-4 text-base md:text-lg max-w-3xl text-primary-foreground/80">
              We're here to help. Reach out to us with your questions or to start your project with the best tech company in the UK.
            </p>
          </AnimatedWrapper>
        </div>
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
                      <Mail className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">Email</h4>
                        <a href="mailto:info@stevuthtech.com" className="text-muted-foreground hover:text-accent transition-colors break-all">info@stevuthtech.com</a>
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

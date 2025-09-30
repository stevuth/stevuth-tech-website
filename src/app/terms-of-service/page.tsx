import { AnimatedWrapper } from "@/components/layout/AnimatedWrapper";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service - Stevuth Tech',
  description: 'Read the terms of service for using the Stevuth Tech website and services. By using our site, you agree to these terms and conditions.',
  keywords: ["terms of service", "user agreement", "website terms", "Stevuth Tech terms"],
  alternates: {
    canonical: '/terms-of-service',
  },
  robots: {
    index: false,
    follow: true,
  }
};

export default function TermsOfServicePage() {
  return (
    <div className="pt-16">
      <section className="bg-primary text-primary-foreground py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <AnimatedWrapper>
            <h1 className="text-3xl md:text-4xl font-headline font-bold text-white">Terms of Service</h1>
            <p className="mt-4 text-lg md:text-xl max-w-3xl text-primary-foreground/80">
              Please read these terms and conditions carefully before using Our Service.
            </p>
          </AnimatedWrapper>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container max-w-4xl px-4 md:px-6">
          <AnimatedWrapper className="prose dark:prose-invert max-w-none">
            <h2>1. Agreement to Terms</h2>
            <p>
              By using our website, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, then you may not access the service. Your access to and use of the service is conditioned on your acceptance of and compliance with these Terms.
            </p>

            <h2>2. Intellectual Property</h2>
            <p>
              The Service and its original content, features and functionality are and will remain the exclusive property of Stevuth Tech and its licensors. The Service is protected by copyright, trademark, and other laws of both the country and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Stevuth Tech.
            </p>

            <h2>3. Limitation of Liability</h2>
            <p>
              In no event shall Stevuth Tech, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
            </p>
            
            <h2>4. Changes</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
            </p>
          </AnimatedWrapper>
        </div>
      </section>
    </div>
  );
}

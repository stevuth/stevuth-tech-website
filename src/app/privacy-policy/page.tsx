import { AnimatedWrapper } from "@/components/layout/AnimatedWrapper";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - Right focus crew international',
  description: 'Read the privacy policy for Right focus crew international. We are committed to protecting your personal data and respecting your privacy when you use our website and services in Nigeria.',
  keywords: ["privacy policy", "data protection Nigeria", "user data", "Right focus crew international privacy"],
  alternates: {
    canonical: '/privacy-policy',
  },
  robots: {
    index: false,
    follow: true,
  }
};

export default function PrivacyPolicyPage() {
  return (
    <div>
      <section className="bg-primary text-primary-foreground py-12 md:py-16 text-center">
        <AnimatedWrapper>
          <h1 className="text-4xl md:text-5xl font-headline font-bold">Privacy Policy</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-primary-foreground/80">
            Your privacy is important to us.
          </p>
        </AnimatedWrapper>
      </section>

      <section className="py-12 md:py-16">
        <div className="container max-w-4xl px-4 md:px-6">
          <AnimatedWrapper className="prose dark:prose-invert max-w-none">
            <h2>1. Introduction</h2>
            <p>
              Welcome to Right focus crew international's Privacy Policy. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
            </p>

            <h2>2. Information We Collect</h2>
            <div>
              We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
              <ul>
                <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
                <li><strong>Contact Data</strong> includes email address and telephone numbers.</li>
                <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
              </ul>
            </div>

            <h2>3. How We Use Your Personal Data</h2>
            <div>
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
              <ul>
                <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                <li>Where we need to comply with a legal obligation.</li>
              </ul>
            </div>

            <h2>4. Data Security</h2>
            <p>
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
            </p>
            
            <h2>5. Your Legal Rights</h2>
            <p>
              Under certain circumstances, you have rights under data protection laws in relation to your personal data. These include the right to request access, correction, erasure, or transfer of your personal data.
            </p>
          </AnimatedWrapper>
        </div>
      </section>
    </div>
  );
}

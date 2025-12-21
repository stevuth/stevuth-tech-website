
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AnimatedWrapper } from "@/components/layout/AnimatedWrapper";
import type { Metadata } from 'next';
import { BackButton } from "@/components/layout/BackButton";

export const metadata: Metadata = {
  title: 'FAQ - Best Web Development Agency in the UK',
  description: 'Find answers to questions about services from the best web development agency in the UK. Learn about our process for custom design, e-commerce, and SEO for clients in London and beyond.',
  keywords: ["web development FAQ UK", "e-commerce questions", "SEO services FAQ", "best website agency questions", "Stevuth Tech FAQ"],
  alternates: {
    canonical: '/faq',
  },
};

const faqs = [
  {
    question: "What is Custom Website Development?",
    answer: "Custom website development involves creating a unique website tailored specifically to your business requirements, brand identity, and target audience. Unlike template-based sites, a custom site offers full flexibility in design and functionality."
  },
  {
    question: "Do you build e-commerce websites?",
    answer: "Yes, we specialize in e-commerce development. We build fully functional online stores complete with secure payment gateways, inventory management systems, shipping integrations, and customer accounts."
  },
  {
    question: "What is UI/UX design and why is it important?",
    answer: "UI (User Interface) design focuses on the visual layout and look of your website, while UX (User Experience) design is about making it easy and enjoyable to use. Good UI/UX is crucial for keeping visitors on your site and guiding them towards your goals."
  },
  {
    question: "Can you help my website rank higher on Google?",
    answer: "Absolutely. Our SEO services focus on on-page optimization, which includes improving your site's structure, content, keywords, and speed to make it more attractive to search engines like Google."
  },
  {
    question: "Do you offer website maintenance after the site is live?",
    answer: "Yes, we provide comprehensive website maintenance and support plans. This includes regular updates, security checks, backups, bug fixes, and technical assistance to ensure your website remains secure and runs smoothly."
  },
  {
    question: "Will my website work on mobile devices?",
    answer: "Yes, all the websites we build are fully responsive. We ensure your site looks and functions perfectly on all devices, including desktops, tablets, and smartphones, which is essential for modern audiences."
  },
  {
    question: "What is a web application?",
    answer: "A web application is a more complex, interactive website that functions like software. Examples include online dashboards, SaaS platforms, booking systems, and custom business tools. We can develop advanced web applications to meet your specific operational needs."
  }
];

export default function FaqPage() {
  return (
    <div className="pt-16">
      <section className="bg-primary text-primary-foreground py-10 md:py-12 relative">
        <BackButton />
        <div className="container px-4 md:px-6">
          <AnimatedWrapper>
            <h1 className="text-3xl md:text-4xl font-headline font-bold text-white mt-4">Frequently Asked Questions</h1>
            <p className="mt-4 text-base md:text-lg max-w-3xl text-primary-foreground/80">
              Find answers to common questions about our services and operations.
            </p>
          </AnimatedWrapper>
        </div>
      </section>
      
      <section className="py-10 md:py-12">
        <div className="container max-w-4xl px-4 md:px-6">
          <AnimatedWrapper>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                  <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </AnimatedWrapper>
        </div>
      </section>
    </div>
  );
}

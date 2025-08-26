import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AnimatedWrapper } from "@/components/layout/AnimatedWrapper";

const faqs = [
  {
    question: "What industries does Right Focus International operate in?",
    answer: "We are a multi-sector company with primary operations in Agro-allied, Healthcare, Travels & Tourism, Contracting & General Merchandising, and Recharge Card Printing & Data Subscription services.",
  },
  {
    question: "How can I partner with your Agro-allied division?",
    answer: "We welcome partnerships in farming, processing, and distribution. Please contact our business development team through our contact page with your proposal, and we will get back to you to discuss potential collaborations.",
  },
  {
    question: "Do you offer international travel and tour packages?",
    answer: "Yes, our Travels & Tourism division provides comprehensive services including international and domestic flight bookings, customized tour packages for individuals and groups, and complete visa assistance.",
  },
  {
    question: "What kind of contracting services do you provide?",
    answer: "Our contracting services cover a wide range, including civil and building construction, government and private procurement, and end-to-end supply chain management solutions.",
  },
  {
    question: "Can I get a quote for bulk recharge card printing?",
    answer: "Absolutely. Please fill out the form on our contact page with your specific requirements, including quantity and denomination, and a representative from our Recharge & Data division will provide you with a competitive quote.",
  },
  {
    question: "How does Right Focus ensure quality in its healthcare supplies?",
    answer: "We partner with certified and reputable manufacturers globally. All our medical supplies and equipment undergo rigorous quality checks to ensure they meet international standards before being distributed.",
  },
];

export default function FaqPage() {
  return (
    <div>
      <section className="bg-primary text-primary-foreground py-16 md:py-20 text-center">
        <AnimatedWrapper>
          <h1 className="text-4xl md:text-6xl font-headline font-bold">Frequently Asked Questions</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-primary-foreground/80">
            Find answers to common questions about our services and operations.
          </p>
        </AnimatedWrapper>
      </section>
      
      <section className="py-12 md:py-16">
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

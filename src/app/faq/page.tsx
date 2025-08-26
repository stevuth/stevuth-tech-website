import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AnimatedWrapper } from "@/components/layout/AnimatedWrapper";

const faqs = [
  {
    question: "What kind of veterinary services do you offer?",
    answer: "We provide a full range of veterinary services, including medical treatments, vaccinations, boarding facilities, farm visitation and consultations, and assistance with pet travel clearance. We also have a training institute for veterinary professionals.",
  },
  {
    question: "What is included in your Human Diagnostic Services?",
    answer: "Our diagnostic services include body weight assessment, blood pressure and blood sugar monitoring, pregnancy tests, and screening for various conditions like malaria, typhoid, infections, and fertility issues.",
  },
  {
    question: "Can you help me with international travel arrangements?",
    answer: "Yes, our Travels & Tours division offers comprehensive services, including flight bookings, visa applications for tourism, work, or study, international passport procurement, and hotel reservations.",
  },
  {
    question: "What types of jobs can I find through your HR & Outsourcing services?",
    answer: "We connect qualified professionals with opportunities in various sectors. This includes farm jobs, security positions, teaching roles, cleaning services, laboratory technicians, and agri-business careers.",
  },
  {
    question: "What cleaning services do you provide?",
    answer: "Our Farm & Home Cleaning division offers professional cleaning for residential, commercial, and agricultural properties. This includes fumigation, pest control, home and office cleaning, laundry services, and bush clearing.",
  },
  {
    question: "Do you offer educational or tutorial services?",
    answer: "Yes, our Tutorial Center provides specialized preparation for a variety of examinations, including WAEC, JAMB, SAT, TOEFL, and IELTS. We also offer an adult night school program.",
  },
];

export default function FaqPage() {
  return (
    <div>
      <section className="bg-primary text-primary-foreground py-10 md:py-12 text-center">
        <AnimatedWrapper>
          <h1 className="text-4xl md:text-5xl font-headline font-bold">Frequently Asked Questions</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-primary-foreground/80">
            Find answers to common questions about our services and operations.
          </p>
        </AnimatedWrapper>
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

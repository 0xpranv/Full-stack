import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data/staticData";

export function Faq() {
  return (
    <section className="">
      <div className="text-center mb-14">
        <h2 className="text-gray-600 text-center font-bold text-3xl w-full mx-auto">
          Frequently Asked Questions
        </h2>
      </div>
      <Accordion type="single" collapsible className="container">
        {faqs.map((faq) => (
          <AccordionItem key={faq.id} value={`item-${faq.id}`}>
            <AccordionTrigger className="text-left">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MotionDiv, FADE_UP_ANIMATION_VARIANTS } from "@/components/motion";

export function FaqSection() {
  return (
    <section className="container py-20 md:py-32">
      <MotionDiv
        variants={FADE_UP_ANIMATION_VARIANTS}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Frequently Asked{" "}
          <span className="inline bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">
            Questions
          </span>
        </h2>
        <p className="text-muted-foreground text-xl mt-4 mb-8 text-center">
          Here are some of the most common questions we get.
        </p>
      </MotionDiv>
      <MotionDiv
        variants={FADE_UP_ANIMATION_VARIANTS}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="w-full md:w-3/4 mx-auto"
      >
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>What documents do I need to rent a car?</AccordionTrigger>
            <AccordionContent>
              You will need a valid driver's license, a national ID or passport, and a valid credit card.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>What are the payment options?</AccordionTrigger>
            <AccordionContent>
              We accept all major credit cards, as well as M-Pesa and bank transfers.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Can I rent a car for a single day?</AccordionTrigger>
            <AccordionContent>
              Yes, you can rent a car for a single day. We also offer discounts for long-term rentals.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Do you offer car delivery services?</AccordionTrigger>
            <AccordionContent>
              Yes, we offer car delivery services within Nairobi and its environs.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </MotionDiv>
    </section>
  );
}
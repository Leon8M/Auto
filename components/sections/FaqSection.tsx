"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MotionDiv, FADE_UP_ANIMATION_VARIANTS } from "@/components/motion";
import { motion } from "framer-motion"; // Import motion for advanced animations

export function FaqSection() {
  return (
    <section id="faq" className="container py-20 md:py-32 bg-gray-950 text-white">
      <MotionDiv
        variants={FADE_UP_ANIMATION_VARIANTS}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Frequently Asked{" "}
          <span className="inline bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text">
            Questions
          </span>
        </h2>
        <p className="text-gray-300 text-xl mt-4 max-w-2xl mx-auto">
          Find answers to the most common questions about AutoJirani&apos;s services.
        </p>
      </MotionDiv>
      <MotionDiv
        variants={FADE_UP_ANIMATION_VARIANTS}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="w-full md:w-3/4 mx-auto"
      >
        <Accordion type="single" collapsible className="space-y-4">
          <motion.div whileHover={{ scale: 1.02, boxShadow: "0px 0px 15px rgba(59, 130, 246, 0.4)", borderColor: "rgba(59, 130, 246, 0.6)" }} transition={{ duration: 0.3 }}>
            <AccordionItem value="item-1" className="bg-background/50 backdrop-filter backdrop-blur-lg shadow-xl border border-border/20 transition-colors duration-300 rounded-lg"> {/* Removed hover:border-blue-400 */}
              <AccordionTrigger className="text-lg font-semibold text-white hover:text-green-400 px-6 py-4">What documents do I need to rent a car?</AccordionTrigger>
              <AccordionContent className="text-gray-300 px-6 pb-4">
                You will need a valid driver&apos;s license, a national ID or passport, and a valid credit card.
              </AccordionContent>
            </AccordionItem>
          </motion.div>
          <motion.div whileHover={{ scale: 1.02, boxShadow: "0px 0px 15px rgba(59, 130, 246, 0.4)", borderColor: "rgba(59, 130, 246, 0.6)" }} transition={{ duration: 0.3 }}>
            <AccordionItem value="item-2" className="bg-background/50 backdrop-filter backdrop-blur-lg shadow-xl border border-border/20 transition-colors duration-300 rounded-lg">
              <AccordionTrigger className="text-lg font-semibold text-white hover:text-green-400 px-6 py-4">What are the payment options?</AccordionTrigger>
              <AccordionContent className="text-gray-300 px-6 pb-4">
                We accept all major credit cards, as well as M-Pesa and bank transfers.
              </AccordionContent>
            </AccordionItem>
          </motion.div>
          <motion.div whileHover={{ scale: 1.02, boxShadow: "0px 0px 15px rgba(59, 130, 246, 0.4)", borderColor: "rgba(59, 130, 246, 0.6)" }} transition={{ duration: 0.3 }}>
            <AccordionItem value="item-3" className="bg-background/50 backdrop-filter backdrop-blur-lg shadow-xl border border-border/20 transition-colors duration-300 rounded-lg">
              <AccordionTrigger className="text-lg font-semibold text-white hover:text-green-400 px-6 py-4">Can I rent a car for a single day?</AccordionTrigger>
              <AccordionContent className="text-gray-300 px-6 pb-4">
                Yes, you can rent a car for a single day. We also offer discounts for long-term rentals.
              </AccordionContent>
            </AccordionItem>
          </motion.div>
          <motion.div whileHover={{ scale: 1.02, boxShadow: "0px 0px 15px rgba(59, 130, 246, 0.4)", borderColor: "rgba(59, 130, 246, 0.6)" }} transition={{ duration: 0.3 }}>
            <AccordionItem value="item-4" className="bg-background/50 backdrop-filter backdrop-blur-lg shadow-xl border border-border/20 transition-colors duration-300 rounded-lg">
              <AccordionTrigger className="text-lg font-semibold text-white hover:text-green-400 px-6 py-4">Do you offer car delivery services?</AccordionTrigger>
              <AccordionContent className="text-gray-300 px-6 pb-4">
                Yes, we offer car delivery services within Nairobi and its environs.
              </AccordionContent>
            </AccordionItem>
          </motion.div>
        </Accordion>
      </MotionDiv>
    </section>
  );
}
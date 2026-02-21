"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MotionDiv, FADE_UP_ANIMATION_VARIANTS } from "@/components/motion";
import Link from "next/link";
import { MessageCircleMore, Phone } from "lucide-react";
// import { motion } from "framer-motion"; // Removed direct import

export function ContactSection() {
  const whatsappLink = "https://wa.me/254751886007?text=Hi%20AutoJirani%2C%20I%E2%80%99m%20interested%20in%20(service).%20My%20budget%20is%20(budget).";
  const phoneNumber1 = "0729544809";
  const phoneNumber2 = "0781908823";

  return (
    <section id="contact" className="container py-20 md:py-32 bg-gray-950 text-white">
      <MotionDiv
        variants={FADE_UP_ANIMATION_VARIANTS}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid lg:grid-cols-2 gap-16 place-items-center"
      >
        <div className="text-center lg:text-start">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Get In{" "}
            <span className="inline bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text">
              Touch
            </span>
          </h2>
          <p className="text-gray-300 text-xl mt-4 mb-8 max-w-lg lg:max-w-none mx-auto">
            We&apos;d love to hear from you! Reach out to us for inquiries, support, or to discuss your car needs.
          </p>

          {/* Prominent Contact Info */}
          <div className="space-y-4 mt-8">
            <h3 className="text-2xl font-semibold text-white">Direct Contact</h3>
            <MotionDiv whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <div className="flex items-center justify-center lg:justify-start space-x-2">
                <Phone className="h-5 w-5 text-green-400" />
                <a href={`tel:+254${phoneNumber1}`} className="text-lg text-gray-200 hover:text-green-400 transition-colors">{phoneNumber1}</a>
                </div>
            </MotionDiv>
            <MotionDiv whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <div className="flex items-center justify-center lg:justify-start space-x-2">
                <Phone className="h-5 w-5 text-green-400" />
                <a href={`tel:+254${phoneNumber2}`} className="text-lg text-gray-200 hover:text-green-400 transition-colors">{phoneNumber2}</a>
                </div>
            </MotionDiv>
            <Link href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center lg:justify-start space-x-2 text-lg text-gray-200 hover:text-green-400 transition-colors">
              <MotionDiv whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <MessageCircleMore className="h-5 w-5 text-green-400" />
                <span>Chat on WhatsApp</span>
              </MotionDiv>
            </Link>
          </div>
        </div>
        <Card className="bg-background/50 backdrop-filter backdrop-blur-lg shadow-xl border border-border/20 hover:border-blue-400 transition-colors duration-300 w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-white">Send us a Message</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="grid gap-4">
              <Input type="text" placeholder="Name" className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 focus:border-blue-500" />
              <Input type="email" placeholder="Email" className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 focus:border-blue-500" />
              <Textarea placeholder="Message" className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 focus:border-blue-500" />
              <MotionDiv whileHover={{ scale: 1.05, translateY: -5, boxShadow: "0px 10px 20px rgba(34, 197, 94, 0.4)" }} transition={{ duration: 0.3 }}>
                <Button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg text-lg">Send Message</Button>
              </MotionDiv>
            </form>
          </CardContent>
        </Card>
      </MotionDiv>
    </section>
  );
}
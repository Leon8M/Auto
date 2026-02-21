"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MotionDiv, MotionH1, MotionP, FADE_UP_ANIMATION_VARIANTS } from "@/components/motion";
import { CarIcon, ShieldCheck, Zap, Handshake, DollarSign, MessageCircleMore } from "lucide-react";

export function HeroSection() {
  const whatsappLink = "https://wa.me/254751886007?text=Hi%20AutoJirani%2C%20I%E2%80%99m%20interested%20in%20(service).%20My%20budget%20is%20(budget).";

  return (
    <section className="relative overflow-hidden pt-12 md:pt-32 pb-20 md:pb-32 bg-gradient-to-br from-blue-950 via-gray-950 to-green-950 text-white">
      {/* Background glow/blur effect */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>


      <div className="container relative z-10 grid lg:grid-cols-2 place-items-center gap-12 md:gap-10">
        
        {/* Mobile Visual (Visible only on mobile/tablet, positioned first in DOM flow for mobile grid) */}
        <MotionDiv
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative lg:hidden flex items-center justify-center h-[250px] w-full"
        >
          <div className="absolute inset-0 flex items-center justify-center scale-75">
            <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-600 to-green-600 opacity-60 animate-pulse-slow"></div>
            <div className="absolute w-60 h-60 rounded-full bg-gradient-to-tr from-blue-400 to-green-400 opacity-70 animate-pulse-fast"></div>
            <CarIcon className="absolute h-32 w-32 text-white opacity-80" />
          </div>
        </MotionDiv>

        <div className="text-center lg:text-start space-y-8 lg:pr-8">
          <MotionH1
            variants={FADE_UP_ANIMATION_VARIANTS}
            initial="hidden"
            animate="show"
            className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tighter mx-auto lg:mx-0 max-w-2xl lg:max-w-none"
          >
            <span className="inline bg-gradient-to-r from-blue-400 to-green-400 text-transparent bg-clip-text">
              Drive Your Dream
            </span>{" "}
            Car with <br /> AutoJirani
          </MotionH1>

          <MotionP
            variants={FADE_UP_ANIMATION_VARIANTS}
            initial="hidden"
            animate="show"
            className="text-xl text-gray-300 md:w-10/12 mx-auto lg:mx-0 max-w-xl"
          >
            Your premier partner for seamless car sourcing, flexible rentals, and tailored financing solutions in Kenya. Experience quality, trust, and unparalleled service.
          </MotionP>

          {/* Quick Trust Highlights */}
          <MotionDiv
            variants={FADE_UP_ANIMATION_VARIANTS}
            initial="hidden"
            animate="show"
            className="flex flex-wrap justify-center lg:justify-start gap-4 mt-6 mx-auto lg:mx-0 max-w-xl"
          >
            <span className="flex items-center gap-2 text-sm text-gray-200"><Zap className="h-4 w-4 text-green-400" /> Fast Sourcing</span>
            <span className="flex items-center gap-2 text-sm text-gray-200"><ShieldCheck className="h-4 w-4 text-blue-400" /> Verified Options</span>
            <span className="flex items-center gap-2 text-sm text-gray-200"><Handshake className="h-4 w-4 text-green-400" /> Flexible Rentals</span>
            <span className="flex items-center gap-2 text-sm text-gray-200"><DollarSign className="h-4 w-4 text-blue-400" /> Financing up to 50%</span>
          </MotionDiv>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-8 mx-auto lg:mx-0 max-w-xl">
            <MotionDiv 
              whileHover={{ scale: 1.05, translateY: -5, boxShadow: "0px 10px 20px rgba(34, 197, 94, 0.3)" }} 
              transition={{ duration: 0.3 }}
              className="rounded-lg"
            >
              <Button asChild className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg text-lg w-full sm:w-auto">
                <Link href="/services/hire">
                  Rent a Car
                </Link>
              </Button>
            </MotionDiv>
            <MotionDiv 
              whileHover={{ scale: 1.05, translateY: -5, boxShadow: "0px 10px 20px rgba(59, 130, 246, 0.3)" }} 
              transition={{ duration: 0.3 }}
              className="rounded-lg"
            >
              <Button variant="outline" asChild className="border-blue-500 text-blue-300 hover:bg-blue-900 hover:text-white font-semibold py-3 px-6 rounded-lg text-lg w-full sm:w-auto">
                <Link href="/services/sourcing">
                  Source a Car
                </Link>
              </Button>
            </MotionDiv>
            <Link href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <MotionDiv 
                whileHover={{ scale: 1.05, translateY: -5, boxShadow: "0px 10px 20px rgba(34, 197, 94, 0.3)" }} 
                transition={{ duration: 0.3 }}
                className="rounded-lg"
              >
                <Button variant="outline" className="border-green-500 text-green-300 hover:bg-green-900 hover:text-white font-semibold py-3 px-6 rounded-lg text-lg flex items-center gap-2 w-full">
                  <MessageCircleMore className="h-5 w-5" /> WhatsApp
                </Button>
              </MotionDiv>
            </Link>
          </div>
        </div>

        {/* Desktop Visual (Visible only on LG+) */}
        <MotionDiv
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="relative hidden lg:flex items-center justify-center h-[400px] w-full"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-600 to-green-600 opacity-60 animate-pulse-slow"></div>
            <div className="absolute w-60 h-60 rounded-full bg-gradient-to-tr from-blue-400 to-green-400 opacity-70 animate-pulse-fast"></div>
            <CarIcon className="absolute h-40 w-40 text-white opacity-80" />
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}

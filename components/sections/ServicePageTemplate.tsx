"use client";

import { MotionDiv, FADE_UP_ANIMATION_VARIANTS } from "@/components/motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MessageCircleMore, Phone, CarIcon } from "lucide-react";

interface ServicePageTemplateProps {
  title: string;
  tagline: string;
  description: string;
  heroIcon?: React.ElementType; // New prop for the abstract hero visual
  features: { icon: React.ElementType; text: string }[];
  ctaText: string;
  ctaLink: string;
}

export function ServicePageTemplate({
  title,
  tagline,
  description,
  heroIcon: HeroIcon = CarIcon, // Default to CarIcon if not provided
  features,
  ctaText,
  ctaLink,
}: ServicePageTemplateProps) {
  const whatsappLink = "https://wa.me/254751886007?text=Hi%20AutoJirani%2C%20I%E2%80%99m%20interested%20in%20(service).%20My%20budget%20is%20(budget).";
  const phoneNumber1 = "0729544809";

  return (
    <section className="relative overflow-hidden py-24 md:py-32 bg-gray-950 text-white">
      {/* Background glow/blur effect - matching Hero style */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 place-items-center gap-16 mb-24">
          <div className="text-center lg:text-start space-y-8">
            <MotionDiv
              variants={FADE_UP_ANIMATION_VARIANTS}
              initial="hidden"
              animate="show"
            >
              <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-tight">
                <span className="inline bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 text-transparent bg-clip-text">
                  {title}
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 font-medium mt-4">{tagline}</p>
              <p className="text-lg text-gray-400 leading-relaxed max-w-xl mt-4">{description}</p>
            </MotionDiv>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-5 mt-10">
              <MotionDiv 
                whileHover={{ scale: 1.05, y: -5 }} 
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="rounded-xl"
              >
                <Button asChild className="bg-green-500 hover:bg-green-600 text-white font-bold py-6 px-8 rounded-xl text-lg w-full sm:w-auto shadow-lg shadow-green-500/20">
                  <Link href={ctaLink}>
                    {ctaText}
                  </Link>
                </Button>
              </MotionDiv>
              <Link href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <MotionDiv 
                  whileHover={{ scale: 1.05, y: -5 }} 
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="rounded-xl"
                >
                  <Button variant="outline" className="border-white/10 bg-white/5 hover:bg-white/10 text-white font-bold py-6 px-8 rounded-xl text-lg flex items-center gap-3 w-full backdrop-blur-sm transition-all shadow-lg">
                    <MessageCircleMore className="h-6 w-6 text-green-400" /> WhatsApp
                  </Button>
                </MotionDiv>
              </Link>
            </div>
          </div>

          {/* Abstract Visual Design - matching Hero exactly */}
          <MotionDiv
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:flex items-center justify-center h-[500px] w-full"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-600 to-green-600 opacity-60 animate-pulse-slow"></div>
              <div className="absolute w-60 h-60 rounded-full bg-gradient-to-tr from-blue-400 to-green-400 opacity-70 animate-pulse-fast"></div>
              <HeroIcon className="absolute h-40 w-40 text-white opacity-80" />
            </div>
          </MotionDiv>
        </div>

        {/* Features Section */}
        <div className="py-16">
          <MotionDiv
            variants={FADE_UP_ANIMATION_VARIANTS}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">
              Premium{" "}
              <span className="inline bg-gradient-to-r from-blue-400 to-green-400 text-transparent bg-clip-text">
                Benefits
              </span>
            </h2>
          </MotionDiv>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <MotionDiv
                key={index}
                variants={FADE_UP_ANIMATION_VARIANTS}
                whileHover={{
                  y: -10,
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                  borderColor: "rgba(255, 255, 255, 0.2)",
                }}
                className="group flex flex-col items-center text-center p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/5 transition-all duration-500"
              >
                <div className="mb-6 p-4 rounded-2xl bg-gradient-to-br from-blue-500/20 to-green-500/20 group-hover:scale-110 transition-transform duration-500">
                  <feature.icon className="h-10 w-10 text-green-400" />
                </div>
                <p className="text-xl font-bold text-gray-200 leading-tight">{feature.text}</p>
              </MotionDiv>
            ))}
          </div>
        </div>

        {/* CTA Footer */}
        <div className="py-24 text-center">
          <MotionDiv
               variants={FADE_UP_ANIMATION_VARIANTS}
               initial="hidden"
               whileInView="show"
               viewport={{ once: true }}
               className="bg-gradient-to-b from-white/5 to-transparent p-12 md:p-24 rounded-[3rem] md:rounded-[4rem] border border-white/5"
          >
              <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-8">Ready to get started?</h2>
              <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto font-medium">
              Contact us today to experience the premium {title} service by AutoJirani.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MotionDiv whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }} className="rounded-xl">
                    <Button className="bg-green-500 hover:bg-green-600 text-white font-black py-8 px-10 rounded-xl text-xl shadow-2xl shadow-green-500/30 flex items-center gap-3">
                        <MessageCircleMore className="h-7 w-7" /> WhatsApp
                    </Button>
                  </MotionDiv>
                </Link>
                <a href={`tel:+254${phoneNumber1}`}>
                  <MotionDiv whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }} className="rounded-xl">
                    <Button variant="outline" className="border-white/10 bg-white/5 hover:bg-white/10 text-white font-black py-8 px-10 rounded-xl text-xl backdrop-blur-sm flex items-center gap-3">
                        <Phone className="h-7 w-7 text-blue-400" /> Call Us
                    </Button>
                  </MotionDiv>
                </a>
              </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}

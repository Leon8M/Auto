"use client";

import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Car, Search, DollarSign, Plane, HandCoins, ArrowRight } from "lucide-react";
import { MotionDiv, FADE_UP_ANIMATION_VARIANTS } from "@/components/motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

const servicesData = [
  {
    title: "Car Sourcing",
    description: "We find the best cars for you, at the best prices. We have a wide range of cars to choose from through our global network of verified dealers.",
    icon: Search,
    href: "/services/sourcing",
    color: "from-blue-500 to-cyan-500",
    glow: "group-hover:shadow-blue-500/20",
    className: "lg:col-span-2 lg:row-span-1",
  },
  {
    title: "Car Hire",
    description: "Rent a car from our wide selection. Flexible rental plans for daily, weekly, or monthly needs.",
    icon: Car,
    href: "/services/hire",
    color: "from-emerald-500 to-green-500",
    glow: "group-hover:shadow-emerald-500/20",
    className: "lg:col-span-1 lg:row-span-1",
  },
  {
    title: "Car Financing",
    description: "Get on the road sooner with up to 50% financing. We offer competitive rates and flexible repayment terms tailored to your financial situation.",
    icon: DollarSign,
    href: "/services/financing",
    color: "from-orange-500 to-amber-500",
    glow: "group-hover:shadow-orange-500/20",
    className: "lg:col-span-1 lg:row-span-2",
  },
  {
    title: "Import Services",
    description: "Seamless and efficient car import services. We handle all logistics, from sourcing abroad to clearing and delivery at your doorstep.",
    icon: Plane,
    href: "/services/import",
    color: "from-purple-500 to-indigo-500",
    glow: "group-hover:shadow-purple-500/20",
    className: "lg:col-span-1 lg:row-span-1",
  },
  {
    title: "Second-hand Cars",
    description: "Find quality pre-owned cars to fit your budget. Every vehicle undergoes a rigorous 100-point inspection for your peace of mind.",
    icon: HandCoins,
    href: "/services/second-hand",
    color: "from-rose-500 to-red-500",
    glow: "group-hover:shadow-rose-500/20",
    className: "lg:col-span-1 lg:row-span-1",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="relative py-24 md:py-40 overflow-hidden bg-gray-950">
      {/* Enhanced Background Ambiance */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-blue-600/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] bg-green-600/10 rounded-full blur-[120px] animate-pulse" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20 md:mb-32">
          <MotionDiv
            variants={FADE_UP_ANIMATION_VARIANTS}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-8">
              Our{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 text-transparent bg-clip-text">
                Premium Services
              </span>
            </h2>
            <p className="text-gray-400 text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto">
              Elevating your automotive experience through expert sourcing, flexible financing, and world-class logistics.
            </p>
          </MotionDiv>
        </div>

        {/* Increased auto-rows height to prevent cutoff */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:auto-rows-[380px]">
          {servicesData.map((service, index) => (
            <MotionDiv
              key={service.title}
              variants={FADE_UP_ANIMATION_VARIANTS}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                "group relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-white/[0.03] p-10 transition-all duration-500 hover:bg-white/[0.08] hover:border-white/20 hover:shadow-2xl",
                service.glow,
                service.className
              )}
            >
              <Link href={service.href} className="absolute inset-0 z-30" />
              
              <div className="relative z-20 flex flex-col h-full">
                <div className={cn(
                  "mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3",
                  service.color
                )}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-3xl font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="p-0">
                  <p className="text-gray-400 text-lg leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {service.description}
                  </p>
                </CardContent>

                <div className="mt-auto pt-8">
                  <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-blue-400 group-hover:text-cyan-400 transition-colors">
                    <span>Explore Service</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
                  </div>
                </div>
              </div>

              {/* Sophisticated Inner Gradient Reveal */}
              <div className={cn(
                "absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 bg-gradient-to-tr",
                service.color.replace('from-', 'bg-').replace('to-', 'bg-')
              )} />
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}

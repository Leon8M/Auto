"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MotionDiv, FADE_UP_ANIMATION_VARIANTS } from "@/components/motion";
import Link from "next/link";
import Image from "next/image";

const featuredVehiclesData = [
  {
    name: "Toyota Land Cruiser Prado",
    image: "/images/featured%20cars/car.jpeg",
    badges: ["Luxury SUV", "4x4", "Diesel"],
    description: "The ultimate 4x4 for Kenyan roads. Rugged, comfortable, and reliable. Available for hire at best market prices.",
    href: "/services/hire",
  },
  {
    name: "Commercial Transport Truck",
    image: "/images/featured%20cars/truck.jpeg",
    badges: ["Heavy Duty", "Logistics", "Manual"],
    description: "Reliable commercial trucks for your business needs. We source high-quality imports tailored to your specific budget.",
    href: "/services/import",
  },
  {
    name: "Commuter & Luxury Bus",
    image: "/images/featured%20cars/bus.jpeg",
    badges: ["High Capacity", "Diesel", "Professional"],
    description: "Spacious and well-maintained buses. Perfect for group travel or corporate needs. Best prices guaranteed.",
    href: "/services/hire",
  },
];

export function FeaturedVehiclesSection() {
  return (
    <section id="featured-vehicles" className="container py-20 md:py-32 bg-gray-950 text-white">
      <MotionDiv
        variants={FADE_UP_ANIMATION_VARIANTS}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Our{" "}
          <span className="inline bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text">
            Featured Inventory
          </span>
        </h2>
        <p className="text-gray-300 text-xl mt-4 max-w-2xl mx-auto">
          Explore a selection of high-quality vehicles available for hire starting at just 4,000/- a day or through our expert sourcing.
        </p>
      </MotionDiv>
      
      <MotionDiv
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          show: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {featuredVehiclesData.map((vehicle, index) => (
          <MotionDiv key={index} variants={FADE_UP_ANIMATION_VARIANTS} whileHover={{ scale: 1.05 }}>
            <Card className="bg-background/50 backdrop-filter backdrop-blur-lg shadow-xl border border-border/20 hover:border-green-400 transition-all duration-300 flex flex-col h-full rounded-[2rem] overflow-hidden">
              <Link href={vehicle.href} className="absolute inset-0 z-10"></Link>
              <CardHeader className="p-0">
                <div className="relative w-full h-64">
                  <Image 
                    src={vehicle.image} 
                    alt={vehicle.name} 
                    fill
                    className="object-cover" 
                  /> 
                </div>
                <CardTitle className="mt-6 px-6 text-2xl font-bold text-white leading-tight">
                  {vehicle.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="px-6 pb-8 pt-2 flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {vehicle.badges.map((badge, badgeIndex) => (
                    <Badge key={badgeIndex} className="bg-blue-600/30 text-blue-200 border-blue-500">
                      {badge}
                    </Badge>
                  ))}
                </div>
                <p className="text-gray-300 text-base leading-relaxed">
                  {vehicle.description}
                </p>
              </CardContent>
            </Card>
          </MotionDiv>
        ))}
      </MotionDiv>
    </section>
  );
}

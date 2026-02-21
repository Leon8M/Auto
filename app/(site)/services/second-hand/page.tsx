"use client";

import { ServicePageTemplate } from "@/components/sections/ServicePageTemplate";
import { Car, ShieldCheck, Tag, Sparkles } from "lucide-react";

export default function SecondHandCarsPage() {
  return (
    <ServicePageTemplate
      title="Second-hand Cars"
      tagline="Quality Pre-Owned Vehicles to Fit Your Budget"
      description="Discover a curated selection of high-quality second-hand cars that have undergone rigorous inspections. Find reliable and affordable options tailored to your client budget."
      heroIcon={Sparkles}
      features={[
        { icon: ShieldCheck, text: "Rigorous 100+ Point Inspection" },
        { icon: Car, text: "Wide Range of Makes & Models" },
        { icon: Tag, text: "Competitive & Transparent Pricing" },
        { icon: Sparkles, text: "Excellent Value for Money" },
      ]}
      ctaText="Browse Second-hand Cars"
      ctaLink="https://wa.me/254751886007?text=Hi%20AutoJirani%2C%20I%E2%80%99m%20interested%20in%20Second-hand%20Cars.%20My%20budget%20is%20(budget)."
    />
  );
}

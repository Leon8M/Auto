"use client";

import { ServicePageTemplate } from "@/components/sections/ServicePageTemplate";
import { Car, Calendar, Gauge, KeyRound, Banknote } from "lucide-react";

export default function CarHirePage() {
  return (
    <ServicePageTemplate
      title="Car Hire"
      tagline="Premium Fleet, Unbeatable Rates"
      description="Whether for business, leisure, or special occasions, AutoJirani offers a diverse fleet of well-maintained vehicles for hire. Enjoy flexible rental periods and the best prices in Kenya."
      heroIcon={KeyRound}
      features={[
        { icon: Banknote, text: "Affordable Rates from 4,000/- a Day" },
        { icon: Car, text: "Wide Range of Luxury & Utility Vehicles" },
        { icon: Calendar, text: "Flexible Rental Durations" },
        { icon: Gauge, text: "Well-Maintained & Fully Insured Fleet" },
      ]}
      ctaText="Book at 4,000/- per Day"
      ctaLink="https://wa.me/254751886007?text=Hi%20AutoJirani%2C%20I%E2%80%99m%20interested%20in%20Car%20Hire%20at%204000%20a%20day."
    />
  );
}

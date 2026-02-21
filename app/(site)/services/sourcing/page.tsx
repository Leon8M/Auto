"use client";

import { ServicePageTemplate } from "@/components/sections/ServicePageTemplate";
import { Search, Car, Handshake, DollarSign } from "lucide-react";

export default function CarSourcingPage() {
  return (
    <ServicePageTemplate
      title="Car Sourcing"
      tagline="Find Your Dream Car with Ease"
      description="Leverage our expertise and extensive network to source the perfect vehicle tailored to your specifications and budget. We handle everything from market research to inspection and delivery."
      heroIcon={Search}
      features={[
        { icon: Search, text: "Extensive Market Search" },
        { icon: Car, text: "Thorough Vehicle Inspection" },
        { icon: Handshake, text: "Negotiation & Best Price Guarantee" },
        { icon: DollarSign, text: "Transparent Pricing & No Hidden Fees" },
      ]}
      ctaText="Request Car Sourcing"
      ctaLink="https://wa.me/254751886007?text=Hi%20AutoJirani%2C%20I%E2%80%99m%20interested%20in%20Car%20Sourcing.%20My%20budget%20is%20(budget)."
    />
  );
}

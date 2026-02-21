"use client";

import { ServicePageTemplate } from "@/components/sections/ServicePageTemplate";
import { DollarSign, Percent, Banknote, Handshake } from "lucide-react";

export default function CarFinancingPage() {
  return (
    <ServicePageTemplate
      title="Car Financing"
      tagline="Flexible Financing, Your Terms"
      description="Unlock your dream car with our flexible financing options. We offer solutions to finance up to 50% of your vehicle's value or your budget, with tailored plans to suit your financial needs."
      heroIcon={Percent}
      features={[
        { icon: Percent, text: "Finance Up To 50% of Your Budget" },
        { icon: Banknote, text: "Best Market Interest Rates" },
        { icon: Handshake, text: "Tailored Repayment Plans" },
        { icon: DollarSign, text: "Quick Approval & Best Prices" },
      ]}
      ctaText="Finance 50% of Budget"
      ctaLink="https://wa.me/254751886007?text=Hi%20AutoJirani%2C%20I%E2%80%99m%20interested%20in%20Car%20Financing%20for%2050%25%20of%20my%20budget."
    />
  );
}

"use client";

import { ServicePageTemplate } from "@/components/sections/ServicePageTemplate";
import { Plane, Earth, Package, FileText, BadgeDollarSign } from "lucide-react";

export default function ImportServicesPage() {
  return (
    <ServicePageTemplate
      title="Import Services"
      tagline="Global Sourcing, Local Expertise"
      description="Experience hassle-free vehicle importation. We management all logistics and customs to deliver your car directly to you, with costs tailored to your specific budget and the best prices guaranteed."
      heroIcon={Plane}
      features={[
        { icon: BadgeDollarSign, text: "Costs Dependent on Your Budget" },
        { icon: Earth, text: "Worldwide Sourcing & Best Prices" },
        { icon: Package, text: "Full Logistics & Shipping Management" },
        { icon: FileText, text: "Swift Customs & Documentation Handling" },
      ]}
      ctaText="Import Within Your Budget"
      ctaLink="https://wa.me/254751886007?text=Hi%20AutoJirani%2C%20I%E2%80%99m%20interested%20in%20Import%20Services%20within%20my%20budget."
    />
  );
}

import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { FeaturedVehiclesSection } from "@/components/sections/FeaturedVehiclesSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <FeaturedVehiclesSection />
      <HowItWorksSection />
      <FaqSection />
      <ContactSection />
    </>
  );
}

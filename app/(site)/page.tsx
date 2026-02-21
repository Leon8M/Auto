import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { FeaturedVehiclesSection } from "@/components/sections/FeaturedVehiclesSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection"; // Import the new section
import { FaqSection } from "@/components/sections/FaqSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      {/* FeaturedVehiclesSection can remain or be removed/repurposed if it clashes with the new service sections */}
      <FeaturedVehiclesSection />
      <HowItWorksSection />
      <TestimonialsSection /> {/* Add the new TestimonialsSection */}
      <FaqSection />
      <ContactSection />
    </>
  );
}

"use client";

import { MotionDiv, FADE_UP_ANIMATION_VARIANTS } from "@/components/motion";
import { SearchCheck, CarFront, KeyRound } from "lucide-react"; // New icons
import { motion } from "framer-motion"; // Import motion for advanced animations

const howItWorksSteps = [
  {
    icon: SearchCheck,
    title: "Find Your Perfect Car",
    description: "Explore our diverse inventory or leverage our expert sourcing to find the ideal car that fits your needs and budget.",
  },
  {
    icon: CarFront,
    title: "Seamless Acquisition",
    description: "Whether it's a rental, purchase, or import, we streamline the process with flexible financing and efficient logistics.",
  },
  {
    icon: KeyRound,
    title: "Drive with Confidence",
    description: "Enjoy your new ride with peace of mind. We ensure quality, reliability, and support every step of the way.",
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="container py-20 md:py-32 bg-gray-950 text-white"> {/* Added background and text color */}
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
            Simple Process
          </span>
        </h2>
        <p className="text-gray-300 text-xl mt-4 max-w-2xl mx-auto">
          Getting your dream car or reliable service with AutoJirani is easy. Here’s how it works:
        </p>
      </MotionDiv>

      <MotionDiv
        variants={FADE_UP_ANIMATION_VARIANTS}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-8"
      >
        {howItWorksSteps.map((step, index) => (
          <motion.div
            key={index}
            whileHover={{
              scale: 1.05,
              translateY: -5, // Lift effect
              boxShadow: "0px 10px 20px rgba(59, 130, 246, 0.4)", // Blue tint shadow
              borderColor: "rgba(59, 130, 246, 0.6)", // Blue tint border
              transition: { duration: 0.3 }
            }}
            className="group flex flex-col items-center text-center p-6 rounded-lg bg-background/50 backdrop-filter backdrop-blur-lg shadow-xl border border-border/20 transition-all duration-300" // Added group class
          >
            <div className="w-20 h-20 bg-blue-500/10 text-blue-500 rounded-full flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-blue-500 group-hover:text-white">
              <step.icon className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold mt-4 mb-2 text-white"> {/* text-white */}
              {step.title}
            </h3>
            <p className="text-gray-300 text-base"> {/* text-gray-300 */}
              {step.description}
            </p>
          </motion.div>
        ))}
      </MotionDiv>
    </section>
  );
}
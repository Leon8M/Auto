"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MotionDiv, FADE_UP_ANIMATION_VARIANTS } from "@/components/motion";

const testimonialsData = [
  {
    name: "John Doe",
    title: "Happy Customer",
    avatar: "/images/avatars/avatar-1.png", // Placeholder avatar
    quote: "AutoJirani made finding my dream car incredibly easy. The financing options were flexible, and their service was top-notch!",
  },
  {
    name: "Jane Smith",
    title: "Rental Client",
    avatar: "/images/avatars/avatar-2.png", // Placeholder avatar
    quote: "Renting a car for my business trip was seamless. Excellent selection and very professional staff. Highly recommend!",
  },
  {
    name: "Peter Jones",
    title: "Import Service User",
    avatar: "/images/avatars/avatar-3.png", // Placeholder avatar
    quote: "I used AutoJirani for importing my vehicle, and they handled everything. Smooth process from start to finish. Fantastic service!",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="container py-20 md:py-32 bg-gray-950 text-white"> {/* Added background and text color */}
      <MotionDiv
        variants={FADE_UP_ANIMATION_VARIANTS}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
          What Our{" "}
          <span className="inline bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text">
            Clients Say
          </span>
        </h2>
        <p className="text-gray-300 text-xl mt-4 max-w-2xl mx-auto">
          Hear from our satisfied customers about their AutoJirani experience.
        </p>
      </MotionDiv>

      <MotionDiv
        variants={FADE_UP_ANIMATION_VARIANTS}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-8"
      >
        {testimonialsData.map((testimonial, index) => (
          <MotionDiv
            key={index}
            whileHover={{
              scale: 1.05,
              translateY: -5, // Lift effect
              boxShadow: "0px 10px 20px rgba(59, 130, 246, 0.4)", // Blue tint shadow
              borderColor: "rgba(59, 130, 246, 0.6)", // Blue tint border
              transition: { duration: 0.3 }
            }}
          >
            <Card
              className="bg-background/50 backdrop-filter backdrop-blur-lg shadow-xl border border-border/20 transition-all duration-300 h-full" // Removed hover:border-green-400, added h-full
            >
              <CardHeader className="flex flex-row items-center gap-4">
                <Avatar>
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-lg font-semibold text-white">{testimonial.name}</h3> {/* text-white */}
                  <p className="text-sm text-gray-400">{testimonial.title}</p> {/* text-gray-400 */}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-base text-gray-300">&quot;{testimonial.quote}&quot;</p>
              </CardContent>
            </Card>
          </MotionDiv>
        ))}
      </MotionDiv>
    </section>
  );
}
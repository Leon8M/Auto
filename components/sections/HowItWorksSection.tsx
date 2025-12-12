import { MotionDiv, FADE_UP_ANIMATION_VARIANTS } from "@/components/motion";

export function HowItWorksSection() {
  return (
    <section className="container py-20 md:py-32">
      <MotionDiv
        variants={FADE_UP_ANIMATION_VARIANTS}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          How It{" "}
          <span className="inline bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">
            Works
          </span>
        </h2>
        <p className="text-muted-foreground text-xl mt-4 mb-8 text-center">
          Our process is simple and straightforward.
        </p>
      </MotionDiv>
      <MotionDiv
        variants={FADE_UP_ANIMATION_VARIANTS}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-8"
      >
        <div className="text-center">
          <div className="w-24 h-24 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto text-4xl font-bold">
            1
          </div>
          <h3 className="text-2xl font-bold mt-4">Choose a Car</h3>
          <p className="text-muted-foreground mt-2">
            Browse our selection of cars and choose the one that best suits your needs.
          </p>
        </div>
        <div className="text-center">
          <div className="w-24 h-24 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto text-4xl font-bold">
            2
          </div>
          <h3 className="text-2xl font-bold mt-4">Book a Car</h3>
          <p className="text-muted-foreground mt-2">
            Book your car online and we will deliver it to your doorstep.
          </p>
        </div>
        <div className="text-center">
          <div className="w-24 h-24 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto text-4xl font-bold">
            3
          </div>
          <h3 className="text-2xl font-bold mt-4">Enjoy Your Ride</h3>
          <p className="text-muted-foreground mt-2">
            Enjoy your ride and return the car at the end of your rental period.
          </p>
        </div>
      </MotionDiv>
    </section>
  );
}
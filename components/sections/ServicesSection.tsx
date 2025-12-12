import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Car, Search } from "lucide-react";
import { MotionDiv, FADE_UP_ANIMATION_VARIANTS } from "@/components/motion";

export function ServicesSection() {
  return (
    <section className="container py-20 md:py-32">
      <MotionDiv
        variants={FADE_UP_ANIMATION_VARIANTS}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid lg:grid-cols-2 gap-8 place-items-center"
      >
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Our{" "}
            <span className="inline bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">
              Services
            </span>
          </h2>
          <p className="text-muted-foreground text-xl mt-4 mb-8">
            We offer a wide range of services to our clients.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="w-8 h-8 text-primary" />
                Car Sourcing
              </CardTitle>
            </CardHeader>
            <CardContent>
              We find the best cars for you, at the best prices. We have a wide range of cars to choose from.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Car className="w-8 h-8 text-primary" />
                Car Rental
              </CardTitle>
            </CardHeader>
            <CardContent>
              Rent a car from our wide selection of vehicles. We offer flexible rental plans to suit your needs.
            </CardContent>
          </Card>
        </div>
      </MotionDiv>
    </section>
  );
}
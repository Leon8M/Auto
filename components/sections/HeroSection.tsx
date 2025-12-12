import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MotionDiv, MotionH1, MotionP, FADE_UP_ANIMATION_VARIANTS } from "@/components/motion";
import { Car, CarIcon, Wrench } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function HeroSection() {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <MotionH1
          variants={FADE_UP_ANIMATION_VARIANTS}
          initial="hidden"
          animate="show"
          className="text-5xl md:text-6xl font-bold"
        >
          <span className="inline bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">
            AutoJirani
          </span>{" "}
          your trusted partner for{" "}
          <span className="inline bg-gradient-to-r from-accent to-primary text-transparent bg-clip-text">
            car sourcing
          </span>{" "}
          and rentals
        </MotionH1>

        <MotionP
          variants={FADE_UP_ANIMATION_VARIANTS}
          initial="hidden"
          animate="show"
          className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0"
        >
          We are a Kenyan-centric car sourcing and car rental service. We provide the best cars for our clients.
        </MotionP>

        <MotionDiv
          variants={FADE_UP_ANIMATION_VARIANTS}
          initial="hidden"
          animate="show"
          className="space-y-4 md:space-y-0 md:space-x-4"
        >
          <Button className="w-full md:w-1/3" asChild>
            <Link href="/rental">
              Rent a Car
            </Link>
          </Button>
          <Button variant="outline" className="w-full md:w-1/3" asChild>
            <Link href="/sourcing">
              Source a Car
            </Link>
          </Button>
        </MotionDiv>
      </div>

      {/* Hero cards */}
      <MotionDiv
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          show: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
        className="z-10"
      >
        <div className="hidden lg:flex flex-col gap-8">
            <div className="flex justify-center gap-8">
                <MotionDiv variants={FADE_UP_ANIMATION_VARIANTS} whileHover={{ scale: 1.05 }}>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                      <CardTitle className="text-sm font-medium">
                        Car Sourcing
                      </CardTitle>
                      <CarIcon className="w-4 h-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">Find your dream car</div>
                    </CardContent>
                  </Card>
                </MotionDiv>
                <MotionDiv variants={FADE_UP_ANIMATION_VARIANTS} whileHover={{ scale: 1.05 }}>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                      <CardTitle className="text-sm font-medium">
                        Car Rental
                      </CardTitle>
                      <Car className="w-4 h-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">Rent a car for any occasion</div>
                    </CardContent>
                  </Card>
                </MotionDiv>
            </div>
            <div className="flex justify-center gap-8">
                <MotionDiv variants={FADE_UP_ANIMATION_VARIANTS} whileHover={{ scale: 1.05 }}>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                      <CardTitle className="text-sm font-medium">
                        Car Maintenance
                      </CardTitle>
                      <Wrench className="w-4 h-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">Keep your car in top condition</div>
                    </CardContent>
                  </Card>
                </MotionDiv>
            </div>
        </div>
      </MotionDiv>

      {/* Shadow effect */}
      <div className="shadow-effect"></div>
    </section>
  );
}
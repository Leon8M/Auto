import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MotionDiv, FADE_UP_ANIMATION_VARIANTS } from "@/components/motion";

export function FeaturedVehiclesSection() {
  return (
    <section className="container py-20 md:py-32">
      <MotionDiv
        variants={FADE_UP_ANIMATION_VARIANTS}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Featured{" "}
          <span className="inline bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">
            Vehicles
          </span>
        </h2>
        <p className="text-muted-foreground text-xl mt-4 mb-8 text-center">
          Check out some of the cars we have in our fleet.
        </p>
      </MotionDiv>
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
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <MotionDiv variants={FADE_UP_ANIMATION_VARIANTS} whileHover={{ scale: 1.05 }}>
          <Card>
            <CardHeader>
              <img src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="car" className="rounded-t-lg" />
              <CardTitle className="mt-4">Toyota Axio</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2">
                <Badge>4 Seater</Badge>
                <Badge>Automatic</Badge>
                <Badge>Petrol</Badge>
              </div>
              <p className="mt-4">
                The Toyota Axio is a reliable and fuel-efficient sedan, perfect for city driving and long trips.
              </p>
            </CardContent>
          </Card>
        </MotionDiv>
        <MotionDiv variants={FADE_UP_ANIMATION_VARIANTS} whileHover={{ scale: 1.05 }}>
          <Card>
            <CardHeader>
              <img src="https://images.unsplash.com/photo-1514316454348-772a1a899b17?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="car" className="rounded-t-lg" />
              <CardTitle className="mt-4">Nissan X-Trail</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2">
                <Badge>5 Seater</Badge>
                <Badge>Automatic</Badge>
                <Badge>Petrol</Badge>
              </div>
              <p className="mt-4">
                The Nissan X-Trail is a spacious and comfortable SUV, ideal for family outings and off-road adventures.
              </p>
            </CardContent>
          </Card>
        </MotionDiv>
        <MotionDiv variants={FADE_UP_ANIMATION_VARIANTS} whileHover={{ scale: 1.05 }}>
          <Card>
            <CardHeader>
              <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="car" className="rounded-t-lg" />
              <CardTitle className="mt-4">Subaru Impreza</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2">
                <Badge>5 Seater</Badge>
                <Badge>Automatic</Badge>
                <Badge>Petrol</Badge>
              </div>
              <p className="mt-4">
                The Subaru Impreza is a sporty and agile sedan, known for its all-wheel-drive performance and handling.
              </p>
            </CardContent>
          </Card>
        </MotionDiv>
      </MotionDiv>
    </section>
  );
}
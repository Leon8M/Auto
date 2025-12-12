import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MotionDiv, FADE_UP_ANIMATION_VARIANTS } from "@/components/motion";

export function ContactSection() {
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
            Contact{" "}
            <span className="inline bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">
              Us
            </span>
          </h2>
          <p className="text-muted-foreground text-xl mt-4 mb-8">
            We would love to hear from you.
          </p>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Get in Touch</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="grid gap-4">
              <Input type="text" placeholder="Name" />
              <Input type="email" placeholder="Email" />
              <Textarea placeholder="Message" />
              <Button>Send Message</Button>
            </form>
          </CardContent>
        </Card>
      </MotionDiv>
    </section>
  );
}
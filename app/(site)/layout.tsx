import { cn } from "@/lib/utils";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppFloatingButton } from "@/components/WhatsAppFloatingButton"; // Import the new component
import { GeistSans } from "geist/font/sans";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={cn(
        "relative flex min-h-dvh flex-col bg-background",
        GeistSans.className
      )}
    >
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppFloatingButton /> {/* Add the floating button here */}
    </div>
  );
}
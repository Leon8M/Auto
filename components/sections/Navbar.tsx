"use client";

import * as React from "react";
import Link from "next/link";
import { Moon, Sun, MessageCircleMore, Phone, Menu, X, ChevronRight } from "lucide-react";
import { useTheme } from "next-themes";
import { MotionDiv } from "@/components/motion";
import { AnimatePresence, motion } from "framer-motion";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

const services: { title: string; href: string; description: string }[] = [
  {
    title: "Car Sourcing",
    href: "/services/sourcing",
    description: "We find the best cars for you, at the best prices.",
  },
  {
    title: "Car Hire",
    href: "/services/hire",
    description: "Rent a car from our wide selection of vehicles.",
  },
  {
    title: "Car Financing",
    href: "/services/financing",
    description: "Finance up to 50% of the car amount with flexible terms.",
  },
  {
    title: "Import Services",
    href: "/services/import",
    description: "Seamless and efficient car import services.",
  },
  {
    title: "Second-hand Cars",
    href: "/services/second-hand",
    description: "Find quality pre-owned cars to fit your budget.",
  },
];

const mainNavItems: { title: string; href: string }[] = [
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
];

export function Navbar() {
  const { setTheme, theme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const whatsappLink = "https://wa.me/254751886007?text=Hi%20AutoJirani%2C%20I%E2%80%99m%20interested%20in%20(service).%20My%20budget%20is%20(budget).";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-gray-950/90 backdrop-blur supports-[backdrop-filter]:bg-gray-950/70 text-gray-200">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-black text-2xl tracking-tighter bg-gradient-to-r from-blue-400 to-green-400 text-transparent bg-clip-text">
              AutoJirani
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-4 mr-4 text-xs font-bold uppercase tracking-widest text-gray-500 border-r border-gray-800 pr-8">
              <div className="flex items-center gap-2">
                <Phone className="h-3 w-3 text-green-400" />
                <a href="tel:+254729544809" className="hover:text-white transition-colors">0729544809</a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-3 w-3 text-blue-400" />
                <a href="tel:+254781908823" className="hover:text-white transition-colors">0781908823</a>
              </div>
            </div>

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-gray-200 hover:text-green-400 transition-all font-bold">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-gray-900 border-gray-800 shadow-2xl">
                    <ul className="grid w-[400px] gap-3 p-6 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {services.map((service) => (
                        <ListItem
                          key={service.title}
                          title={service.title}
                          href={service.href}
                          className="hover:bg-white/5 text-gray-200 hover:text-blue-400 transition-all"
                        >
                          {service.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                {mainNavItems.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    <NavigationMenuLink asChild>
                      <Link 
                        href={item.href} 
                        className={cn(
                          navigationMenuTriggerStyle(), 
                          "bg-transparent text-gray-200 hover:text-green-400 transition-all font-bold"
                        )}
                      >
                        {item.title}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          {/* Action Buttons */}
          <Link href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hidden sm:block">
            <MotionDiv whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="sm" className="bg-green-500 hover:bg-green-600 text-white font-bold rounded-full px-5">
                <MessageCircleMore className="h-4 w-4 mr-2" />
                <span>WhatsApp</span>
              </Button>
            </MotionDiv>
          </Link>

          <MotionDiv whileHover={{ rotate: 15, scale: 1.1 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 400 }}>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="rounded-full hover:bg-white/5 text-gray-400 hover:text-white"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </MotionDiv>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-gray-400"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-gray-800 bg-gray-950 overflow-hidden"
          >
            <div className="container py-8 flex flex-col space-y-6">
              <div className="space-y-4">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">Services</p>
                <div className="grid gap-2">
                  {services.map((s) => (
                    <Link 
                      key={s.title} 
                      href={s.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-blue-500/50 transition-all group"
                    >
                      <span className="font-bold text-lg">{s.title}</span>
                      <ChevronRight className="h-5 w-5 text-gray-600 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                    </Link>
                  ))}
                </div>
              </div>

              <div className="space-y-4 pt-4">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">Links</p>
                <div className="flex flex-col gap-4">
                  {mainNavItems.map((item) => (
                    <Link 
                      key={item.title} 
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-2xl font-black hover:text-green-400 transition-colors"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="pt-8 border-t border-gray-800 flex flex-col space-y-4">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-green-500/10 flex items-center justify-center">
                    <Phone className="h-5 w-5 text-green-400" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-500 uppercase">Call Support</p>
                    <p className="font-black">0729544809</p>
                  </div>
                </div>
                <Link href={whatsappLink} target="_blank" className="w-full">
                  <Button className="w-full bg-green-500 hover:bg-green-600 text-white font-black py-6 rounded-2xl text-lg">
                    <MessageCircleMore className="mr-2 h-6 w-6" />
                    Chat on WhatsApp
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <MotionDiv whileHover={{ scale: 1.03, x: 5 }} transition={{ duration: 0.2 }}>
          <Link
            href={href!}
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-2xl p-4 leading-none no-underline outline-none transition-all",
              className
            )}
            {...props}
          >
            <div className="text-sm font-bold leading-none mb-1">{title}</div>
            <p className="line-clamp-2 text-xs leading-snug text-gray-500">
              {children}
            </p>
          </Link>
        </MotionDiv>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

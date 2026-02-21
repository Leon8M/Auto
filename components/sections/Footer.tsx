import Link from "next/link";
import { MessageCircleMore, Phone } from "lucide-react"; // Import icons

const servicesLinks = [
  { name: "Car Sourcing", href: "/services/sourcing" },
  { name: "Car Hire", href: "/services/hire" },
  { name: "Car Financing", href: "/services/financing" },
  { name: "Import Services", href: "/services/import" },
  { name: "Second-hand Cars", href: "/services/second-hand" },
];

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
  // Add other relevant quick links if needed
];

export function Footer() {
  const whatsappLink = "https://wa.me/254751886007?text=Hi%20AutoJirani%2C%20I%E2%80%99m%20interested%20in%20(service).%20My%20budget%20is%20(budget).";

  return (
    <footer className="border-t border-gray-800 bg-gray-950 text-gray-300 py-12 md:py-16">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Info */}
        <div className="space-y-4">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-white">AutoJirani</span>
          </Link>
          <p className="text-sm text-gray-400">
            Your premier partner for seamless car solutions in Kenya.
          </p>
        </div>

        {/* Services Links */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Our Services</h3>
          <ul className="space-y-2">
            {servicesLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="text-sm hover:text-green-400 transition-colors">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="text-sm hover:text-green-400 transition-colors">
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
                <Link href="/privacy-policy" className="text-sm hover:text-green-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-sm hover:text-green-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Contact Us</h3>
          <div className="flex items-center space-x-2">
            <Phone className="h-4 w-4 text-green-400" />
            <a href="tel:+254729544809" className="text-sm hover:text-green-400 transition-colors">0729544809</a>
          </div>
          <div className="flex items-center space-x-2">
            <Phone className="h-4 w-4 text-green-400" />
            <a href="tel:+254781908823" className="text-sm hover:text-green-400 transition-colors">0781908823</a>
          </div>
          <Link href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-green-400 transition-colors">
            <MessageCircleMore className="h-4 w-4 text-green-400" />
            <span className="text-sm">Chat on WhatsApp</span>
          </Link>
        </div>
      </div>

      {/* Copyright */}
      <div className="container mt-8 text-center text-sm text-gray-500 border-t border-gray-800 pt-8">
        &copy; {new Date().getFullYear()} AutoJirani. All rights reserved.
      </div>
    </footer>
  );
}
"use client";

import Link from "next/link";
import { MessageCircleMore } from "lucide-react";

export function WhatsAppFloatingButton() {
  const whatsappLink = "https://wa.me/254751886007?text=Hi%20AutoJirani%2C%20I%E2%80%99m%20interested%20in%20(service).%20My%20budget%20is%20(budget).";

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
        <button className="flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-colors duration-200">
          <MessageCircleMore className="w-7 h-7" />
        </button>
      </Link>
    </div>
  );
}
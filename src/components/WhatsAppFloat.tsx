import React from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

type Props = {
  phone?: string; // Example: "94773534167" (Sri Lanka: 94 + number without 0)
  message?: string;
};

const WhatsAppFloat: React.FC<Props> = ({
  phone = "94773534167",
  message = "Hello! I’m interested in CJ Global services.",
}) => {
  const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="
        fixed bottom-6 right-6 z-[9999]
        h-14 w-14 sm:h-16 sm:w-16
        rounded-full
        bg-emerald-500
        flex items-center justify-center
        ring-1 ring-white/30
        shadow-[0_18px_40px_rgba(16,185,129,0.35)]
        hover:shadow-[0_24px_60px_rgba(16,185,129,0.45)]
        focus:outline-none focus:ring-2 focus:ring-emerald-400/60
      "
      initial={{ opacity: 0, scale: 0.85, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full animate-[waPulse_2.2s_infinite]" />

      {/* Icon */}
      <MessageCircle className="h-7 w-7 text-white relative z-10" />
      <span className="sr-only">WhatsApp</span>
    </motion.a>
  );
};

export default WhatsAppFloat;

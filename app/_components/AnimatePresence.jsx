"use client";
import { AnimatePresence, motion } from "framer-motion";
import { Open_Sans } from "next/font/google";
import { usePathname } from "next/navigation";

// Font
const openSans = Open_Sans({
  weight: ["400", "700", "300", "800", "500"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
});

export default function AnimatePresencePages({ children }) {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait">
      <motion.body
        className={openSans.className}
        key={pathname}
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}>
        {children}
      </motion.body>
    </AnimatePresence>
  );
}

"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Qualifications", href: "#qualifications" },
  { label: "Services",       href: "#services"       },
  { label: "Testimonials",   href: "#testimonials"   },
  { label: "Location",       href: "#location"       },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#fbf9f1]/95 backdrop-blur-md shadow-[0_1px_0_#bddbd1]"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-12 flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex flex-col leading-none gap-0.5">
            <span className="font-display text-xl font-semibold text-[#2f3e3c]">
              Dr. Deepak Verma
            </span>
            <span className="eyebrow text-[9px]">Orthopaedic Surgeon</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[#4a5e5b] hover:text-[#2f3e3c] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#book"
              className="rounded-full bg-[#bddbd1] px-5 py-2 text-sm font-medium text-[#2f3e3c] transition-all duration-300 hover:bg-[#a8cfc4]"
            >
              Book Consultation
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            className="lg:hidden flex items-center justify-center h-9 w-9 rounded-full hover:bg-[#e7e9e3] transition-colors"
            onClick={() => setOpen((p) => !p)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5 text-[#2f3e3c]" /> : <Menu className="h-5 w-5 text-[#2f3e3c]" />}
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 bg-[#fbf9f1] border-b-2 border-[#bddbd1] px-6 py-6 flex flex-col gap-4 lg:hidden"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm text-[#4a5e5b] hover:text-[#2f3e3c] transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#book"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex justify-center rounded-full bg-[#bddbd1] px-4 py-3 text-sm font-medium text-[#2f3e3c]"
            >
              Book Consultation
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

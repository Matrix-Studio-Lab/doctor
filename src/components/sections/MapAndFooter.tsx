"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";

const ease: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

export default function MapAndFooter() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <>
      <section id="location" className="bg-[#e7e9e3] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="mb-12">
            <span className="eyebrow">Find Us</span>
            <h2 className="font-display mt-3 text-[clamp(2.2rem,4vw,3.5rem)] leading-tight text-[#2f3e3c]">
              Clinic
              <br />
              <span className="font-light italic">Location</span>
            </h2>
            <div className="mt-4 h-0.5 w-16 rounded-full bg-[#bddbd1]" />
          </div>

          <div ref={ref} className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Address cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease }}
              className="flex flex-col gap-4"
            >
              <div className="flex items-start gap-4 rounded-2xl bg-[#fbf9f1] border border-[#bddbd1]/40 px-5 py-5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#bddbd1] shrink-0 mt-0.5">
                  <MapPin className="h-4 w-4 text-[#2f3e3c]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#2f3e3c]">
                    Dr. Deepak Verma — Orthopaedic Clinic
                  </p>
                  <p className="text-sm text-[#4a5e5b] mt-1 leading-relaxed">
                    Sector 3, Salt Lake City<br />
                    Bidhannagar, Kolkata — 700 106<br />
                    West Bengal, India
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl bg-[#fbf9f1] border border-[#bddbd1]/40 px-5 py-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#bddbd1] shrink-0">
                  <Phone className="h-4 w-4 text-[#2f3e3c]" />
                </div>
                <a href="tel:+919000000000" className="text-sm text-[#2f3e3c] hover:underline">
                  +91 90000 00000
                </a>
              </div>

              <div className="flex items-center gap-4 rounded-2xl bg-[#fbf9f1] border border-[#bddbd1]/40 px-5 py-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#bddbd1] shrink-0">
                  <Mail className="h-4 w-4 text-[#2f3e3c]" />
                </div>
                <a
                  href="mailto:appointments@drdeepakverma.in"
                  className="text-sm text-[#2f3e3c] hover:underline break-all"
                >
                  appointments@drdeepakverma.in
                </a>
              </div>

              <a
                href="https://maps.google.com/?q=Sector+3+Salt+Lake+Kolkata"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[#2f3e3c] px-5 py-3 text-sm font-medium text-[#fbf9f1] transition-all duration-300 hover:bg-[#3d5452] w-fit"
              >
                Open in Maps <ArrowUpRight className="h-4 w-4" />
              </a>
            </motion.div>

            {/* Map embed */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15, ease }}
              className="lg:col-span-2 rounded-2xl overflow-hidden border-2 border-[#bddbd1] h-80 lg:h-96"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.9684893244834!2d88.39338147462836!3d22.572799433157265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275b000000001%3A0x0!2sSector+3%2C+Salt+Lake%2C+Kolkata%2C+West+Bengal!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Dr. Deepak Verma Clinic Location"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <footer className="bg-[#2f3e3c] py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="flex flex-col gap-2">
              <p className="font-display text-2xl text-[#fbf9f1]">Dr. Deepak Verma</p>
              <p className="text-xs text-[#bddbd1]">
                MBBS · MS · Gold Medalist · Consultant Orthopaedic Surgeon
              </p>
              {/* Sage-mint accent line */}
              <div className="h-px w-12 bg-[#bddbd1] rounded-full mt-1" />
            </div>

            <nav className="flex flex-wrap gap-x-6 gap-y-2">
              {[
                { label: "Qualifications", href: "#qualifications" },
                { label: "Services",       href: "#services"       },
                { label: "Testimonials",   href: "#testimonials"   },
                { label: "Book",           href: "#book"           },
                { label: "Location",       href: "#location"       },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[#bddbd1] hover:text-[#c7e7ec] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="mt-8 h-px bg-[#4a5e5b]" />

          <div className="mt-6 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-3">
            <p className="text-xs text-[#4a5e5b]">
              © {new Date().getFullYear()} Dr. Deepak Verma. All rights reserved.
            </p>
            <p className="text-xs text-[#4a5e5b]">
              This website is for informational purposes only and does not constitute medical advice.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight, Award } from "lucide-react";
import Image from "next/image";

const ease: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, delay: i * 0.13, ease },
  }),
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#fbf9f1]">
      {/*
        Diagonal band: a full-page parallelogram in #e8f0f1 (ice blue),
        drawn with a skewed pseudo-element approach via a positioned div.
        Desktop-only — the mobile layout drops the band entirely in favour
        of a low-opacity photo watermark behind the text (see below).
      */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden hidden lg:block"
      >
        {/*
          The diagonal ice-blue slab covers the right ~55% of the viewport
          with only a gentle taper, so the doctor photo (centered in the
          right column) sits fully inside it with margin to spare, while
          the left edge still stays clear of the text column's content.
        */}
        <div
          className="absolute top-0 right-0 h-full w-[55%] bg-[#e8f0f1] origin-top-right"
          style={{ clipPath: "polygon(8% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
        />
      </div>

      {/*
        Mobile-only: the doctor photo (transparent cutout) as a faint,
        right-shifted watermark filling the viewport behind the text,
        instead of the desktop's ice-blue diagonal + boxed photo.
      */}
      <div
        aria-hidden
        className="absolute -right-[15%] bottom-0 w-[130%] aspect-square opacity-25 lg:hidden"
      >
        <Image
          src="/doc-hero-mobile.png"
          alt=""
          fill
          className="object-contain object-bottom"
          priority
          sizes="130vw"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl w-full px-6 lg:px-12 pt-28 pb-14 lg:pt-24 lg:pb-16 grid lg:grid-cols-2 gap-12 lg:gap-0 items-center min-h-screen">
        {/* ── Left: text ── */}
        <div className="flex flex-col gap-5 lg:gap-7 lg:pr-12">
          <motion.div
            custom={0} initial="hidden" animate="show" variants={fadeUp}
            className="hidden lg:flex items-center gap-3"
          >
            <span className="block h-px w-8 bg-[#bddbd1]" />
            <span className="eyebrow">Consultant Orthopaedic Surgeon</span>
          </motion.div>

          <motion.div custom={1} initial="hidden" animate="show" variants={fadeUp}>
            <h1 className="font-display text-[clamp(2.6rem,11vw,5.8rem)] leading-[1.0] tracking-tight text-[#2f3e3c]">
              Dr. Deepak
              <br />
              <span className="font-light italic">Verma</span>
            </h1>
            <div className="mt-2 lg:mt-3 h-0.5 w-20 rounded-full bg-[#bddbd1]" />
          </motion.div>

          <motion.div
            custom={2} initial="hidden" animate="show" variants={fadeUp}
            className="flex items-center gap-3 w-fit rounded-full border-2 border-[#bddbd1] bg-[#bddbd1]/20 px-4 py-2"
          >
            <Award className="h-4 w-4 text-[#2f3e3c] shrink-0" />
            <span className="text-sm font-medium text-[#2f3e3c]">
              Gold Medalist · MBBS, MS
            </span>
          </motion.div>

          <motion.div
            custom={3} initial="hidden" animate="show" variants={fadeUp}
            className="flex flex-wrap gap-2"
          >
            {[
              "Fellowship — Joint Replacement",
              "Fellowship — Sports Medicine",
              "New Delhi · Hamburg, Germany",
            ].map((c) => (
              <span
                key={c}
                className="rounded-full border border-[#bddbd1] px-3 py-1 text-xs text-[#2f3e3c]"
              >
                {c}
              </span>
            ))}
          </motion.div>

          <motion.p
            custom={4} initial="hidden" animate="show" variants={fadeUp}
            className="max-w-md text-base leading-[1.5] lg:leading-[1.75] text-[#4a5e5b]"
          >
            Over two decades of specialised orthopaedic care in Kolkata —
            from complex joint replacements to precision sports injury management.
            Trained in India and internationally in Germany.
          </motion.p>

          <motion.div
            custom={5} initial="hidden" animate="show" variants={fadeUp}
            className="flex flex-wrap gap-3 pt-1"
          >
            <a
              href="#book"
              className="inline-flex items-center gap-2 rounded-full bg-[#2f3e3c] px-6 py-3 text-sm font-medium text-[#fbf9f1] transition-all duration-300 hover:bg-[#3d5452] hover:gap-3"
            >
              Book Consultation <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full border-2 border-[#bddbd1] bg-[#bddbd1]/10 px-6 py-3 text-sm font-medium text-[#2f3e3c] transition-all duration-300 hover:bg-[#bddbd1]/30"
            >
              Our Services
            </a>
          </motion.div>
        </div>

        {/* ── Right: Doctor photo — clean, just the image (desktop only) ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.25, ease }}
          className="hidden lg:flex items-end justify-center h-full min-h-[580px]"
        >
          <div className="relative w-full max-w-[400px] h-[580px]">
            <Image
              src="/doc-hero.png"
              alt="Dr. Deepak Verma — Consultant Orthopaedic Surgeon"
              fill
              className="object-cover object-top rounded-3xl"
              priority
              sizes="400px"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll cue — desktop only */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="eyebrow text-[10px]">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          className="h-8 w-px bg-gradient-to-b from-[#bddbd1] to-transparent"
        />
      </motion.div>
    </section>
  );
}

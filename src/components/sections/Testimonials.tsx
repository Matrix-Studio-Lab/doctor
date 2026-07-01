"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const ease: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const testimonials = [
  {
    name: "Rajesh Kumar",
    age: "58 years",
    procedure: "Total Knee Replacement",
    quote:
      "For nearly four years, I could barely walk down a flight of stairs without stopping. Dr. Verma performed my total knee replacement, and three months later I'm walking two kilometres every morning. His calm certainty before the procedure put me completely at ease.",
    location: "New Town, Kolkata",
  },
  {
    name: "Priya Chatterjee",
    age: "34 years",
    procedure: "ACL Reconstruction",
    quote:
      "I tore my ACL mid-match during a state-level tennis tournament. Dr. Verma not only reconstructed the ligament but gave me a step-by-step return-to-sport plan. Eight weeks later I was back on the court — stronger than before.",
    location: "Jadavpur, Kolkata",
  },
  {
    name: "Suresh Banerjee",
    age: "67 years",
    procedure: "Hip Arthroplasty",
    quote:
      "At my age, major surgery felt daunting. But Dr. Verma explained every step clearly, and the recovery was smoother than I imagined. I am now walking unaided and free from the hip pain that had troubled me for six years.",
    location: "Behala, Kolkata",
  },
  {
    name: "Ananya Das",
    age: "42 years",
    procedure: "Spine — Conservative Management",
    quote:
      "I came in expecting to be told I needed surgery. Instead, Dr. Verma took a different approach — a structured physiotherapy and medication plan. Within ten weeks, my chronic back pain was almost entirely gone.",
    location: "Salt Lake, Kolkata",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="testimonials" className="bg-[#e7e9e3] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-16">
          <span className="eyebrow">Patient Stories</span>
          <h2 className="font-display mt-3 text-[clamp(2.2rem,4vw,3.5rem)] leading-tight text-[#2f3e3c]">
            Recoveries that
            <br />
            <span className="font-light italic">speak for themselves</span>
          </h2>
          <div className="mt-4 h-0.5 w-16 rounded-full bg-[#bddbd1]" />
        </div>

        <div ref={ref} className="grid md:grid-cols-2 gap-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease }}
              className={`relative flex flex-col gap-5 rounded-2xl p-7 ${
                i === 0
                  ? "bg-[#2f3e3c]"
                  : "bg-[#fbf9f1] border border-[#e7e9e3] hover:border-[#bddbd1] transition-colors duration-300"
              }`}
            >
              {/* Sage-mint accent corner on dark card */}
              {i === 0 && (
                <div className="absolute top-0 right-0 h-16 w-16 rounded-bl-3xl rounded-tr-2xl bg-[#bddbd1]/20" />
              )}

              <Quote className={`h-5 w-5 shrink-0 ${i === 0 ? "text-[#bddbd1]" : "text-[#bddbd1]"}`} />

              <p className={`text-sm leading-relaxed flex-1 ${i === 0 ? "text-[#e7e9e3]" : "text-[#2f3e3c]"}`}>
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className={`h-px w-full ${i === 0 ? "bg-[#4a5e5b]" : "bg-[#e7e9e3]"}`} />

              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className={`text-sm font-semibold ${i === 0 ? "text-[#fbf9f1]" : "text-[#2f3e3c]"}`}>
                    {t.name}
                  </p>
                  <p className={`text-xs mt-0.5 ${i === 0 ? "text-[#bddbd1]" : "text-[#4a5e5b]"}`}>
                    {t.age} · {t.location}
                  </p>
                </div>
                <span
                  className={`inline-block rounded-full px-3 py-1 text-xs shrink-0 ${
                    i === 0
                      ? "bg-[#bddbd1]/20 text-[#bddbd1] border border-[#bddbd1]/30"
                      : "bg-[#bddbd1]/20 text-[#2f3e3c] border border-[#bddbd1]"
                  }`}
                >
                  {t.procedure}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

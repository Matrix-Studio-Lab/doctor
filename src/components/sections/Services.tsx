"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Activity, Bone, Dumbbell, Layers, Shield, Zap } from "lucide-react";

const ease: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const services = [
  {
    icon: Bone,
    title: "Joint Replacement Surgery",
    description:
      "Total and partial replacement of knee, hip, and shoulder joints using advanced implants. High-volume experience in primary and revision procedures.",
    tag: "Knee · Hip · Shoulder",
  },
  {
    icon: Dumbbell,
    title: "Sports Injury Management",
    description:
      "From ligament tears to rotator cuff injuries — accurate diagnosis, targeted treatment, and a return-to-sport protocol built around your body.",
    tag: "Athletes · Active Patients",
  },
  {
    icon: Activity,
    title: "Arthroscopic Surgery",
    description:
      "Minimally invasive keyhole procedures for the knee, shoulder, and hip. Smaller incisions, faster recovery, precise repair.",
    tag: "Minimally Invasive",
  },
  {
    icon: Layers,
    title: "Spine Care & Treatment",
    description:
      "Comprehensive management of disc herniation, spondylosis, and canal stenosis — conservative treatment preferred before surgery.",
    tag: "Conservative · Surgical",
  },
  {
    icon: Shield,
    title: "Fracture Management",
    description:
      "Expert care for complex fractures of the limbs and pelvis — from closed reduction to internal fixation for full functional recovery.",
    tag: "Trauma · Fixation",
  },
  {
    icon: Zap,
    title: "Osteoporosis Treatment",
    description:
      "Bone density evaluation, long-term medical therapy, fall prevention strategies, and surgical intervention when fragility fractures occur.",
    tag: "Bone Health",
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="services" className="bg-[#fbf9f1] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <span className="eyebrow">Specialisations</span>
            <h2 className="font-display mt-3 text-[clamp(2.2rem,4vw,3.5rem)] leading-tight text-[#2f3e3c]">
              Areas of
              <br />
              <span className="font-light italic">Expertise</span>
            </h2>
            <div className="mt-4 h-0.5 w-16 rounded-full bg-[#bddbd1]" />
          </div>
          <p className="text-[#4a5e5b] text-base leading-relaxed lg:max-w-xs">
            Each service is backed by fellowship-level training and a conviction that
            every patient deserves a personalised, evidence-based plan.
          </p>
        </div>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08, ease }}
                className="group relative flex flex-col gap-4 rounded-2xl bg-[#e8f0f1] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(47,62,60,0.08)]"
              >
                {/* Sage-mint accent top stripe on hover */}
                <div className="absolute top-0 left-6 right-6 h-0.5 rounded-full bg-[#bddbd1] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#bddbd1]/30 transition-colors duration-300 group-hover:bg-[#bddbd1]">
                  <Icon className="h-5 w-5 text-[#2f3e3c]" />
                </div>

                <div className="flex flex-col gap-2 flex-1">
                  <h3 className="font-display text-xl font-semibold text-[#2f3e3c] leading-snug">
                    {s.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#4a5e5b] flex-1">
                    {s.description}
                  </p>
                </div>

                <span className="inline-block rounded-full border border-[#bddbd1] bg-[#bddbd1]/20 px-3 py-0.5 text-xs text-[#2f3e3c] w-fit">
                  {s.tag}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

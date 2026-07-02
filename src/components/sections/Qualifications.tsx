"use client";

import { Timeline } from "@/components/ui/timeline";
import { Award, GraduationCap, Globe, FlaskConical } from "lucide-react";

const milestones = [
  {
    title: "MBBS",
    icon: GraduationCap,
    label: "Foundation",
    institution: "Calcutta National Medical College",
    detail:
      "Bachelor of Medicine and Bachelor of Surgery — graduated with distinction. The beginning of a career built on academic rigour.",
  },
  {
    title: "MS Orthopaedics",
    icon: GraduationCap,
    label: "Postgraduate",
    institution: "Calcutta National Medical College",
    detail:
      "Master of Surgery with specialisation in Orthopaedics. Deepened clinical training across trauma, joint disease, and reconstructive surgery.",
  },
  {
    title: "Gold Medal",
    icon: Award,
    label: "Honours",
    institution: "West Bengal University of Health Sciences",
    detail:
      "Awarded the Gold Medal for academic excellence in Orthopaedics — the highest distinction conferred by the university.",
  },
  {
    title: "Fellowship — Joint Replacement & Sports Medicine",
    icon: FlaskConical,
    label: "Fellowship",
    institution: "Sir Ganga Ram Hospital, New Delhi",
    detail:
      "Advanced clinical fellowship in joint arthroplasty and arthroscopic sports medicine at one of India's foremost surgical centres.",
  },
  {
    title: "International Fellowship",
    icon: Globe,
    label: "Germany",
    institution: "ENDO-Klinik, Hamburg",
    detail:
      "International training in advanced joint arthroplasty and revision surgery. ENDO-Klinik Hamburg performs over 6,000 joint replacements annually — among the highest volumes in Europe.",
  },
];

function MilestoneCard({
  m,
}: {
  m: (typeof milestones)[0];
}) {
  const Icon = m.icon;
  return (
    <div className="group rounded-2xl border border-[#bddbd1]/30 bg-[#fbf9f1] px-6 py-6 lg:px-6 lg:py-5 transition-all duration-300 hover:border-[#bddbd1] hover:shadow-[0_4px_28px_rgba(47,62,60,0.07)]">
      <div className="flex flex-col items-center text-center gap-0 lg:flex-row lg:items-start lg:text-left lg:gap-4">
        <div className="hidden lg:flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#bddbd1]/20 transition-colors duration-300 group-hover:bg-[#bddbd1]">
          <Icon className="h-4 w-4 text-[#2f3e3c]" />
        </div>
        <div className="w-full">
          <span className="eyebrow text-[11px] lg:text-[10px]">{m.label}</span>
          <h3 className="font-display mt-1 lg:mt-0.5 text-xl font-semibold leading-snug text-[#2f3e3c]">
            {m.title}
          </h3>
          <p className="mt-2 lg:mt-1 flex items-center justify-center lg:justify-start gap-1.5 text-xs font-medium text-[#2f3e3c]">
            <span className="inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[#bddbd1]" />
            {m.institution}
          </p>
          <p className="mt-3 lg:mt-2 lg:max-w-sm mx-auto lg:mx-0 text-sm leading-relaxed text-[#4a5e5b]">
            {m.detail}
          </p>
        </div>
      </div>
    </div>
  );
}

const timelineData = milestones.map((m) => ({
  title: m.label,
  content: <MilestoneCard m={m} />,
}));

export default function Qualifications() {
  return (
    <section id="qualifications" className="bg-[#e7e9e3] py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-12">
        {/* Section header */}
        <div className="mb-4 text-center">
          <span className="eyebrow">Education &amp; Training</span>
          <h2 className="font-display mt-3 text-[clamp(2.2rem,4vw,3.5rem)] leading-tight text-[#2f3e3c]">
            Qualifications &amp;
            <br />
            <span className="font-light italic">Achievements</span>
          </h2>
          <div className="mx-auto mt-4 h-0.5 w-16 rounded-full bg-[#bddbd1]" />
        </div>

        {/* Aceternity Timeline */}
        <Timeline data={timelineData} />

        {/* MCI Registration badge */}
        <div className="flex justify-center mt-4">
          <div className="flex items-center gap-4 rounded-2xl border-2 border-[#bddbd1] bg-[#bddbd1]/15 px-6 py-4">
            <Award className="h-5 w-5 shrink-0 text-[#2f3e3c]" />
            <div>
              <p className="text-sm font-medium text-[#2f3e3c]">MCI / NMC Registered</p>
              <p className="mt-0.5 text-xs text-[#4a5e5b]">
                Registration No. WBMC-XXXXX · West Bengal Medical Council
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

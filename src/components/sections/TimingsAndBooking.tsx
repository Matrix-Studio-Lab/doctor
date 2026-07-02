"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Clock, CalendarCheck, Phone, CheckCircle2 } from "lucide-react";

const ease: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const schedule = [
  { day: "Mon",  time: "10:00 – 13:00", open: true  },
  { day: "Tue",  time: "10:00 – 13:00", open: true  },
  { day: "Wed",  time: "10:00 – 13:00", open: true  },
  { day: "Thu",  time: "10:00 – 13:00", open: true  },
  { day: "Fri",  time: "10:00 – 13:00", open: true  },
  { day: "Sat",  time: "10:00 – 12:00", open: true  },
  { day: "Sun",  time: "Closed",        open: false },
];

const timeSlots = [
  "10:00 am", "10:30 am", "11:00 am", "11:30 am",
  "12:00 pm", "12:30 pm", "1:00 pm",
];

export default function TimingsAndBooking() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const [form, setForm] = useState({ name: "", phone: "", date: "", slot: "", reason: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="book" className="bg-[#fbf9f1] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">

        {/* Header */}
        <div className="mb-16">
          <span className="eyebrow">Visit &amp; Appointments</span>
          <h2 className="font-display mt-3 text-[clamp(2.2rem,4vw,3.5rem)] leading-tight text-[#2f3e3c]">
            Timings &amp;
            <br />
            <span className="font-light italic">Book a Consultation</span>
          </h2>
          <div className="mt-4 h-0.5 w-16 rounded-full bg-[#bddbd1]" />
        </div>

        <div ref={ref} className="grid lg:grid-cols-5 gap-4 lg:gap-6">

          {/* ── LEFT: Hours card (2 cols) ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease }}
            className="lg:col-span-2 flex flex-col gap-0 rounded-3xl bg-[#2f3e3c] overflow-hidden font-sans"
          >
            {/* Card header */}
            <div className="px-5 pt-5 pb-4 lg:px-7 lg:pt-7 lg:pb-5 border-b border-[#3d5452]">
              <div className="flex items-center gap-3 mb-1">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#bddbd1]">
                  <Clock className="h-4 w-4 text-[#2f3e3c]" />
                </div>
                <span className="text-sm font-semibold text-[#fbf9f1]">Clinic Hours</span>
              </div>
            </div>

            {/* Schedule rows */}
            <div className="flex flex-col flex-1 px-5 py-2 lg:px-7 lg:py-4 gap-0.5 lg:gap-1">
              {schedule.map((s) => (
                <div
                  key={s.day}
                  className={`flex items-center justify-between py-1.5 lg:py-2.5 border-b border-[#3d5452]/60 last:border-0 ${!s.open ? "opacity-35" : ""}`}
                >
                  <span className={`text-sm font-medium ${s.open ? "text-[#e7e9e3]" : "text-[#4a5e5b]"}`}>
                    {s.day}
                  </span>
                  <span className={`text-sm ${s.open ? "text-[#bddbd1]" : "text-[#4a5e5b] italic"}`}>
                    {s.time}
                  </span>
                </div>
              ))}
            </div>

            {/* Address footer */}
            <div className="px-5 py-4 lg:px-7 lg:py-6 bg-[#263330]">
              <p className="eyebrow text-[#bddbd1] mb-1.5 lg:mb-2">Clinic Address</p>
              <p className="text-base lg:text-lg text-[#fbf9f1] leading-snug">
                Sector 3, Salt Lake<br />
                <span className="font-light">Kolkata, West Bengal</span>
              </p>
              <a
                href="tel:+919000000000"
                className="mt-2 lg:mt-3 inline-flex items-center gap-2 text-sm text-[#bddbd1] hover:text-[#c7e7ec] transition-colors"
              >
                <Phone className="h-3.5 w-3.5" />
                +91 90000 00000
              </a>
            </div>
          </motion.div>

          {/* ── RIGHT: Booking form (3 cols) ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.12, ease }}
            className="lg:col-span-3 rounded-3xl bg-[#2f3e3c] p-5 lg:p-9 font-sans"
          >
            {submitted ? (
              /* ── Success state ── */
              <div className="flex flex-col items-center justify-center h-full gap-5 py-12 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className="flex h-16 w-16 items-center justify-center rounded-full bg-[#bddbd1]"
                >
                  <CheckCircle2 className="h-8 w-8 text-[#2f3e3c]" />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-semibold text-[#fbf9f1]">Appointment Requested</h3>
                  <p className="mt-2 text-sm text-[#bddbd1] max-w-xs leading-relaxed">
                    We&apos;ll confirm your slot within 24 hours. For urgent queries, call the clinic directly.
                  </p>
                </div>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", date: "", slot: "", reason: "" }); }}
                  className="text-xs text-[#bddbd1] underline underline-offset-4 hover:text-[#fbf9f1] transition-colors"
                >
                  Book another appointment
                </button>
              </div>
            ) : (
              <>
                {/* Form header */}
                <div className="flex items-center gap-3 mb-4 lg:mb-8">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#bddbd1]">
                    <CalendarCheck className="h-4 w-4 text-[#2f3e3c]" />
                  </div>
                  <div>
                    <span className="block font-sans text-sm font-semibold text-[#fbf9f1]">Request an Appointment</span>
                    <p className="text-xs text-[#bddbd1]">Fill in your details and preferred time</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-3 lg:gap-5">
                  {/* Name + Phone row */}
                  <div className="grid sm:grid-cols-2 gap-3 lg:gap-4">
                    <Field label="Full Name" required>
                      <input
                        id="name" name="name" type="text" required
                        value={form.name} onChange={handleChange}
                        placeholder="Ananya Dey"
                        className={inputCls}
                      />
                    </Field>
                    <Field label="Mobile Number" required>
                      <input
                        id="phone" name="phone" type="tel" required
                        value={form.phone} onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className={inputCls}
                      />
                    </Field>
                  </div>

                  {/* Date + Slot row */}
                  <div className="grid sm:grid-cols-2 gap-3 lg:gap-4">
                    <Field label="Preferred Date" required>
                      <input
                        id="date" name="date" type="date" required
                        value={form.date} onChange={handleChange}
                        className={inputCls}
                      />
                    </Field>
                    <Field label="Time Slot" required>
                      <select
                        id="slot" name="slot" required
                        value={form.slot} onChange={handleChange}
                        className={inputCls + " appearance-none"}
                      >
                        <option value="" disabled>Select a slot</option>
                        {timeSlots.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </Field>
                  </div>

                  {/* Reason */}
                  <Field label="Reason for Visit">
                    <textarea
                      id="reason" name="reason" rows={3}
                      value={form.reason} onChange={handleChange}
                      placeholder="e.g. Knee pain for 6 months, difficulty walking..."
                      className={inputCls + " resize-none"}
                    />
                  </Field>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="mt-1 w-full min-h-[44px] rounded-xl bg-[#bddbd1] py-3.5 text-sm font-medium text-[#2f3e3c] transition-all duration-300 hover:bg-[#a8cfc4] active:scale-[0.99] touch-manipulation"
                  >
                    Request Appointment
                  </button>

                  <p className="text-center text-xs text-[#bddbd1]">
                    Confirmation within 24 hours · No prepayment required
                  </p>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ── Shared helpers ── */
const inputCls =
  "w-full min-h-[40px] rounded-xl border border-[#3d5452] bg-[#3d5452] px-3.5 py-2 text-sm text-[#fbf9f1] placeholder-[#bddbd1]/50 outline-none focus:border-[#bddbd1] transition-colors";

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-[#e7e9e3]">
        {label}{required && <span className="ml-0.5 text-[#bddbd1]">*</span>}
      </label>
      {children}
    </div>
  );
}

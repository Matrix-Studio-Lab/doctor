import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Qualifications from "@/components/sections/Qualifications";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import TimingsAndBooking from "@/components/sections/TimingsAndBooking";
import MapAndFooter from "@/components/sections/MapAndFooter";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Navbar />
      <Hero />
      <div className="section-divider" />
      <Qualifications />
      <div className="section-divider" />
      <Services />
      <div className="section-divider" />
      <Testimonials />
      <div className="section-divider" />
      <TimingsAndBooking />
      <MapAndFooter />
    </main>
  );
}

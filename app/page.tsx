import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import ServicesGrid from "@/components/ServicesGrid";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />

      <Section id="services" title="Our Services" subtitle="All services available across Delhi NCR">
        <ServicesGrid />
      </Section>

      <Section id="about" title="About VR1" subtitle="Reliable. Transparent. On-time.">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-3xl border p-6">
            <h3 className="font-semibold mb-2">Why choose us?</h3>
            <ul className="list-disc ml-5 text-slate-700 space-y-1">
              <li>Verified staff and experienced supervisors</li>
              <li>Clear pricing and quick turnaround</li>
              <li>Door-to-door convenience</li>
              <li>Custom packages for homes & offices</li>
            </ul>
          </div>
          <div className="rounded-3xl border p-6">
            <h3 className="font-semibold mb-2">Coverage</h3>
            <p className="text-slate-700">Delhi, Noida, Gurugram, Faridabad, Ghaziabad</p>
            <h3 className="font-semibold mt-4 mb-2">Contact</h3>
            <p className="text-slate-700">Phone: +91-99999-99999 • Email: hello@vr1.example</p>
          </div>
        </div>
      </Section>

      <Section id="contact" title="Get a Free Quote" subtitle="Tell us what you need and we’ll get back within 24 hours">
        <div className="rounded-3xl border p-6 bg-white">
          <ContactForm />
        </div>
      </Section>

      {/* Footer */}
      <footer className="mt-16 border-t">
        <div className="container py-8 text-sm text-slate-600 flex flex-col md:flex-row gap-2 items-center justify-between">
          <p>© {new Date().getFullYear()} VR1. All rights reserved.</p>
          <p>Delhi NCR • India</p>
        </div>
      </footer>
    </main>
  );
}

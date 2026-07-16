import type { Metadata } from "next";
import TopStrip from "@/components/TopStrip";
import Header from "@/components/Header";
import ServiceHero, { ServiceHeroCtas } from "@/components/ServiceHero";
import ServiceScheduler from "@/components/ServiceScheduler";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import { SimpleFooter } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Service Center | S² Automotive",
  description: "Schedule service at S² Automotive — oil changes, tires, brakes, batteries, and more for every make and model.",
};

const EXPRESS_ITEMS = ["Oil & filter changes", "Tire rotations", "Multi-point inspections", "Fluid top-offs", "Filter replacements"];

const SERVICES_GRID = [
  { icon: "🛢️", title: "Oil & Filter Changes", desc: "Fast, affordable service to keep your engine running smoothly." },
  { icon: "🛞", title: "Tires & Rotations", desc: "New tires, rotations, and balancing for a smoother, safer ride." },
  { icon: "🛑", title: "Brake Service", desc: "Pads, rotors, and inspections so you can stop with confidence." },
  { icon: "🔋", title: "Battery & Diagnostics", desc: "Full diagnostic checks and battery testing / replacement." },
  { icon: "💧", title: "Fluid Exchanges", desc: "Coolant, transmission, and brake fluid services done right." },
  { icon: "🔍", title: "Multi-Point Inspections", desc: "A thorough top-to-bottom check on every visit." },
];

const TIRE_BULLETS = [
  "New tires from all major brands, competitively priced",
  "Free rotations with any tire purchase",
  "Alignment checks to maximize tire life",
];

const SPECIALS = [
  { title: "Buy 3, Get 1 Free", sub: "Tire Special" },
  { title: "$10 Off", sub: "Oil Change" },
  { title: "Seasonal", sub: "Savings" },
  { title: "Battery Discount", sub: "With Diagnostic" },
];

const FAQS = [
  { q: "Do I need an appointment for an oil change?", a: "Walk-ins are welcome, but scheduling ahead guarantees you a bay and gets you in and out faster." },
  { q: "Do you service any make or model?", a: "Yes — our technicians work on domestic and import vehicles of every make and model." },
  { q: "How long does a typical service take?", a: "Most routine services (oil changes, tire rotations, inspections) are completed same-day, often while you wait." },
  { q: "Can I wait at the dealership during service?", a: "Absolutely. Our waiting area is comfortable and most express services take under an hour." },
];

export default function ServicePage() {
  return (
    <div className="page-bg">
      <TopStrip />
      <Header />
      <ServiceHero />
      <ServiceHeroCtas />

      {/* Same-Day + Express */}
      <section style={{ maxWidth: 1240, margin: "0 auto", padding: "84px 28px 0" }}>
        <div className="grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }}>
          <div>
            <div style={{ fontSize: 12.5, letterSpacing: "0.16em", textTransform: "uppercase", color: "#9a6b1f", fontWeight: 700, marginBottom: 12 }}>
              Same-Day Service
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 42, fontWeight: 700, color: "#2a2318", lineHeight: 1.05, marginBottom: 18 }}>
              Service you can count on
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.65, color: "#6b6152", maxWidth: 480, marginBottom: 26 }}>
              From routine maintenance to bigger repairs, our certified technicians treat every car like it&apos;s their
              own — with honest pricing and no upsell pressure.
            </p>
            <a href="#schedule" style={{ display: "inline-block", background: "linear-gradient(135deg,#d8a95a,#b17f38)", color: "#241d14", fontWeight: 800, fontSize: 15, padding: "14px 28px", borderRadius: 999 }}>
              Make an Appointment
            </a>
          </div>
          <div style={{ background: "#fffdf9", border: "1px solid rgba(58,47,28,0.1)", borderRadius: 20, padding: 32, boxShadow: "0 6px 20px rgba(58,47,28,0.05)" }}>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 24, fontWeight: 700, color: "#2a2318", marginBottom: 18 }}>
              Express Maintenance
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {EXPRESS_ITEMS.map((item) => (
                <div key={item} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <span style={{ color: "#d8a95a", fontSize: 16 }}>◆</span>
                  <span style={{ fontSize: 15, color: "#3a3226" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section style={{ maxWidth: 1240, margin: "0 auto", padding: "84px 28px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 12.5, letterSpacing: "0.16em", textTransform: "uppercase", color: "#9a6b1f", fontWeight: 700, marginBottom: 12 }}>
            What We Offer
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 42, fontWeight: 700, color: "#2a2318", lineHeight: 1.05 }}>
            Complete auto care
          </h2>
        </div>
        <div className="grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
          {SERVICES_GRID.map((s) => (
            <div key={s.title} style={{ background: "#fffdf9", border: "1px solid rgba(58,47,28,0.1)", borderRadius: 18, padding: 28, boxShadow: "0 6px 20px rgba(58,47,28,0.05)" }}>
              <div
                style={{
                  width: 46, height: 46, borderRadius: 12,
                  background: "linear-gradient(135deg,#d8a95a,#b17f38)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 22, marginBottom: 18,
                }}
              >
                {s.icon}
              </div>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 23, fontWeight: 700, color: "#2a2318", marginBottom: 8 }}>{s.title}</div>
              <div style={{ fontSize: 14, color: "#8a8172", lineHeight: 1.55 }}>{s.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Tire Center feature */}
      <section style={{ maxWidth: 1240, margin: "0 auto", padding: "0 28px 84px" }}>
        <div style={{ background: "#241d14", color: "#efe9dd", borderRadius: 24, padding: 48, overflow: "hidden" }}>
          <div className="grid-2" style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 48, alignItems: "center" }}>
            <div>
              <div style={{ fontSize: 12.5, letterSpacing: "0.16em", textTransform: "uppercase", color: "#d8a95a", fontWeight: 700, marginBottom: 12 }}>
                Tire Center
              </div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 36, fontWeight: 700, color: "#fff", lineHeight: 1.08, marginBottom: 18 }}>
                Tires, rotations &amp; alignments
              </h3>
              <div
                style={{
                  display: "inline-block",
                  background: "linear-gradient(135deg,#d8a95a,#b17f38)",
                  color: "#241d14",
                  fontWeight: 800,
                  fontSize: 14,
                  padding: "8px 18px",
                  borderRadius: 999,
                  marginBottom: 20,
                }}
              >
                Buy 3, Get 1 Free
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 28 }}>
                {TIRE_BULLETS.map((b) => (
                  <div key={b} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <span style={{ color: "#d8a95a", fontSize: 16 }}>◆</span>
                    <span style={{ fontSize: 15, color: "#c9bfae", lineHeight: 1.5 }}>{b}</span>
                  </div>
                ))}
              </div>
              <a href="#schedule" style={{ display: "inline-block", background: "linear-gradient(135deg,#d8a95a,#b17f38)", color: "#241d14", fontWeight: 800, fontSize: 15, padding: "14px 28px", borderRadius: 999 }}>
                Book a Tire Service
              </a>
            </div>
            <PhotoPlaceholder label="tire / wheel photo" dark style={{ aspectRatio: "4/3", borderRadius: 18, border: "1px solid rgba(216,169,90,0.2)" }} />
          </div>
        </div>
      </section>

      {/* Monthly specials */}
      <section style={{ maxWidth: 1240, margin: "0 auto", padding: "0 28px 84px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 12.5, letterSpacing: "0.16em", textTransform: "uppercase", color: "#9a6b1f", fontWeight: 700, marginBottom: 12 }}>
            Limited Time
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 42, fontWeight: 700, color: "#2a2318", lineHeight: 1.05 }}>
            Monthly specials
          </h2>
        </div>
        <div className="grid-4" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20 }}>
          {SPECIALS.map((s) => (
            <div
              key={s.title}
              style={{
                background: "radial-gradient(400px 200px at 100% 0%, rgba(216,169,90,0.18), transparent 60%), #fffdf9",
                border: "1px solid rgba(177,127,56,0.28)",
                borderRadius: 18,
                padding: 26,
                textAlign: "center",
              }}
            >
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 24, fontWeight: 700, color: "#9a6b1f", marginBottom: 6 }}>{s.title}</div>
              <div style={{ fontSize: 13.5, color: "#6b6152", fontWeight: 600 }}>{s.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section style={{ maxWidth: 900, margin: "0 auto", padding: "0 28px 84px" }}>
        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <div style={{ fontSize: 12.5, letterSpacing: "0.16em", textTransform: "uppercase", color: "#9a6b1f", fontWeight: 700, marginBottom: 12 }}>
            Questions
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 38, fontWeight: 700, color: "#2a2318", lineHeight: 1.05 }}>
            Frequently asked
          </h2>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {FAQS.map((item) => (
            <div key={item.q} style={{ background: "#fffdf9", border: "1px solid rgba(58,47,28,0.1)", borderRadius: 14, padding: 22 }}>
              <div style={{ fontWeight: 800, fontSize: 15.5, color: "#2a2318", marginBottom: 6 }}>{item.q}</div>
              <div style={{ fontSize: 14.5, color: "#6b6152", lineHeight: 1.6 }}>{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <ServiceScheduler />

      <SimpleFooter />
    </div>
  );
}

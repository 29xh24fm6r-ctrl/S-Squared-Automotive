import Link from "next/link";
import TopStrip from "@/components/TopStrip";
import Header from "@/components/Header";
import HomeHero, { HomeHeroCtas } from "@/components/HomeHero";
import VehicleCard from "@/components/VehicleCard";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import { RichFooter } from "@/components/Footer";
import { featuredVehicles } from "@/lib/vehicles";
import { assetExists } from "@/lib/assets";
import { site } from "@/lib/theme";

const QUICK_ACTIONS = [
  { icon: "🚗", title: "Shop Inventory", desc: "Browse our hand-picked cars, SUVs & trucks.", cta: "View cars", href: "/inventory" },
  { icon: "💳", title: "Get Financing", desc: "Apply in minutes — all credit welcome.", cta: "Apply now", href: "/financing" },
  { icon: "🔑", title: "Sell / Trade", desc: "Get a fair, no-obligation offer today.", cta: "Value my car", href: "/#trade" },
  { icon: "📍", title: "Visit Us", desc: `${site.address}.`, cta: "Get directions", href: "/#visit" },
];

const TRUST_BAR = [
  { title: "150-Point Inspection", sub: "On every vehicle" },
  { title: "Easy Financing", sub: "All credit welcome" },
  { title: "Fair Trade Values", sub: "Free appraisal" },
  { title: "No-Pressure Sales", sub: "Honest, local team" },
];

const WHY_FEATURES = [
  { icon: "🔧", title: "Inspected & Reconditioned", desc: "150-point check on every car so you buy with confidence." },
  { icon: "💳", title: "Financing for Everyone", desc: "Good, bad, or no credit — we work with lenders to get you approved." },
  { icon: "🤝", title: "Local & Family-Run", desc: "Proudly serving Gainesville and North Georgia drivers." },
  { icon: "🏷️", title: "Straightforward Pricing", desc: "The price you see is fair, competitive, and hassle-free." },
];

export default function HomePage() {
  const hasQr = assetExists("s2-qr.png");

  return (
    <div className="page-bg">
      <TopStrip />
      <Header />
      <HomeHero />
      <HomeHeroCtas />

      {/* Quick actions */}
      <section style={{ position: "relative", zIndex: 2, maxWidth: 1240, margin: "36px auto 0", padding: "0 28px" }}>
        <div className="grid-4" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 18 }}>
          {QUICK_ACTIONS.map((a) => (
            <Link
              key={a.title}
              href={a.href}
              className="quick-action-card"
              style={{
                display: "block",
                background: "#fffdf9",
                border: "1px solid rgba(58,47,28,0.1)",
                borderRadius: 16,
                padding: "24px 22px",
                textDecoration: "none",
                color: "inherit",
                boxShadow: "0 14px 34px rgba(58,47,28,0.1)",
              }}
            >
              <div
                style={{
                  width: 46,
                  height: 46,
                  borderRadius: 12,
                  background: "linear-gradient(135deg,#d8a95a,#b17f38)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 22,
                  marginBottom: 16,
                }}
              >
                {a.icon}
              </div>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 23, fontWeight: 700, color: "#2a2318", lineHeight: 1.1 }}>
                {a.title}
              </div>
              <div style={{ fontSize: 13.5, color: "#8a8172", marginTop: 5, lineHeight: 1.45 }}>{a.desc}</div>
              <div style={{ fontSize: 13, fontWeight: 800, color: "#9a6b1f", marginTop: 14 }}>{a.cta} →</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Trust bar */}
      <section style={{ background: "#241d14", color: "#efe9dd", marginTop: 64 }}>
        <div className="grid-4" style={{ maxWidth: 1240, margin: "0 auto", padding: "26px 28px", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24 }}>
          {TRUST_BAR.map((t) => (
            <div key={t.title} style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ color: "#d8a95a", fontSize: 22 }}>◆</span>
              <div>
                <div style={{ fontWeight: 800, fontSize: 15, color: "#fff" }}>{t.title}</div>
                <div style={{ fontSize: 12.5, color: "#b6ab97" }}>{t.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured inventory */}
      <section id="inventory" style={{ padding: "84px 28px", maxWidth: 1240, margin: "0 auto", position: "relative" }}>
        <div style={{ display: "flex", alignItems: "end", justifyContent: "space-between", gap: 24, flexWrap: "wrap", marginBottom: 40 }}>
          <div>
            <div style={{ fontSize: 12.5, letterSpacing: "0.16em", textTransform: "uppercase", color: "#9a6b1f", fontWeight: 700, marginBottom: 12 }}>
              Featured Inventory
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 46, fontWeight: 700, color: "#2a2318", lineHeight: 1.05 }}>
              Newest arrivals on the lot
            </h2>
          </div>
          <Link href="/inventory" style={{ border: "1px solid rgba(58,47,28,0.25)", color: "#3a3226", fontWeight: 700, fontSize: 14.5, padding: "13px 24px", borderRadius: 999 }}>
            View all inventory
          </Link>
        </div>
        <div className="grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
          {featuredVehicles.map((car) => (
            <VehicleCard key={car.name + car.trim} car={car} href="/inventory" />
          ))}
        </div>
      </section>

      {/* Why S2 */}
      <section id="why" style={{ padding: "84px 28px", background: "linear-gradient(180deg,#fffdf9,#f7f4ee)" }}>
        <div className="grid-2" style={{ maxWidth: 1240, margin: "0 auto", display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: 60, alignItems: "center" }}>
          <PhotoPlaceholder
            label="showroom / team photo"
            style={{ aspectRatio: "5/6", borderRadius: 20, border: "1px solid rgba(58,47,28,0.14)", boxShadow: "0 20px 50px rgba(58,47,28,0.1)" }}
          />
          <div>
            <div style={{ fontSize: 12.5, letterSpacing: "0.16em", textTransform: "uppercase", color: "#9a6b1f", fontWeight: 700, marginBottom: 12 }}>
              Why buy from S²
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 46, fontWeight: 700, color: "#2a2318", lineHeight: 1.05, marginBottom: 18 }}>
              A dealership built on trust
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.65, color: "#6b6152", maxWidth: 560 }}>
              S² Automotive was founded by two owners who share a name and a standard. Every vehicle is hand-picked and
              fully inspected before it hits the lot, our pricing is straightforward, and our team is here to help you
              drive away happy — not to pressure you.
            </p>
            <div className="grid-2" style={{ marginTop: 34, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 22 }}>
              {WHY_FEATURES.map((f) => (
                <div key={f.title} style={{ background: "#fffdf9", border: "1px solid rgba(58,47,28,0.1)", borderRadius: 16, padding: 22, boxShadow: "0 6px 18px rgba(58,47,28,0.05)" }}>
                  <div style={{ fontSize: 24, marginBottom: 10 }}>{f.icon}</div>
                  <div style={{ fontWeight: 800, fontSize: 16, color: "#2a2318", marginBottom: 6 }}>{f.title}</div>
                  <div style={{ fontSize: 13.5, color: "#8a8172", lineHeight: 1.55 }}>{f.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Financing + Trade split */}
      <section className="grid-2" style={{ maxWidth: 1240, margin: "0 auto", padding: "0 28px 84px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
        <div
          id="financing"
          style={{
            background: "radial-gradient(600px 300px at 100% 0%, rgba(216,169,90,0.2), transparent 60%), #fffdf9",
            border: "1px solid rgba(177,127,56,0.28)",
            borderRadius: 20,
            padding: 42,
            boxShadow: "0 10px 30px rgba(58,47,28,0.06)",
          }}
        >
          <div style={{ fontSize: 12.5, letterSpacing: "0.16em", textTransform: "uppercase", color: "#9a6b1f", fontWeight: 700, marginBottom: 14 }}>Financing</div>
          <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 34, fontWeight: 700, color: "#2a2318", lineHeight: 1.08, marginBottom: 14 }}>
            Get pre-approved in minutes
          </h3>
          <p style={{ fontSize: 15.5, lineHeight: 1.6, color: "#6b6152", marginBottom: 26 }}>
            Apply online with no impact to your credit score. We work with multiple lenders to find the right monthly
            payment for your budget.
          </p>
          <Link href="/financing" style={{ display: "inline-block", background: "linear-gradient(135deg,#d8a95a,#b17f38)", color: "#241d14", fontWeight: 800, fontSize: 15, padding: "14px 28px", borderRadius: 999 }}>
            Start My Application
          </Link>
        </div>
        <div
          id="trade"
          style={{
            background: "radial-gradient(600px 300px at 100% 0%, rgba(216,169,90,0.2), transparent 60%), #fffdf9",
            border: "1px solid rgba(177,127,56,0.28)",
            borderRadius: 20,
            padding: 42,
            boxShadow: "0 10px 30px rgba(58,47,28,0.06)",
          }}
        >
          <div style={{ fontSize: 12.5, letterSpacing: "0.16em", textTransform: "uppercase", color: "#9a6b1f", fontWeight: 700, marginBottom: 14 }}>Sell / Trade</div>
          <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 34, fontWeight: 700, color: "#2a2318", lineHeight: 1.08, marginBottom: 14 }}>
            Get top dollar for your car
          </h3>
          <p style={{ fontSize: 15.5, lineHeight: 1.6, color: "#6b6152", marginBottom: 26 }}>
            Whether you&apos;re trading up or just selling, bring your vehicle in for a free, no-obligation appraisal.
            Fair offers, paid on the spot.
          </p>
          <a href={site.phoneHref} style={{ display: "inline-block", border: "1px solid rgba(58,47,28,0.25)", color: "#3a3226", fontWeight: 700, fontSize: 15, padding: "14px 28px", borderRadius: 999 }}>
            Value My Trade
          </a>
        </div>
      </section>

      {/* Visit / Contact */}
      <section id="visit" style={{ padding: "84px 28px", background: "#241d14", color: "#efe9dd", borderTop: "1px solid rgba(216,169,90,0.2)" }}>
        <div className="grid-2" style={{ maxWidth: 1240, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }}>
          <div>
            <div style={{ fontSize: 12.5, letterSpacing: "0.16em", textTransform: "uppercase", color: "#d8a95a", fontWeight: 700, marginBottom: 12 }}>Visit Us</div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 46, fontWeight: 700, color: "#fff", lineHeight: 1.05, marginBottom: 26 }}>
              Come see us in Gainesville
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 440 }}>
              <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                <span style={{ color: "#d8a95a", fontSize: 20, lineHeight: 1.4 }}>◆</span>
                <div>
                  <div style={{ fontWeight: 800, color: "#fff", fontSize: 16 }}>Address</div>
                  <div style={{ color: "#c9bfae", fontSize: 15 }}>2420 Brown Bridge Rd<br />Gainesville, GA 30501</div>
                </div>
              </div>
              <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                <span style={{ color: "#d8a95a", fontSize: 20, lineHeight: 1.4 }}>◆</span>
                <div>
                  <div style={{ fontWeight: 800, color: "#fff", fontSize: 16 }}>Phone</div>
                  <a href={site.phoneHref} style={{ color: "#e6cf9a", fontSize: 15, fontWeight: 600 }}>{site.phone}</a>
                </div>
              </div>
              <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                <span style={{ color: "#d8a95a", fontSize: 20, lineHeight: 1.4 }}>◆</span>
                <div>
                  <div style={{ fontWeight: 800, color: "#fff", fontSize: 16 }}>Hours</div>
                  <div style={{ color: "#c9bfae", fontSize: 15 }}>{site.hoursFull}<br />Sunday: Closed</div>
                </div>
              </div>
            </div>
            <div style={{ marginTop: 32, display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a href={site.mapsHref} style={{ background: "linear-gradient(135deg,#d8a95a,#b17f38)", color: "#241d14", fontWeight: 800, fontSize: 15, padding: "14px 28px", borderRadius: 999 }}>
                Get Directions
              </a>
              <a href={site.phoneHref} style={{ border: "1px solid rgba(216,169,90,0.5)", color: "#efe9dd", fontWeight: 700, fontSize: 15, padding: "14px 28px", borderRadius: 999 }}>
                Call the Team
              </a>
            </div>
          </div>
          <div className="grid-2" style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 20, alignItems: "stretch" }}>
            <div
              style={{
                borderRadius: 18,
                border: "1px solid rgba(216,169,90,0.28)",
                background: "repeating-linear-gradient(135deg,#2e261a,#2e261a 12px,#281f15 12px,#281f15 24px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: 260,
              }}
            >
              <span style={{ fontFamily: "monospace", fontSize: 12, color: "#8a7d63" }}>[ location map ]</span>
            </div>
            <div style={{ background: "#fff", borderRadius: 18, padding: 18, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12 }}>
              {hasQr ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src="/assets/s2-qr.png" alt="Scan to visit S2 Automotive" style={{ width: "100%", maxWidth: 150, display: "block" }} />
              ) : (
                <div
                  style={{
                    width: "100%",
                    maxWidth: 150,
                    aspectRatio: "1/1",
                    background: "repeating-linear-gradient(135deg,#efe9dd,#efe9dd 10px,#e6ded0 10px,#e6ded0 20px)",
                    borderRadius: 8,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span style={{ fontFamily: "monospace", fontSize: 11, color: "#9c9484" }}>[ QR code ]</span>
                </div>
              )}
              <div style={{ fontSize: 12, fontWeight: 700, color: "#3a2f1c", textAlign: "center", letterSpacing: "0.02em" }}>
                Scan to save
                <br />
                our contact
              </div>
            </div>
          </div>
        </div>
      </section>

      <RichFooter />
    </div>
  );
}

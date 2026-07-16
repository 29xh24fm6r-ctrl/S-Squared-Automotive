import { assetExists } from "@/lib/assets";
import { site } from "@/lib/theme";

const HAS_HERO_IMAGE = assetExists("service-header.webp");

const BADGES = ["Certified Technicians", "Same-Day Service", "All Makes & Models"];

export default function ServiceHero() {
  return (
    <section id="top" style={{ background: "#0d0b08" }}>
      {HAS_HERO_IMAGE ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src="/assets/service-header.webp"
          alt="S² Automotive Service Center — Gainesville, GA"
          style={{ display: "block", width: "100%", height: "auto" }}
        />
      ) : (
        <div
          style={{
            position: "relative",
            background:
              "radial-gradient(1100px 500px at 18% 0%, rgba(216,169,90,0.25), transparent 60%), linear-gradient(120deg, #17130d 0%, #241d14 55%, #362715 100%)",
            padding: "72px 28px 56px",
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <div style={{ fontSize: 12.5, letterSpacing: "0.22em", textTransform: "uppercase", color: "#d8a95a", fontWeight: 700, marginBottom: 16 }}>
              S² Automotive
            </div>
            <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: "clamp(38px, 6vw, 62px)", lineHeight: 1.03, color: "#fff" }}>
              SERVICE CENTER
            </h1>
            <p style={{ marginTop: 16, fontSize: 17, lineHeight: 1.6, color: "#c9bfae" }}>
              Honest, reliable maintenance and repairs for every make and model — done right, the first time, right here
              in Gainesville, GA.
            </p>
            <div style={{ display: "flex", gap: 20, justifyContent: "center", flexWrap: "wrap", marginTop: 26 }}>
              {BADGES.map((b) => (
                <span key={b} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, fontWeight: 700, color: "#efe9dd" }}>
                  <span style={{ color: "#d8a95a" }}>◆</span> {b}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export function ServiceHeroCtas() {
  return (
    <div style={{ maxWidth: 1240, margin: "0 auto", padding: "24px 28px 4px", display: "flex", gap: 14, flexWrap: "wrap", justifyContent: "center" }}>
      <a
        href="#schedule"
        style={{
          background: "linear-gradient(135deg,#e6cf9a,#c89b52)",
          color: "#241d14",
          fontWeight: 800,
          fontSize: 15.5,
          padding: "16px 32px",
          borderRadius: 999,
          boxShadow: "0 10px 26px rgba(177,127,56,0.3)",
        }}
      >
        Schedule Service
      </a>
      <a
        href={site.phoneHref}
        style={{
          border: "1px solid rgba(58,47,28,0.25)",
          color: "#3a3226",
          fontWeight: 700,
          fontSize: 15.5,
          padding: "16px 32px",
          borderRadius: 999,
        }}
      >
        Call {site.phone}
      </a>
    </div>
  );
}

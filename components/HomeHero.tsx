import Link from "next/link";
import { assetExists } from "@/lib/assets";
import PhotoPlaceholder from "./PhotoPlaceholder";

const HAS_HERO_IMAGE = assetExists("home-hero.png");

const TRUST_ITEMS = [
  { icon: "◆", label: "Female Owned\n& Operated" },
  { icon: "✓", label: "Trusted\n& Transparent" },
  { icon: "🤝", label: "Fair Prices.\nFair Trades." },
  { icon: "🔑", label: "Simple Financing.\nReal Solutions." },
  { icon: "👥", label: "Relationships That\nLast." },
];

export default function HomeHero() {
  return (
    <section id="top" style={{ background: "#0d0b08" }}>
      {HAS_HERO_IMAGE ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src="/assets/home-hero.png"
          alt="S² Automotive — Driven by Integrity. Focused on You. Gainesville, GA"
          style={{ display: "block", width: "100%", height: "auto" }}
        />
      ) : (
        <div
          style={{
            position: "relative",
            background:
              "radial-gradient(1100px 500px at 82% 0%, rgba(216,169,90,0.28), transparent 60%), linear-gradient(120deg, #17130d 0%, #241d14 45%, #362715 100%)",
            padding: "56px 28px 40px",
            overflow: "hidden",
          }}
        >
          <div style={{ maxWidth: 1240, margin: "0 auto", display: "grid", gridTemplateColumns: "1.15fr 0.85fr", gap: 40, alignItems: "center" }} className="grid-2">
            <div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 22 }}>
                <span style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: 34, color: "#d8a95a" }}>
                  S<sup style={{ fontSize: "0.55em" }}>2</sup>
                </span>
                <span style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: 15, letterSpacing: "0.28em", color: "#c9bfae" }}>
                  AUTOMOTIVE
                </span>
              </div>
              <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: "clamp(34px, 5vw, 54px)", lineHeight: 1.04, color: "#fff" }}>
                Driven by integrity.
                <br />
                <span
                  style={{
                    background: "linear-gradient(120deg,#f0dcae,#d8a95a)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Focused on you.
                </span>
              </h1>
              <p style={{ marginTop: 18, fontSize: 16, lineHeight: 1.65, color: "#c9bfae", maxWidth: 560 }}>
                <strong style={{ color: "#e6cf9a" }}>Female Owned &amp; Operated.</strong> Creating an automotive experience
                built on trust, honesty, and relationships that last long after you drive away — with simple financing,
                fair trade values, and a team that treats you right, right here in{" "}
                <strong style={{ color: "#e6cf9a" }}>Gainesville, GA.</strong>
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 14, marginTop: 30 }} className="grid-4">
                {TRUST_ITEMS.map((item) => (
                  <div key={item.label} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    <span style={{ color: "#d8a95a", fontSize: 18 }}>{item.icon}</span>
                    <span style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: "0.02em", color: "#efe9dd", lineHeight: 1.35, whiteSpace: "pre-line" }}>
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <PhotoPlaceholder label="dealership storefront photo" dark style={{ aspectRatio: "4/3", borderRadius: 20, border: "1px solid rgba(216,169,90,0.2)" }} />
          </div>
          <div
            style={{
              maxWidth: 1240,
              margin: "40px auto 0",
              paddingTop: 22,
              borderTop: "1px solid rgba(216,169,90,0.2)",
              textAlign: "center",
              fontSize: 13,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#c9bfae",
              fontWeight: 700,
            }}
          >
            Your Journey. Our Commitment.{" "}
            <span style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", textTransform: "none", letterSpacing: "normal", color: "#e6cf9a", fontWeight: 600 }}>
              &nbsp;|&nbsp; Let&apos;s Drive Together.
            </span>
          </div>
        </div>
      )}
    </section>
  );
}

export function HomeHeroCtas() {
  return (
    <div style={{ maxWidth: 1240, margin: "0 auto", padding: "24px 28px 4px", display: "flex", gap: 14, flexWrap: "wrap", justifyContent: "center" }}>
      <Link
        href="/inventory"
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
        Browse Inventory
      </Link>
      <Link
        href="/financing"
        style={{
          border: "1px solid rgba(58,47,28,0.25)",
          color: "#3a3226",
          fontWeight: 700,
          fontSize: 15.5,
          padding: "16px 32px",
          borderRadius: 999,
        }}
      >
        Get Pre-Approved
      </Link>
    </div>
  );
}

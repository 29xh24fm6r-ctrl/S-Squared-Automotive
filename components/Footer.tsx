import Link from "next/link";
import Logo from "./Logo";
import { site } from "@/lib/theme";

export function SimpleFooter() {
  return (
    <footer style={{ background: "#fffdf9", borderTop: "1px solid rgba(58,47,28,0.1)", padding: "48px 28px 30px" }}>
      <div
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          gap: 28,
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <Logo height={66} />
        <div style={{ fontSize: 14.5, color: "#6b6152", lineHeight: 1.6 }}>
          {site.addressFull} · <a href={site.phoneHref} style={{ fontWeight: 600 }}>{site.phone}</a> · Mon–Sat 9AM–7PM
        </div>
      </div>
      <div
        style={{
          maxWidth: 1240,
          margin: "24px auto 0",
          paddingTop: 20,
          borderTop: "1px solid rgba(58,47,28,0.1)",
          fontSize: 13,
          color: "#9c9484",
        }}
      >
        © 2026 S² Automotive. All rights reserved.
      </div>
    </footer>
  );
}

export function RichFooter() {
  return (
    <footer style={{ background: "#fffdf9", borderTop: "1px solid rgba(58,47,28,0.1)", padding: "56px 28px 32px" }}>
      <div
        className="grid-3"
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1.6fr 1fr 1fr",
          gap: 44,
          paddingBottom: 40,
          borderBottom: "1px solid rgba(58,47,28,0.1)",
        }}
      >
        <div>
          <div style={{ marginBottom: 18 }}>
            <Logo height={78} />
          </div>
          <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "#8a8172", maxWidth: 340 }}>
            Gainesville&apos;s trusted destination for quality pre-owned vehicles, easy financing, and honest service.
          </p>
        </div>
        <div>
          <div style={{ fontWeight: 800, color: "#2a2318", fontSize: 14, letterSpacing: "0.02em", marginBottom: 16 }}>Explore</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 11, fontSize: 14.5 }}>
            <Link href="/inventory" style={{ color: "#6b6152" }}>Inventory</Link>
            <Link href="/financing" style={{ color: "#6b6152" }}>Financing</Link>
            <Link href="/#trade" style={{ color: "#6b6152" }}>Sell / Trade</Link>
            <Link href="/#why" style={{ color: "#6b6152" }}>Why S²</Link>
          </div>
        </div>
        <div>
          <div style={{ fontWeight: 800, color: "#2a2318", fontSize: 14, letterSpacing: "0.02em", marginBottom: 16 }}>Get in touch</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 11, fontSize: 14.5, color: "#6b6152" }}>
            <span>2420 Brown Bridge Rd<br />Gainesville, GA 30501</span>
            <a href={site.phoneHref} style={{ color: "#9a6b1f", fontWeight: 600 }}>{site.phone}</a>
            <span>Mon–Sat · 9AM–7PM</span>
          </div>
        </div>
      </div>
      <div
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          paddingTop: 24,
          display: "flex",
          justifyContent: "space-between",
          gap: 16,
          flexWrap: "wrap",
          fontSize: 13,
          color: "#9c9484",
        }}
      >
        <span>© 2026 S² Automotive. All rights reserved.</span>
        <span>Gainesville, Georgia</span>
      </div>
    </footer>
  );
}

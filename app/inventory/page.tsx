import type { Metadata } from "next";
import Link from "next/link";
import TopStrip from "@/components/TopStrip";
import Header from "@/components/Header";
import InventoryBrowser from "@/components/InventoryBrowser";
import { SimpleFooter } from "@/components/Footer";
import { site } from "@/lib/theme";

export const metadata: Metadata = {
  title: "Inventory | S² Automotive",
  description: "Browse S² Automotive's hand-selected inventory of pre-owned cars, SUVs, and trucks in Gainesville, GA.",
};

export default function InventoryPage() {
  return (
    <div className="page-bg">
      <TopStrip />
      <Header />

      {/* Page head */}
      <section
        style={{
          background: "radial-gradient(900px 400px at 78% -20%, rgba(216,169,90,0.22), transparent 62%), linear-gradient(180deg,#fffdf9,#f7f4ee)",
          borderBottom: "1px solid rgba(58,47,28,0.08)",
          padding: "52px 28px 44px",
        }}
      >
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ fontSize: 12.5, letterSpacing: "0.16em", textTransform: "uppercase", color: "#9a6b1f", fontWeight: 700, marginBottom: 10 }}>
            Our Inventory
          </div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 52, fontWeight: 700, color: "#2a2318", lineHeight: 1.02 }}>
            Find your next vehicle
          </h1>
          <p style={{ marginTop: 12, fontSize: 16, color: "#6b6152", maxWidth: 560 }}>
            Every car is hand-selected and passes our 150-point inspection. Browse the lot below or call us and
            we&apos;ll help you find the perfect fit.
          </p>
        </div>
      </section>

      <InventoryBrowser />

      {/* CTA band */}
      <section style={{ background: "#241d14", color: "#efe9dd", padding: "64px 28px" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 32, flexWrap: "wrap" }}>
          <div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 38, fontWeight: 700, color: "#fff", lineHeight: 1.05 }}>
              Don&apos;t see the one? We&apos;ll find it.
            </h2>
            <p style={{ marginTop: 10, fontSize: 16, color: "#c9bfae", maxWidth: 520 }}>
              New arrivals hit the lot weekly. Tell us what you&apos;re looking for and we&apos;ll track it down for you.
            </p>
          </div>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <a href={site.phoneHref} style={{ background: "linear-gradient(135deg,#d8a95a,#b17f38)", color: "#241d14", fontWeight: 800, fontSize: 15, padding: "15px 30px", borderRadius: 999 }}>
              Call the Team
            </a>
            <Link href="/financing" style={{ border: "1px solid rgba(216,169,90,0.5)", color: "#efe9dd", fontWeight: 700, fontSize: 15, padding: "15px 30px", borderRadius: 999 }}>
              Get Pre-Approved
            </Link>
          </div>
        </div>
      </section>

      <SimpleFooter />
    </div>
  );
}

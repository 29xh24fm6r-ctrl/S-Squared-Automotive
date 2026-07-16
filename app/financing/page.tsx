import type { Metadata } from "next";
import TopStrip from "@/components/TopStrip";
import Header from "@/components/Header";
import FinancingWizard from "@/components/FinancingWizard";
import { SimpleFooter } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Financing | S² Automotive",
  description: "Apply for financing with S² Automotive — a soft credit check with no impact to your credit score.",
};

export default function FinancingPage() {
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
            Financing
          </div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 52, fontWeight: 700, color: "#2a2318", lineHeight: 1.02 }}>
            Apply for financing
          </h1>
          <p style={{ marginTop: 12, fontSize: 16, color: "#6b6152", maxWidth: 600 }}>
            Fill out the secure application below and one of our finance specialists will reach out — usually the same
            day. Applying does <strong>not</strong> affect your credit score.
          </p>
        </div>
      </section>

      <FinancingWizard />

      <SimpleFooter />
    </div>
  );
}

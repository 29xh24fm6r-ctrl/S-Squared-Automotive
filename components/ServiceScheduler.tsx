"use client";

import { useState } from "react";
import Link from "next/link";
import { site } from "@/lib/theme";

interface FormState {
  name: string;
  phone: string;
  vehicle: string;
  service: string;
  date: string;
  notes: string;
}

const INITIAL: FormState = { name: "", phone: "", vehicle: "", service: "", date: "", notes: "" };

const inputStyle = (borderColor: string): React.CSSProperties => ({
  width: "100%",
  fontFamily: "Manrope, sans-serif",
  fontSize: 15,
  padding: "12px 14px",
  border: `1px solid ${borderColor}`,
  borderRadius: 10,
  background: "#fff",
  color: "#3a3226",
  outline: "none",
});

const labelStyle: React.CSSProperties = { display: "block", fontSize: 13, fontWeight: 700, color: "#3a3226", marginBottom: 7 };

const SERVICES = [
  "Oil & Filter Change",
  "Tire Rotation / Replacement",
  "Brake Service",
  "Battery & Diagnostics",
  "Fluid Exchange",
  "Multi-Point Inspection",
  "Not sure — general checkup",
];

export default function ServiceScheduler() {
  const [sent, setSent] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [f, setF] = useState<FormState>(INITIAL);

  const upd = <K extends keyof FormState>(key: K) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setF((prev) => ({ ...prev, [key]: e.target.value }));
  };

  const fieldErr = (key: keyof FormState): string => {
    if (!showError) return "rgba(58,47,28,0.16)";
    const bad = "#d98b4a";
    if (key === "phone") return f.phone.replace(/\D/g, "").length < 10 ? bad : "rgba(58,47,28,0.16)";
    if (!f[key] || !String(f[key]).trim()) return bad;
    return "rgba(58,47,28,0.16)";
  };

  const submit = () => {
    if (!f.name.trim() || !f.phone.trim() || !f.vehicle.trim() || !f.service.trim()) {
      setShowError(true);
      setErrorMsg("Please fill in all required fields.");
      return;
    }
    if (f.phone.replace(/\D/g, "").length < 10) {
      setShowError(true);
      setErrorMsg("Please enter a valid phone number.");
      return;
    }
    setShowError(false);
    setErrorMsg("");
    setSent(true);
  };

  return (
    <section id="schedule" style={{ maxWidth: 1240, margin: "0 auto", padding: "0 28px 84px" }}>
      <div
        className="grid-2"
        style={{
          display: "grid",
          gridTemplateColumns: "0.85fr 1.15fr",
          background: "#fffdf9",
          border: "1px solid rgba(58,47,28,0.1)",
          borderRadius: 22,
          boxShadow: "0 12px 34px rgba(58,47,28,0.07)",
          overflow: "hidden",
        }}
      >
        {/* Info column */}
        <div style={{ background: "#241d14", color: "#efe9dd", padding: 42, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div>
            <div style={{ fontSize: 12.5, letterSpacing: "0.16em", textTransform: "uppercase", color: "#d8a95a", fontWeight: 700, marginBottom: 12 }}>
              Schedule Service
            </div>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 32, fontWeight: 700, color: "#fff", lineHeight: 1.08, marginBottom: 22 }}>
              Book your appointment
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <span style={{ color: "#d8a95a", fontSize: 18 }}>◆</span>
                <div style={{ fontSize: 14, color: "#c9bfae", lineHeight: 1.5 }}>Certified technicians on every make &amp; model</div>
              </div>
              <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <span style={{ color: "#d8a95a", fontSize: 18 }}>◆</span>
                <div style={{ fontSize: 14, color: "#c9bfae", lineHeight: 1.5 }}>Most same-day services completed while you wait</div>
              </div>
              <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <span style={{ color: "#d8a95a", fontSize: 18 }}>◆</span>
                <div style={{ fontSize: 14, color: "#c9bfae", lineHeight: 1.5 }}>Upfront pricing — no surprise fees</div>
              </div>
            </div>
          </div>
          <div style={{ marginTop: 32 }}>
            <div style={{ fontSize: 13, color: "#b6ab97", marginBottom: 8 }}>Prefer to call?</div>
            <a href={site.phoneHref} style={{ display: "inline-block", background: "linear-gradient(135deg,#d8a95a,#b17f38)", color: "#241d14", fontWeight: 800, fontSize: 15, padding: "13px 24px", borderRadius: 999 }}>
              {site.phone}
            </a>
          </div>
        </div>

        {/* Form column */}
        <div style={{ padding: 42 }}>
          {sent ? (
            <div style={{ textAlign: "center", padding: "26px 10px" }}>
              <div style={{ width: 66, height: 66, margin: "0 auto 20px", borderRadius: "50%", background: "linear-gradient(135deg,#d8a95a,#b17f38)", display: "flex", alignItems: "center", justifyContent: "center", color: "#241d14", fontSize: 32, fontWeight: 800 }}>✓</div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 34, fontWeight: 700, color: "#2a2318", marginBottom: 10 }}>
                Appointment requested, {f.name.split(" ")[0] || "there"}!
              </h3>
              <p style={{ fontSize: 16, color: "#6b6152", lineHeight: 1.6, maxWidth: 440, margin: "0 auto 26px" }}>
                Thanks for scheduling with S² Automotive. Our service team will call <strong>{f.phone}</strong> to confirm your appointment time. Need it sooner? Give us a call.
              </p>
              <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
                <a href={site.phoneHref} style={{ background: "linear-gradient(135deg,#d8a95a,#b17f38)", color: "#241d14", fontWeight: 800, fontSize: 15, padding: "14px 28px", borderRadius: 999 }}>Call {site.phone}</a>
                <Link href="/" style={{ border: "1px solid rgba(58,47,28,0.25)", color: "#3a3226", fontWeight: 700, fontSize: 15, padding: "14px 28px", borderRadius: 999 }}>Back Home</Link>
              </div>
            </div>
          ) : (
            <div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 28, fontWeight: 700, color: "#2a2318", marginBottom: 6 }}>Request an appointment</h3>
              <p style={{ fontSize: 14, color: "#8a8172", marginBottom: 24 }}>We&apos;ll confirm your time by phone or text.</p>
              <div className="grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
                <label><span style={labelStyle}>Full name *</span><input value={f.name} onChange={upd("name")} placeholder="Jane Smith" style={inputStyle(fieldErr("name"))} /></label>
                <label><span style={labelStyle}>Phone *</span><input value={f.phone} onChange={upd("phone")} type="tel" placeholder="(678) 555-0123" style={inputStyle(fieldErr("phone"))} /></label>
                <label style={{ gridColumn: "1 / -1" }}><span style={labelStyle}>Vehicle (year / make / model) *</span><input value={f.vehicle} onChange={upd("vehicle")} placeholder="2019 Honda Accord" style={inputStyle(fieldErr("vehicle"))} /></label>
                <label>
                  <span style={labelStyle}>Service needed *</span>
                  <select value={f.service} onChange={upd("service")} style={{ ...inputStyle(fieldErr("service")), cursor: "pointer" }}>
                    <option value="">Select…</option>
                    {SERVICES.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </label>
                <label><span style={labelStyle}>Preferred date</span><input value={f.date} onChange={upd("date")} type="date" style={inputStyle("rgba(58,47,28,0.16)")} /></label>
                <label style={{ gridColumn: "1 / -1" }}>
                  <span style={labelStyle}>Notes</span>
                  <textarea value={f.notes} onChange={upd("notes")} rows={3} placeholder="Anything we should know before you arrive?" style={{ ...inputStyle("rgba(58,47,28,0.16)"), resize: "vertical" }} />
                </label>
              </div>

              {showError && (
                <div style={{ marginTop: 20, background: "#fbeee4", border: "1px solid #e0a878", borderRadius: 10, padding: "12px 16px", fontSize: 13.5, color: "#93531f", fontWeight: 600 }}>
                  {errorMsg}
                </div>
              )}

              <div style={{ marginTop: 28 }}>
                <button
                  onClick={submit}
                  style={{
                    width: "100%",
                    fontFamily: "Manrope, sans-serif",
                    fontSize: 15,
                    fontWeight: 800,
                    color: "#241d14",
                    background: "linear-gradient(135deg,#d8a95a,#b17f38)",
                    border: "none",
                    padding: "16px 32px",
                    borderRadius: 999,
                    cursor: "pointer",
                    boxShadow: "0 8px 20px rgba(177,127,56,0.3)",
                  }}
                >
                  Request Appointment
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

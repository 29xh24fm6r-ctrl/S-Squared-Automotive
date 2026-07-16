"use client";

import { useState } from "react";
import Link from "next/link";
import { site } from "@/lib/theme";

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  employment: string;
  employer: string;
  income: string;
  jobTime: string;
  housing: string;
  rentOwn: string;
  vehicle: string;
  down: string;
  credit: string;
  trade: string;
  contact: string;
  notes: string;
  consent: boolean;
}

const INITIAL: FormState = {
  firstName: "", lastName: "", email: "", phone: "", address: "",
  employment: "", employer: "", income: "", jobTime: "", housing: "", rentOwn: "",
  vehicle: "", down: "", credit: "", trade: "No", contact: "Phone", notes: "", consent: false,
};

const VALID_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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

const STEP_DEFS = [
  { num: "1", label: "About You" },
  { num: "2", label: "Employment" },
  { num: "3", label: "Vehicle" },
];

export default function FinancingWizard() {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [showError, setShowError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [f, setF] = useState<FormState>(INITIAL);

  const upd = <K extends keyof FormState>(key: K) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const target = e.target;
    const val = target instanceof HTMLInputElement && target.type === "checkbox" ? target.checked : target.value;
    setF((prev) => ({ ...prev, [key]: val as FormState[K] }));
  };

  const validateStep = (s: number): string => {
    if (s === 1) {
      if (!f.firstName.trim() || !f.lastName.trim() || !f.email.trim() || !f.phone.trim()) return "Please fill in all required fields.";
      if (!VALID_EMAIL.test(f.email)) return "Please enter a valid email address.";
      if (f.phone.replace(/\D/g, "").length < 10) return "Please enter a valid phone number.";
    }
    if (s === 2) {
      if (!f.employment) return "Please select your employment status.";
      if (!f.income.trim()) return "Please enter your monthly income.";
    }
    if (s === 3) {
      if (!f.consent) return "Please authorize the soft credit check to continue.";
    }
    return "";
  };

  const fieldErr = (key: keyof FormState): string => {
    if (!showError) return "rgba(58,47,28,0.16)";
    const bad = "#d98b4a";
    if (key === "email") return !f.email.trim() || !VALID_EMAIL.test(f.email) ? bad : "rgba(58,47,28,0.16)";
    if (key === "phone") return f.phone.replace(/\D/g, "").length < 10 ? bad : "rgba(58,47,28,0.16)";
    const v = f[key];
    if (!v || !String(v).trim()) return bad;
    return "rgba(58,47,28,0.16)";
  };

  const next = () => {
    const msg = validateStep(step);
    if (msg) {
      setShowError(true);
      setErrorMsg(msg);
      return;
    }
    setShowError(false);
    setErrorMsg("");
    setStep((s) => (s < 3 ? ((s + 1) as 1 | 2 | 3 | 4) : 4));
  };

  const back = () => {
    if (step > 1) {
      setShowError(false);
      setErrorMsg("");
      setStep((s) => (s - 1) as 1 | 2 | 3 | 4);
    }
  };

  const done = step === 4;

  return (
    <section style={{ maxWidth: 1240, margin: "0 auto", padding: "40px 28px 84px", display: "grid", gridTemplateColumns: "1.55fr 0.95fr", gap: 40, alignItems: "start" }} className="grid-2">
      <div style={{ background: "#fffdf9", border: "1px solid rgba(58,47,28,0.1)", borderRadius: 22, boxShadow: "0 12px 34px rgba(58,47,28,0.07)", overflow: "hidden" }}>
        {!done && (
          <div style={{ display: "flex", borderBottom: "1px solid rgba(58,47,28,0.1)" }}>
            {STEP_DEFS.map((s, i) => {
              const idx = i + 1;
              const active = idx === step;
              const past = idx < step;
              const bar = active ? "#b17f38" : past ? "#d8a95a" : "transparent";
              const bg = active ? "rgba(216,169,90,0.08)" : "transparent";
              const numColor = active || past ? "#9a6b1f" : "#a99f8d";
              const labelColor = active ? "#2a2318" : past ? "#6b6152" : "#a99f8d";
              return (
                <div key={s.num} style={{ flex: 1, padding: "18px 12px", textAlign: "center", borderBottom: `3px solid ${bar}`, background: bg }}>
                  <div style={{ fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 700, color: numColor }}>Step {s.num}</div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: labelColor, marginTop: 3 }}>{s.label}</div>
                </div>
              );
            })}
          </div>
        )}

        <div style={{ padding: 32 }}>
          {step === 1 && (
            <div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 28, fontWeight: 700, color: "#2a2318", marginBottom: 6 }}>About you</h3>
              <p style={{ fontSize: 14, color: "#8a8172", marginBottom: 24 }}>Tell us who we&apos;re getting approved.</p>
              <div className="grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
                <label><span style={labelStyle}>First name *</span><input value={f.firstName} onChange={upd("firstName")} placeholder="Jane" style={inputStyle(fieldErr("firstName"))} /></label>
                <label><span style={labelStyle}>Last name *</span><input value={f.lastName} onChange={upd("lastName")} placeholder="Smith" style={inputStyle(fieldErr("lastName"))} /></label>
                <label><span style={labelStyle}>Email *</span><input value={f.email} onChange={upd("email")} type="email" placeholder="jane@email.com" style={inputStyle(fieldErr("email"))} /></label>
                <label><span style={labelStyle}>Phone *</span><input value={f.phone} onChange={upd("phone")} type="tel" placeholder="(678) 555-0123" style={inputStyle(fieldErr("phone"))} /></label>
                <label style={{ gridColumn: "1 / -1" }}><span style={labelStyle}>Street address</span><input value={f.address} onChange={upd("address")} placeholder="123 Main St, Gainesville, GA" style={inputStyle("rgba(58,47,28,0.16)")} /></label>
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 28, fontWeight: 700, color: "#2a2318", marginBottom: 6 }}>Employment &amp; income</h3>
              <p style={{ fontSize: 14, color: "#8a8172", marginBottom: 24 }}>This helps us match you to the right lender.</p>
              <div className="grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
                <label>
                  <span style={labelStyle}>Employment status *</span>
                  <select value={f.employment} onChange={upd("employment")} style={{ ...inputStyle(fieldErr("employment")), cursor: "pointer" }}>
                    <option value="">Select…</option>
                    <option value="Employed full-time">Employed full-time</option>
                    <option value="Employed part-time">Employed part-time</option>
                    <option value="Self-employed">Self-employed</option>
                    <option value="Retired">Retired</option>
                    <option value="Other">Other</option>
                  </select>
                </label>
                <label><span style={labelStyle}>Employer</span><input value={f.employer} onChange={upd("employer")} placeholder="Company name" style={inputStyle("rgba(58,47,28,0.16)")} /></label>
                <label><span style={labelStyle}>Gross monthly income *</span><input value={f.income} onChange={upd("income")} placeholder="$4,000" style={inputStyle(fieldErr("income"))} /></label>
                <label>
                  <span style={labelStyle}>Time at job</span>
                  <select value={f.jobTime} onChange={upd("jobTime")} style={{ ...inputStyle("rgba(58,47,28,0.16)"), cursor: "pointer" }}>
                    <option value="">Select…</option>
                    <option value="Less than 1 year">Less than 1 year</option>
                    <option value="1–2 years">1–2 years</option>
                    <option value="3–5 years">3–5 years</option>
                    <option value="5+ years">5+ years</option>
                  </select>
                </label>
                <label><span style={labelStyle}>Monthly housing payment</span><input value={f.housing} onChange={upd("housing")} placeholder="$1,200" style={inputStyle("rgba(58,47,28,0.16)")} /></label>
                <label>
                  <span style={labelStyle}>Rent or own?</span>
                  <select value={f.rentOwn} onChange={upd("rentOwn")} style={{ ...inputStyle("rgba(58,47,28,0.16)"), cursor: "pointer" }}>
                    <option value="">Select…</option>
                    <option value="Rent">Rent</option>
                    <option value="Own">Own</option>
                    <option value="Other">Other</option>
                  </select>
                </label>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 28, fontWeight: 700, color: "#2a2318", marginBottom: 6 }}>Vehicle &amp; down payment</h3>
              <p style={{ fontSize: 14, color: "#8a8172", marginBottom: 24 }}>Tell us what you&apos;re after — or leave it to us.</p>
              <div className="grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
                <label style={{ gridColumn: "1 / -1" }}><span style={labelStyle}>Vehicle of interest</span><input value={f.vehicle} onChange={upd("vehicle")} placeholder="e.g. 2022 Toyota RAV4 — or 'not sure yet'" style={inputStyle("rgba(58,47,28,0.16)")} /></label>
                <label><span style={labelStyle}>Estimated down payment</span><input value={f.down} onChange={upd("down")} placeholder="$2,000" style={inputStyle("rgba(58,47,28,0.16)")} /></label>
                <label>
                  <span style={labelStyle}>Credit range (optional)</span>
                  <select value={f.credit} onChange={upd("credit")} style={{ ...inputStyle("rgba(58,47,28,0.16)"), cursor: "pointer" }}>
                    <option value="">Prefer not to say</option>
                    <option value="Excellent (720+)">Excellent (720+)</option>
                    <option value="Good (660–719)">Good (660–719)</option>
                    <option value="Fair (600–659)">Fair (600–659)</option>
                    <option value="Rebuilding (below 600)">Rebuilding (below 600)</option>
                  </select>
                </label>
                <label>
                  <span style={labelStyle}>Trade-in vehicle?</span>
                  <select value={f.trade} onChange={upd("trade")} style={{ ...inputStyle("rgba(58,47,28,0.16)"), cursor: "pointer" }}>
                    <option value="No">No trade-in</option>
                    <option value="Yes">Yes, I have a trade-in</option>
                  </select>
                </label>
                <label>
                  <span style={labelStyle}>Preferred contact</span>
                  <select value={f.contact} onChange={upd("contact")} style={{ ...inputStyle("rgba(58,47,28,0.16)"), cursor: "pointer" }}>
                    <option value="Phone">Phone</option>
                    <option value="Text">Text</option>
                    <option value="Email">Email</option>
                  </select>
                </label>
                <label style={{ gridColumn: "1 / -1" }}>
                  <span style={labelStyle}>Anything else we should know?</span>
                  <textarea value={f.notes} onChange={upd("notes")} rows={3} placeholder="Questions, timing, budget…" style={{ ...inputStyle("rgba(58,47,28,0.16)"), resize: "vertical" }} />
                </label>
                <label style={{ display: "flex", gap: 10, alignItems: "flex-start", gridColumn: "1 / -1", cursor: "pointer" }}>
                  <input type="checkbox" checked={f.consent} onChange={upd("consent")} style={{ marginTop: 3, width: 17, height: 17, accentColor: "#b17f38" }} />
                  <span style={{ fontSize: 13, color: "#6b6152", lineHeight: 1.5 }}>
                    I authorize S² Automotive to use this information to check available financing options. I understand
                    this is a soft inquiry and will not affect my credit score. *
                  </span>
                </label>
              </div>
            </div>
          )}

          {done && (
            <div style={{ textAlign: "center", padding: "26px 10px" }}>
              <div style={{ width: 66, height: 66, margin: "0 auto 20px", borderRadius: "50%", background: "linear-gradient(135deg,#d8a95a,#b17f38)", display: "flex", alignItems: "center", justifyContent: "center", color: "#241d14", fontSize: 32, fontWeight: 800 }}>✓</div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 34, fontWeight: 700, color: "#2a2318", marginBottom: 10 }}>
                Application received, {f.firstName}!
              </h3>
              <p style={{ fontSize: 16, color: "#6b6152", lineHeight: 1.6, maxWidth: 440, margin: "0 auto 26px" }}>
                Thanks for applying with S² Automotive. A finance specialist will reach out to you at <strong>{f.phone}</strong> — usually the same business day. Need to talk sooner? Give us a call.
              </p>
              <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
                <a href={site.phoneHref} style={{ background: "linear-gradient(135deg,#d8a95a,#b17f38)", color: "#241d14", fontWeight: 800, fontSize: 15, padding: "14px 28px", borderRadius: 999 }}>Call {site.phone}</a>
                <Link href="/inventory" style={{ border: "1px solid rgba(58,47,28,0.25)", color: "#3a3226", fontWeight: 700, fontSize: 15, padding: "14px 28px", borderRadius: 999 }}>Browse Inventory</Link>
              </div>
            </div>
          )}

          {!done && (
            <div>
              {showError && (
                <div style={{ marginTop: 20, background: "#fbeee4", border: "1px solid #e0a878", borderRadius: 10, padding: "12px 16px", fontSize: 13.5, color: "#93531f", fontWeight: 600 }}>
                  {errorMsg}
                </div>
              )}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 28, gap: 14 }}>
                <button onClick={back} style={{ visibility: step === 1 ? "hidden" : "visible", fontFamily: "Manrope, sans-serif", fontSize: 15, fontWeight: 700, color: "#3a3226", background: "transparent", border: "1px solid rgba(58,47,28,0.25)", padding: "13px 26px", borderRadius: 999, cursor: "pointer" }}>
                  ← Back
                </button>
                <button onClick={next} style={{ fontFamily: "Manrope, sans-serif", fontSize: 15, fontWeight: 800, color: "#241d14", background: "linear-gradient(135deg,#d8a95a,#b17f38)", border: "none", padding: "14px 32px", borderRadius: 999, cursor: "pointer", boxShadow: "0 8px 20px rgba(177,127,56,0.3)" }}>
                  {step === 3 ? "Submit Application" : "Continue →"}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Sidebar */}
      <aside style={{ display: "flex", flexDirection: "column", gap: 20, position: "sticky", top: 100 }}>
        <div style={{ background: "#241d14", color: "#efe9dd", borderRadius: 20, padding: 28 }}>
          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 24, fontWeight: 700, color: "#fff", marginBottom: 16 }}>Why apply with S²?</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
              <span style={{ color: "#d8a95a", fontSize: 18 }}>◆</span>
              <div><div style={{ fontWeight: 800, color: "#fff", fontSize: 14.5 }}>All credit welcome</div><div style={{ fontSize: 13, color: "#c9bfae", lineHeight: 1.5 }}>Good, bad, or rebuilding — we work with multiple lenders.</div></div>
            </div>
            <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
              <span style={{ color: "#d8a95a", fontSize: 18 }}>◆</span>
              <div><div style={{ fontWeight: 800, color: "#fff", fontSize: 14.5 }}>No credit impact</div><div style={{ fontSize: 13, color: "#c9bfae", lineHeight: 1.5 }}>Checking your options is a soft pull only.</div></div>
            </div>
            <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
              <span style={{ color: "#d8a95a", fontSize: 18 }}>◆</span>
              <div><div style={{ fontWeight: 800, color: "#fff", fontSize: 14.5 }}>Same-day decisions</div><div style={{ fontSize: 13, color: "#c9bfae", lineHeight: 1.5 }}>Most applicants hear back the same business day.</div></div>
            </div>
          </div>
        </div>
        <div style={{ background: "#fffdf9", border: "1px solid rgba(58,47,28,0.1)", borderRadius: 20, padding: 28, boxShadow: "0 6px 18px rgba(58,47,28,0.05)" }}>
          <div style={{ fontWeight: 800, color: "#2a2318", fontSize: 15, marginBottom: 8 }}>Prefer to talk it through?</div>
          <p style={{ fontSize: 14, color: "#6b6152", lineHeight: 1.6, marginBottom: 16 }}>Our team is happy to walk you through your options over the phone.</p>
          <a href={site.phoneHref} style={{ display: "block", textAlign: "center", background: "linear-gradient(135deg,#d8a95a,#b17f38)", color: "#241d14", fontWeight: 800, fontSize: 15, padding: 13, borderRadius: 999 }}>{site.phone}</a>
        </div>
      </aside>
    </section>
  );
}

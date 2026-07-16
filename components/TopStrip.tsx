import { site } from "@/lib/theme";

export default function TopStrip() {
  return (
    <div style={{ background: "#241d14", fontSize: 12.5, letterSpacing: "0.02em", color: "#c9bfae" }}>
      <div
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: "9px 28px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 16,
          flexWrap: "wrap",
        }}
      >
        <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ color: "#d8a95a" }}>◆</span> {site.address}
        </span>
        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          <span>{site.hours}</span>
          <a href={site.phoneHref} style={{ color: "#e6cf9a", fontWeight: 600 }}>
            {site.phone}
          </a>
        </div>
      </div>
    </div>
  );
}

import { assetExists } from "@/lib/assets";

const HAS_LOGO_FILE = assetExists("s2-logo.webp");

export default function Logo({ height = 120 }: { height?: number }) {
  if (HAS_LOGO_FILE) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src="/assets/s2-logo.webp" alt="S² Automotive" style={{ height, width: "auto", display: "block" }} />;
  }

  // On-brand placeholder mark until the client's real logo file is dropped
  // into /public/assets/s2-logo.webp (see README "Assets" section).
  const iconSize = Math.round(height * 0.58);
  const wordSize = Math.max(10, Math.round(height * 0.1));

  return (
    <div style={{ height, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: Math.round(height * 0.04) }}>
      <div
        style={{
          width: iconSize,
          height: iconSize,
          borderRadius: "38% 62% 55% 45% / 45% 40% 60% 55%",
          background: "linear-gradient(135deg,#e6cf9a,#d8a95a 45%,#b17f38 85%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 14px rgba(177,127,56,0.35)",
        }}
      >
        <span
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 700,
            fontSize: Math.round(iconSize * 0.5),
            color: "#241d14",
            lineHeight: 1,
          }}
        >
          S<sup style={{ fontSize: "0.5em" }}>2</sup>
        </span>
      </div>
      <div
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontWeight: 600,
          fontSize: wordSize,
          letterSpacing: "0.22em",
          color: "#6b4a1f",
          whiteSpace: "nowrap",
        }}
      >
        AUTOMOTIVE
      </div>
    </div>
  );
}

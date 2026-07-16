import { CSSProperties } from "react";

export default function PhotoPlaceholder({
  label,
  style,
  dark = false,
}: {
  label: string;
  style?: CSSProperties;
  dark?: boolean;
}) {
  const stripeA = dark ? "#2e261a" : "#efe9dd";
  const stripeB = dark ? "#281f15" : "#e6ded0";
  return (
    <div
      style={{
        position: "relative",
        background: `repeating-linear-gradient(135deg, ${stripeA}, ${stripeA} 12px, ${stripeB} 12px, ${stripeB} 24px)`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        ...style,
      }}
    >
      <span style={{ fontFamily: "monospace", fontSize: 12, color: dark ? "#8a7d63" : "#9c9484" }}>[ {label} ]</span>
    </div>
  );
}

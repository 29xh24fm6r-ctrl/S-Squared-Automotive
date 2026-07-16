import Link from "next/link";
import Logo from "./Logo";
import HeaderNav from "./HeaderNav";
import { site } from "@/lib/theme";

export default function Header() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(255,253,249,0.9)",
        backdropFilter: "blur(14px)",
        borderBottom: "1px solid rgba(58,47,28,0.1)",
      }}
    >
      <div
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: "10px 28px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
        }}
      >
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <Logo height={110} />
        </Link>
        <HeaderNav />
        <a
          href={site.phoneHref}
          style={{
            background: "linear-gradient(135deg,#d8a95a,#b17f38)",
            color: "#241d14",
            fontWeight: 800,
            fontSize: 14,
            padding: "11px 22px",
            borderRadius: 999,
            letterSpacing: "0.01em",
            boxShadow: "0 6px 18px rgba(177,127,56,0.28)",
            whiteSpace: "nowrap",
          }}
        >
          Call {site.phone}
        </a>
      </div>
    </header>
  );
}

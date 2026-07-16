import Link from "next/link";
import { CSSProperties } from "react";
import PhotoPlaceholder from "./PhotoPlaceholder";
import { Vehicle, formatNumber, formatPrice } from "@/lib/vehicles";

export default function VehicleCard({
  car,
  href = "/inventory",
  showChips = false,
  ctaLabel = "View details →",
  ctaHref,
}: {
  car: Vehicle;
  href?: string;
  showChips?: boolean;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  const cardInner = (
    <>
      <div style={{ position: "relative" }}>
        <PhotoPlaceholder label={`${car.tag} photo`} style={{ aspectRatio: "16/11" }} />
        <span
          style={{
            position: "absolute",
            top: 12,
            left: 12,
            background: "linear-gradient(135deg,#d8a95a,#b17f38)",
            color: "#241d14",
            fontSize: 11,
            fontWeight: 800,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            padding: "5px 11px",
            borderRadius: 999,
          }}
        >
          {car.badge}
        </span>
      </div>
      <div style={{ padding: "20px 20px 22px" }}>
        <div style={{ fontSize: 12.5, color: "#8a8172", marginBottom: 4 }}>
          {car.year} · {formatNumber(car.miles)} mi{showChips ? ` · ${car.body}` : ""}
        </div>
        <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 25, fontWeight: 700, color: "#2a2318", lineHeight: 1.1 }}>
          {car.name}
        </div>
        <div style={{ fontSize: 13.5, color: "#6b6152", marginTop: 3 }}>{car.trim}</div>

        {showChips && (
          <div style={{ display: "flex", gap: 8, marginTop: 14, flexWrap: "wrap" }}>
            {[car.fuel, car.drive, car.trans].map((chip) => (
              <span
                key={chip}
                style={{
                  fontSize: 11.5,
                  fontWeight: 600,
                  color: "#6b6152",
                  background: "#f2ece1",
                  borderRadius: 6,
                  padding: "4px 9px",
                }}
              >
                {chip}
              </span>
            ))}
          </div>
        )}

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 18,
            paddingTop: 16,
            borderTop: "1px solid rgba(58,47,28,0.1)",
          }}
        >
          <div>
            <div style={{ fontSize: 11, color: "#8a8172", textTransform: "uppercase", letterSpacing: "0.08em" }}>Our price</div>
            <div style={{ fontSize: showChips ? 23 : 22, fontWeight: 800, color: "#9a6b1f" }}>{formatPrice(car.price)}</div>
          </div>
          {ctaHref ? (
            <Link
              href={ctaHref}
              style={{
                fontSize: 13,
                fontWeight: 800,
                color: "#241d14",
                background: "linear-gradient(135deg,#d8a95a,#b17f38)",
                padding: "10px 16px",
                borderRadius: 999,
              }}
            >
              {ctaLabel}
            </Link>
          ) : (
            <span style={{ fontSize: 13, fontWeight: 700, color: "#3a3226" }}>{ctaLabel}</span>
          )}
        </div>
      </div>
    </>
  );

  const cardStyle: CSSProperties = {
    display: "block",
    background: "#fffdf9",
    border: "1px solid rgba(58,47,28,0.1)",
    borderRadius: 18,
    overflow: "hidden",
    boxShadow: "0 6px 20px rgba(58,47,28,0.05)",
    textDecoration: "none",
    color: "inherit",
  };

  if (ctaHref) {
    return (
      <div className="vehicle-card" style={cardStyle}>
        {cardInner}
      </div>
    );
  }

  return (
    <Link href={href} className="vehicle-card" style={cardStyle}>
      {cardInner}
    </Link>
  );
}

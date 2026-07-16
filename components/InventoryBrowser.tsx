"use client";

import { useMemo, useState } from "react";
import VehicleCard from "./VehicleCard";
import { vehicles, VehicleType } from "@/lib/vehicles";
import { site } from "@/lib/theme";

type TypeFilter = "All" | VehicleType;
type SortKey = "featured" | "low" | "high" | "miles" | "year";

const TYPES: TypeFilter[] = ["All", "Cars", "SUVs", "Trucks"];

const SORTERS: Record<SortKey, (a: typeof vehicles[number], b: typeof vehicles[number]) => number> = {
  featured: () => 0,
  low: (a, b) => a.price - b.price,
  high: (a, b) => b.price - a.price,
  miles: (a, b) => a.miles - b.miles,
  year: (a, b) => b.year - a.year,
};

export default function InventoryBrowser() {
  const [search, setSearch] = useState("");
  const [type, setType] = useState<TypeFilter>("All");
  const [sort, setSort] = useState<SortKey>("featured");

  const shown = useMemo(() => {
    const q = search.trim().toLowerCase();
    let list = vehicles.filter((c) => type === "All" || c.type === type);
    if (q) {
      list = list.filter((c) => (c.name + " " + c.trim + " " + c.body).toLowerCase().includes(q));
    }
    return [...list].sort(SORTERS[sort]);
  }, [search, type, sort]);

  const countLabel = `${shown.length} ${shown.length === 1 ? "vehicle" : "vehicles"} available`;

  return (
    <>
      {/* Toolbar */}
      <section style={{ maxWidth: 1240, margin: "0 auto", padding: "28px 28px 0" }}>
        <div
          style={{
            background: "#fffdf9",
            border: "1px solid rgba(58,47,28,0.1)",
            borderRadius: 16,
            padding: 16,
            display: "flex",
            gap: 14,
            alignItems: "center",
            flexWrap: "wrap",
            boxShadow: "0 6px 18px rgba(58,47,28,0.05)",
          }}
        >
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search make, model, or keyword…"
            style={{
              flex: 1,
              minWidth: 200,
              fontFamily: "Manrope, sans-serif",
              fontSize: 15,
              padding: "12px 16px",
              border: "1px solid rgba(58,47,28,0.16)",
              borderRadius: 10,
              background: "#fff",
              color: "#3a3226",
              outline: "none",
            }}
          />
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {TYPES.map((t) => {
              const active = type === t;
              return (
                <button
                  key={t}
                  onClick={() => setType(t)}
                  style={{
                    fontFamily: "Manrope, sans-serif",
                    fontSize: 13.5,
                    fontWeight: 700,
                    padding: "11px 18px",
                    borderRadius: 999,
                    cursor: "pointer",
                    border: active ? "1px solid transparent" : "1px solid rgba(58,47,28,0.16)",
                    background: active ? "linear-gradient(135deg,#d8a95a,#b17f38)" : "#fff",
                    color: active ? "#241d14" : "#6b6152",
                  }}
                >
                  {t}
                </button>
              );
            })}
          </div>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortKey)}
            style={{
              fontFamily: "Manrope, sans-serif",
              fontSize: 13.5,
              fontWeight: 700,
              padding: "11px 16px",
              border: "1px solid rgba(58,47,28,0.16)",
              borderRadius: 10,
              background: "#fff",
              color: "#3a3226",
              cursor: "pointer",
              outline: "none",
            }}
          >
            <option value="featured">Sort: Featured</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
            <option value="miles">Mileage: Lowest</option>
            <option value="year">Year: Newest</option>
          </select>
        </div>
        <div style={{ marginTop: 16, fontSize: 13.5, color: "#8a8172", fontWeight: 600 }}>{countLabel}</div>
      </section>

      {/* Grid */}
      <section style={{ maxWidth: 1240, margin: "0 auto", padding: "20px 28px 84px" }}>
        {shown.length > 0 ? (
          <div className="grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
            {shown.map((car) => (
              <VehicleCard
                key={car.name + car.trim}
                car={{ ...car }}
                showChips
                ctaLabel="Get financing"
                ctaHref="/financing"
              />
            ))}
          </div>
        ) : (
          <div style={{ textAlign: "center", padding: "70px 20px", color: "#8a8172" }}>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 30, color: "#2a2318", marginBottom: 8 }}>No matches found</div>
            <div style={{ fontSize: 15 }}>
              Try a different search or filter — or call us at{" "}
              <a href={site.phoneHref} style={{ fontWeight: 700 }}>{site.phone}</a>.
            </div>
          </div>
        )}
      </section>
    </>
  );
}

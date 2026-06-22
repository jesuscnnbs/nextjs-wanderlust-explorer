"use client";

import { ExperienceCategory } from "@/types/experience";

const categories: ExperienceCategory[] = [
  "Adventure",
  "Culture",
  "Food",
  "Wellness",
  "Nature",
];

const destinations = [
  "Kyoto",
  "Reykjavik",
  "Marrakech",
  "Cusco",
  "Cape Town",
  "Queenstown",
  "Lisbon",
  "Bali",
  "Amalfi Coast",
  "Patagonia",
];

const priceBuckets = [
  { label: "Any", value: "" },
  { label: "$0 – $99", value: "0-99" },
  { label: "$100 – $199", value: "100-199" },
  { label: "$200+", value: "200+" },
];

export type FiltersState = {
  category: string;
  destination: string;
  priceBucket: string;
};

type FilterBarProps = {
  filters: FiltersState;
  onChange: (filters: FiltersState) => void;
};

const selectClass =
  "rounded-full border-2 border-[#121212] bg-[#ecdfcf] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.1em] text-[#1a1816] outline-none transition focus:bg-[#e2d3bf]";

export default function FilterBar({ filters, onChange }: FilterBarProps) {
  const update = (key: keyof FiltersState, value: string) => {
    onChange({ ...filters, [key]: value });
  };

  return (
    <div className="flex flex-wrap items-center gap-3">
      <select
        value={filters.category}
        onChange={(e) => update("category", e.target.value)}
        className={selectClass}
      >
        <option value="">All Categories</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      <select
        value={filters.destination}
        onChange={(e) => update("destination", e.target.value)}
        className={selectClass}
      >
        <option value="">All Destinations</option>
        {destinations.map((dest) => (
          <option key={dest} value={dest}>
            {dest}
          </option>
        ))}
      </select>

      <select
        value={filters.priceBucket}
        onChange={(e) => update("priceBucket", e.target.value)}
        className={selectClass}
      >
        {priceBuckets.map((bucket) => (
          <option key={bucket.value} value={bucket.value}>
            {bucket.label}
          </option>
        ))}
      </select>
    </div>
  );
}

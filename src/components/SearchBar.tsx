"use client";

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="absolute left-3 top-1/2 size-5 -translate-y-1/2 text-[#3d352e]"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search experiences..."
        className="w-full rounded-full border-2 border-[#121212] bg-[#ecdfcf] py-2 pl-10 pr-4 text-sm font-bold text-[#1a1816] placeholder-[#3d352e] outline-none transition focus:bg-[#e2d3bf]"
      />
    </div>
  );
}

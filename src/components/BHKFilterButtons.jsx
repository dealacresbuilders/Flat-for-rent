"use client";

import Link from "next/link";

export default function BHKFilterButtons() {
  const bhkOptions = ["1", "2", "3", "4"];

  // ✅ SLUG FUNCTION
  const createSlug = (bhk) => {
    return `${bhk}-bhk-flat-for-rent-faridabad`;
  };

  return (
    <div className="flex flex-wrap gap-4">
      {bhkOptions.map((bhk) => (
        <Link
          key={bhk}
          href={`/listing/${createSlug(bhk)}`}   // ✅ FIXED
          className="px-6 py-3 rounded-full text-sm md:text-base font-medium 
          border border-[#56021F] text-[#56021F]
          hover:bg-[#56021F] hover:text-white transition-all duration-200"
        >
          {bhk} BHK Flat for Rent
        </Link>
      ))}
    </div>
  );
}
"use client";

import Link from "next/link";

const locations = [
  "Sector 70, Neharpar",
  "Sector 86",
  "Ashoka Enclave",
  "Sector 82",
  "Sector 21C",
  "Sector 83",
  "Sector 21A",
  "Sector 9",
];

const createSlug = (location) => {
  return location
    .toLowerCase()
    .replace(/,/g, "")
    .replace(/\s+/g, "-");
};

export default function Footer() {
  return (
    <footer className="bg-[#1a0b12] pt-16 pb-8 px-4 border-t border-[#2a121a]">
      <div className="max-w-7xl mx-auto">

        {/* BRAND */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-white">
            Flats for Rent in{" "}
            <span className="text-[#56021F] bg-white px-2 py-1 rounded">
              Faridabad
            </span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl leading-relaxed">
            Find affordable and premium rental flats in top sectors of Faridabad.
            Explore 1BHK, 2BHK & 3BHK rental options for families, students and
            working professionals.
          </p>
        </div>

        {/* LOCATIONS */}
        <div className="mb-10">
          <h3 className="text-lg font-semibold text-white mb-6">
            Popular Rental Locations
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 text-sm">
            {locations.map((loc, index) => (
              <Link
                key={index}
                href={`/${createSlug(loc)}`}
                className="text-gray-400 hover:text-[#56021F] transition duration-200"
              >
                {loc}, Faridabad
              </Link>
            ))}
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-[#2a121a] pt-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-gray-500 text-center md:text-left">
            © {new Date().getFullYear()} FlatsForRentInFaridabad.com — All Rights Reserved.
          </p>

          <Link
            href="https://www.parcharmanch.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-500 hover:text-[#56021F] transition mt-3 md:mt-0"
          >
            Designed By Parchar Manch
          </Link>
        </div>

      </div>
    </footer>
  );
}
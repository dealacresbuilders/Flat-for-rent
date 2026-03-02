"use client";

import { useState } from "react";
import Link from "next/link";

const locations = [
  '1F Block New Industrial Twp 1, Faridabad',
  'Ashoka Enclave Part 1, Faridabad',
  'Ashoka Enclave Part 2, Faridabad',
  'Ashoka Enclave, Faridabad',
  'BPTP, Faridabad',
  'Badkhal, Faridabad',
  'Ballabhgarh, Faridabad',
  'Bhikam Colony, Faridabad',
  'Bhim Sen Colony, Faridabad',
  'Block A Sector 7, Faridabad',
  'Block D New Industrial Twp 2, Faridabad',
  'Block F New Industrial Twp 2, Faridabad',
  'Block H Block F Sector 10 HBC, Faridabad',
  'Block J New Industrial Twp 1, Faridabad',
  'Block-E, Sector-7, Faridabad',
  'Block-S Sector 75, Faridabad',
  'Budena Village, Faridabad',
  'Charmwood Village, Faridabad',
  'Dayal Bagh Colony, Faridabad',
  'Dheeraj Nagar, Faridabad',
  'E Block Sector 85, Faridabad',
  'Eros Garden, Faridabad',
  'Gopi Colony, Faridabad',
  'Gothda Mohbtabad, Faridabad',
  'Greenfield Colony Block B, Faridabad',
  'Greenfield Colony, Faridabad',
  'Greenfields Colony Block C, Faridabad',
  'Greenfields, Faridabad',
  'HBH Colony, Faridabad',
  'IP Extension 2, Faridabad',
  'Indraprastha Colony, Faridabad',
  'Ismailpur, Faridabad',
  'Lakkarpur, Faridabad',
  'Mawai, Faridabad',
  'Mujesar, Faridabad',
  'NIT 5, Faridabad',
  'NIT, Faridabad',
  'Nangla Gujran, Faridabad',
  'Nawada Village, Faridabad',
  'Nehar Par, Faridabad',
  'Nehru Ground, Faridabad',
  'New Industrial Township 1, Faridabad',
  'New Industrial Township 2, Faridabad',
  'New Industrial Township 5, Faridabad',
  'New Industrial Township, Faridabad',
  'Palla, Faridabad',
  'Pocket H Sector 10 HBC, Faridabad',
  'Rajendra Colony, Faridabad',
  'SGM Nagar, Faridabad',
  'Sainik Colony, Faridabad',
  'Sanjay Colony, Faridabad',
  'Sanjay Gandhi Memorial Nagar, Faridabad',
  'Sarai Khawaja Village, Faridabad',
  'Sector 1 Ballabhgarh, Faridabad',
  'Sector 10 HBC, Faridabad',
  'Sector 11, Faridabad',
  'Sector 14, Faridabad',
  'Sector 15, Faridabad',
  'Sector 15A, Faridabad',
  'Sector 16, Faridabad',
  'Sector 16A, Faridabad',
  'Sector 17, Faridabad',
  'Sector 18, Faridabad',
  'Sector 18A, Faridabad',
  'Sector 19, Faridabad',
  'Sector 2, Faridabad',
  'Sector 21, Faridabad',
  'Sector 21A, Faridabad',
  'Sector 21B, Faridabad',
  'Sector 21C, Faridabad',
  'Sector 21D, Faridabad',
  'Sector 23, Faridabad',
  'Sector 28, Faridabad',
  'Sector 29, Faridabad',
  'Sector 3, Faridabad',
  'Sector 30, Faridabad',
  'Sector 31, Faridabad',
  'Sector 32, Faridabad',
  'Sector 35, Faridabad',
  'Sector 36, Faridabad',
  'Sector 37, Faridabad',
  'Sector 41, Faridabad',
  'Sector 43, Faridabad',
  'Sector 45, Faridabad',
  'Sector 46, Faridabad',
  'Sector 48, Faridabad',
  'Sector 49, Faridabad',
  'Sector 56A, Faridabad',
  'Sector 57, Faridabad',
  'Sector 64, Faridabad',
  'Sector 65, Faridabad',
  'Sector 69, Faridabad',
  'Sector 7, Faridabad',
  'Sector 70, Faridabad',
  'Sector 71, Faridabad',
  'Sector 75, Faridabad',
  'Sector 76, Faridabad',
  'Sector 77, Faridabad',
  'Sector 78, Faridabad',
  'Sector 79, Faridabad',
  'Sector 8, Faridabad',
  'Sector 80, Faridabad',
  'Sector 81, Faridabad',
  'Sector 82, Faridabad',
  'Sector 83, Faridabad',
  'Sector 84, Faridabad',
  'Sector 85 Faridabad',
  'Sector 85, Faridabad',
  'Sector 86, Faridabad',
  'Sector 87, Faridabad',
  'Sector 88, Faridabad',
  'Sector 89, Faridabad',
  'Sector 9, Faridabad',
  'Sector 91, Faridabad',
  'Sector 98, Faridabad',
  'Sector-143, Faridabad',
  'Shastri Colony, Faridabad',
  'Shiv Durga Vihar, Faridabad',
  'Shyam Colony, Faridabad',
  'Sikri, Faridabad',
  'Surajkund, Faridabad',
  'Surya Nagar Phase 2, Faridabad',
  'Surya Vihar Part 2, Faridabad',
  'Tilpat, Faridabad',
  'Uncha Gaon, Faridabad',
  'sector 7B, Faridabad'
];

const createSlug = (location) => {
  return location
    .replace(", Faridabad", "")
    .toLowerCase()
    .replace(/,/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
};

export default function Footer() {
  const [showAll, setShowAll] = useState(false);

  const initialCount = 50; // 5 columns × 4 rows initially (adjustable)
  const visibleLocations = showAll
    ? locations
    : locations.slice(0, initialCount);

  return (
    <footer className="bg-[#1a0b12] pt-16 pb-8 px-4 border-t border-[#2a121a] overflow-visible">
      <div className="max-w-7xl mx-auto overflow-visible">

        {/* BRAND */}
        {/* <div className="mb-10">
          <h2 className="text-2xl font-bold text-white">
            Flats for Rent in{" "}
            <span className="text-[#56021F] bg-white px-2 py-1 rounded">
              Faridabad
            </span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl leading-relaxed">
            Find affordable and premium rental flats in top sectors of Faridabad.
          </p>
        </div> */}

        {/* LOCATIONS */}
        <div className="mb-10 overflow-visible">
          <h3 className="text-lg font-semibold text-white mb-6">
            Popular Rental Locations
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-4 text-sm overflow-visible">

            {visibleLocations.map((loc, index) => (
              <div key={index} className="relative group overflow-visible">

                <Link
                  href={`/${createSlug(loc)}`}
                  className="block truncate text-gray-400 hover:text-white transition duration-200"
                >
                 Flats for Rent in {loc}
                </Link>

                <div className="
                  absolute left-1/2 -translate-x-1/2 bottom-full mb-2
                  opacity-0 scale-95
                  group-hover:opacity-100 group-hover:scale-100
                  transition-all duration-200
                  whitespace-nowrap
                  bg-[#111827] text-white text-xs
                  px-3 py-1.5 rounded-md
                  shadow-lg border border-[#56021F]/40
                  z-[9999]
                  pointer-events-none">
                 Flats for Rent in {loc}
                </div>

              </div>
            ))}

            {/* Read More */}
            {!showAll && locations.length > initialCount && (
              <div>
                <span
                  onClick={() => setShowAll(true)}
                  className="block cursor-pointer text-white hover:underline"
                >
                  Read More...
                </span>
              </div>
            )}

            {/* Read Less */}
            {showAll && locations.length > initialCount && (
              <div>
                <span
                  onClick={() => setShowAll(false)}
                  className="block cursor-pointer text-white hover:underline"
                >
                  Read Less...
                </span>
              </div>
            )}

          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-[#2a121a] pt-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-gray-500 text-center md:text-left">
            © {new Date().getFullYear()} Flats For Rent In Faridabad.com
          </p>

          <p className="text-sm text-gray-500 mt-3 md:mt-0">
  Designed By - {" "}
  <Link
    href="https://www.parcharmanch.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-white transition cursor-pointer underline-offset-4 hover:underline"
  >
    Parchar Manch
  </Link>
</p>
        </div>

      </div>
    </footer>
  );
}
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { locations } from "../data/newLocations";

const createSlug = (location) => {
  return location
    .replace(", Faridabad", "")
    .toLowerCase()
    .replace(/,/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
};

export default function Footer() {
  const [visibleCounts, setVisibleCounts] = useState({});

  useEffect(() => {
    localStorage.setItem("lastLocation", "Faridabad");

    const counts = {};

    locations.forEach((item) => {
      const key = Object.keys(item)[0];
      counts[key] = 15;
    });

    setVisibleCounts(counts);
  }, []);

  const handleViewMore = (type) => {
    setVisibleCounts((prev) => ({
      ...prev,
      [type]: prev[type] + 15,
    }));
  };

  const handleViewLess = (type) => {
    setVisibleCounts((prev) => ({
      ...prev,
      [type]: 15,
    }));
  };

  const getRentLabel = (bhkType) => {
    switch (bhkType.toLowerCase()) {
      case "1 bhk":
        return "1 BHK Flats for Rent in";

      case "2 bhk":
        return "2 BHK Flats for Rent in";

      case "3 bhk":
        return "3 BHK Flats for Rent in";

      case "4 bhk":
        return "4 BHK Flats for Rent in";

      default:
        return "Flats for Rent in";
    }
  };

  const getRentUrl = (bhkType, location) => {
    switch (bhkType.toLowerCase()) {
      case "1 bhk":
        return `https://www.dealacres.com/properties/1-bhk-flat-for-rent-in-${createSlug(
          location
        )}-faridabad`;

      case "2 bhk":
        return `https://www.dealacres.com/properties/2-bhk-flat-for-rent-in-${createSlug(
          location
        )}-faridabad`;

      case "3 bhk":
        return `https://www.dealacres.com/properties/3-bhk-flat-for-rent-in-${createSlug(
          location
        )}-faridabad`;

      case "4 bhk":
        return `https://www.dealacres.com/properties/4-bhk-flat-for-rent-in-${createSlug(
          location
        )}-faridabad`;

      default:
        return `https://www.dealacres.com/properties/flat-for-rent-in-${createSlug(
          location
        )}-faridabad`;
    }
  };

  return (
    <footer className="bg-[#1a0b12] pt-16 pb-8 px-4 border-t border-[#2a121a] overflow-visible">
      <div className="max-w-7xl mx-auto overflow-visible">

        {/* BRAND */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-white">
            Flats for Rent in{" "}
            <span className="text-[#56021F] bg-white px-2 py-1 rounded">
              Faridabad
            </span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl leading-relaxed">
            Find affordable and premium rental flats in top sectors of
            Faridabad.
          </p>
        </div>

        {/* BHK RENT SECTIONS */}
        {locations.map((item, index) => {
          const bhkType = Object.keys(item)[0];
          const bhkLocations = item[bhkType];

          return (
            <div key={index} className="mb-12 overflow-visible">
              <h3 className="text-lg font-semibold text-white mb-6">
                Popular Locations for{" "}
                {bhkType.replace("bhk", " BHK").toUpperCase()} Flats for Rent
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-4 text-sm overflow-visible">
                {bhkLocations
                  .slice(0, visibleCounts[bhkType] || 15)
                  .map((loc, idx) => (
                    <div
                      key={idx}
                      className="relative group overflow-visible"
                    >
                      <Link
                        href={getRentUrl(bhkType, loc)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block truncate text-gray-400 hover:text-white transition duration-200"
                      >
                        {getRentLabel(bhkType)} {loc}
                      </Link>

                      <div
                        className="
                          absolute left-1/2 -translate-x-1/2 bottom-full mb-2
                          opacity-0 scale-95
                          group-hover:opacity-100 group-hover:scale-100
                          transition-all duration-200
                          whitespace-nowrap
                          bg-[#111827]
                          text-white text-xs
                          px-3 py-1.5 rounded-md
                          shadow-lg
                          border border-[#56021F]/40
                          z-[9999]
                          pointer-events-none
                        "
                      >
                        {getRentLabel(bhkType)} {loc}
                      </div>
                    </div>
                  ))}
              </div>

              {/* View More / View Less */}
              <div className="mt-4 flex gap-4">
                {(visibleCounts[bhkType] || 15) <
                  bhkLocations.length && (
                  <button
                    onClick={() => handleViewMore(bhkType)}
                    className="text-white hover:underline"
                  >
                    View More...
                  </button>
                )}

                {(visibleCounts[bhkType] || 15) > 15 && (
                  <button
                    onClick={() => handleViewLess(bhkType)}
                    className="text-white hover:underline"
                  >
                    View Less...
                  </button>
                )}
              </div>
            </div>
          );
        })}

        {/* Bottom Navigation */}
        <div className="border-t border-[#2a121a] pt-6 mt-10 mb-6">
          <div className="flex justify-center items-center">
            <div className="flex flex-wrap gap-6 justify-center text-sm">
              <Link
                href="/about"
                className="text-gray-400 hover:text-white transition"
              >
                About
              </Link>

              <Link
                href="/blog"
                className="text-gray-400 hover:text-white transition"
              >
                Blog
              </Link>

              <Link
                href="/contact"
                className="text-gray-400 hover:text-white transition"
              >
                Contact
              </Link>

              <Link
                href="/how-it-works"
                className="text-gray-400 hover:text-white transition"
              >
                How It's Work
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-[#2a121a] pt-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-gray-500 text-center md:text-left">
            © {new Date().getFullYear()} Flats For Rent In Faridabad.com
          </p>

          <p className="text-sm text-gray-500 mt-3 md:mt-0">
            Designed By -{" "}
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

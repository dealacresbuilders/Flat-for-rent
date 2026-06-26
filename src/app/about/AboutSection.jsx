"use client";

import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";
import DisclaimerSection from "./DisclaimerSection";
export default function AboutPage() {
  return (
    <section className="bg-gradient-to-b from-white to-[#f4e9ed] px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <div>
          <Breadcrumb/>
        </div>

        {/* ================= HERO SPLIT SECTION ================= */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-28">

          {/* LEFT CONTENT */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              About{" "}
              <span className="text-[#56021F]">
                Flat for Rent in Faridabad
              </span>
            </h1>

            <p className="text-gray-600 mt-6 leading-relaxed text-lg">
              From furnished flats to PG accommodations — find the perfect 
              rental space in Faridabad that fits your lifestyle, your budget, 
              and your timeline.
            </p>

            <div className="mt-8 flex gap-4">
              <Link
                href="/"
                className="bg-[#56021F] text-white px-6 py-3 rounded-full font-medium hover:bg-[#3d0116] transition shadow-md"
              >
                Search Flats for Rent
              </Link>

              <Link
                href="/contact"
                className="border border-[#56021F] text-[#56021F] px-6 py-3 rounded-full font-medium hover:bg-[#56021F] hover:text-white transition"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative h-[420px] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"
              alt="Flat for Rent in Faridabad"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>

        </div>


        {/* ================= OUR MISSION ================= */}
        <div className="text-center max-w-4xl mx-auto mb-28">
          <h2 className="text-3xl font-bold text-gray-900">
            Our Mission
          </h2>

          <p className="text-gray-600 mt-6 leading-relaxed text-lg">
            Renting a flat in a new city or a new neighbourhood comes with a 
            lot of uncertainty — and we are here to take that uncertainty away. 
            Our mission is to give every tenant, working professional, and family 
            a reliable platform where they can browse genuine, up-to-date rental 
            listings across Faridabad and find a place they are truly happy to call home.
          </p>

          <p className="text-gray-600 mt-6 leading-relaxed text-lg">
            Whether you are looking for a furnished flat in NIT Faridabad, a 
            semi-furnished 2BHK in Neharpar, a budget-friendly PG near Sector 15 
            or 16, or a spacious family flat in Ballabhgarh — we have options 
            across every major locality in Faridabad to match every need, every 
            budget, and every lifestyle.
          </p>
        </div>


        {/* ================= STATS SECTION ================= */}
        <div className="grid md:grid-cols-3 gap-10 mb-28">

          <div className="bg-white rounded-2xl p-10 shadow-xl border border-[#56021F]/10 text-center">
            <h3 className="text-4xl font-bold text-[#56021F]">
              2000+
            </h3>
            <p className="text-gray-600 mt-3 text-sm">
              Rental Listings — Flats, PG & More
            </p>
          </div>

          <div className="bg-white rounded-2xl p-10 shadow-xl border border-[#56021F]/10 text-center">
            <h3 className="text-4xl font-bold text-[#56021F]">
              3500+
            </h3>
            <p className="text-gray-600 mt-3 text-sm">
              Tenants Successfully Placed
            </p>
          </div>

          <div className="bg-white rounded-2xl p-10 shadow-xl border border-[#56021F]/10 text-center">
            <h3 className="text-4xl font-bold text-[#56021F]">
              75+
            </h3>
            <p className="text-gray-600 mt-3 text-sm">
              Localities Covered Across Faridabad
            </p>
          </div>

        </div>


        {/* ================= WHY CHOOSE US ================= */}
        <div className="mb-28">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-14">
            Why Choose Us?
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition border border-[#56021F]/10">
              <h3 className="font-semibold text-lg text-[#56021F] mb-3">
                Verified & Up-to-Date Listings
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                No outdated posts, no fake availability. Every flat and PG 
                listing on our platform is regularly verified so tenants only 
                see what is genuinely available right now.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition border border-[#56021F]/10">
              <h3 className="font-semibold text-lg text-[#56021F] mb-3">
                Furnished, Semi-Furnished & More
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Filter by what matters to you — fully furnished, semi-furnished, 
                or unfurnished flats, PG accommodations, and flatmate options 
                across all budgets and localities in Faridabad.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition border border-[#56021F]/10">
              <h3 className="font-semibold text-lg text-[#56021F] mb-3">
                Owners, Fill Your Vacancy Fast
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Post your rental property in minutes and get it visible to 
                thousands of active tenants — working professionals, families, 
                and students — searching for flats in Faridabad today.
              </p>
            </div>

          </div>
        </div>


        {/* ================= CTA SECTION ================= */}
        <div className="bg-[#56021F] text-white rounded-3xl p-16 text-center shadow-2xl">
          <h2 className="text-3xl font-bold mb-4">
            Your Next Flat in Faridabad is Just a Few Clicks Away.
          </h2>

          <p className="text-[#f4e9ed] mb-8 max-w-2xl mx-auto">
            Browse verified flats, PG accommodations, and furnished rentals 
            across Faridabad's top localities — and move into the right place 
            faster than you think.
          </p>

          <Link
            href="/"
            className="bg-white text-[#56021F] font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition"
          >
            Search Flats for Rent
          </Link>
        </div>

      </div>
      <DisclaimerSection/>
    </section>
  );
}
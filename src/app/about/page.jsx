"use client";

import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="bg-gradient-to-b from-white to-[#f4e9ed] px-4 py-20">
      <div className="max-w-7xl mx-auto">

        {/* ================= HERO SPLIT SECTION ================= */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-28">

          {/* LEFT CONTENT */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Your Trusted Platform for{" "}
              <span className="text-[#56021F]">
                Flats for Rent in Faridabad
              </span>
            </h1>

            <p className="text-gray-600 mt-6 leading-relaxed">
              We help families, working professionals, and students discover
              verified rental flats in prime sectors of Faridabad with complete
              transparency and expert guidance.
            </p>

            <div className="mt-8 flex gap-4">
              <Link
                href="/"
                className="bg-[#56021F] text-white px-6 py-3 rounded-full font-medium hover:bg-[#3d0116] transition shadow-md"
              >
                Browse Rentals
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
              alt="Flats for Rent in Faridabad"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>

        </div>

        {/* ================= STATS SECTION ================= */}
        <div className="grid md:grid-cols-3 gap-10 mb-28">

          <div className="bg-white rounded-2xl p-10 shadow-xl border border-[#56021F]/10 text-center">
            <h3 className="text-4xl font-bold text-[#56021F]">500+</h3>
            <p className="text-gray-600 mt-3 text-sm">
              Verified Rental Listings
            </p>
          </div>

          <div className="bg-white rounded-2xl p-10 shadow-xl border border-[#56021F]/10 text-center">
            <h3 className="text-4xl font-bold text-[#56021F]">1200+</h3>
            <p className="text-gray-600 mt-3 text-sm">
              Happy Tenants
            </p>
          </div>

          <div className="bg-white rounded-2xl p-10 shadow-xl border border-[#56021F]/10 text-center">
            <h3 className="text-4xl font-bold text-[#56021F]">50+</h3>
            <p className="text-gray-600 mt-3 text-sm">
              Prime Sectors Covered
            </p>
          </div>

        </div>

        {/* ================= WHY CHOOSE US ================= */}
        <div className="mb-28">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-14">
            Why Rent With Us?
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition border border-[#56021F]/10">
              <h3 className="font-semibold text-lg text-[#56021F] mb-3">
                Verified Properties
              </h3>
              <p className="text-gray-600 text-sm">
                Every rental listing is verified to ensure safety,
                transparency, and accurate pricing.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition border border-[#56021F]/10">
              <h3 className="font-semibold text-lg text-[#56021F] mb-3">
                Prime Locations
              </h3>
              <p className="text-gray-600 text-sm">
                We focus on well-connected sectors with schools, markets,
                hospitals, and metro accessibility.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition border border-[#56021F]/10">
              <h3 className="font-semibold text-lg text-[#56021F] mb-3">
                Hassle-Free Process
              </h3>
              <p className="text-gray-600 text-sm">
                From inquiry to agreement, our team ensures smooth coordination
                and clear communication.
              </p>
            </div>

          </div>
        </div>

        {/* ================= CTA SECTION ================= */}
        <div className="bg-[#56021F] text-white rounded-3xl p-16 text-center shadow-2xl">
          <h2 className="text-3xl font-bold mb-4">
            Looking for a Rental Flat in Faridabad?
          </h2>

          <p className="text-[#f4e9ed] mb-8 max-w-2xl mx-auto">
            Discover premium rental options in your preferred sector with
            flexible budgets and verified listings.
          </p>

          <Link
            href="/"
            className="bg-white text-[#56021F] font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition"
          >
            Explore Rental Properties
          </Link>
        </div>

      </div>
    </section>
  );
}
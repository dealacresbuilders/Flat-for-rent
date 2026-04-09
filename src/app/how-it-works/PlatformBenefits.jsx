"use client";

import { Search, ShieldCheck, Users } from "lucide-react";

export default function PlatformBenefits() {
  return (
    <section className="py-8 px-6 ">
      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#56021F] mb-6">
         How Our Platform Helps Users
        </h2>

        <p className="text-gray-700 leading-relaxed mb-12 max-w-6xl">
          Our platform is designed to make finding a flat for rent in Faridabad quick, simple, and stress-free. Instead of spending hours searching in different places, you can find everything in one place.
The platform offers easy search filters, so you can choose your budget, location, and flat type without confusion. This helps you find only those options that match your needs.
Every property listed on the platform is verified, so you don’t have to worry about fake listings. You also get clear and complete property details, including price, size, and photos, which helps you make better decisions.
One of the biggest benefits is direct contact with the owner. You can talk directly without any middleman, which saves money and avoids delays.
Overall, users can explore different flats for lease in Faridabad, compare options easily, and choose the best one without wasting time or effort.

        </p>

        {/* MAIN CARDS */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* CARD 1 */}
          <div className="p-6 border rounded-xl transition-all duration-300 hover:border-[#56021F] hover:shadow-xl hover:-translate-y-1">
            <Search className="text-[#56021F] mb-4" size={28} />
            <h3 className="text-xl font-semibold text-[#56021F] mb-3">
              Easy Search & Filters
            </h3>
            <p className="text-gray-600">
              Quickly find flats based on budget, location, and type. No confusion,
              only relevant results that match your needs.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="p-6 border rounded-xl transition-all duration-300 hover:border-[#56021F] hover:shadow-xl hover:-translate-y-1">
            <ShieldCheck className="text-[#56021F] mb-4" size={28} />
            <h3 className="text-xl font-semibold text-[#56021F] mb-3">
              Verified Listings
            </h3>
            <p className="text-gray-600">
              Every property is checked with real photos and correct details so
              you can trust what you see.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="p-6 border rounded-xl transition-all duration-300 hover:border-[#56021F] hover:shadow-xl hover:-translate-y-1">
            <Users className="text-[#56021F] mb-4" size={28} />
            <h3 className="text-xl font-semibold text-[#56021F] mb-3">
              Direct Owner Contact
            </h3>
            <p className="text-gray-600">
              Talk directly with owners. No brokers, no extra charges, and faster
              decisions.
            </p>
          </div>

        </div>

        {/* ================= EXTRA SECTIONS ================= */}

        <div className="mt-16 grid md:grid-cols-2 gap-8">

          {/* VERIFIED IMPORTANCE */}
          <div className="p-6  rounded-xl border  bg-[#f4e3e9]">
            <h3 className="text-xl font-semibold text-[#56021F] mb-3">
              Importance of Verified Listings
            </h3>
            <p className="text-gray-600 leading-relaxed">
              In the rental market, fake listings are a common problem. Many people waste time on properties that are not real or have wrong information. This creates confusion and sometimes even leads to financial loss.
That’s why verified listings are very important when searching for a flat for rent in Faridabad. Verified properties ensure that all details are correct and genuine. You get real photos, accurate pricing, and contact with actual property owners.
This also makes the transaction safer. You can trust the information and move forward with confidence. It reduces the risk of scams and helps you make a secure decision.
Our platform focuses on providing trusted and verified listings, so users can search without fear. This makes the entire process of finding rental housing in Faridabad simple, safe, and reliable.

            </p>
          </div>

          {/* NO MIDDLEMAN */}
          <div className="p-6  rounded-xl border bg-[#f4e3e9]">
            <h3 className="text-xl font-semibold text-[#56021F] mb-3">
             Direct Buyer-Seller Interaction (No Middleman) – Detailed & Easy
            </h3>
            <p className="text-gray-600 leading-relaxed">
              One of the biggest advantages of using this platform is that you can directly talk to the property owner. When you are searching for a flat for rent in Faridabad, this makes the whole process much simpler and clearer.
When there is no broker involved, you don’t have to pay any extra fees. This helps you save money and stay within your budget. You can discuss everything directly with the owner, like rent, deposit, and other conditions. This makes the conversation clear and avoids any misunderstanding.
Direct communication also helps in faster decision-making. You don’t have to wait for a third person to respond or arrange things. Everything happens quickly between you and the owner.
Most importantly, this builds trust. You know exactly who you are dealing with, and all details are shared openly. For anyone looking for rental housing in Faridabad, this approach makes the process smooth, transparent, and stress-free.

            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
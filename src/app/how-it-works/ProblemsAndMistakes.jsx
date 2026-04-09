"use client";

export default function ProblemsAndMistakes() {
  return (
    <section className="py-8 px-6 ">
      <div className="max-w-6xl mx-auto">

        {/* ================= SECTION 15 ================= */}
        <h2 className="text-2xl md:text-4xl font-bold text-[#56021F] mb-6">
          Problems Buyers Face and Solutions
        </h2>

        {/* <p className="text-gray-700 leading-relaxed mb-10 max-w-3xl">
          When searching for a flat for rent in Faridabad, many users face common
          problems. Our platform solves these issues in a simple and reliable way.
        </p> */}

        {/* PROBLEM vs SOLUTION CARDS */}
        <div className="space-y-6 mb-16">

          {/* ITEM */}
          <div className="p-6 border rounded-xl transition hover:shadow-lg">
            <h3 className="text-lg font-semibold text-red-600 mb-2">
              ❌ Fake Listings
            </h3>
            <p className="text-gray-600 mb-2">
              Many listings online are not real, which wastes time and creates confusion. Our platform shows only verified listings, so you can trust every property you see.
            </p>
            {/* <p className="text-green-600 font-medium">
              ✔ Solution: Our platform shows only verified listings, so you can trust every property you see.
            </p> */}
          </div>

          {/* ITEM */}
          <div className="p-6 border rounded-xl transition hover:shadow-lg">
            <h3 className="text-lg font-semibold text-red-600 mb-2">
              ❌ High Brokerage
            </h3>
            <p className="text-gray-600 mb-2">
              Agents often charge high fees, increasing your total cost. With no middleman on our platform, you save money and deal directly with the owner.
            </p>
            {/* <p className="text-green-600 font-medium">
              ✔ Solution: No middleman means you save money and deal directly with owners.
            </p> */}
          </div>

          {/* ITEM */}
          <div className="p-6 border rounded-xl transition hover:shadow-lg">
            <h3 className="text-lg font-semibold text-red-600 mb-2">
              ❌ Lack of Information
            </h3>
            <p className="text-gray-600 mb-2">
              Sometimes property details are incomplete or unclear. We provide clear and full details so you can make the right choice easily.
            </p>
            {/* <p className="text-green-600 font-medium">
              ✔ Solution: We provide complete details including price, size, and photos.
            </p> */}
          </div>

          {/* ITEM */}
          <div className="p-6 border rounded-xl transition hover:shadow-lg">
            <h3 className="text-lg font-semibold text-red-600 mb-2">
              ❌ Delayed Response
            </h3>
            <p className="text-gray-600 mb-2">
             Getting late replies from agents or owners can slow down your search. Direct communication with owners ensures faster replies and quick decisions.
This is how our platform makes finding a flat for rent in Faridabad easy, safe, and stress-free.
            </p>
            {/* <p className="text-green-600 font-medium">
              ✔ Solution: Direct communication ensures faster replies and quick decisions.
            </p> */}
          </div>

        </div>

        <p className="text-gray-700 leading-relaxed mb-16 max-w-4xl">
          This is how our platform makes finding a flat for rent in Faridabad easy,
          safe, and stress-free for every user.
        </p>

        {/* ================= SECTION 16 ================= */}
        <div className="border rounded-2xl px-4 py-6 border-[#56021F] mb-6 bg-[#f4e3e9]">
            <h2 className="text-3xl md:text-4xl font-bold text-[#56021F] mb-6">
          Mistakes to Avoid While Renting
        </h2>

        <p className="text-gray-700 leading-relaxed mb-4 max-w-6xl">
         When searching for a flat for rent in Faridabad, many people make small mistakes that later create big problems. One common mistake is not visiting the property in person. Photos can sometimes be misleading, so it is always better to check the actual condition of the flat before making any decision.

        </p>
        <p className="text-gray-700 leading-relaxed mb-4 max-w-6xl">
         Another mistake is ignoring legal documents. Many people skip checking the rental agreement or owner details, which can lead to confusion later. Always read the agreement carefully and make sure everything is clear, including rent, deposit, and other charges.

        </p>
        <p className="text-gray-700 leading-relaxed mb-4 max-w-6xl">
        Paying advance money without proper verification is also risky. You should never transfer money until you are sure the property is real and the owner is genuine. Using a trusted platform with verified listings can help you avoid such issues.

        </p>
        <p className="text-gray-700 leading-relaxed mb-7 max-w-6xl">
        Lastly, not comparing options can make you miss better deals. Always explore multiple rental apartments in Faridabad before finalizing. A good platform helps you see all properties in one place, making comparison easy and safe.

        </p>
        </div>

        
        

      </div>
    </section>
  );
}
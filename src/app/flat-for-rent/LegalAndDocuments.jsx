"use client";

export default function LegalAndDocuments() {
  return (
    <section className="py-8 px-6 ">
      <div className="max-w-6xl mx-auto">

        {/* ================= SECTION 13 ================= */}
        <h2 className="text-2xl md:text-4xl font-bold text-[#56021F] mb-6">
          Legal Checks Before Renting
        </h2>

        <p className="text-gray-700 leading-relaxed mb-10 max-w-3xl">
          Before you finalize any flat for rent in Faridabad, doing proper legal
          checks is very important. It protects you from future problems and
          ensures a safe and secure rental experience.
        </p>

        {/* LEGAL CARDS */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">

          <div className="p-6 border rounded-xl transition hover:border-[#56021F] hover:shadow-lg">
            <h3 className="font-semibold text-[#56021F] mb-2">
              Verify Owner Identity
            </h3>
            <p className="text-gray-600 text-sm">
              Always confirm that the person renting the flat is the real owner.
              This helps you avoid fraud and ensures that you are dealing with a
              genuine person.
            </p>
          </div>

          <div className="p-6 border rounded-xl transition hover:border-[#56021F] hover:shadow-lg">
            <h3 className="font-semibold text-[#56021F] mb-2">
              Check Agreement Details
            </h3>
            <p className="text-gray-600 text-sm">
              Read the rental agreement carefully before signing. Make sure all
              terms like rent amount, duration, and conditions are clearly written.
            </p>
          </div>

          <div className="p-6 border rounded-xl transition hover:border-[#56021F] hover:shadow-lg">
            <h3 className="font-semibold text-[#56021F] mb-2">
              Confirm Rent Terms
            </h3>
            <p className="text-gray-600 text-sm">
              Understand the rent amount, security deposit, and payment schedule
              clearly. This helps avoid confusion or disputes later.
            </p>
          </div>

          <div className="p-6 border rounded-xl transition hover:border-[#56021F] hover:shadow-lg">
            <h3 className="font-semibold text-[#56021F] mb-2">
              Ensure No Hidden Charges
            </h3>
            <p className="text-gray-600 text-sm">
              Ask clearly about any extra charges like maintenance, electricity,
              or other fees so you don’t face unexpected costs after moving in.
            </p>
          </div>

        </div>

        {/* ================= SECTION 14 ================= */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#56021F] mb-6">
          Documents Required for Renting
        </h2>

        <p className="text-gray-700 leading-relaxed mb-10 max-w-3xl">
          To complete the process of renting smoothly and safely, you need some
          basic documents. These help in verification and ensure a secure rental
          process for both tenant and owner.
        </p>

        {/* DOCUMENT CARDS */}
        <div className="grid md:grid-cols-2 gap-8">

          <div className="p-6 border rounded-xl transition hover:border-[#56021F] hover:shadow-lg">
            <h3 className="font-semibold text-[#56021F] mb-2">
              ID Proof
            </h3>
            <p className="text-gray-600 text-sm">
              You need a valid ID like Aadhaar or PAN card to confirm your identity. It is required for verification by the owner and for legal safety.
            </p>
          </div>

          <div className="p-6 border rounded-xl transition hover:border-[#56021F] hover:shadow-lg">
            <h3 className="font-semibold text-[#56021F] mb-2">
              Address Proof
            </h3>
            <p className="text-gray-600 text-sm">
              This shows your current living address and helps in proper documentation. It is important for trust and record purposes during renting.
            </p>
          </div>

          <div className="p-6 border rounded-xl transition hover:border-[#56021F] hover:shadow-lg">
            <h3 className="font-semibold text-[#56021F] mb-2">
              Passport-Size Photos
            </h3>
            <p className="text-gray-600 text-sm">
              Photos are needed for agreement and verification records. They are a basic requirement in most rental processes.
            </p>
          </div>

          <div className="p-6 border rounded-xl transition hover:border-[#56021F] hover:shadow-lg">
            <h3 className="font-semibold text-[#56021F] mb-2">
              Rental Agreement
            </h3>
            <p className="text-gray-600 text-sm">
              This is the most important document. It includes rent, deposit,
              duration, and terms. Always read it carefully before signing.
            </p>
          </div>

          <div className="p-6 border rounded-xl transition hover:border-[#56021F] hover:shadow-lg md:col-span-2">
            <h3 className="font-semibold text-[#56021F] mb-2">
              Police Verification
            </h3>
            <p className="text-gray-600 text-sm">
              This is done for the safety of both tenant and owner. It ensures
              that the person renting the flat is genuine and trustworthy.
            </p>
          </div>

        </div>

        {/* FINAL TEXT */}
        <p className="text-gray-700 leading-relaxed mt-12 max-w-4xl">
          These documents make the process of rental housing in Faridabad smooth and secure.
        </p>

      </div>
    </section>
  );
}
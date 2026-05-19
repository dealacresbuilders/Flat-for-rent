"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question:
      "What types of flats are available for rent on FlatForRentInFaridabad.com?",
    answer:
      "We list 1BHK, 2BHK, and 3BHK apartments and flats for rent in Faridabad including furnished, semi-furnished, and unfurnished options across 50+ localities like Sainik Colony, Nehar Par, NIT, Greenfield Colony, BPTP, Ballabhgarh, and more.",
  },
  {
    question:
      "Is FlatForRentInFaridabad.com a zero-brokerage platform?",
    answer:
      "Yes. Our platform connects tenants directly with verified property owners in Faridabad with zero brokerage, zero hidden charges, and zero middlemen — saving you up to one month's rent.",
  },
  {
    question:
      "What is the average rent for a flat in Faridabad?",
    answer:
      "Average monthly rent in Faridabad ranges from ₹6,000–₹10,000 for 1BHK flats, ₹10,000–₹20,000 for 2BHK apartments, and ₹18,000–₹35,000 for 3BHK flats depending on location, floor, and furnishing.",
  },
  {
    question:
      "Which areas in Faridabad are best for renting a flat?",
    answer:
      "Top areas for flat rentals in Faridabad include Nehar Par (Sector 82–88), Sainik Colony, Greenfield Colony, NIT, Ballabhgarh, BPTP, Mujesar, SGM Nagar, New Industrial Township, and Eros Garden.",
  },
  {
    question:
      "How do I book a free site visit for a flat in Faridabad?",
    answer:
      "Submit your enquiry through the form on our homepage or on any listing page. Our property consultant will contact you within 24 hours to arrange a free site visit at your preferred time.",
  },
  {
    question:
      "Are all rental flat listings on this platform verified?",
    answer:
      "Yes. Every listing on FlatForRentInFaridabad.com is manually verified by our team to confirm property details, photos, rent amount, and owner information before being published.",
  },
  {
    question:
      "Can I find furnished flats for rent in Faridabad?",
    answer:
      "Absolutely. We offer semi-furnished and fully furnished flats in Faridabad with amenities like air conditioning, modular kitchen, wardrobe, geyser, and high-speed Wi-Fi.",
  },
  {
    question:
      "Is Faridabad well-connected to Delhi and Gurugram?",
    answer:
      "Yes. Faridabad is connected via the Delhi Metro Violet Line, NH-19 (Delhi–Agra Highway), KMP Expressway, and Agra Canal Road, providing seamless connectivity to Delhi, Gurugram, Noida, and all key NCR hubs.",
  },
  {
    question:
      "What documents are required to rent a flat in Faridabad?",
    answer:
      "Typically tenants need Aadhaar card, PAN card, 2–3 months' bank statements, passport-size photographs, and employment or income proof. A registered rent agreement is executed at the local Sub-Registrar office.",
  },
  {
    question:
      "Does FlatForRentInFaridabad.com cover all parts of Faridabad?",
    answer:
      "Yes. We cover 50+ localities including Old Faridabad, New Faridabad (Neharpar), Ballabhgarh, NIT zones, Industrial Townships, and all major colonies and sectors across the city.",
  },
];

export default function FlatRentFAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <>
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />

      <section className="w-full py-6 px-4 bg-white">
        <div className="max-w-7xl mx-auto">

          {/* HEADING */}
          <div className="mb-10 md:mb-14">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight">
              Frequently Asked Questions
            </h2>

            <p className="text-gray-600 text-base md:text-lg max-w-3xl mt-4 md:mt-5 leading-7 md:leading-8">
              Everything you need to know before renting a flat in Faridabad.
            </p>
          </div>

          {/* FAQ */}
          <div className="space-y-4 md:space-y-2">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className={`rounded-2xl md:rounded-3xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "border-[#56021F] shadow-2xl shadow-rose-100"
                      : "border-gray-200 hover:border-rose-300"
                  }`}
                >
                  <button
                    onClick={() =>
                      setOpenIndex(isOpen ? null : index)
                    }
                    className="w-full flex items-start justify-between gap-3 md:gap-6 px-4 md:px-8 py-5 md:py-7 text-left bg-white"
                  >
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 leading-7 md:leading-8 pr-2">
                      {faq.question}
                    </h3>

                    <div
                      className={`flex-shrink-0 w-10 h-10 md:min-w-[48px] md:h-12 rounded-xl md:rounded-2xl flex items-center justify-center transition-all duration-300 ${
                        isOpen
                          ? "bg-[#56021F] text-white rotate-180"
                          : "bg-rose-100 text-[#56021F]"
                      }`}
                    >
                      <ChevronDown size={20} />
                    </div>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-4 md:px-8 pb-6 md:pb-8">
                        <div className="h-px bg-rose-100 mb-5 md:mb-6"></div>

                        <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-7 md:leading-8">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </>
  );
}
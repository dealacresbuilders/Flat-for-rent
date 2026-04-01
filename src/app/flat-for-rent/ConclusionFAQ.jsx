"use client";

import { useState } from "react";

const faqs = [
  {
    q: "How can I find a flat for rent in Faridabad easily?",
    a: "To find a flat for rent in Faridabad, use a trusted property listing platform where you can see all properties in one place. This saves time because you don’t need to visit multiple websites or talk to many agents. Always choose a platform that shows verified listings so you avoid fake properties. The best part is direct contact with owners, so there is no middleman or extra brokerage. You can compare different rental apartments in Faridabad, check details, and make a smart decision easily."
  },
  {
    q: "What is the average rent for flats in Faridabad?",
    a: "The rent of a flat for rent in Faridabad depends on the size, location, and type of property. A 1 BHK flat is usually budget-friendly and good for individuals or couples. A 2 BHK flat is perfect for small families and comes at a medium price range. A 3 BHK flat is more spacious and costs more. Areas like Greater Faridabad offer more affordable flats, while prime sectors may be slightly expensive. Overall, Faridabad is still more affordable than Delhi or Gurgaon."
  },
  {
    q: "Are there affordable flats for rent in Faridabad?",
    a: "Yes, you can easily find affordable options when searching for a flat for rent in Faridabad. Many developing areas like Greater Faridabad offer budget-friendly homes with good facilities. These areas are growing fast and provide good value for money. To get the best deal, always compare multiple rental housing options in Faridabad. Using a platform with all listings in one place helps you choose the most affordable and suitable flat without confusion."
  },
  {
    q: "Is it safe to rent a flat without a broker?",
    a: "Yes, it is safe to rent a flat for rent in Faridabad without a broker if you use a trusted platform. Verified listings ensure that the property and owner are genuine. Direct buyer-seller interaction helps you talk clearly with the owner and understand all details. This also removes unnecessary brokerage charges. Just make sure you check documents and visit the property before finalizing."
  },
  {
    q: "What documents are required to rent a flat?",
    a: "When renting a flat for rent in Faridabad, you need some basic documents. These include ID proof (like Aadhaar or PAN), address proof, passport-size photos, and a rental agreement. In many cases, police verification is also required for safety. These documents help make the rental process smooth and secure for both tenant and owner."
  },
  {
    q: "Which are the best areas in Faridabad?",
    a: "There are many good areas to find a flat for rent in Faridabad. Popular sectors like 15, 16, and 21 are well-developed and have good connectivity. Greater Faridabad is a great choice for affordable flats and new projects. Sector 37 is also good for working professionals because it is close to industrial areas. You should choose the location based on your budget, workplace, and daily needs."
  },
  {
    q: "What should I check before renting a flat?",
    a: "Before finalizing a flat for rent in Faridabad, always check important things. Visit the property to see its condition. Verify the owner’s details and check legal documents carefully. Make sure the rent amount and other charges are clearly mentioned. Also check water, electricity, and nearby facilities. Taking these steps helps you avoid problems later."
  },
  {
    q: "How does direct buyer-seller interaction help?",
    a: "Direct interaction is very helpful when searching for a flat for rent in Faridabad. It removes the middleman, so you don’t have to pay extra brokerage fees. You can talk directly with the owner, ask questions, and negotiate rent easily. This makes the process faster, clearer, and more transparent. It also builds trust between both parties."
  },
  {
    q: "Can I list my property for free?",
    a: "Yes, many platforms offer free property listing for owners. This means you can list your flat without paying any charges. It helps you reach more people who are looking for a flat for rent in Faridabad. With features like direct contact and verified listings, you can find tenants faster and without any middleman. This makes the process simple and cost-effective."
  },
  {
    q: "Why should I choose a verified platform?",
    a: "Choosing a verified platform is very important when searching for a flat for rent in Faridabad. Verified listings ensure that the property details are real and correct. You can trust the information and avoid scams. These platforms also allow direct contact with owners and show all properties in one place. This makes your search easy, safe, and stress-free."
  }
];

export default function ConclusionFAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section className="py-8 px-6 ">
      <div className="max-w-6xl mx-auto">

        {/* ================= CONCLUSION ================= */}
        <div className="border rounded-2xl px-4 py-6 border-[#56021F] mb-6 bg-[#f4e3e9]">
            <h2 className="text-3xl md:text-4xl font-bold text-[#56021F] mb-6">
          Conclusion: Your Complete Rental Solution
        </h2>

        <p className="text-gray-700 leading-relaxed mb-4">
          Finding a flat for rent in Faridabad may look difficult at first, but it becomes very simple when you use the right platform. Many people waste time visiting different websites, talking to agents, and still feel confused. But when everything is available in one place, the whole process becomes easy and clear.
        </p>

        <p className="text-gray-700 leading-relaxed mb-4">
          With a trusted platform, you can see all properties together without missing any good option. You don’t have to worry about fake listings because the properties are verified and checked. This gives you confidence while choosing your home.
        </p>

        <p className="text-gray-700 leading-relaxed mb-10">
          Another big benefit is that you can talk directly to the property owner. There is no middleman involved, so you don’t have to pay extra brokerage fees. You can ask questions, understand details clearly, and make decisions faster.
The main goal of the platform is to keep everything simple, honest, and stress-free. You get clear information, real listings, and full control over your choices. Whether you are a student, working professional, or family, you can easily find a flat for rent in Faridabad that suits your needs.
In the end, it’s all about saving your time, money, and effort while making a safe and smart decision.

        </p>
        </div>

        {/* ================= FAQ ================= */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#56021F] mb-6">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">

          {faqs.map((item, i) => (
            <div
              key={i}
              className="border rounded-xl transition hover:shadow-md"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left px-5 py-4 flex justify-between items-center"
              >
                <span className="font-medium text-[#56021F]">
                  {item.q}
                </span>
                <span className="text-xl text-gray-900">
                  {open === i ? "-" : "+"}
                </span>
              </button>

              {open === i && (
                <div className="px-5 pb-4 text-gray-600 text-sm leading-relaxed">
                  {item.a}
                </div>
              )}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
"use client";

import React, { useState } from "react";
import Link from "next/link";
import toast from "react-hot-toast";

const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const website =
    typeof window !== "undefined"
      ? window.location.hostname.replace("www.", "")
      : "";

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      if (!/^\d*$/.test(value)) return;
      if (value.length > 10) return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.phone.length !== 10) {
      toast.error("Phone number must be 10 digits");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          website,
        }),
      });

      const result = await res.json();

      if (result.success) {
        toast.success("Enquiry submitted successfully!");
        setFormData({ name: "", phone: "", message: "" });
      } else {
        toast.error("Something went wrong. Try again.");
      }
    } catch (err) {
      toast.error("Server error. Please try later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="relative bg-cover bg-center px-4 sm:px-6"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1522708323590-d24dbb6b0267')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative max-w-7xl mx-auto py-16 grid md:grid-cols-12 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div className="md:col-span-7 lg:col-span-8 text-white">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Flats for Rent in{" "}
            <span className="text-[#56021F] bg-white px-3 py-1 rounded-md">
              Faridabad
            </span>
          </h1>

          <p className="text-lg max-w-2xl text-gray-200 leading-relaxed">
                 Finding a flat for rent in Faridabad is no longer stressful or confusing. Whether you are a working professional, a family, a student, or a business owner relocating, this platform helps you discover verified rental flats across prime and emerging locations. With trusted listings, transparent pricing, and expert guidance from local property dealers, renting becomes smooth and secure. From affordable apartments to premium residences, explore rental options that perfectly match your lifestyle, budget, and location preferences.<br />
                Flat for rent in Faridabad options are curated to save your time, eliminate middleman confusion, and offer genuine choices. Every listing is updated regularly, ensuring availability and authenticity. Our mission is simple — connect tenants with the right property quickly and confidently.
          </p>
          <Link href="/flat-for-rent">
  <button className="relative overflow-hidden bg-[#56021F] text-white px-6 py-3 rounded-xl font-semibold shadow-md transition-all duration-300 hover:bg-[#56021F] hover:shadow-xl hover:scale-105 mt-4">
    
    <span className="relative z-10">Learn More</span>

    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] hover:translate-x-[100%] transition duration-700"></span>
  
  </button>
</Link>
        </div>
        

        {/* RIGHT GLASS FORM */}
        <div className="md:col-span-5 lg:col-span-4">
          <div className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl border border-white/20 shadow-2xl text-white">

            <h3 className="text-2xl font-semibold mb-2 text-[#ffffff]">
              Book Rental Visit
            </h3>

            <p className="text-sm mb-6 text-gray-300">
              Submit your details to get the best rental deals.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">

              <input
                name="name"
                required
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg 
                bg-white/10 border border-white/30
                text-white placeholder-white/70
                focus:ring-2 focus:ring-[#56021F] focus:border-[#56021F]
                outline-none transition"
              />

              <input
                name="phone"
                required
                inputMode="numeric"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg 
                bg-white/10 border border-white/30
                text-white placeholder-white/70
                focus:ring-2 focus:ring-[#56021F] focus:border-[#56021F]
                outline-none transition"
              />

              <textarea
                rows="3"
                name="message"
                placeholder="Your Rental Requirement (Budget, BHK, Location)"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg 
                bg-white/10 border border-white/30
                text-white placeholder-white/70
                focus:ring-2 focus:ring-[#56021F] focus:border-[#56021F]
                outline-none resize-none transition"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-lg font-semibold 
                bg-[#56021F] text-white 
                hover:bg-[#3d0116] 
                transition duration-300 
                disabled:opacity-70 shadow-lg"
              >
                {loading ? "Submitting..." : "Get Rental Details"}
              </button>

            </form>

          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
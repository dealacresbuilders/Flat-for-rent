"use client";

import React, { useState } from "react";
import AlertPopup from "@/components/AlertPopup";

const SidebarEnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const [popup, setPopup] = useState({
    open: false,
    type: "success",
    message: "",
  });

  const showPopup = (type, message) => {
    setPopup({
      open: true,
      type,
      message,
    });
  };

  const closePopup = () => {
    setPopup((prev) => ({
      ...prev,
      open: false,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      if (!/^\d*$/.test(value)) return;
      if (value.length > 10) return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.phone.length !== 10) {
      showPopup(
        "error",
        "Phone number must be exactly 10 digits."
      );
      return;
    }

    try {
      setLoading(true);

      const payload = {
        ...formData,
        website:
          "flatforrentinfaridabad.com",
        source:
          "Residential Sidebar Enquiry — Buy House in Faridabad",
      };

      console.log("PAYLOAD:", payload);

      const res = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify(payload),
      });

      console.log("STATUS:", res.status);

      const data = await res.json();

      console.log("RESPONSE:", data);

      if (data.success) {
        showPopup(
          "success",
          "Your enquiry has been submitted successfully!"
        );

        setFormData({
          name: "",
          phone: "",
          message: "",
        });
      } else {
        showPopup(
          "error",
          data.message ||
            "Something went wrong. Please try again."
        );
      }
    } catch (err) {
      console.log("ERROR:", err);

      showPopup(
        "error",
        "Server error. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div
        className="sticky top-28 bg-white rounded-2xl
        shadow-xl p-8 border border-gray-200"
      >
        <h2 className="text-2xl font-semibold text-[#56021F] mb-2">
          Get Rental Consultation
        </h2>

        <p className="text-sm text-gray-600 mb-6 leading-relaxed">
          Share your rental requirement and
          our property expert will contact
          you shortly with the best available
          options.
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <input
            name="name"
            required
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl
            border border-gray-300
            text-gray-900
            placeholder:text-gray-500
            focus:ring-2
            focus:ring-[#56021F]
            focus:border-[#56021F]
            outline-none transition"
          />

          <input
            name="phone"
            required
            inputMode="numeric"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl
            border border-gray-300
            text-gray-900
            placeholder:text-gray-500
            focus:ring-2
            focus:ring-[#56021F]
            focus:border-[#56021F]
            outline-none transition"
          />

          <textarea
            name="message"
            rows="4"
            placeholder="Mention budget, BHK type, preferred sector..."
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl
            border border-gray-300
            text-gray-900
            placeholder:text-gray-500
            focus:ring-2
            focus:ring-[#56021F]
            focus:border-[#56021F]
            outline-none resize-none transition"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#56021F]
            text-white py-3 rounded-xl
            font-semibold hover:bg-[#3d0116]
            transition shadow-md
            disabled:opacity-60"
          >
            {loading
              ? "Submitting..."
              : "Request Call Back"}
          </button>
        </form>
      </div>

      <AlertPopup
        open={popup.open}
        type={popup.type}
        message={popup.message}
        onClose={closePopup}
      />
    </>
  );
};

export default SidebarEnquiryForm;
"use client";

import { useState } from "react";
import AlertPopup from "@/components/AlertPopup";

export default function ContactPopup({
  isOpen,
  onClose,
  propertyTitle,
}) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const [popup, setPopup] = useState({
    open: false,
    type: "",
    message: "",
  });

  if (!isOpen) return null;

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
      setPopup({
        open: true,
        type: "error",
        message: "Phone number must be 10 digits",
      });
      return;
    }

    try {
      setLoading(true);

      const payload = {
        ...formData,
        propertyTitle,
        website:"flatforrentinfaridabad.com",
        source: "Rental Popup Form",
      };

      const res = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data.success) {
        setPopup({
          open: true,
          type: "success",
          message: "Rental Enquiry Submitted Successfully!",
        });

        setFormData({
          name: "",
          phone: "",
          message: "",
        });

        setTimeout(() => {
          setPopup({ open: false, type: "", message: "" });
          onClose?.();
        }, 1500);
      } else {
        setPopup({
          open: true,
          type: "error",
          message: data.message || "Something went wrong!",
        });
      }
    } catch (err) {
      setPopup({
        open: true,
        type: "error",
        message: "Server error!",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-4">
     {/* ✅ ALERT POPUP */}
      <AlertPopup
        open={popup.open}
        type={popup.type}
        message={popup.message}
        onClose={() =>
          setPopup({ open: false, type: "", message: "" })
        }
      />
      <div className="bg-white w-full max-w-md rounded-2xl p-8 shadow-2xl relative border border-gray-200">

        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-[#56021F] text-xl transition"
        >
          ×
        </button>

        <h3 className="text-2xl font-semibold text-[#56021F]">
          Book Rental Visit
        </h3>

        <p className="text-sm text-gray-600 mt-3 mb-7 leading-relaxed">
          Enquiry for rental property:
          <span className="block font-medium text-gray-900 mt-1">
            {propertyTitle}
          </span>
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            name="name"
            required
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl 
            focus:ring-2 focus:ring-[#56021F] focus:border-[#56021F]
            outline-none transition placeholder:text-gray-500"
          />

          <input
            name="phone"
            required
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl 
            focus:ring-2 focus:ring-[#56021F] focus:border-[#56021F]
            outline-none transition placeholder:text-gray-500"
          />

          <textarea
            name="message"
            rows="4"
            placeholder="Mention budget, BHK type, preferred sector..."
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl 
            focus:ring-2 focus:ring-[#56021F] focus:border-[#56021F]
            outline-none resize-none transition placeholder:text-gray-500 text-black"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-[#56021F] hover:bg-[#3d0116] 
            text-white font-semibold rounded-xl transition shadow-md disabled:opacity-60"
          >
            {loading ? "Submitting..." : "Get Rental Details"}
          </button>

        </form>
      </div>
    </div>
  );
}
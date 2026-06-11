"use client"

import { useState } from "react"
import Image from "next/image"
import Breadcrumb from "@/components/Breadcrumb"
import AlertPopup from "@/components/AlertPopup"

export default function Page() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  })

  const [loading, setLoading] = useState(false)

  const [popup, setPopup] = useState({
    open: false,
    type: "success",
    message: "",
  })

  const showPopup = (type, message) => {
    setPopup({
      open: true,
      type,
      message,
    })
  }

  const handleChange = (e) => {
    const { name, value } = e.target

    if (name === "phone") {
      if (!/^\d*$/.test(value)) return
      if (value.length > 10) return
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (formData.phone.length !== 10) {
      showPopup(
        "error",
        "Phone number must be 10 digits"
      )
      return
    }

    setLoading(true)

    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          website: "flatforrentinfaridabad.com",
          source: "Contact Page Rental Form",
        }),
      })

      const result = await res.json()

      if (result.success) {
        showPopup(
          "success",
          "Your rental inquiry has been submitted!"
        )

        setFormData({
          name: "",
          phone: "",
          message: "",
        })
      } else {
        showPopup(
          "error",
          "Something went wrong. Please try again."
        )
      }
    } catch (err) {
      showPopup(
        "error",
        "Server error. Please try later."
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <section className="bg-gradient-to-b from-white to-[#f4e9ed] py-10 px-4 sm:px-6">

        <div className="max-w-7xl mx-auto">

          <div className="py-5">
            <Breadcrumb />
          </div>

          {/* HEADING */}
          <div className="mb-10">

            <h1 className="text-2xl md:text-4xl font-bold text-gray-900">
              Let’s Find Your{" "}
              <span className="text-[#56021F]">
                Perfect Rental Home
              </span>
            </h1>

            <p className="mt-6 text-gray-600 max-w-2xl">
              Looking for a flat on rent in Faridabad?
              Our rental experts will help you find the best options
              based on your budget and preferences.
            </p>

          </div>

          {/* FORM + IMAGE */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* FORM */}
            <div className="bg-white border border-[#56021F]/20 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition duration-500">

              <h2 className="text-2xl font-semibold mb-2 text-[#56021F]">
                Register Rental Requirement
              </h2>

              <p className="text-gray-500 mb-8 text-sm">
                Fill in your details and our consultant will contact you shortly.
              </p>

              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >

                <div>
                  <label className="text-sm text-gray-600">
                    Full Name*
                  </label>

                  <input
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="mt-2 w-full px-4 py-3 rounded-xl bg-[#f9f4f6] border border-[#56021F]/20 text-gray-900 focus:ring-2 focus:ring-[#56021F] outline-none"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-600">
                    Phone*
                  </label>

                  <input
                    name="phone"
                    required
                    inputMode="numeric"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    className="mt-2 w-full px-4 py-3 rounded-xl bg-[#f9f4f6] border border-[#56021F]/20 text-gray-900 focus:ring-2 focus:ring-[#56021F] outline-none"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-600">
                    Message
                  </label>

                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Mention budget, BHK type, preferred sector..."
                    className="mt-2 w-full px-4 py-3 rounded-xl bg-[#f9f4f6] border border-[#56021F]/20 text-gray-900 focus:ring-2 focus:ring-[#56021F] outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 rounded-full font-semibold bg-[#56021F] text-white hover:bg-[#3d0116] transition shadow-md hover:shadow-lg disabled:opacity-60"
                >
                  {loading
                    ? "Submitting..."
                    : "Submit Rental Inquiry"}
                </button>

              </form>

            </div>

            {/* IMAGE */}
            <div className="relative h-[520px] rounded-3xl overflow-hidden border border-[#56021F]/20 shadow-xl">

              <Image
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa"
                alt="Rental Consultation"
                fill
                priority
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

            </div>

          </div>

          {/* MAP */}
          <div className="mt-24 rounded-3xl overflow-hidden border border-[#56021F]/20 shadow-xl">

            <iframe
  title="Faridabad Location"
  src="https://www.google.com/maps?q=Faridabad,Haryana&z=12&output=embed"
  className="w-full h-[500px] border-0"
  loading="lazy"
/>

          </div>

        </div>

      </section>

      <AlertPopup
        open={popup.open}
        type={popup.type}
        message={popup.message}
        onClose={() =>
          setPopup((prev) => ({
            ...prev,
            open: false,
          }))
        }
      />
    </>
  )
}
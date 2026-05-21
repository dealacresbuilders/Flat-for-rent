"use client";

import { useEffect, useState, useMemo } from "react";
import { useProperty } from "@/contextapi/propertycontext";
import Image from "next/image";
import Link from "next/link";
import ContactPopup from "@/components/ContactPopup";
import PropertyViewButton from "@/components/PropertyViewButton";

export default function FilterProperties({ area }) {

  const { data, properties, loading2, error2, setLocality } = useProperty();

  // ✅ SAFETY FIX (null crash prevent)
  const safeData = Array.isArray(data) ? data : [];
  const safeProperties = Array.isArray(properties) ? properties : [];

  const [open, setOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState("");

  const formattedArea = area
    ?.replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  useEffect(() => {
    if (formattedArea) {
      setLocality(formattedArea);
    }
  }, [formattedArea, setLocality]);

  const formatArea = (area, unit) => {
    if (!area) return "N/A";
    const formattedNumber = Number(area).toLocaleString("en-IN");
    if (!unit) return formattedNumber;
    return `${formattedNumber} ${unit}`;
  };

  /* ================= 150 CARD LOGIC ================= */

  const finalData = useMemo(() => {

    // Agar full domain data hi nahi hai
    if (safeProperties.length === 0) {
      return safeData;
    }

    // Filtered IDs
    const filteredIds = new Set(
      safeData.map((p) => p._id)
    );

    // Remaining domain properties
    const remaining = safeProperties.filter(
      (p) => !filteredIds.has(p._id)
    );

    const needed = 150 - safeData.length;

    return [
      ...safeData,
      ...remaining.slice(0, needed > 0 ? needed : 0)
    ].slice(0, 150);

  }, [safeData, safeProperties]);

  /* ================= LOADING ================= */
  if (loading2) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-gradient-to-b from-white to-[#f4e9ed]">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-4 border-[#56021F]/20"></div>
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#56021F] border-r-[#3d0116] animate-spin"></div>
        </div>
        <p className="mt-6 text-sm font-medium text-gray-600 tracking-wide">
          Loading Rental Listings...
        </p>
      </div>
    );
  }

  /* ================= ERROR ================= */
  if (error2) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-gradient-to-b from-white to-[#f4e9ed]">
        <p className="text-red-500 text-lg">
          Something went wrong while loading properties.
        </p>
      </div>
    );
  }

  /* ================= EMPTY ================= */
  if (!data || data.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-gradient-to-b from-white to-[#f4e9ed]">
        <h2 className="text-2xl font-semibold text-gray-800">
          No Rental Flats Available in {formattedArea}
        </h2>
        <p className="text-gray-500 mt-2">
          New listings will be updated soon.
        </p>
      </div>
    );
  }

  return (
    <section className="bg-[#F9F4F6]  py-10">
      <div className="max-w-7xl mx-auto">

        {/* HEADING */}
        {/* <div className="text-center mb-14">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Flats for Rent in{" "}
            <span className="text-[#56021F]">{formattedArea}</span>
          </h1>
          <p className="text-gray-600 mt-3">
            Verified rental flats in prime residential sectors.
          </p>
          <div className="w-20 h-1 bg-[#56021F] mx-auto mt-6 rounded-full"></div>
        </div> */}

        {/* GRID */}
        <div className="grid grid-cols-1  gap-6">

          {finalData.map((property) => (
            <div
              key={property._id}
              className="bg-white rounded-2xl border border-[#56021F]/10
              shadow-sm hover:shadow-2xl hover:-translate-y-1
              transition duration-300 overflow-hidden flex flex-col md:flex-row"
            >

              {/* IMAGE */}
              <div className="relative md:w-[45%] aspect-[4/3] md:aspect-auto">
                
                  <Image
                   src={property?.media?.url ?
                      property?.media?.url
                      :"https://res.cloudinary.com/do84xjpmx/image/upload/v1778824608/faridabadProperties/karmhvblcsha3fngnqa1.webp"
                    }
                    unoptimized
                    alt={property.title}
                    fill
                    className="object-cover"
                  />
               
                 <span className="absolute top-3 left-3 bg-[#56021F] text-white text-xs px-3 py-1 rounded-full shadow font-medium">
                    {property.propertyType}
                  </span>
              </div>

              {/* CONTENT */}
             <div className="p-6 flex flex-col w-full min-w-0">
  
  <h2 className="text-xl font-bold text-gray-900 overflow-hidden md:whitespace-nowrap md:text-ellipsis">
    {property.title}
  </h2>

                  <p className="text-sm text-gray-500 mt-1 flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 21s-6-5.33-6-10a6 6 0 1112 0c0 4.67-6 10-6 10z"
                      />
                      <circle cx="12" cy="11" r="2.5" />
                    </svg>

                    {property.locality}
                  </p>

                {/* INFO BAR */}
                <div className="mt-4 bg-[#f9f4f6] border border-[#56021F]/20 rounded-xl px-4 py-3 text-xs flex items-center justify-between">

                  <div className="flex flex-col items-center flex-1">
                    <span className="text-gray-500">AREA</span>
                    <span className="font-semibold text-gray-900">
                      {formatArea(property.area, property.areaUnit)}
                    </span>
                  </div>

                  <div className="h-8 w-px bg-[#56021F]/20"></div>

                  <div className="flex flex-col items-center flex-1">
                    <span className="text-gray-500">STATUS</span>
                    <span className="font-semibold text-[#56021F]">
                      {property.status || "Available"}
                    </span>
                  </div>

                  <div className="h-8 w-px bg-[#56021F]/20"></div>

                  <div className="flex flex-col items-center flex-1">
                    <span className="text-gray-500">TYPE</span>
                    <span className="font-semibold text-gray-900">
                      {property.propertyCategory}
                    </span>
                  </div>

                </div>

                {/* <p className="text-sm text-gray-600 mt-3 line-clamp-2">
                  {property.description2 ||
                    "Premium rental flat with modern amenities and excellent connectivity."}
                </p> */}

                <div className="flex-1" />

                {/* PRICE + LINK */}
                {/* PRICE + ACTIONS */}
                <div className="mt-5 flex justify-between items-center flex-wrap gap-3">

                  {/* PRICE */}
                  <p className="text-lg font-bold text-[#56021F]">
                    {property.price && property.price > 0
                      ? `₹ ${property.price.toLocaleString("en-IN")}`
                      : "Rent on Request"}
                  </p>

                  {/* RIGHT SIDE BUTTONS */}
                  <div className="flex items-center gap-4">

                    {/* CONTACT NOW BUTTON */}
                    <button
                      onClick={() => {
                        setSelectedProperty(property.title);
                        setOpen(true);
                      }}
                      className="bg-[#56021F] text-white px-4 py-2 
      rounded-full text-sm font-medium
      hover:bg-[#3d0116] transition 
      shadow cursor-pointer"
                    >
                      Contact Now
                    </button>

                    {/* VIEW DETAILS (UNCHANGED STYLE) */}
                    {/* <Link
                      href={`/properties/${property.slug}`}
  onClick={() => {
    localStorage.setItem("lastLocation", property.city);
    localStorage.setItem("lastListing", window.location.pathname);
  }}
                      className="text-[#56021F] text-sm font-medium hover:underline cursor-pointer"
                    >
                      View Details →
                    </Link> */}
<PropertyViewButton
  slug={property.slug}
  text="View Details →"
  className="text-[#56021F]
  text-sm font-medium
  hover:underline
  cursor-pointer"
/>
                  </div>
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>

      <ContactPopup
        isOpen={open}
        onClose={() => setOpen(false)}
        propertyTitle={selectedProperty}
      />
    </section>
  );
}
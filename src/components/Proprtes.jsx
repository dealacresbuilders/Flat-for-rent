"use client";

import { useState, useRef } from "react";
import { useProperty } from "@/contextapi/propertycontext";
import Image from "next/image";
import Link from "next/link";
import ContactPopup from "@/components/ContactPopup";
import SidebarEnquiryForm from "./SidebarEnquiryForm";
import Pagination from "@/components/Pagination";
import BHKFilterButtons from "@/components/BHKFilterButtons";

export default function Properties() {
  const { properties, loading, error, page2, setPage2,
    totalItems, itemsPerPage, } = useProperty();
  const [open, setOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState("");

  const propertySectionRef = useRef(null);
 

  const formatArea = (area, unit) => {
    if (!area) return "N/A";
    const formattedNumber = Number(area).toLocaleString("en-IN");
    if (!unit) return formattedNumber;
    const formattedUnit =
      unit.charAt(0).toUpperCase() + unit.slice(1).toLowerCase();
    return `${formattedNumber} ${formattedUnit}`;
  };

  /* ================= LOADING ================= */
  if (loading) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-gradient-to-b from-white to-[#f4e9ed]">
        <div className="relative w-14 h-14">
          <div className="absolute inset-0 rounded-full border-4 border-[#56021F]/20"></div>
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#56021F] border-r-[#3d0116] animate-spin"></div>
        </div>
        <p className="mt-5 text-sm font-medium text-gray-600 tracking-wide">
          Loading Rental Listings...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <p className="text-center py-20 text-red-500">
        Something went wrong while loading properties.
      </p>
    );
  }

  if (!properties || properties.length === 0) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-semibold text-gray-800">
          No Rental Flats Available in Faridabad
        </h2>
        <p className="text-gray-500 mt-2">
          New rental listings will be updated soon.
        </p>
      </div>
    );
  }


  return (
    <section
      ref={propertySectionRef}
      id="locations"
      className="bg-[#F9F4F6] px-3 sm:px-4 py-12 sm:py-16"
    >
      {/* HEADING */}
      <div className="max-w-7xl mx-auto mb-10 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
          Flats for Rent in Faridabad
        </h2>

        <p className="mt-3 sm:mt-4 text-gray-500 max-w-2xl text-sm sm:text-base">
          Explore premium rental flats in prime sectors of Faridabad.
          Affordable 1BHK, 2BHK & 3BHK options available for families and professionals.
        </p>

        <div className="w-16 sm:w-20 h-1 bg-[#56021F] mt-4 sm:mt-6 rounded-full"></div>

        <div className="mt-6 sm:mt-8">
          <BHKFilterButtons />
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-10">

        {/* LEFT */}
        <div className="lg:col-span-2 space-y-6 sm:space-y-8">
          {properties.map((property) => (
            <div
              key={property._id}
              className="bg-white rounded-2xl border border-gray-100 
              shadow-sm hover:shadow-2xl hover:-translate-y-1 
              transition duration-300 overflow-hidden md:h-[250px]"
            >
              <div className="flex flex-col md:flex-row md:h-full h-full">

                {/* IMAGE */}
                <div className="relative w-full md:w-[45%] h-48 md:h-auto">
                  <Image
                    src={property?.media?.url || "/no-image.png"}
                    unoptimized
                    alt={property.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
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
                  <div className="mt-3 bg-gray-50 border border-gray-200 rounded-xl px-3 sm:px-5 py-3 flex flex-col sm:flex-row sm:flex-wrap md:flex-nowrap items-start sm:items-center justify-between gap-2 sm:gap-3 text-xs sm:text-sm">

                    <div>
                      <span className="text-gray-400 uppercase text-[10px]">
                        Area:
                      </span>{" "}
                      <span className="font-semibold text-gray-900">
                        {formatArea(property.area, property.areaUnit)}
                      </span>
                    </div>

                    <div>
                      <span className="text-gray-400 uppercase text-[10px]">
                        Type:
                      </span>{" "}
                      <span className="font-semibold text-gray-900">
                        {property.propertyCategory}
                      </span>
                    </div>

                    <div>
                      <span className="text-gray-400 uppercase text-[10px]">
                        Status:
                      </span>{" "}
                      <span className="font-semibold text-[#56021F]">
                        {property.status || "Available for Rent"}
                      </span>
                    </div>

                  </div>

                  {/* <p className="text-xs sm:text-sm text-gray-500 mt-3 line-clamp-2 leading-relaxed">
                    {property.description2 ||
                      "Modern rental flat in a prime location with excellent connectivity and amenities."}
                  </p> */}

                  <div className="flex-1" />

                  {/* PRICE + BUTTONS */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mt-4">

  {/* PRICE */}
  <p className="text-xl sm:text-2xl font-bold text-[#56021F]">
    ₹ {property.price?.toLocaleString("en-IN")}
  </p>

  {/* BUTTONS */}
  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full md:w-auto">

    <button
      onClick={() => {
        setSelectedProperty(property.title);
        setOpen(true);
      }}
      className="bg-[#56021F] text-white px-4 sm:px-6 py-2 rounded-full 
      hover:bg-[#3d0116] transition w-full md:w-auto 
      text-center font-medium shadow-sm text-sm"
    >
      Contact Now
    </button>

    <Link
     
  href={`/properties/${property.slug}`}
  onClick={() => {
    localStorage.setItem("lastLocation", property.city);

    // 🔥 ONLY set if coming from listing page
    if (window.location.pathname.includes("flat") || window.location.pathname.includes("listing")) {
      localStorage.setItem("lastListing", window.location.pathname);
    } else {
      // 🔥 clear if coming from home or anywhere else
      localStorage.removeItem("lastListing");
    }
  }}
      className="border border-[#56021F] text-[#56021F] 
      px-4 sm:px-6 py-2 rounded-full hover:bg-[#56021F] 
      hover:text-white transition w-full md:w-auto text-center font-medium text-sm"
    >
      View Details
    </Link>

  </div>

</div>

                </div>
              </div>
            </div>
          ))}

          {/* PAGINATION */}
          <div className="mt-10 sm:mt-16">
            <Pagination
              totalItems={totalItems}
              itemsPerPage={itemsPerPage}
              currentPage={page2}
              onPageChange={(page) => {
                setPage2(page);

                const yOffset = -90;
                const y =
                  propertySectionRef.current.getBoundingClientRect().top +
                  window.pageYOffset +
                  yOffset;

                window.scrollTo({ top: y, behavior: "smooth" });
              }}
            />
          </div>

        </div>

        {/* RIGHT SIDEBAR */}
        <div className="lg:col-span-1 lg:sticky top-28">
          <SidebarEnquiryForm />
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
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
  const { properties, loading, error } = useProperty();
  const [open, setOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const propertySectionRef = useRef(null);
  const itemsPerPage = 150;

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

  /* ================= PAGINATION ================= */
  const totalItems = properties.length;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProperties = properties.slice(startIndex, endIndex);

  return (
    <section
      ref={propertySectionRef}
      className="bg-[#F9F4F6] px-4 py-16"
    >
      {/* HEADING */}
      <div className="max-w-7xl mx-auto  mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Flats for Rent in Faridabad
        </h1>

        <p className="mt-4 text-gray-500 max-w-2xl ">
          Explore premium rental flats in prime sectors of Faridabad.
          Affordable 1BHK, 2BHK & 3BHK options available for families and professionals.
        </p>

        <div className="w-20 h-1 bg-[#56021F] mt-6 rounded-full"></div>
         <div className="mt-8">
    <BHKFilterButtons />
  </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* LEFT */}
        <div className="lg:col-span-2 space-y-8">
          {currentProperties.map((property) => (
            <div
              key={property._id}
              className="bg-white rounded-2xl border border-gray-100 
              shadow-sm hover:shadow-2xl hover:-translate-y-1 
              transition duration-300 overflow-hidden"
            >
              <div className="flex flex-col md:flex-row">

                <div className="relative md:w-[35%]">
                  <Image
                    src={property?.media?.url || "/no-image.png"}
                    alt={property.title}
                    width={600}
                    height={400}
                    className="w-full h-52 md:h-full object-cover"
                  />
                  <span className="absolute top-4 left-4 bg-[#56021F] text-white text-xs px-4 py-1 rounded-full shadow font-medium">
                    {property.propertyType}
                  </span>
                </div>

                <div className="p-5 flex-1 flex flex-col">

                  <h2 className="text-lg font-semibold text-gray-900">
                    {property.title}
                  </h2>

                  <p className="text-sm text-gray-500 mt-1">
                    {property.locality}
                  </p>

                  {/* INFO BAR */}
                  <div className="mt-4 bg-gray-50 border border-gray-200 rounded-xl px-5 py-3 flex flex-wrap md:flex-nowrap items-center justify-between gap-3 text-sm">

                    <div>
                      <span className="text-gray-400 uppercase text-xs tracking-wide">
                        Area:
                      </span>{" "}
                      <span className="font-semibold text-gray-900">
                        {formatArea(property.area, property.areaUnit)}
                      </span>
                    </div>

                    <div>
                      <span className="text-gray-400 uppercase text-xs tracking-wide">
                        Type:
                      </span>{" "}
                      <span className="font-semibold text-gray-900">
                        {property.propertyCategory}
                      </span>
                    </div>

                    <div>
                      <span className="text-gray-400 uppercase text-xs tracking-wide">
                        Status:
                      </span>{" "}
                      <span className="font-semibold text-[#56021F]">
                        {property.status || "Available for Rent"}
                      </span>
                    </div>

                  </div>

                  <p className="text-sm text-gray-500 mt-4 line-clamp-2 leading-relaxed">
                    {property.description ||
                      "Modern rental flat in a prime location with excellent connectivity and amenities."}
                  </p>

                  <div className="flex-1" />

                  <div className="flex flex-col md:flex-row justify-between items-center mt-5 gap-4">

                    <p className="text-2xl font-bold text-[#56021F]">
                      ₹ {property.price?.toLocaleString("en-IN")}
                    </p>

                    <div className="flex gap-3 w-full md:w-auto">

                      <button
                        onClick={() => {
                          setSelectedProperty(property.title);
                          setOpen(true);
                        }}
                        className="bg-[#56021F] text-white px-6 py-2 rounded-full 
                        hover:bg-[#3d0116] transition w-full md:w-auto 
                        text-center font-medium shadow-sm"
                      >
                        Contact Now
                      </button>

                      <Link
                        href={`/properties/${property.slug}`}
                        className="border border-[#56021F] text-[#56021F] 
                        px-6 py-2 rounded-full hover:bg-[#56021F] 
                        hover:text-white transition w-full md:w-auto text-center font-medium"
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
          <div className="mt-16">
            <Pagination
              totalItems={totalItems}
              itemsPerPage={itemsPerPage}
              currentPage={currentPage}
              onPageChange={(page) => {
                setCurrentPage(page);

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
        <div className="lg:col-span-1 sticky top-28">
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
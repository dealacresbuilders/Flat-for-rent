import FilterProperties from "./FilterProperties";

import SidebarEnquiryForm from "@/components/SidebarEnquiryForm";
import Breadcrumb from "@/components/Breadcrumb";
export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const rawArea = resolvedParams?.area;

  const area = rawArea?.replace("flat-for-rent-in-", "");

  const formattedArea = area
    ?.replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  const locationName = formattedArea || "Faridabad";

  return {
    title: `Flats for Rent in ${locationName} | Affordable Rental Apartments`,

    description: `Find flats for rent in ${locationName}. Explore 1BHK, 2BHK, 3BHK rental apartments with modern amenities, good connectivity, and affordable pricing in ${locationName}.`,

    keywords: [
      `flats for rent in ${locationName}`,
      `rent flat ${locationName}`,
      `1BHK rent ${locationName}`,
      `2BHK rent ${locationName}`,
      `3BHK rent ${locationName}`,
      `affordable flats ${locationName}`,
      `furnished flats ${locationName}`,
      `${locationName} rental properties`,
    ],

    alternates: {
      canonical: `https://www.flatsforrentingurgaon.com/${rawArea}`,
    },
  };
}
export default async function Page({ params }) {
  const resolvedParams = await params;
    // slug format → sector-9 → Sector 9
const rawArea = resolvedParams?.area;

// ✅ CLEAN SLUG (IMPORTANT)
const area = rawArea?.replace("flat-for-rent-in-", "");

// slug format → sector-9 → Sector 9
const formattedArea = area
  ?.replace(/-/g, " ")
  .replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <div className="bg-[#F9F4F6] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-0 py-10">
 <div className="mb-6">
   <Breadcrumb />
  </div>
        {/* 🔥 DYNAMIC HEADING */}
        <div className=" mb-14">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Flats for Rent in{" "}
            <span className="text-[#56021F]">
              {formattedArea || "Faridabad"}
            </span>
          </h1>

          <h2 className="text-gray-600 mt-3">
           Rental Residential properties of this locality .
          </h2>

          <div className="w-20 h-1 bg-[#56021F] mt-6 rounded-full"></div>
        </div>

        {/* 🔥 MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* LEFT SIDE */}
          <div className="lg:col-span-8 space-y-6">
  <FilterProperties area={area} />

  {/* Only show Properties if area not selected */}
   {/* <Proprtes /> */}
</div>

          {/* RIGHT SIDE */}
          <div className="lg:col-span-4">
            <div className="sticky top-24">
              <SidebarEnquiryForm />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
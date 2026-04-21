import FilterProperties from "./FilterProperties";

import SidebarEnquiryForm from "@/components/SidebarEnquiryForm";
import Breadcrumb from "@/components/Breadcrumb";
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
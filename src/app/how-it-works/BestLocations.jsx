"use client";
import Link from "next/link";
export default function BestLocations() {
  return (
    <section className="py-8 px-6 ">
      <div className="max-w-6xl mx-auto">

        {/* TOP GRID */}
        <div className="grid  gap-12 items-start">

  {/* LEFT TEXT */}
  <div>
    <h2 className="text-3xl md:text-4xl font-bold text-[#56021F] mb-6">
      Best Locations to Rent a Flat in Faridabad
    </h2>

    <p className="text-gray-700 leading-relaxed mb-4">
      Choosing the right location is very important when looking for a flat for rent in Faridabad. A good location makes your daily life easier and more comfortable.
    </p>
  </div>

  {/* RIGHT SIDE */}
  <div>

    {/* CARDS GRID (2-2) */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

      <div className="p-5 border rounded-lg transition hover:border-[#56021F] hover:shadow-md">
        <h3 className="font-semibold text-[#56021F]">
          Sector 15 & 16
        </h3>
        <p className="text-sm text-gray-600 mt-1">
          Sectors 15 and 16 are considered prime areas. They have good connectivity, markets, schools, and other basic facilities nearby. These areas are suitable for families and working professionals.
        </p>
      </div>

      <div className="p-5 border rounded-lg transition hover:border-[#56021F] hover:shadow-md">
        <h3 className="font-semibold text-[#56021F]">
          Sector 21
        </h3>
        <p className="text-sm text-gray-600 mt-1">
         Sector 21 is known for its peaceful environment. It is a family-friendly area with good surroundings, making it a great choice for comfortable living.
        </p>
      </div>

      <div className="p-5 border rounded-lg transition hover:border-[#56021F] hover:shadow-md">
        <h3 className="font-semibold text-[#56021F]">
          Greater Faridabad
        </h3>
        <p className="text-sm text-gray-600 mt-1">
          Greater Faridabad is one of the fastest-growing areas. It offers more affordable flats and many new residential projects. If you are looking for budget-friendly options with modern facilities, this is a good place.
        </p>
      </div>

      <div className="p-5 border rounded-lg transition hover:border-[#56021F] hover:shadow-md">
        <h3 className="font-semibold text-[#56021F]">
          Sector 37
        </h3>
        <p className="text-sm text-gray-600 mt-1">
         Sector 37 is close to industrial areas, which makes it ideal for working professionals. It reduces travel time and offers convenient living.
        </p>
      </div>

    </div>

    {/* 🔥 CENTER BUTTON */}
    <div className="mt-6 flex justify-center">
      <Link href="/#locations">
        <button className="px-8 py-3 bg-[#56021F] text-white rounded-lg font-semibold transition hover:bg-[#3d0116] hover:shadow-lg">
          Explore More Locations
        </button>
      </Link>
    </div>

  </div>
        </div>

      
        {/* <p className="text-gray-700 leading-relaxed mt-10 max-w-4xl">
          All these locations provide good options for rental housing in
          Faridabad. You can choose the one that fits your budget, workplace,
          and lifestyle needs.
        </p> */}

        {/* ================= PRICE SECTION ================= */}

        <div className="mt-8 border  rounded-2xl px-4 py-6 border-[#56021F] mb-6 bg-[#f4e3e9]">
          <h2 className="text-3xl md:text-4xl font-bold text-[#56021F] mb-6">
            Price Trends in Faridabad
          </h2>

          <p className="text-gray-700 leading-relaxed mb-10 max-w-6xl ">
            The rent of a flat for rent in Faridabad mainly depends on two things—location and flat size. Different areas have different price ranges, and bigger flats usually cost more.
If you are looking for a budget option, 1 BHK flats are the most affordable and are good for students or individuals. A 2 BHK flat comes in a medium price range and is perfect for small families. A 3 BHK flat is more spacious and usually has a higher rent because of extra rooms and better facilities.
In recent years, rental prices in Faridabad have been slowly increasing. This is because more people are moving to the city, which increases demand. However, compared to cities like Delhi and Gurgaon, Faridabad still offers more affordable flats.
This makes choosing a flat for rent in Faridabad a smart option, as you get better space and value for your money.
          </p>

          {/* PRICE BOXES */}
          {/* <div className="grid md:grid-cols-3 gap-6">

            <div className="p-6 border rounded-xl text-center transition hover:border-[#56021F] hover:shadow-lg">
              <h3 className="text-lg font-semibold text-[#56021F]">
                1 BHK
              </h3>
              <p className="text-gray-600 mt-2 text-sm">
                Budget-friendly option for students and individuals.
              </p>
            </div> */}

            {/* <div className="p-6 border rounded-xl text-center transition hover:border-[#56021F] hover:shadow-lg">
              <h3 className="text-lg font-semibold text-[#56021F]">
                2 BHK
              </h3>
              <p className="text-gray-600 mt-2 text-sm">
                Mid-range pricing, ideal for small families.
              </p>
            </div> */}

            {/* <div className="p-6 border rounded-xl text-center transition hover:border-[#56021F] hover:shadow-lg">
              <h3 className="text-lg font-semibold text-[#56021F]">
                3 BHK
              </h3>
              <p className="text-gray-600 mt-2 text-sm">
                Spacious flats with higher rent and better facilities.
              </p>
            </div> */}

         

          {/* FINAL TEXT */}
          <p className="text-gray-700 leading-relaxed mt-10 max-w-4xl">
            In recent years, rental prices in Faridabad have been slowly
            increasing due to higher demand. However, compared to Delhi and
            Gurgaon, it still offers better value for money with more space and
            affordability.
          </p>
        </div>

      </div>
    </section>
  );
}
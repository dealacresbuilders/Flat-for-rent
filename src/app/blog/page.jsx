import React from "react";
import BlogList from "./BlogList";

// ✅ SEO Metadata (Static - Best Practice)
export async function generateMetadata() {
  return {
    title: "Flat Rental Blog | Renting Tips, Property News & Market Trends in Faridabad",
    description:
      "Read the latest blogs on flat renting tips in Faridabad, rental market trends, tenant rights, rent agreement guide, best localities to rent & expert real estate advice to make the right rental decision.",
    keywords: [
     "flat rental blog Faridabad", "renting tips Faridabad", "rental market trends Faridabad", "tenant rights India", "rent agreement guide Faridabad", "best localities to rent flat Faridabad", "real estate news Faridabad", "affordable rental flats Faridabad", "flat rent price trends Faridabad", "apartment rental checklist Faridabad"
    ],
    alternates: {
      canonical: "https://www.flatforrentinfaridabad.com/blog", // 👈 apna real domain
    },

    // 🔥 Open Graph (Social Sharing)
    openGraph: {
      title: "Flat for Rent Blogs | Rental Tips & Property Guides",
      description:
        "Read blogs on flats for rent, rental tips, and property insights.",
      url: "https://www.flatforrentinfaridabad.com/blog",
      siteName: "Deal Acres",
      images: [
        {
          url: "https://www.flatforrentinfaridabad.com/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "Flat for Rent Blogs",
        },
      ],
      type: "website",
    },

    // 🔥 Twitter Meta
    twitter: {
      card: "summary_large_image",
      title: "Flat for Rent Blogs | Rental Tips & Property Guides",
      description:
        "Explore rental tips and blogs for flats and houses.",
      images: ["https://www.flatforrentinfaridabad.com/og-image.jpg"],
    },
  };
}

// ✅ PAGE
export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#f4e9ed]">
      <BlogList />
    </div>
  );
}
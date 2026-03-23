import React from "react";
import BlogList from "./BlogList";

// ✅ SEO Metadata (Static - Best Practice)
export async function generateMetadata() {
  return {
    title: "Flat for Rent Blogs | Rental Tips & Property Guides",
    description:
      "Explore blogs on flats for rent, rental tips, tenant guides, and latest real estate updates to find the perfect home.",
    keywords: [
      "flat for rent",
      "rent flat in India",
      "rental tips",
      "tenant guide",
      "property rent blogs",
      "house for rent"
    ],
    alternates: {
      canonical: "https://www.dealacres.com/blog", // 👈 apna real domain
    },

    // 🔥 Open Graph (Social Sharing)
    openGraph: {
      title: "Flat for Rent Blogs | Rental Tips & Property Guides",
      description:
        "Read blogs on flats for rent, rental tips, and property insights.",
      url: "https://www.dealacres.com/blog",
      siteName: "Deal Acres",
      images: [
        {
          url: "https://www.dealacres.com/og-image.jpg",
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
      images: ["https://www.dealacres.com/og-image.jpg"],
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
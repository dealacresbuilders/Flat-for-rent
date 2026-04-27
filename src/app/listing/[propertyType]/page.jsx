import PropertyTypePage from "./ListingPage";

export async function generateMetadata({ params }) {
  const { propertyType } = await params;

  const formattedType = propertyType
    ?.replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  return {
    title: `${formattedType} Flats for Rent in Faridabad`,
    
    description: `Explore ${formattedType} flats for rent in Faridabad. Find affordable and luxury ${formattedType} apartments with modern amenities in prime locations of Faridabad.`,

    keywords: [
      `${formattedType} flats for rent in Faridabad`,
      `rent ${formattedType} Faridabad`,
      `${formattedType} apartments Faridabad`,
      `property for rent Faridabad`,
      `Faridabad rental flats`,
    ],

    alternates: {
      canonical: `https://www.flatforrentinFaridabad.com/listing/${propertyType}`,
    },
  };
}

export default function Page(props) {
  return <PropertyTypePage {...props} />;
}
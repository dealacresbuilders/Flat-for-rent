import BestLocations from "./BestLocations";
import ConclusionFAQ from "./ConclusionFAQ";
import FutureUsersSellers from "./FutureUsersSellers";
import Hero from "./Hero";
import LegalAndDocuments from "./LegalAndDocuments";
import PlatformBenefits from "./PlatformBenefits";
import PlotVsFlat from "./PlotVsFlat";
import ProblemsAndMistakes from "./ProblemsAndMistakes";
import ProcessAndListing from "./ProcessAndListing";
import WhyFaridabad from "./WhyFaridabad";

// ✅ SEO METADATA
export const metadata = {
  title: "How It Works | Easy Steps to Rent a Flat in Faridabad",

  description:
    "Renting a flat in Faridabad is now simple. Search verified rental listings, schedule a free site visit & move into your dream apartment in Faridabad in just a few easy steps. No hidden charges.",

  keywords: [
    "how to rent flat in Faridabad", "flat renting process Faridabad", "apartment rental steps Faridabad", "flat booking on rent Faridabad", "rental guide Faridabad", "rent apartment Faridabad", "no brokerage flat rent Faridabad", "verified rental flats Faridabad", "rent agreement Faridabad", "easy flat rental Faridabad"
  ],
  alternates: {
    canonical:
      "https://www.flatforrentinfaridabad.com/how-it-works",
  },
};

export default function Page() {
  return (
    <>
      <div className="bg-[#F9F4F6]">
        <Hero />
        <WhyFaridabad />
        <PlotVsFlat />
        <BestLocations />
        <PlatformBenefits />
        <ProcessAndListing />
        <LegalAndDocuments />
        <ProblemsAndMistakes />
        <FutureUsersSellers />
        <ConclusionFAQ />
      </div>
    </>
  );
}
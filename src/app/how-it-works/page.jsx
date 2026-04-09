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


export default function Page() {
  return (
    <>
    <div className="bg-[#F9F4F6]">
     <Hero/>
     <WhyFaridabad/>
     <PlotVsFlat/>
     <BestLocations/>
     <PlatformBenefits/>
     <ProcessAndListing/>
     <LegalAndDocuments/>
     <ProblemsAndMistakes/>
     <FutureUsersSellers/>
     <ConclusionFAQ/>
     </div>
    </>
  );
}
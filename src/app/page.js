
import Image from "next/image";
import Hero from "@/components/Hero.jsx"
import Properties from "@/components/Proprtes";
import FlatRentContent from "@/components/FlatRentContent";
import FlatRentFAQSection from "@/components/FlatRentFAQSection";
export default function Home() {
  return (
    <>
     <Hero/>
     <Properties/>
     <FlatRentContent/>
     <FlatRentFAQSection/>
    </>
  );
}

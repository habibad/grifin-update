import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import FoundersStory from "@/components/sections/FoundersStory";
import OurDivisions from "@/components/sections/OurDivisions";
import PropertyLocations from "@/components/sections/PropertyLocations";
import AboutAndContact from "@/components/sections/AboutAndContact";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full bg-[#0B1117] text-white">
      <Header />
      <Hero />
      <FoundersStory />
      <OurDivisions />
      <PropertyLocations />
      <AboutAndContact />
      <Footer />
    </main>
  );
}

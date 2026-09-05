import React from "react";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GalleryHero from "@/components/gallery/GalleryHero";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import AboutAndContact from "@/components/sections/AboutAndContact";

export const metadata: Metadata = {
  title: "Gallery | Life at Griffin Brothers Properties",
  description:
    "A look at the places we build, the properties we care for, and the people behind them across the Shoals, Alabama.",
};

export default function GalleryPage() {
  return (
    <main className="relative min-h-screen w-full bg-[#F6EFE6] text-[#111820] flex flex-col">
      {/* 1. Global Navigation Header with Solid Dark Bar */}
      <Header variant="solid" />

      {/* 2. Gallery Architectural Hero Section ("Life at Griffin Brothers.") */}
      <GalleryHero />

      {/* 3. Main Gallery Bento Grid, Categories & "LOAD MORE PHOTOS ↓" */}
      <GalleryGrid />

      {/* 4. About Griffin Brothers / "Rooted in the Shoals" Section */}
      <AboutAndContact />

      {/* 5. Global Dark Walnut Wood Grain Footer */}
      <Footer />
    </main>
  );
}

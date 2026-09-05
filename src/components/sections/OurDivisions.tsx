"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

interface DivisionItem {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  linkText?: string;
  linkHref?: string;
  comingSoon?: boolean;
}

const DIVISIONS_DATA: DivisionItem[] = [
  {
    id: "retail",
    number: "01",
    title: "Retail",
    description:
      "Vibrant retail centers in prime locations where businesses thrive and communities come together.",
    image: "/images/divisions/retail.jpg",
    alt: "Griffin Brothers Properties Retail Centers in Shoals, AL",
    linkText: "Explore Retail",
    linkHref: "/divisions#retail",
  },
  {
    id: "flex",
    number: "02",
    title: "Flex",
    description:
      "Versatile spaces designed for a wide range of businesses and operational needs.",
    image: "/images/divisions/flex.jpg",
    alt: "Griffin Brothers Properties Flex Commercial Facilities",
    linkText: "Explore Flex",
    linkHref: "/divisions#flex",
  },
  {
    id: "land-leases",
    number: "03",
    title: "Land Leases",
    description:
      "Strategic land opportunities in high-traffic areas ideal for long-term success.",
    image: "/images/divisions/land-leases.jpg",
    alt: "Strategic Land Leases in Shoals, Alabama with Highlighted Parcel",
    linkText: "Explore Land Leases",
    linkHref: "/divisions#land-leases",
  },
  {
    id: "build-to-suit",
    number: "04",
    title: "Build to Suit",
    description:
      "Custom buildings tailored to your vision, built with quality and precision.",
    image: "/images/divisions/build-to-suit.png",
    alt: "Custom Build to Suit Commercial Architecture",
    linkText: "Start a Conversation",
    linkHref: "/contact",
  },
  {
    id: "residential",
    number: "05",
    title: "Residential",
    description: "Thoughtfully planned. Built for everyday life.",
    image: "/images/divisions/residential.png",
    alt: "Griffin Brothers Properties Residential Craftsman Architecture Blueprint",
    comingSoon: true,
  },
];

export default function OurDivisions() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const showPrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? null : (prev - 1 + DIVISIONS_DATA.length) % DIVISIONS_DATA.length
    );
  }, []);

  const showNext = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? null : (prev + 1) % DIVISIONS_DATA.length
    );
  }, []);

  // Keyboard navigation & body scroll locking
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxIndex, closeLightbox, showPrev, showNext]);

  const activeDivision = lightboxIndex !== null ? DIVISIONS_DATA[lightboxIndex] : null;

  return (
    <section
      id="divisions"
      className="relative w-full bg-[#F5EFE7] text-[#111820] py-14 sm:py-16 lg:py-20 overflow-hidden select-none border-t border-[#D5C7B4]/50 scroll-mt-10"
    >
      {/* 1. Seamless Background Paper Texture & Lighting */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundColor: "#F5EFE7",
          backgroundImage:
            "radial-gradient(ellipse at 50% 30%, #FAF6F0 0%, #F5EFE7 60%, #ECE3D6 100%)",
        }}
      />

      {/* Tactile Fine Paper Grain Overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-0 opacity-40 mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E")`,
        }}
      />

      {/* 2. Main Content Container */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 flex flex-col gap-3.5 sm:gap-4">
        {/* ================= ROW 1: HEADER + CARD 01 + CARD 02 ================= */}
        <div className="flex flex-col lg:flex-row gap-3.5 sm:gap-4 items-stretch">
          {/* Left Block (Takes ~59% on desktop: Header + Card 01) */}
          <div className="w-full lg:w-[59%] flex flex-col sm:flex-row gap-3.5 sm:gap-4 items-stretch">
            {/* Section Header (35% of Left Block = ~20.65% of total width) */}
            <div className="w-full sm:w-[35%] flex flex-col justify-between py-1 sm:py-2 pr-2">
              <div>
                <span className="font-condensed text-[#B08B3E] font-bold text-[12px] sm:text-[13px] tracking-[0.18em] uppercase">
                  Our Divisions
                </span>
                <h2 className="font-serif-story font-bold text-[#111820] text-[30px] sm:text-[34px] md:text-[38px] lg:text-[42px] xl:text-[46px] leading-[1.06] tracking-[-0.015em] mt-2.5">
                  Five ways
                  <br />
                  we make
                  <br />
                  space work.
                </h2>
                <div
                  className="w-11 h-[2.5px] bg-[#B08B3E] mt-4 rounded-[0.5px]"
                  aria-hidden="true"
                />
              </div>
            </div>

            {/* Card 01: RETAIL (65% of Left Block) */}
            <div className="w-full sm:w-[65%] bg-[#FAF6EE] border border-[#DCD3C7] overflow-hidden flex flex-row items-stretch group hover:border-[#B08B3E]/70 transition-all duration-300">
              <div className="w-[46%] p-4 sm:p-5 lg:p-6 flex flex-col justify-between">
                <div>
                  <span className="font-serif-story text-[#B08B3E] text-[20px] sm:text-[22px] lg:text-[24px] xl:text-[26px] font-normal leading-none">
                    01
                  </span>
                  <h3 className="font-condensed font-bold text-[#111820] text-[22px] sm:text-[24px] lg:text-[26px] xl:text-[28px] uppercase tracking-[0.03em] leading-tight mt-1.5">
                    Retail
                  </h3>
                  <p className="font-sans text-[#2D3748] text-[13px] sm:text-[13.5px] lg:text-[14.5px] xl:text-[15px] leading-[1.48] mt-2 sm:mt-2.5">
                    Vibrant retail centers in prime locations where businesses thrive and communities come together.
                  </p>
                </div>
                <Link
                  href="/divisions#retail"
                  className="inline-flex items-center gap-1.5 font-condensed font-bold text-[11.5px] sm:text-[12px] lg:text-[12.5px] tracking-[0.09em] uppercase text-[#111820] group-hover:text-[#B08B3E] transition-colors mt-3"
                >
                  <span>Explore Retail</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                </Link>
              </div>

              {/* Card 01 Image with Click-to-Lightbox */}
              <div
                onClick={() => setLightboxIndex(0)}
                className="relative w-[54%] min-h-[190px] sm:min-h-[210px] lg:min-h-[230px] xl:min-h-[240px] overflow-hidden cursor-pointer group/img"
                title="Click to view full image"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") setLightboxIndex(0);
                }}
              >
                <Image
                  src={DIVISIONS_DATA[0].image}
                  alt={DIVISIONS_DATA[0].alt}
                  fill
                  unoptimized
                  sizes="(max-width: 640px) 55vw, 450px"
                  className="object-cover object-center group-hover/img:scale-[1.04] transition-transform duration-700 ease-out select-none"
                />
                <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/20 transition-colors duration-300 z-10 flex items-center justify-center pointer-events-none">
                  <span className="opacity-0 group-hover/img:opacity-100 transition-all duration-300 p-2 rounded-full bg-[#111820]/75 backdrop-blur-sm text-[#C8A45D] border border-[#C8A45D]/40 shadow-lg scale-90 group-hover/img:scale-100">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Block: Card 02: FLEX (Takes ~41% on desktop) */}
          <div className="w-full lg:w-[41%] bg-[#FAF6EE] border border-[#DCD3C7] overflow-hidden flex flex-row items-stretch group hover:border-[#B08B3E]/70 transition-all duration-300">
            <div className="w-[45%] p-4 sm:p-5 lg:p-6 flex flex-col justify-between">
              <div>
                <span className="font-serif-story text-[#B08B3E] text-[20px] sm:text-[22px] lg:text-[24px] xl:text-[26px] font-normal leading-none">
                  02
                </span>
                <h3 className="font-condensed font-bold text-[#111820] text-[22px] sm:text-[24px] lg:text-[26px] xl:text-[28px] uppercase tracking-[0.03em] leading-tight mt-1.5">
                  Flex
                </h3>
                <p className="font-sans text-[#2D3748] text-[13px] sm:text-[13.5px] lg:text-[14.5px] xl:text-[15px] leading-[1.48] mt-2 sm:mt-2.5">
                  Versatile spaces designed for a wide range of businesses and operational needs.
                </p>
              </div>
              <Link
                href="/divisions#flex"
                className="inline-flex items-center gap-1.5 font-condensed font-bold text-[11.5px] sm:text-[12px] lg:text-[12.5px] tracking-[0.09em] uppercase text-[#111820] group-hover:text-[#B08B3E] transition-colors mt-3"
              >
                <span>Explore Flex</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </div>

            {/* Card 02 Image with Click-to-Lightbox */}
            <div
              onClick={() => setLightboxIndex(1)}
              className="relative w-[55%] min-h-[190px] sm:min-h-[210px] lg:min-h-[230px] xl:min-h-[240px] overflow-hidden cursor-pointer group/img"
              title="Click to view full image"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") setLightboxIndex(1);
              }}
            >
              <Image
                src={DIVISIONS_DATA[1].image}
                alt={DIVISIONS_DATA[1].alt}
                fill
                unoptimized
                sizes="(max-width: 640px) 55vw, 500px"
                className="object-cover object-center group-hover/img:scale-[1.04] transition-transform duration-700 ease-out select-none"
              />
              <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/20 transition-colors duration-300 z-10 flex items-center justify-center pointer-events-none">
                <span className="opacity-0 group-hover/img:opacity-100 transition-all duration-300 p-2 rounded-full bg-[#111820]/75 backdrop-blur-sm text-[#C8A45D] border border-[#C8A45D]/40 shadow-lg scale-90 group-hover/img:scale-100">
                  <Maximize2 className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ================= ROW 2: CARD 03 (LAND LEASES - FULL WIDTH BANNER) ================= */}
        <div className="w-full bg-[#FAF6EE] border border-[#DCD3C7] overflow-hidden flex flex-col sm:flex-row items-stretch group hover:border-[#B08B3E]/70 transition-all duration-300">
          {/* Left Text Pane (aligned with Header column: ~20.65% width on desktop) */}
          <div className="w-full sm:w-[20.65%] p-4 sm:p-5 lg:p-6 xl:p-7 flex flex-col justify-between">
            <div>
              <span className="font-serif-story text-[#B08B3E] text-[20px] sm:text-[22px] lg:text-[24px] xl:text-[26px] font-normal leading-none">
                03
              </span>
              <h3 className="font-condensed font-bold text-[#111820] text-[22px] sm:text-[24px] lg:text-[26px] xl:text-[28px] uppercase tracking-[0.03em] leading-tight mt-1.5">
                Land Leases
              </h3>
              <p className="font-sans text-[#2D3748] text-[13px] sm:text-[13.5px] lg:text-[14.5px] xl:text-[15px] leading-[1.48] mt-2 sm:mt-2.5">
                Strategic land opportunities in high-traffic areas ideal for long-term success.
              </p>
            </div>
            <Link
              href="/divisions#land-leases"
              className="inline-flex items-center gap-1.5 font-condensed font-bold text-[11.5px] sm:text-[12px] lg:text-[12.5px] tracking-[0.09em] uppercase text-[#111820] group-hover:text-[#B08B3E] transition-colors mt-3"
            >
              <span>Explore Land Leases</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </div>

          {/* Right Image Pane (Panoramic drone aerial with white parcel boundary) */}
          <div
            onClick={() => setLightboxIndex(2)}
            className="relative w-full sm:w-[79.35%] min-h-[220px] sm:min-h-[240px] lg:min-h-[270px] xl:min-h-[290px] overflow-hidden cursor-pointer group/img"
            title="Click to view full image"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") setLightboxIndex(2);
            }}
          >
            <Image
              src={DIVISIONS_DATA[2].image}
              alt={DIVISIONS_DATA[2].alt}
              fill
              unoptimized
              sizes="(max-width: 640px) 100vw, 1400px"
              className="object-cover object-center group-hover/img:scale-[1.03] transition-transform duration-700 ease-out select-none"
            />
            <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/20 transition-colors duration-300 z-10 flex items-center justify-center pointer-events-none">
              <span className="opacity-0 group-hover/img:opacity-100 transition-all duration-300 p-2.5 rounded-full bg-[#111820]/75 backdrop-blur-sm text-[#C8A45D] border border-[#C8A45D]/40 shadow-lg scale-90 group-hover/img:scale-100">
                <Maximize2 className="w-4 h-4" />
              </span>
            </div>
          </div>
        </div>

        {/* ================= ROW 3: CARD 04 + CARD 05 ================= */}
        <div className="flex flex-col lg:flex-row gap-3.5 sm:gap-4 items-stretch">
          {/* Card 04: BUILD TO SUIT (Takes ~59% on desktop) */}
          <div className="w-full lg:w-[59%] bg-[#FAF6EE] border border-[#DCD3C7] overflow-hidden flex flex-row items-stretch group hover:border-[#B08B3E]/70 transition-all duration-300">
            {/* Left text pane (matches ~35% of Left Block = ~20.65% total) */}
            <div className="w-[35%] p-4 sm:p-5 lg:p-6 xl:p-7 flex flex-col justify-between">
              <div>
                <span className="font-serif-story text-[#B08B3E] text-[20px] sm:text-[22px] lg:text-[24px] xl:text-[26px] font-normal leading-none">
                  04
                </span>
                <h3 className="font-condensed font-bold text-[#111820] text-[22px] sm:text-[24px] lg:text-[26px] xl:text-[28px] uppercase tracking-[0.03em] leading-tight mt-1.5">
                  Build to Suit
                </h3>
                <p className="font-sans text-[#2D3748] text-[13px] sm:text-[13.5px] lg:text-[14.5px] xl:text-[15px] leading-[1.48] mt-2 sm:mt-2.5">
                  Custom buildings tailored to your vision, built with quality and precision.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 font-condensed font-bold text-[11.5px] sm:text-[12px] lg:text-[12.5px] tracking-[0.09em] uppercase text-[#111820] group-hover:text-[#B08B3E] transition-colors mt-3"
              >
                <span>Start a Conversation</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </div>

            {/* Right image pane with Click-to-Lightbox */}
            <div
              onClick={() => setLightboxIndex(3)}
              className="relative w-[65%] min-h-[190px] sm:min-h-[210px] lg:min-h-[230px] xl:min-h-[240px] overflow-hidden cursor-pointer group/img"
              title="Click to view full image"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") setLightboxIndex(3);
              }}
            >
              <Image
                src={DIVISIONS_DATA[3].image}
                alt={DIVISIONS_DATA[3].alt}
                fill
                unoptimized
                sizes="(max-width: 640px) 65vw, 750px"
                className="object-cover object-center group-hover/img:scale-[1.04] transition-transform duration-700 ease-out select-none"
              />
              <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/20 transition-colors duration-300 z-10 flex items-center justify-center pointer-events-none">
                <span className="opacity-0 group-hover/img:opacity-100 transition-all duration-300 p-2 rounded-full bg-[#111820]/75 backdrop-blur-sm text-[#C8A45D] border border-[#C8A45D]/40 shadow-lg scale-90 group-hover/img:scale-100">
                  <Maximize2 className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>

          {/* Card 05: RESIDENTIAL (Takes ~41% on desktop) */}
          <div className="w-full lg:w-[41%] bg-[#FAF6EE] border border-[#DCD3C7] overflow-hidden flex flex-row items-stretch group hover:border-[#B08B3E]/70 transition-all duration-300">
            <div className="w-[45%] p-4 sm:p-5 lg:p-6 xl:p-7 flex flex-col justify-between">
              <div>
                <span className="font-serif-story text-[#B08B3E] text-[20px] sm:text-[22px] lg:text-[24px] xl:text-[26px] font-normal leading-none">
                  05
                </span>
                <h3 className="font-condensed font-bold text-[#111820] text-[22px] sm:text-[24px] lg:text-[26px] xl:text-[28px] uppercase tracking-[0.03em] leading-tight mt-1.5">
                  Residential
                </h3>
                <p className="font-sans text-[#2D3748] text-[13px] sm:text-[13.5px] lg:text-[14.5px] xl:text-[15px] leading-[1.48] mt-2 sm:mt-2.5">
                  Thoughtfully planned.
                  <br />
                  Built for everyday life.
                </p>
              </div>
              <div className="mt-3">
                <span className="font-serif-story text-[#7D7364] text-[12.5px] sm:text-[13.5px]">
                  [ Coming Soon ]
                </span>
              </div>
            </div>

            {/* Right Architectural House Blueprint Sketch Pane with Click-to-Lightbox */}
            <div
              onClick={() => setLightboxIndex(4)}
              className="relative w-[55%] min-h-[190px] sm:min-h-[210px] lg:min-h-[230px] xl:min-h-[240px] overflow-hidden bg-[#FAF6EE] flex items-center justify-center p-3 sm:p-4 cursor-pointer group/img"
              title="Click to view full image"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") setLightboxIndex(4);
              }}
            >
              <div className="relative w-full h-full min-h-[150px]">
                <Image
                  src={DIVISIONS_DATA[4].image}
                  alt={DIVISIONS_DATA[4].alt}
                  fill
                  unoptimized
                  sizes="(max-width: 640px) 50vw, 420px"
                  className="object-contain object-center group-hover/img:scale-[1.04] transition-transform duration-700 ease-out select-none opacity-90"
                />
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/15 transition-colors duration-300 z-10 flex items-center justify-center pointer-events-none">
                <span className="opacity-0 group-hover/img:opacity-100 transition-all duration-300 p-2 rounded-full bg-[#111820]/75 backdrop-blur-sm text-[#C8A45D] border border-[#C8A45D]/40 shadow-lg scale-90 group-hover/img:scale-100">
                  <Maximize2 className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= LIGHTBOX MODAL ================= */}
      {lightboxIndex !== null && activeDivision && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Image Lightbox: ${activeDivision.title}`}
          onClick={(e) => {
            if (e.target === e.currentTarget) closeLightbox();
          }}
          className="fixed inset-0 z-[100] bg-black/92 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 select-none animate-in fade-in duration-200"
        >
          {/* Top Bar: Title & Close Button */}
          <div className="flex items-center justify-between w-full max-w-6xl mx-auto z-10 px-2 py-1">
            <div className="flex items-center gap-3">
              <span className="font-serif-story text-[#C8A45D] text-xl sm:text-2xl font-normal">
                {activeDivision.number}
              </span>
              <span className="w-[1px] h-5 bg-white/25" />
              <h4 className="font-condensed font-bold text-white text-lg sm:text-xl uppercase tracking-wider">
                {activeDivision.title}
              </h4>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-white/60 font-sans text-xs tracking-widest hidden sm:inline">
                {lightboxIndex + 1} / {DIVISIONS_DATA.length}
              </span>
              <button
                type="button"
                onClick={closeLightbox}
                className="p-2.5 rounded-full bg-white/10 hover:bg-[#C8A45D] text-white hover:text-black transition-all cursor-pointer"
                aria-label="Close image lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Center Stage: Image and Left/Right Controls */}
          <div className="relative w-full max-w-6xl mx-auto flex-1 flex items-center justify-center min-h-0 py-3">
            {/* Prev Button */}
            <button
              type="button"
              onClick={showPrev}
              className="absolute left-1 sm:left-4 z-20 p-2.5 sm:p-3 rounded-full bg-black/60 hover:bg-[#C8A45D] text-white hover:text-black transition-all cursor-pointer backdrop-blur-sm border border-white/10 hover:scale-105"
              aria-label="Previous division image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Main High-Res Image (Rendered in Native Full Quality without Cropping) */}
            <div
              className="relative w-full h-full flex items-center justify-center"
              onClick={(e) => {
                if (e.target === e.currentTarget) closeLightbox();
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={activeDivision.image}
                alt={activeDivision.alt}
                className="max-w-[94vw] max-h-[72vh] md:max-h-[76vh] object-contain rounded-md shadow-2xl transition-transform duration-300"
              />
            </div>

            {/* Next Button */}
            <button
              type="button"
              onClick={showNext}
              className="absolute right-1 sm:right-4 z-20 p-2.5 sm:p-3 rounded-full bg-black/60 hover:bg-[#C8A45D] text-white hover:text-black transition-all cursor-pointer backdrop-blur-sm border border-white/10 hover:scale-105"
              aria-label="Next division image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom Bar: Description & Keyboard Hint */}
          <div className="w-full max-w-6xl mx-auto px-4 py-2 text-center flex flex-col sm:flex-row items-center justify-between gap-2 z-10 border-t border-white/10">
            <p className="text-white/80 font-sans text-xs sm:text-sm max-w-2xl text-left">
              {activeDivision.description}
            </p>
            <p className="text-[#C8A45D]/80 font-sans text-[11px] tracking-wide whitespace-nowrap">
              ESC to close • ← / → to navigate
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

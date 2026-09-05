import React from "react";
import Image from "next/image";

export default function GalleryHero() {
  return (
    <section className="relative w-full pt-10 sm:pt-14 md:pt-16 pb-8 sm:pb-10 bg-[#F6EFE6] text-[#111820] overflow-hidden select-none">
      {/* 1. Seamless Warm Parchment Paper Background & Grain */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundColor: "#F6EFE6",
          backgroundImage:
            "radial-gradient(ellipse at 50% 25%, #FAF5EE 0%, #F6EFE6 60%, #ECE3D6 100%)",
        }}
      />

      {/* Tactile Fine Paper Grain Overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-0 opacity-30 mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E")`,
        }}
      />

      {/* 2. Right Background: Classical Commercial Building Architectural Line Sketch & Crest Watermark */}
      {/* <div className="absolute right-0 top-0 bottom-0 w-full sm:w-[68%] md:w-[58%] lg:w-[52%] pointer-events-none z-[1] select-none opacity-85 mix-blend-multiply flex items-center justify-end">
        <div className="relative w-full h-full max-h-[340px] sm:max-h-[380px]">
          <Image
            src="/images/gallery/reference/hero-sketch-clean.png"
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 55vw"
            priority
            className="object-contain object-right"
          />
        </div>
      </div> */}

      {/* 3. Main Content (Exact Layout from Reference Image) */}
      <div className="container-custom relative z-10 w-full max-w-[1220px]">
        <div className="max-w-2xl">
          {/* Small Gold Kicker */}
          <span className="font-condensed font-bold text-[#B08B3E] text-[11px] sm:text-[12px] tracking-[0.2em] uppercase block mb-2">
            GALLERY
          </span>

          {/* Editorial Serif Headline: "Life at Griffin Brothers." */}
          <h1 className="font-serif-story font-bold text-[#111820] text-3xl sm:text-4xl md:text-[46px] lg:text-[50px] tracking-[-0.015em] leading-[1.12] whitespace-normal sm:whitespace-nowrap">
            Life at Griffin Brothers.
          </h1>

          {/* Editorial Subtitle */}
          <p className="font-serif-story text-[#333E48] text-[13.5px] sm:text-[15px] md:text-[16px] leading-[1.55] mt-3 sm:mt-4 max-w-md">
            A look at the places we build, the properties we care for, and the
            people behind them.
          </p>

          {/* Antique Gold Accent Bar */}
          <div
            className="w-10 h-[2.5px] bg-[#B08B3E] mt-4 sm:mt-5 rounded-[0.5px]"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}

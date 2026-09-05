import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowRight, ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[100svh] flex flex-col justify-between overflow-hidden bg-[#0B1117]">
      {/* 1. Full-Screen Architectural Background Image */}
      <div className="absolute inset-0 w-full h-full z-0 animate-hero-zoom">
        <Image
          src="/images/hero-building.png"
          alt="Griffin Brothers Properties Commercial Architecture in Shoals, Alabama"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[70%_center] xl:object-[68%_center] select-none"
        />

        {/* Cinematic Gradient Overlays */}
        {/* Left deep charcoal shadow for maximum text legibility & contrast */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, rgba(11,17,23,0.96) 0%, rgba(11,17,23,0.90) 30%, rgba(11,17,23,0.58) 48%, rgba(11,17,23,0.12) 66%, transparent 100%)",
          }}
        />

        {/* Top Vignette (for header contrast) */}
        <div
          className="absolute top-0 left-0 right-0 h-36 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(11,17,23,0.85) 0%, rgba(11,17,23,0.3) 60%, transparent 100%)",
          }}
        />

        {/* Bottom Vignette (smooth ground fade) */}
        <div
          className="absolute bottom-0 left-0 right-0 h-36 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, transparent 0%, rgba(11,17,23,0.6) 60%, rgba(11,17,23,0.95) 100%)",
          }}
        />
      </div>

      {/* 2. Griffin Sky Watermark (Upper Right) */}
      <div
        className="absolute right-[2%] md:right-[4%] xl:right-[6%] top-[65px] md:top-[80px] w-[280px] sm:w-[360px] md:w-[440px] lg:w-[480px] h-[340px] sm:h-[440px] md:h-[540px] lg:h-[600px] z-10 pointer-events-none select-none opacity-[0.20] hidden sm:block"
        aria-hidden="true"
      >
        <Image
          src="/images/griffin-watermark.png"
          alt=""
          fill
          sizes="(max-width: 768px) 300px, 480px"
          priority
          className="object-contain object-right-top"
        />
      </div>

      {/* 3. Hero Main Content Grid */}
      <div className="container-custom relative z-20 flex-1 flex flex-col justify-center pt-[135px] md:pt-[150px] lg:pt-[155px] pb-[40px] md:pb-[50px]">
        <div className="max-w-[780px] xl:max-w-[840px] w-full">
          {/* Main Headline — Exact 3-line Layout matching reference */}
          <h1 className="font-condensed font-bold uppercase tracking-[-0.01em] text-[38px] sm:text-[52px] md:text-[64px] lg:text-[74px] xl:text-[82px] 2xl:text-[86px] leading-[1.04] sm:leading-[1.06] text-white select-none flex flex-col gap-1 sm:gap-1.5 md:gap-2">
            <span className="block whitespace-nowrap text-white">WE OWN IT.</span>
            <span className="block whitespace-nowrap text-white">WE BUILD IT.</span>
            <span className="block whitespace-nowrap text-[#C8A45D]">WE MAKE IT WORK.</span>
          </h1>

          {/* Decorative Gold Segmented Line */}
          <div className="flex items-center gap-1.5 mt-6 md:mt-7" aria-hidden="true">
            <div className="w-10 sm:w-11 h-[2px] bg-[#C8A45D]" />
            <div className="w-16 sm:w-20 h-[2px] bg-[#C8A45D]" />
          </div>

          {/* Editorial Description */}
          <p className="font-[var(--font-editorial)] text-[18px] sm:text-[20px] md:text-[21px] lg:text-[22px] leading-[1.38] text-[#F3EFE6]/95 mt-5 md:mt-6 max-w-[460px]">
            Commercial real estate ownership
            <br className="hidden sm:inline" />
            {" "}and development in the Shoals.
          </p>

          {/* Dual Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5 mt-7 md:mt-8">
            {/* Primary Gold CTA */}
            <Link
              href="/property-locations"
              className="inline-flex items-center justify-center gap-2.5 h-[48px] sm:h-[50px] px-7 sm:px-8 bg-[#B8924B] hover:bg-[#C8A45D] text-white text-[12px] sm:text-[13px] font-bold tracking-[0.08em] uppercase rounded-[2px] transition-all duration-200 hover:-translate-y-0.5 shadow-md shadow-black/30 text-center"
            >
              <span>VIEW OUR PROPERTIES</span>
              <ArrowRight size={15} className="stroke-[2.5]" />
            </Link>

            {/* Secondary Transparent CTA */}
            <Link
              href="/divisions"
              className="inline-flex items-center justify-center gap-2.5 h-[48px] sm:h-[50px] px-7 sm:px-8 bg-[#0B1117]/50 backdrop-blur-sm border border-[#B8924B]/90 hover:bg-[#B8924B] text-white text-[12px] sm:text-[13px] font-bold tracking-[0.08em] uppercase rounded-[2px] transition-all duration-200 hover:-translate-y-0.5 text-center"
            >
              <span>EXPLORE OUR DIVISIONS</span>
              <ArrowRight size={15} className="stroke-[2.5]" />
            </Link>
          </div>
        </div>
      </div>

      {/* 4. Bottom Information Bar */}
      <div className="container-custom relative z-20 pb-8 md:pb-10 pt-6 flex items-end justify-between w-full">
        {/* Bottom Left: Location Badge (aligns with text column) */}
        <div className="flex items-center gap-3">
          <MapPin size={18} className="fill-[#C8A45D] stroke-[#0B1117] text-[#C8A45D]" />
          <div>
            <span className="block text-[12px] font-bold tracking-[0.12em] text-white uppercase">
              SHOALS, ALABAMA
            </span>
            <span className="block text-[10px] font-medium tracking-[0.16em] text-[#C8A45D] uppercase mt-0.5">
              PROPERTY • DEVELOPMENT • OWNERSHIP
            </span>
          </div>
        </div>

        {/* Bottom Right: Scroll Cue with clean line + arrow */}
        <div className="hidden sm:flex items-center gap-2.5 text-white/90">
          <span className="text-[11px] font-bold tracking-[0.16em] uppercase">
            SCROLL TO EXPLORE
          </span>
          <div className="flex flex-col items-center animate-subtle-float">
            <div className="w-[1px] h-4 bg-white/70" />
            <ArrowDown size={13} className="stroke-[2.5] text-white/90 -mt-0.5" />
          </div>
        </div>
      </div>
    </section>
  );
}

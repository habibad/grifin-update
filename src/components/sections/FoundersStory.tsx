import React from "react";
import Image from "next/image";

export default function FoundersStory() {
  return (
    <section className="relative w-full bg-[#F5EFE7] text-[#111820] overflow-hidden select-none border-t border-[#D5C7B4]/60">
      {/* 1. Fine Warm Parchment Background & Vignette */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundColor: "#F5EFE7",
          backgroundImage:
            "radial-gradient(ellipse at 52% 45%, #FAF5EE 0%, #F5EFE7 55%, #ECE3D6 100%)",
        }}
      />

      {/* Tactile Fine Paper Grain Overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-0 opacity-40 mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Top Subtle Edge Shading (depth separation below hero) */}
      <div
        className="absolute top-0 left-0 right-0 h-8 pointer-events-none z-[1]"
        style={{
          background:
            "linear-gradient(180deg, rgba(185,170,150,0.18) 0%, transparent 100%)",
        }}
      />

      {/* 2. Blind-Embossed Griffin Crest Watermark (Right Background) */}
      <div
        className="absolute right-[-10%] sm:right-[1%] md:right-[2%] lg:right-[3%] xl:right-[4%] top-1/2 -translate-y-1/2 w-[220px] sm:w-[260px] md:w-[300px] lg:w-[340px] xl:w-[370px] h-[85%] max-h-[440px] pointer-events-none z-[1] select-none opacity-20 sm:opacity-50 md:opacity-60 mix-blend-multiply"
        aria-hidden="true"
      >
        <Image
          src="/images/griffin-paper-watermark-clean.png"
          alt=""
          fill
          sizes="(max-width: 768px) 220px, 370px"
          className="object-contain object-right"
        />
      </div>

      {/* 3. Main Content: Perfectly Unified Composition */}
      <div className="relative z-10 w-full max-w-[1220px] mx-auto min-h-[380px] sm:min-h-[410px] md:min-h-[440px] lg:min-h-[460px] flex flex-col md:flex-row items-stretch md:items-end justify-center px-6 sm:px-6 md:px-8">
        {/* Left: Hand-Drawn Portrait of Jeff & Lynn Griffin + Architectural Blueprint */}
        <div className="relative w-full md:w-[48%] lg:w-[47%] min-h-[260px] sm:min-h-[340px] md:min-h-[430px] lg:min-h-[460px] flex items-end justify-center md:justify-end overflow-hidden">
          <div className="relative w-full max-w-[440px] sm:max-w-[500px] md:max-w-[560px] h-[260px] sm:h-[340px] md:h-[430px] lg:h-[460px] flex items-end mx-auto md:mx-0">
            <Image
              src="/images/founders-portrait-alpha.png"
              alt="Jeff & Lynn Griffin hand-drawn illustration with historic Shoals architecture"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 47vw"
              className="object-contain object-bottom md:object-right-bottom select-none"
            />
          </div>
        </div>

        {/* Right: Gold Bar, Headline, Philosophy Quote & Signature */}
        <div className="relative w-full md:w-[52%] lg:w-[53%] flex flex-col justify-center pt-5 pb-12 sm:py-10 md:py-12 lg:py-14 md:pl-6 lg:pl-8">
          <div className="max-w-[540px] w-full mx-auto md:mx-0">
            {/* Antique Gold Accent Bar */}
            <div
              className="w-10 sm:w-11 h-[2.5px] bg-[#B08B3E] mb-4 sm:mb-5 rounded-[0.5px]"
              aria-hidden="true"
            />

            {/* Editorial Headline with Responsive Line Breaks */}
            <h2 className="font-serif-story text-[19px] sm:text-[22px] md:text-[23px] lg:text-[25px] xl:text-[26.5px] font-semibold text-[#111820] leading-[1.3] tracking-[-0.015em]">
              We&apos;re a family-owned{" "}
              <br className="sm:hidden" />
              real estate company
              <br />
              with deep roots in the Shoals.
            </h2>

            {/* Philosophy Body Quote (Tuned max-width for 4-line editorial cadence) */}
            <p className="font-serif-story text-[14px] sm:text-[15.5px] md:text-[16px] lg:text-[17px] font-normal text-[#252D36] leading-[1.58] mt-4 sm:mt-5 max-w-[395px]">
              Our approach is simple: build carefully, own for the long term, and treat every property and tenant like it matters &ndash; because to us, it does.
            </p>

            {/* Authentic Gold Fountain Pen Signature */}
            <div className="mt-5 sm:mt-6">
              <div className="relative w-[180px] sm:w-[220px] md:w-[240px] h-[52px] sm:h-[62px] md:h-[68px]">
                <Image
                  src="/images/founders-signature-clean.png"
                  alt="Jeff & Lynn Griffin Signature"
                  fill
                  sizes="240px"
                  className="object-contain object-left select-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

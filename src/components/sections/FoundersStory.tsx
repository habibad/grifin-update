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

      {/* 2. Metallic Gold Griffin Crest Watermark (Subtle Elegant Parchment Seal) */}
      <div
        className="absolute right-[-4%] sm:right-[0%] md:right-[1%] lg:right-[2%] xl:right-[3%] top-1/2 -translate-y-1/2 w-[220px] sm:w-[260px] md:w-[310px] lg:w-[350px] xl:w-[380px] h-[85%] max-h-[420px] pointer-events-none z-[1] select-none opacity-[0.12] sm:opacity-[0.14] md:opacity-[0.16] mix-blend-multiply"
        aria-hidden="true"
      >
        <Image
          src="/images/watermarks/new-griffin-crest-gold-hires.png"
          alt=""
          fill
          sizes="(max-width: 768px) 260px, 380px"
          className="object-contain object-right"
        />
      </div>

      {/* 3. Main Content: Perfectly Unified Composition */}
      <div className="relative z-10 w-full max-w-[1240px] mx-auto py-10 sm:py-14 md:py-16 lg:py-18 flex flex-col md:flex-row items-center justify-center px-6 sm:px-8 gap-8 md:gap-6">
        {/* Left: Clean Digital Ink Illustration of Jeff & Lynn Griffin */}
        <div className="relative w-full md:w-[51%] lg:w-[53%] flex items-center justify-center md:justify-end">
          <div className="relative w-full max-w-[480px] sm:max-w-[560px] md:max-w-[630px] lg:max-w-[670px] aspect-[980/435]">
            <Image
              src="/images/founders-portrait-clean.png"
              alt="Jeff and Lynn Griffin clean digital ink illustration drawing"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 53vw"
              className="object-contain object-center md:object-right select-none mix-blend-multiply"
            />
          </div>
        </div>

        {/* Right: Gold Bar, Headline, Philosophy Quote & Signature */}
        <div className="relative w-full md:w-[49%] lg:w-[47%] flex flex-col justify-center md:pl-4 lg:pl-8">
          <div className="max-w-[490px] w-full mx-auto md:mx-0">
            {/* Antique Gold Accent Bar */}
            <div
              className="w-10 sm:w-11 h-[2.5px] bg-[#B08B3E] mb-4 sm:mb-5 rounded-[0.5px]"
              aria-hidden="true"
            />

            {/* Editorial Headline with Responsive Line Breaks */}
            <h2 className="font-serif-story text-[20px] sm:text-[23px] md:text-[24px] lg:text-[26.5px] xl:text-[28px] font-semibold text-[#111820] leading-[1.28] tracking-[-0.015em]">
              We&apos;re a family-owned{" "}
              <br className="sm:hidden" />
              real estate company
              <br />
              with deep roots in the Shoals.
            </h2>

            {/* Philosophy Body Quote */}
            <p className="font-serif-story text-[14px] sm:text-[15.5px] md:text-[16px] lg:text-[17px] font-normal text-[#252D36] leading-[1.58] mt-4 sm:mt-5 max-w-[420px]">
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

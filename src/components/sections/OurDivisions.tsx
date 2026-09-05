import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function OurDivisions() {
  return (
    <section
      id="divisions"
      className="relative w-full bg-[#F5EFE7] text-[#111820] py-14 sm:py-16 lg:py-20 overflow-hidden select-none border-t border-[#D5C7B4]/50"
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
      <div className="relative z-10 w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-3 sm:gap-3.5">
        {/* ================= ROW 1: HEADER + CARD 01 + CARD 02 ================= */}
        <div className="flex flex-col lg:flex-row gap-3 sm:gap-3.5 items-stretch">
          {/* Left Block (Takes ~59% on desktop: Header + Card 01) */}
          <div className="w-full lg:w-[59%] flex flex-col sm:flex-row gap-3 sm:gap-3.5 items-stretch">
            {/* Section Header (37.5% of Left Block = ~22% of total width) */}
            <div className="w-full sm:w-[37.5%] flex flex-col justify-between py-1 sm:py-2 pr-2">
              <div>
                <span className="font-condensed text-[#B08B3E] font-bold text-[11px] sm:text-[11.5px] tracking-[0.16em] uppercase">
                  Our Divisions
                </span>
                <h2 className="font-serif-story font-bold text-[#111820] text-[28px] sm:text-[32px] md:text-[34px] lg:text-[37px] xl:text-[40px] leading-[1.08] tracking-[-0.015em] mt-2">
                  Five ways
                  <br />
                  we make
                  <br />
                  space work.
                </h2>
                <div
                  className="w-9 h-[2.5px] bg-[#B08B3E] mt-3.5 sm:mt-4 rounded-[0.5px]"
                  aria-hidden="true"
                />
              </div>
            </div>

            {/* Card 01: RETAIL (62.5% of Left Block) */}
            <div className="w-full sm:w-[62.5%] bg-[#FAF6EE] border border-[#DCD3C7] overflow-hidden flex flex-row items-stretch group hover:border-[#B08B3E]/60 transition-all duration-300">
              <div className="w-[45%] p-3.5 sm:p-4 flex flex-col justify-between">
                <div>
                  <span className="font-serif-story text-[#B08B3E] text-[18px] sm:text-[20px] font-normal leading-none">
                    01
                  </span>
                  <h3 className="font-condensed font-bold text-[#111820] text-[18px] sm:text-[20px] uppercase tracking-[0.03em] leading-tight mt-1.5">
                    Retail
                  </h3>
                  <p className="font-sans text-[#3D454E] text-[11px] sm:text-[11.5px] leading-[1.42] mt-2">
                    Vibrant retail centers in prime locations where businesses thrive and communities come together.
                  </p>
                </div>
                <Link
                  href="/divisions#retail"
                  className="inline-flex items-center gap-1 font-condensed font-bold text-[10px] sm:text-[10.5px] tracking-[0.08em] uppercase text-[#111820] group-hover:text-[#B08B3E] transition-colors mt-2.5"
                >
                  <span>Explore Retail</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div className="relative w-[55%] min-h-[160px] sm:min-h-[175px] overflow-hidden">
                <Image
                  src="/images/divisions/ref-retail.jpg"
                  alt="Griffin Brothers Properties Retail Centers in Shoals, AL"
                  fill
                  sizes="(max-width: 640px) 55vw, 320px"
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out select-none"
                />
              </div>
            </div>
          </div>

          {/* Right Block: Card 02: FLEX (Takes ~41% on desktop) */}
          <div className="w-full lg:w-[41%] bg-[#FAF6EE] border border-[#DCD3C7] overflow-hidden flex flex-row items-stretch group hover:border-[#B08B3E]/60 transition-all duration-300">
            <div className="w-[43%] p-3.5 sm:p-4 flex flex-col justify-between">
              <div>
                <span className="font-serif-story text-[#B08B3E] text-[18px] sm:text-[20px] font-normal leading-none">
                  02
                </span>
                <h3 className="font-condensed font-bold text-[#111820] text-[18px] sm:text-[20px] uppercase tracking-[0.03em] leading-tight mt-1.5">
                  Flex
                </h3>
                <p className="font-sans text-[#3D454E] text-[11px] sm:text-[11.5px] leading-[1.42] mt-2">
                  Versatile spaces designed for a wide range of businesses and operational needs.
                </p>
              </div>
              <Link
                href="/divisions#flex"
                className="inline-flex items-center gap-1 font-condensed font-bold text-[10px] sm:text-[10.5px] tracking-[0.08em] uppercase text-[#111820] group-hover:text-[#B08B3E] transition-colors mt-2.5"
              >
                <span>Explore Flex</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="relative w-[57%] min-h-[160px] sm:min-h-[175px] overflow-hidden">
              <Image
                src="/images/divisions/ref-flex.jpg"
                alt="Griffin Brothers Properties Flex Commercial Facilities"
                fill
                sizes="(max-width: 640px) 55vw, 420px"
                className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out select-none"
              />
            </div>
          </div>
        </div>

        {/* ================= ROW 2: CARD 03 (LAND LEASES - FULL WIDTH BANNER) ================= */}
        <div className="w-full bg-[#FAF6EE] border border-[#DCD3C7] overflow-hidden flex flex-col sm:flex-row items-stretch group hover:border-[#B08B3E]/60 transition-all duration-300">
          {/* Left Text Pane (aligned with Header column: ~22.1% width on desktop) */}
          <div className="w-full sm:w-[22.1%] p-3.5 sm:p-4 lg:p-5 flex flex-col justify-between">
            <div>
              <span className="font-serif-story text-[#B08B3E] text-[18px] sm:text-[20px] font-normal leading-none">
                03
              </span>
              <h3 className="font-condensed font-bold text-[#111820] text-[18px] sm:text-[20px] uppercase tracking-[0.03em] leading-tight mt-1.5">
                Land Leases
              </h3>
              <p className="font-sans text-[#3D454E] text-[11px] sm:text-[11.5px] leading-[1.42] mt-2">
                Strategic land opportunities in high-traffic areas ideal for long-term success.
              </p>
            </div>
            <Link
              href="/divisions#land-leases"
              className="inline-flex items-center gap-1 font-condensed font-bold text-[10px] sm:text-[10.5px] tracking-[0.08em] uppercase text-[#111820] group-hover:text-[#B08B3E] transition-colors mt-3"
            >
              <span>Explore Land Leases</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Right Image Pane (Panoramic drone aerial with white parcel boundary) */}
          <div className="relative w-full sm:w-[77.9%] min-h-[190px] sm:min-h-[210px] lg:min-h-[230px] overflow-hidden">
            <Image
              src="/images/divisions/ref-land-leases.jpg"
              alt="Strategic Land Leases in Shoals, Alabama with Highlighted Parcel"
              fill
              sizes="(max-width: 640px) 100vw, 1000px"
              className="object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out select-none"
            />
          </div>
        </div>

        {/* ================= ROW 3: CARD 04 + CARD 05 ================= */}
        <div className="flex flex-col lg:flex-row gap-3 sm:gap-3.5 items-stretch">
          {/* Card 04: BUILD TO SUIT (Takes ~59% on desktop) */}
          <div className="w-full lg:w-[59%] bg-[#FAF6EE] border border-[#DCD3C7] overflow-hidden flex flex-row items-stretch group hover:border-[#B08B3E]/60 transition-all duration-300">
            {/* Left text pane (matches ~37.5% of Left Block = ~22.1% total) */}
            <div className="w-[37.5%] p-3.5 sm:p-4 lg:p-5 flex flex-col justify-between">
              <div>
                <span className="font-serif-story text-[#B08B3E] text-[18px] sm:text-[20px] font-normal leading-none">
                  04
                </span>
                <h3 className="font-condensed font-bold text-[#111820] text-[18px] sm:text-[20px] uppercase tracking-[0.03em] leading-tight mt-1.5">
                  Build to Suit
                </h3>
                <p className="font-sans text-[#3D454E] text-[11px] sm:text-[11.5px] leading-[1.42] mt-2">
                  Custom buildings tailored to your vision, built with quality and precision.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1 font-condensed font-bold text-[10px] sm:text-[10.5px] tracking-[0.08em] uppercase text-[#111820] group-hover:text-[#B08B3E] transition-colors mt-3"
              >
                <span>Start a Conversation</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            {/* Right image pane */}
            <div className="relative w-[62.5%] min-h-[160px] sm:min-h-[175px] overflow-hidden">
              <Image
                src="/images/divisions/ref-build-to-suit.jpg"
                alt="Custom Build to Suit Commercial Architecture"
                fill
                sizes="(max-width: 640px) 60vw, 550px"
                className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out select-none"
              />
            </div>
          </div>

          {/* Card 05: RESIDENTIAL (Takes ~41% on desktop) */}
          <div className="w-full lg:w-[41%] bg-[#FAF6EE] border border-[#DCD3C7] overflow-hidden flex flex-row items-stretch group hover:border-[#B08B3E]/60 transition-all duration-300">
            <div className="w-[43%] p-3.5 sm:p-4 lg:p-5 flex flex-col justify-between">
              <div>
                <span className="font-serif-story text-[#B08B3E] text-[18px] sm:text-[20px] font-normal leading-none">
                  05
                </span>
                <h3 className="font-condensed font-bold text-[#111820] text-[18px] sm:text-[20px] uppercase tracking-[0.03em] leading-tight mt-1.5">
                  Residential
                </h3>
                <p className="font-sans text-[#3D454E] text-[11px] sm:text-[11.5px] leading-[1.42] mt-2">
                  Thoughtfully planned.
                  <br />
                  Built for everyday life.
                </p>
              </div>
              <div className="mt-3">
                <span className="font-serif-story text-[#7D7364] text-[11.5px] sm:text-[12px]">
                  [ Coming Soon ]
                </span>
              </div>
            </div>
            {/* Right Architectural House Blueprint Sketch Pane */}
            <div className="relative w-[57%] min-h-[160px] sm:min-h-[175px] overflow-hidden bg-[#FAF6EE] flex items-center justify-center p-2">
              <div className="relative w-full h-full min-h-[140px]">
                <Image
                  src="/images/divisions/residential.png"
                  alt="Griffin Brothers Properties Residential Craftsman Architecture Blueprint"
                  fill
                  sizes="(max-width: 640px) 50vw, 360px"
                  className="object-contain object-right-bottom group-hover:scale-[1.03] transition-transform duration-700 ease-out select-none opacity-85"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

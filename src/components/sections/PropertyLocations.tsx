import React from "react";
import Image from "next/image";
import Link from "next/link";

interface LocationItem {
  id: string;
  name: string;
  logo: string;
  href: string;
}

const LOCATIONS: LocationItem[] = [
  {
    id: "shoppes",
    name: "Shoppes on 2nd",
    logo: "/images/locations/logo-shoppes.png",
    href: "/property-locations#shoppes",
  },
  {
    id: "wilson",
    name: "Wilson Crossing",
    logo: "/images/locations/logo-wilson.png",
    href: "/property-locations#wilson",
  },
  {
    id: "airport",
    name: "Airport Business Park",
    logo: "/images/locations/logo-airport.png",
    href: "/property-locations#airport",
  },
  {
    id: "hwy72",
    name: "Hwy 72 Business Park",
    logo: "/images/locations/logo-hwy72.png",
    href: "/property-locations#hwy72",
  },
  {
    id: "miniflex",
    name: "Mini Flex of the Shoals",
    logo: "/images/locations/logo-miniflex.png",
    href: "/property-locations#miniflex",
  },
];

export default function PropertyLocations() {
  return (
    <section
      id="property-locations"
      className="relative w-full bg-[#0B1117] text-white py-12 sm:py-14 lg:py-16 overflow-hidden select-none border-t border-[#B08B3E]/20 scroll-mt-10"
    >
      {/* Subtle Background Glow & Radial Vignette */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(17,24,32,0.95) 0%, #0B1117 75%, #070B0F 100%)",
        }}
      />

      {/* Griffin Crest Silhouette Watermark (Far Right Background) */}
      <div
        className="absolute right-0 sm:right-[1%] lg:right-[2%] top-1/2 -translate-y-1/2 w-[220px] sm:w-[270px] lg:w-[320px] h-[85%] pointer-events-none z-[1] select-none opacity-[0.14] mix-blend-screen"
        aria-hidden="true"
      >
        <Image
          src="/images/watermarks/new-griffin-crest-gold-hires.png"
          alt=""
          fill
          sizes="320px"
          className="object-contain object-right"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-8 lg:gap-0">
          {/* Left: Section Header */}
          <div className="w-full lg:w-[24%] xl:w-[22%] flex flex-col justify-center lg:pr-6 lg:border-r border-white/10">
            <span className="font-condensed text-[#B08B3E] font-bold text-[11px] sm:text-[11.5px] tracking-[0.18em] uppercase">
              Our Property Locations
            </span>
            <h2 className="font-serif-story font-bold text-white text-[26px] sm:text-[30px] lg:text-[32px] xl:text-[36px] leading-[1.14] tracking-[-0.015em] mt-2.5">
              Places we&apos;re
              <br />
              proud to call home.
            </h2>
          </div>

          {/* Right: 5 Property Logos Row */}
          <div className="w-full lg:w-[76%] xl:w-[78%] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 items-stretch">
            {LOCATIONS.map((loc, idx) => (
              <div
                key={loc.id}
                className={`flex items-center justify-center p-3.5 sm:p-4 lg:p-6 transition-colors duration-300 ${
                  // Desktop dividers: vertical divider on all except last
                  idx !== LOCATIONS.length - 1 ? "lg:border-r lg:border-white/10" : "lg:border-r-0"
                } ${
                  // Mobile 2-column dividers
                  idx % 2 === 0 && idx < 4 ? "border-r border-white/10 sm:border-r-0" : ""
                } ${
                  // Tablet 3-column dividers
                  idx % 3 !== 2 && idx < 4 ? "sm:border-r sm:border-white/10 lg:border-r-0" : ""
                } ${
                  // Horizontal dividers between rows
                  idx < 4 ? "border-b border-white/10 sm:border-b-0" : ""
                } ${
                  // 5th item spans full width on 2-col mobile
                  idx === 4 ? "col-span-2 sm:col-span-1" : ""
                }`}
              >
                <Link
                  href={loc.href}
                  className="group relative flex flex-col items-center justify-center w-full h-[105px] sm:h-[120px] lg:h-[130px] px-2 transition-transform duration-300 hover:scale-[1.06]"
                  title={`View ${loc.name}`}
                >
                  <div className="relative w-full h-full max-w-[135px] sm:max-w-[155px] lg:max-w-[170px]">
                    <Image
                      src={loc.logo}
                      alt={`${loc.name} Logo`}
                      fill
                      unoptimized
                      sizes="(max-width: 640px) 135px, 170px"
                      className="object-contain object-center opacity-90 group-hover:opacity-100 transition-opacity duration-300 filter drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)] select-none"
                    />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

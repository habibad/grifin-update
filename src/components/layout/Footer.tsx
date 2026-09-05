import React from "react";
import Image from "next/image";
import Link from "next/link";

const NAV_ITEMS = [
  { label: "HOME", href: "/" },
  { label: "DIVISIONS", href: "/divisions" },
  { label: "PROPERTY LOCATIONS", href: "/property-locations" },
  { label: "GALLERY", href: "/gallery" },
  { label: "ABOUT", href: "/about" },
  { label: "CONTACT", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden select-none border-t border-[#3B2A1E]/90">
      {/* Background: Photorealistic Dark Espresso Walnut Wood Planks */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/footer-wood-bg.jpg"
          alt="Dark espresso walnut wood planks background"
          fill
          unoptimized
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
        {/* Subtle Dark Vignette / Lighting Overlay for Rich Depth */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.36) 0%, rgba(15,10,6,0.16) 50%, rgba(0,0,0,0.46) 100%)",
          }}
        />
      </div>

      {/* Far Right: Griffin Mascot Watermark Silhouette */}
      <div
        className="absolute right-[-8px] lg:right-0 top-1/2 -translate-y-1/2 w-[140px] sm:w-[155px] lg:w-[170px] h-[95%] pointer-events-none z-[1] select-none opacity-[0.16] mix-blend-screen"
        aria-hidden="true"
      >
        <Image
          src="/images/griffin-sky-watermark-hires.png"
          alt=""
          fill
          unoptimized
          sizes="170px"
          className="object-contain object-right"
        />
      </div>

      {/* Main Content Container - Exact 3-column horizontal alignment */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-14 py-3.5 sm:py-4 lg:py-[20px]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3.5 md:gap-0">
          {/* Left: Brand Logo (Mascot + Griffin Brothers Properties) */}
          <div className="w-full md:w-auto flex items-center justify-center md:justify-start">
            <Link
              href="/"
              className="relative w-[124px] sm:w-[128px] lg:w-[130px] h-[36px] sm:h-[38px] lg:h-[40px] transition-transform duration-300 hover:scale-[1.02] flex items-center"
              title="Griffin Brothers Properties Home"
            >
              <Image
                src="/images/footer-brand-logo.png"
                alt="Griffin Brothers Properties"
                fill
                unoptimized
                sizes="(max-width: 640px) 124px, 130px"
                className="object-contain object-left select-none filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]"
              />
            </Link>
          </div>

          {/* Middle: Navigation Links (Top) & Copyright (Bottom) */}
          <div className="flex flex-col items-center justify-center text-center">
            {/* Nav Links Row - strictly single line with exact 35px spacing */}
            <nav
              aria-label="Footer navigation"
              className="flex flex-wrap sm:flex-nowrap items-center justify-center gap-x-5 sm:gap-x-6 lg:gap-x-[33px] gap-y-1"
            >
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="font-sans font-semibold uppercase tracking-[0.04em] text-white/95 hover:text-[#C5A566] transition-colors duration-200 text-[9.5px] sm:text-[10.5px] lg:text-[11px] whitespace-nowrap drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Copyright Line */}
            <p className="font-sans text-[9px] sm:text-[9.5px] lg:text-[10px] text-[#B8A27C] mt-2 sm:mt-2.5 tracking-[0.01em] font-normal drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
              &copy; 2025 Griffin Brothers Properties. All rights reserved.
            </p>
          </div>

          {/* Right: Location Heading & Social Media Icons */}
          <div className="w-full md:w-auto flex flex-col items-center md:items-center justify-center">
            {/* Location */}
            <span className="font-sans font-bold uppercase tracking-[0.04em] text-white text-[10.5px] sm:text-[11px] lg:text-[11.5px] block whitespace-nowrap drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
              THE SHOALS, ALABAMA
            </span>

            {/* Social Icons (Facebook, Instagram, LinkedIn) */}
            <div className="flex items-center justify-center gap-2.5 sm:gap-3 mt-1.5 sm:mt-2">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[17px] h-[17px] sm:w-[17.5px] sm:h-[17.5px] rounded-[3.2px] border border-[#B88E3D] text-[#B88E3D] flex items-center justify-center transition-all duration-200 hover:border-[#E8C378] hover:text-[#E8C378] hover:bg-[#B88E3D]/15"
                aria-label="Facebook"
              >
                <svg className="w-[8.5px] h-[8.5px]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14 8.5V6.5c0-.8.7-1.5 1.5-1.5H17V1h-3c-3 0-4.5 1.8-4.5 4.5V8.5H7v4h2.5V23h5V12.5H17l.8-4H14z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[17px] h-[17px] sm:w-[17.5px] sm:h-[17.5px] rounded-[3.2px] border border-[#B88E3D] text-[#B88E3D] flex items-center justify-center transition-all duration-200 hover:border-[#E8C378] hover:text-[#E8C378] hover:bg-[#B88E3D]/15"
                aria-label="Instagram"
              >
                <svg
                  className="w-[8.5px] h-[8.5px]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[17px] h-[17px] sm:w-[17.5px] sm:h-[17.5px] rounded-[3.2px] border border-[#B88E3D] text-[#B88E3D] flex items-center justify-center transition-all duration-200 hover:border-[#E8C378] hover:text-[#E8C378] hover:bg-[#B88E3D]/15"
                aria-label="LinkedIn"
              >
                <svg className="w-[8.5px] h-[8.5px]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.98 3.5c0 1.38-1.11 2.5-2.48 2.5C1.12 6 0 4.88 0 3.5 0 2.12 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4v15h-4V8zm7 0h3.8v2.1h.1c.5-1 1.9-2.1 3.9-2.1 4.2 0 5 2.8 5 6.4V23h-4v-7.6c0-1.8 0-4.1-2.5-4.1s-2.9 2-2.9 4v7.7h-4V8z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

import React from "react";
import Image from "next/image";
import Link from "next/link";

const NAV_ITEMS = [
  { label: "HOME", href: "/" },
  { label: "DIVISIONS", href: "/#divisions" },
  { label: "PROPERTY LOCATIONS", href: "/#property-locations" },
  { label: "GALLERY", href: "/gallery" },
  { label: "ABOUT", href: "/#about" },
  { label: "CONTACT", href: "/#contact" },
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

      {/* Far Right: Griffin Crest Watermark Silhouette */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[160px] sm:w-[200px] lg:w-[240px] h-[90%] pointer-events-none z-[1] select-none opacity-[0.16] mix-blend-screen"
        aria-hidden="true"
      >
        <Image
          src="/images/watermarks/new-griffin-crest-gold-hires.png"
          alt=""
          fill
          unoptimized
          sizes="240px"
          className="object-contain object-right"
        />
      </div>

      {/* Main Content Container - Balanced 3-column layout with generous vertical breathing room */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-9 sm:py-12 lg:py-14">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
          {/* Left: Brand Logo */}
          <div className="w-full md:w-auto flex items-center justify-center md:justify-start">
            <Link
              href="/"
              className="relative w-[180px] sm:w-[205px] lg:w-[225px] h-[52px] sm:h-[58px] lg:h-[65px] transition-transform duration-300 hover:scale-[1.02] flex items-center"
              title="Griffin Brothers Properties Home"
            >
              <Image
                src="/images/griffin-brothers-new-logo.png"
                alt="Griffin Brothers Properties"
                fill
                unoptimized
                sizes="(max-width: 640px) 180px, (max-width: 1024px) 205px, 225px"
                className="object-contain object-left select-none filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]"
              />
            </Link>
          </div>

          {/* Middle: Navigation Links (Top) & Copyright (Bottom) */}
          <div className="flex flex-col items-center justify-center text-center">
            {/* Nav Links Row */}
            <nav
              aria-label="Footer navigation"
              className="flex flex-wrap sm:flex-nowrap items-center justify-center gap-x-6 sm:gap-x-8 lg:gap-x-10 gap-y-2"
            >
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="font-sans font-bold uppercase tracking-[0.06em] text-white/90 hover:text-[#C8A45D] transition-colors duration-200 text-[11px] sm:text-[12px] lg:text-[13px] whitespace-nowrap drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Copyright Line */}
            <p className="font-sans text-[11px] sm:text-[11.5px] lg:text-[12px] text-[#B8A27C] mt-3.5 sm:mt-4 lg:mt-4.5 tracking-[0.02em] font-normal drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
              &copy; 2025 Griffin Brothers Properties. All rights reserved.
            </p>
          </div>

          {/* Right: Location Heading & Social Media Icons */}
          <div className="w-full md:w-auto flex flex-col items-center md:items-center justify-center">
            {/* Location */}
            <span className="font-sans font-bold uppercase tracking-[0.08em] text-white text-[12px] sm:text-[13px] lg:text-[13.5px] block whitespace-nowrap drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
              THE SHOALS, ALABAMA
            </span>

            {/* Social Icons (Facebook, Instagram, LinkedIn) */}
            <div className="flex items-center justify-center gap-3 sm:gap-3.5 mt-3 sm:mt-3.5">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[28px] h-[28px] sm:w-[30px] sm:h-[30px] rounded-[4px] border border-[#B88E3D] text-[#C8A45D] flex items-center justify-center transition-all duration-200 hover:border-[#F3D78E] hover:text-[#F3D78E] hover:bg-[#B88E3D]/20 shadow-[0_2px_4px_rgba(0,0,0,0.4)]"
                aria-label="Facebook"
              >
                <svg className="w-[14px] h-[14px]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14 8.5V6.5c0-.8.7-1.5 1.5-1.5H17V1h-3c-3 0-4.5 1.8-4.5 4.5V8.5H7v4h2.5V23h5V12.5H17l.8-4H14z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[28px] h-[28px] sm:w-[30px] sm:h-[30px] rounded-[4px] border border-[#B88E3D] text-[#C8A45D] flex items-center justify-center transition-all duration-200 hover:border-[#F3D78E] hover:text-[#F3D78E] hover:bg-[#B88E3D]/20 shadow-[0_2px_4px_rgba(0,0,0,0.4)]"
                aria-label="Instagram"
              >
                <svg
                  className="w-[14px] h-[14px]"
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
                className="w-[28px] h-[28px] sm:w-[30px] sm:h-[30px] rounded-[4px] border border-[#B88E3D] text-[#C8A45D] flex items-center justify-center transition-all duration-200 hover:border-[#F3D78E] hover:text-[#F3D78E] hover:bg-[#B88E3D]/20 shadow-[0_2px_4px_rgba(0,0,0,0.4)]"
                aria-label="LinkedIn"
              >
                <svg className="w-[14px] h-[14px]" viewBox="0 0 24 24" fill="currentColor">
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

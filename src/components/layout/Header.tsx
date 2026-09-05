"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: "HOME", href: "/" },
  { label: "DIVISIONS", href: "/divisions" },
  { label: "PROPERTY LOCATIONS", href: "/property-locations" },
  { label: "GALLERY", href: "/gallery" },
  { label: "ABOUT", href: "/about" },
  { label: "CONTACT", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Listen for scroll to optionally tint header subtly on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`absolute top-0 left-0 right-0 z-50 w-full transition-colors duration-300 ${scrolled ? "bg-[#0B1117]/85 backdrop-blur-md" : "bg-transparent"
        }`}
    >
      <div className="container-custom flex items-center justify-between h-[96px] md:h-[104px]">
        {/* Left: Brand Logo */}
        <Link
          href="/"
          className="group flex items-center transition-transform duration-200 hover:scale-[1.01]"
          aria-label="Griffin Brothers Properties Home"
        >
          <div className="relative w-[180px] sm:w-[205px] md:w-[225px] h-[52px] sm:h-[58px] md:h-[64px] flex-shrink-0">
            <Image
              src="/images/griffin-brothers-new-logo.png"
              alt="Griffin Brothers Properties"
              fill
              sizes="(max-width: 640px) 180px, (max-width: 768px) 205px, 225px"
              priority
              className="object-contain object-left"
            />
          </div>
        </Link>

        {/* Center: Desktop Navigation */}
        <nav
          className="hidden xl:flex items-center gap-[34px]"
          aria-label="Primary Navigation"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <div key={item.href} className="group relative flex flex-col items-center">
                <Link
                  href={item.href}
                  className={`text-[12px] font-bold tracking-[0.08em] uppercase transition-colors duration-200 py-1 ${isActive
                      ? "text-white"
                      : "text-white/85 hover:text-[#C8A45D]"
                    }`}
                >
                  {item.label}
                </Link>
                {/* Active Underline: 32px wide, 2px height, brand gold matching reference */}
                {isActive ? (
                  <span
                    className="absolute -bottom-1 h-[2px] w-[32px] bg-[#C8A45D]"
                    aria-hidden="true"
                  />
                ) : (
                  <span
                    className="absolute -bottom-1 h-[2px] w-0 bg-[#C8A45D] transition-all duration-200 ease-out group-hover:w-[24px]"
                    aria-hidden="true"
                  />
                )}
              </div>
            );
          })}
        </nav>

        {/* Right: Talk With Us CTA (Desktop) */}
        <div className="hidden lg:flex items-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-2.5 border border-[#C8A45D] rounded-[2px] bg-transparent text-[12px] font-bold tracking-[0.08em] uppercase text-white transition-all duration-200 hover:bg-[#C8A45D] hover:text-[#0B1117]"
          >
            TALK WITH US
          </Link>
        </div>

        {/* Mobile / Tablet Hamburger Toggle */}
        <div className="flex xl:hidden items-center gap-4">
          <Link
            href="/contact"
            className="hidden sm:inline-flex lg:hidden items-center justify-center px-4 py-2 border border-[#B18A3A] rounded-[2px] bg-transparent text-[11px] font-semibold tracking-[0.08em] uppercase text-white hover:bg-[#B18A3A] hover:text-[#111820] transition-colors"
          >
            TALK WITH US
          </Link>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white hover:text-[#B18A3A] focus:outline-none focus:ring-1 focus:ring-[#B18A3A] transition-colors"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation Overlay */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
          className="xl:hidden fixed inset-0 z-50 bg-[#0B1117] flex flex-col justify-between px-6 py-8 animate-fadeIn"
        >
          {/* Top Bar inside Drawer */}
          <div className="flex items-center justify-between">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center"
              aria-label="Griffin Brothers Properties Home"
            >
              <div className="relative w-[180px] h-[52px] flex-shrink-0">
                <Image
                  src="/images/griffin-brothers-new-logo.png"
                  alt="Griffin Brothers Properties"
                  fill
                  sizes="180px"
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-white hover:text-[#B18A3A] focus:outline-none"
              aria-label="Close menu"
            >
              <X size={28} />
            </button>
          </div>

          {/* Links List */}
          <nav className="flex flex-col gap-6 my-auto py-8">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <div key={item.href} className="flex items-center gap-3">
                  {isActive && (
                    <span className="w-2.5 h-[2px] bg-[#B18A3A]" aria-hidden="true" />
                  )}
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-2xl font-bold uppercase tracking-[0.06em] font-[var(--font-condensed)] transition-colors ${isActive
                        ? "text-[#B18A3A]"
                        : "text-white hover:text-[#B18A3A]"
                      }`}
                  >
                    {item.label}
                  </Link>
                </div>
              );
            })}
          </nav>

          {/* Bottom CTA & Info */}
          <div className="flex flex-col gap-4 pt-6 border-t border-white/10">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-4 bg-[#B18A3A] text-[#111820] text-sm font-bold tracking-[0.08em] uppercase rounded-[2px] hover:bg-[#C7A45A] transition-colors"
            >
              TALK WITH US
            </Link>
            <p className="text-xs text-center text-white/50 tracking-wider uppercase font-medium">
              Shoals, Alabama • Commercial Real Estate
            </p>
          </div>
        </div>
      )}
    </header>
  );
}

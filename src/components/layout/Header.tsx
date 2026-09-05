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
  { label: "DIVISIONS", href: "/#divisions" },
  { label: "PROPERTY LOCATIONS", href: "/#property-locations" },
  { label: "GALLERY", href: "/gallery" },
  { label: "ABOUT", href: "/#about" },
  { label: "CONTACT", href: "/#contact" },
];

interface HeaderProps {
  variant?: "transparent" | "solid";
}

export default function Header({ variant = "transparent" }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState<string>("home");
  const pathname = usePathname();

  // Listen for scroll to toggle sticky styling, subtle compacting, and scroll progress
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress(Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100)));
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section on landing page via scroll position
  useEffect(() => {
    if (pathname !== "/") return;

    const handleScrollSpy = () => {
      // Bottom of page: activate contact
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 80
      ) {
        setActiveSection("contact");
        return;
      }

      // Top of page: activate home
      if (window.scrollY < 200) {
        setActiveSection("home");
        return;
      }

      const sections = ["contact", "about", "property-locations", "divisions"];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 240 && rect.bottom > 100) {
            setActiveSection(sectionId);
            return;
          }
        }
      }
      setActiveSection("home");
    };

    handleScrollSpy();
    window.addEventListener("scroll", handleScrollSpy, { passive: true });
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, [pathname]);

  // If arriving from another page with a hash (e.g. from /gallery to /#divisions), smoothly scroll to target
  useEffect(() => {
    if (pathname === "/" && typeof window !== "undefined" && window.location.hash) {
      const targetId = window.location.hash.substring(1);
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        setTimeout(() => {
          const headerOffset = 82;
          const elementPosition = targetEl.getBoundingClientRect().top;
          const offsetPosition =
            elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
          setActiveSection(targetId);
        }, 120);
      }
    }
  }, [pathname]);

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

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (pathname === "/") {
      if (href === "/") {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
        setActiveSection("home");
        if (window.location.hash) {
          window.history.pushState(null, "", "/");
        }
      } else if (href.startsWith("/#")) {
        e.preventDefault();
        const targetId = href.replace("/#", "");
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          const headerOffset = 82;
          const elementPosition = targetEl.getBoundingClientRect().top;
          const offsetPosition =
            elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
          setActiveSection(targetId);
          window.history.pushState(null, "", href);
        }
      }
    }
  };

  const checkIsActive = (href: string) => {
    if (pathname === "/gallery") {
      return href === "/gallery";
    }
    if (pathname === "/") {
      if (href === "/" && activeSection === "home") {
        return true;
      }
      if (href === `/#${activeSection}`) {
        return true;
      }
      return false;
    }
    return pathname === href;
  };

  const isSolid = variant === "solid";

  return (
    <header
      className={`${
        isSolid
          ? `sticky top-0 z-50 w-full transition-all duration-300 ${
              scrolled
                ? "bg-[#0B1117]/95 backdrop-blur-md shadow-lg shadow-black/40 border-b border-white/10"
                : "bg-[#0B1117] border-b border-white/5"
            }`
          : `fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
              scrolled
                ? "bg-[#0B1117]/95 backdrop-blur-md shadow-lg shadow-black/40 border-b border-white/10"
                : "bg-transparent border-b border-transparent"
            }`
      }`}
    >
      <div
        className={`container-custom flex items-center justify-between transition-all duration-300 ${
          scrolled ? "h-[74px] md:h-[80px]" : "h-[96px] md:h-[104px]"
        }`}
      >
        {/* Left: Brand Logo */}
        <Link
          href="/"
          onClick={(e) => handleNavClick(e, "/")}
          className="group flex items-center transition-transform duration-200 hover:scale-[1.01]"
          aria-label="Griffin Brothers Properties Home"
        >
          <div
            className={`relative flex-shrink-0 transition-all duration-300 ${
              scrolled
                ? "w-[160px] sm:w-[185px] md:w-[200px] h-[46px] sm:h-[50px] md:h-[54px]"
                : "w-[180px] sm:w-[205px] md:w-[225px] h-[52px] sm:h-[58px] md:h-[64px]"
            }`}
          >
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
            const isActive = checkIsActive(item.href);
            return (
              <div key={item.href} className="group relative flex flex-col items-center">
                <Link
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`text-[12px] font-bold tracking-[0.08em] uppercase transition-colors duration-200 py-1 ${
                    isActive
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
            href="/#contact"
            onClick={(e) => handleNavClick(e, "/#contact")}
            className={`inline-flex items-center justify-center border border-[#C8A45D] rounded-[2px] bg-transparent font-bold tracking-[0.08em] uppercase text-white transition-all duration-300 hover:bg-[#C8A45D] hover:text-[#0B1117] ${
              scrolled ? "px-5 py-2 text-[11.5px]" : "px-6 py-2.5 text-[12px]"
            }`}
          >
            TALK WITH US
          </Link>
        </div>

        {/* Mobile / Tablet Hamburger Toggle */}
        <div className="flex xl:hidden items-center gap-4">
          <Link
            href="/#contact"
            onClick={(e) => handleNavClick(e, "/#contact")}
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
              onClick={(e) => {
                setMobileMenuOpen(false);
                handleNavClick(e, "/");
              }}
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
              const isActive = checkIsActive(item.href);
              return (
                <div key={item.href} className="flex items-center gap-3">
                  {isActive && (
                    <span className="w-2.5 h-[2px] bg-[#B18A3A]" aria-hidden="true" />
                  )}
                  <Link
                    href={item.href}
                    onClick={(e) => {
                      setMobileMenuOpen(false);
                      handleNavClick(e, item.href);
                    }}
                    className={`text-2xl font-bold uppercase tracking-[0.06em] font-[var(--font-condensed)] transition-colors ${
                      isActive
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
              href="/#contact"
              onClick={(e) => {
                setMobileMenuOpen(false);
                handleNavClick(e, "/#contact");
              }}
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

      {/* Subtle Luxury Scroll Progress Bar */}
      <div
        className="absolute bottom-0 left-0 h-[1.5px] bg-gradient-to-r from-[#B18A3A] via-[#E6C687] to-[#B18A3A] transition-all duration-150 pointer-events-none opacity-80"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />
    </header>
  );
}

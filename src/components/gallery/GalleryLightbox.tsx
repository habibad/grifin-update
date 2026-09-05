"use client";

import React, { useEffect, useCallback } from "react";
import Image from "next/image";
import { GalleryItem } from "./galleryData";

interface GalleryLightboxProps {
  items: GalleryItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function GalleryLightbox({
  items,
  currentIndex,
  onClose,
  onNavigate,
}: GalleryLightboxProps) {
  const isOpen = currentIndex !== null;
  const currentItem = currentIndex !== null ? items[currentIndex] : null;

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        if (currentIndex !== null && currentIndex > 0) {
          onNavigate(currentIndex - 1);
        } else if (currentIndex === 0) {
          onNavigate(items.length - 1);
        }
      } else if (e.key === "ArrowRight") {
        if (currentIndex !== null && currentIndex < items.length - 1) {
          onNavigate(currentIndex + 1);
        } else if (currentIndex === items.length - 1) {
          onNavigate(0);
        }
      }
    },
    [isOpen, currentIndex, items.length, onClose, onNavigate]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || !currentItem) return null;

  const prevIndex =
    currentIndex > 0 ? currentIndex - 1 : items.length - 1;
  const nextIndex =
    currentIndex < items.length - 1 ? currentIndex + 1 : 0;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={currentItem.title}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#070B0E]/95 backdrop-blur-2xl transition-all duration-300 select-none animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Top Header Bar */}
      <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 sm:px-10 py-5 bg-gradient-to-b from-[#070B0E]/90 to-transparent">
        <div className="flex items-center gap-4">
          <span className="text-[11px] sm:text-[12px] font-mono tracking-widest text-[#C5A059] uppercase px-2.5 py-1 rounded-[3px] border border-[#C5A059]/30 bg-[#C5A059]/10">
            {currentItem.categoryLabel}
          </span>
          <span className="text-[13px] sm:text-[14px] font-mono text-[#F3EFE6]/60">
            {String(currentIndex + 1).padStart(2, "0")} /{" "}
            {String(items.length).padStart(2, "0")}
          </span>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="group flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#C5A059]/30 bg-[#111820]/70 text-[#F3EFE6] hover:text-[#C5A059] hover:border-[#C5A059] transition-all duration-200 cursor-pointer"
          aria-label="Close Lightbox (Esc)"
        >
          <span className="text-[11px] uppercase tracking-widest font-mono hidden sm:inline">
            Close
          </span>
          <svg
            className="w-5 h-5 transition-transform duration-200 group-hover:rotate-90"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.8}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      {/* Left Navigation Arrow */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNavigate(prevIndex);
        }}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-[#C5A059]/30 bg-[#111820]/80 text-[#F3EFE6] hover:text-[#C5A059] hover:border-[#C5A059] hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center cursor-pointer shadow-lg backdrop-blur-md"
        aria-label="Previous Image"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      {/* Main High-Res Image Display Container */}
      <div
        className="relative w-full max-w-[1340px] h-[70vh] sm:h-[78vh] md:h-[82vh] mx-4 sm:mx-16 flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-full">
          <Image
            src={currentItem.src}
            alt={currentItem.alt}
            fill
            sizes="100vw"
            priority
            quality={98}
            className="object-contain select-none"
          />
        </div>
      </div>

      {/* Right Navigation Arrow */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNavigate(nextIndex);
        }}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-[#C5A059]/30 bg-[#111820]/80 text-[#F3EFE6] hover:text-[#C5A059] hover:border-[#C5A059] hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center cursor-pointer shadow-lg backdrop-blur-md"
        aria-label="Next Image"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Bottom Information Overlay */}
      <div className="absolute bottom-0 left-0 right-0 z-20 px-6 sm:px-10 py-5 bg-gradient-to-t from-[#070B0E]/95 via-[#070B0E]/80 to-transparent flex flex-col sm:flex-row sm:items-end justify-between gap-3">
        <div>
          <h3 className="text-[17px] sm:text-[20px] md:text-[22px] font-[var(--font-condensed)] font-bold tracking-wide uppercase text-white">
            {currentItem.title}
          </h3>
          <p className="text-[13px] sm:text-[14px] font-sans text-[#F3EFE6]/70 flex items-center gap-2 mt-0.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
            {currentItem.location}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-[2px] bg-[#C5A059] hover:bg-[#DFC27D] text-[#0B1117] text-[12px] font-bold tracking-wider uppercase transition-colors duration-200"
          >
            <span>Inquire About Space</span>
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

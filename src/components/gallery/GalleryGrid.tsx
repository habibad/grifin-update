"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { GALLERY_ITEMS, GALLERY_CATEGORIES, GalleryItem } from "./galleryData";
import GalleryLightbox from "./GalleryLightbox";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Filter items based on active category
  const filteredItems = useMemo(() => {
    if (activeCategory === "all") return GALLERY_ITEMS;
    return GALLERY_ITEMS.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="relative w-full pb-16 sm:pb-20 bg-[#F6EFE6] text-[#111820] select-none">
      {/* 1. Category Filter Navigation Bar (Exact Reference Alignment) */}
      <div className="container-custom max-w-[1220px] mb-6 sm:mb-8">
        <ScrollReveal variant="fade-up" delay={80} duration={650}>
          <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 flex-wrap">
            {GALLERY_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`text-[11px] sm:text-[12px] md:text-[12.5px] font-condensed tracking-[0.12em] uppercase transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-[#B08B3E] text-white font-bold px-4 sm:px-5 py-1.5 sm:py-2 rounded-[2px] shadow-sm"
                      : "text-[#252D36] font-semibold hover:text-[#B08B3E] px-2 py-1.5"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </ScrollReveal>
      </div>

      {/* 2. Gallery Grid */}
      <div className="container-custom max-w-[1220px]">
        {activeCategory === "all" ? (
          /* Exact Reference Bento Composition for "ALL" */
          <div className="flex flex-col gap-2.5 sm:gap-3 md:gap-3.5">
            {/* ROW 1: Hero Featured Pair (Left Large Building + Right Stacked Flex & Land) */}
            <ScrollReveal variant="fade-up" delay={120} duration={800}>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-2.5 sm:gap-3 md:gap-3.5 items-stretch">
                {/* Left Large Card (Takes 7 of 12 cols = ~58% width) */}
                <div
                  onClick={() => setLightboxIndex(0)}
                  className="group relative md:col-span-7 h-[300px] sm:h-[380px] md:h-[440px] lg:h-[480px] rounded-[2px] overflow-hidden bg-[#111820] cursor-pointer shadow-sm"
                  role="button"
                  tabIndex={0}
                  aria-label="View commercial retail center"
                >
                  <Image
                    src={GALLERY_ITEMS[0].src}
                    alt={GALLERY_ITEMS[0].alt}
                    fill
                    priority
                    quality={98}
                    sizes="(max-width: 768px) 100vw, 60vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
                </div>

                {/* Right Stacked Column (Takes 5 of 12 cols = ~42% width) */}
                <div className="md:col-span-5 flex flex-col gap-2.5 sm:gap-3 md:gap-3.5 h-[300px] sm:h-[380px] md:h-[440px] lg:h-[480px]">
                  {/* Top Card: Flex building with garage doors */}
                  <div
                    onClick={() => setLightboxIndex(1)}
                    className="group relative flex-1 rounded-[2px] overflow-hidden bg-[#111820] cursor-pointer shadow-sm"
                    role="button"
                    tabIndex={0}
                    aria-label="View industrial flex facility"
                  >
                    <Image
                      src={GALLERY_ITEMS[1].src}
                      alt={GALLERY_ITEMS[1].alt}
                      fill
                      quality={98}
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
                  </div>

                  {/* Bottom Card: Aerial land parcel */}
                  <div
                    onClick={() => setLightboxIndex(2)}
                    className="group relative flex-1 rounded-[2px] overflow-hidden bg-[#111820] cursor-pointer shadow-sm"
                    role="button"
                    tabIndex={0}
                    aria-label="View land development acreage"
                  >
                    <Image
                      src={GALLERY_ITEMS[2].src}
                      alt={GALLERY_ITEMS[2].alt}
                      fill
                      quality={98}
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* ROW 2: 3 Equal Columns (Retail + Wood Wall Crest + Luxury Lounge) */}
            <ScrollReveal variant="fade-up" delay={160} duration={800}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 sm:gap-3 md:gap-3.5 items-stretch">
                {[3, 4, 5].map((idx) => (
                  <div
                    key={GALLERY_ITEMS[idx].id}
                    onClick={() => setLightboxIndex(idx)}
                    className="group relative aspect-[4/3.7] rounded-[2px] overflow-hidden bg-[#111820] cursor-pointer shadow-sm"
                    role="button"
                    tabIndex={0}
                    aria-label={`View ${GALLERY_ITEMS[idx].title}`}
                  >
                    <Image
                      src={GALLERY_ITEMS[idx].src}
                      alt={GALLERY_ITEMS[idx].alt}
                      fill
                      quality={98}
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* ROW 3: 3 Equal Columns (Stone Commercial + People & Moments + Strip Retail) */}
            <ScrollReveal variant="fade-up" delay={180} duration={800}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 sm:gap-3 md:gap-3.5 items-stretch">
                {[6, 7, 8].map((idx) => (
                  <div
                    key={GALLERY_ITEMS[idx].id}
                    onClick={() => setLightboxIndex(idx)}
                    className="group relative aspect-[4/3] rounded-[2px] overflow-hidden bg-[#111820] cursor-pointer shadow-sm"
                    role="button"
                    tabIndex={0}
                    aria-label={`View ${GALLERY_ITEMS[idx].title}`}
                  >
                    <Image
                      src={GALLERY_ITEMS[idx].src}
                      alt={GALLERY_ITEMS[idx].alt}
                      fill
                      quality={98}
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* ROW 4: 3 Equal Columns (Warehouse Interior + Aerial Campus + Entrance Detail) */}
            <ScrollReveal variant="fade-up" delay={200} duration={800}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 sm:gap-3 md:gap-3.5 items-stretch">
                {[9, 10, 11].map((idx) => (
                  <div
                    key={GALLERY_ITEMS[idx].id}
                    onClick={() => setLightboxIndex(idx)}
                    className="group relative aspect-[16/11] rounded-[2px] overflow-hidden bg-[#111820] cursor-pointer shadow-sm"
                    role="button"
                    tabIndex={0}
                    aria-label={`View ${GALLERY_ITEMS[idx].title}`}
                  >
                    <Image
                      src={GALLERY_ITEMS[idx].src}
                      alt={GALLERY_ITEMS[idx].alt}
                      fill
                      quality={98}
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        ) : (
          /* Filtered View (Clean 2 or 3 Column Showcase) */
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
            {filteredItems.map((item, idx) => (
              <ScrollReveal key={item.id} variant="fade-up" delay={idx * 60} duration={650}>
                <div
                  onClick={() => setLightboxIndex(idx)}
                  className="group relative aspect-[16/11] rounded-[2px] overflow-hidden bg-[#111820] cursor-pointer shadow-sm"
                  role="button"
                  tabIndex={0}
                  aria-label={`View ${item.title}`}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    quality={98}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        )}

        {/* 3. "LOAD MORE PHOTOS ↓" Button (Exact Reference Match) */}
        <ScrollReveal variant="fade-up" delay={120} duration={650} className="flex items-center justify-center mt-8 sm:mt-10 md:mt-12">
          <button
            type="button"
            className="inline-flex items-center gap-2 px-8 sm:px-10 py-3 sm:py-3.5 border border-[#B08B3E]/80 hover:border-[#B08B3E] bg-[#F6EFE6] hover:bg-[#FAF6EE] text-[#7A5B22] hover:text-[#B08B3E] text-[11px] sm:text-[12px] font-condensed font-bold tracking-[0.16em] uppercase rounded-[2px] transition-all duration-200 cursor-pointer shadow-sm"
          >
            <span>LOAD MORE PHOTOS</span>
            <span className="text-[13px] leading-none">&darr;</span>
          </button>
        </ScrollReveal>
      </div>

      {/* 4. Fullscreen Lightbox Modal */}
      <GalleryLightbox
        items={filteredItems}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
      />
    </section>
  );
}

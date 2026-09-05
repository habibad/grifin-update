import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function AboutAndContact() {
  return (
    <section
      id="about-contact"
      className="relative w-full bg-[#EFEAE3] text-[#111820] overflow-hidden select-none border-t border-[#D9D3C7]"
    >
      {/* Top Subtle Edge Shading (Paper / architectural depth) */}
      <div
        className="absolute top-0 left-0 right-0 h-6 pointer-events-none z-[2]"
        style={{
          background:
            "linear-gradient(180deg, rgba(160,145,125,0.16) 0%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      {/* Main Container - Exact Proportions matching Reference (1024 x 273, aspect 3.75:1) */}
      <div className="relative z-10 w-full flex flex-col lg:flex-row items-stretch lg:h-[clamp(273px,26.66vw,420px)]">
        {/* Left Column: Office Wood Wall with Golden Griffin Mascot (29.8% width) */}
        <div className="relative w-full lg:w-[29.8%] shrink-0 h-[260px] sm:h-[320px] lg:h-full overflow-hidden bg-[#241A14]">
          <Image
            src="/images/about-office-wall.png"
            alt="Griffin Brothers executive office with golden griffin plaque on slatted walnut wood wall"
            fill
            unoptimized
            sizes="(max-width: 1024px) 100vw, 30vw"
            className="object-cover object-center select-none transition-transform duration-700 hover:scale-[1.02]"
            priority
          />
        </div>

        {/* Right Container: Two Columns (70.2% width) */}
        <div className="relative w-full lg:w-[70.2%] shrink-0 bg-[#EFEAE3] flex flex-col md:flex-row items-stretch lg:h-full">
          {/* Middle Column: About Griffin Brothers (56.5% of right area) */}
          <div className="w-full md:w-[56.5%] shrink-0 flex flex-col justify-between px-6 sm:px-10 md:px-0 md:pl-[36px] lg:pl-[46px] xl:pl-[64px] md:pr-[24px] lg:pr-[36px] xl:pr-[50px] py-8 sm:py-10 md:py-0 md:pt-[34px] lg:pt-[40px] xl:pt-[48px] md:pb-[34px] lg:pb-[40px] xl:pb-[48px]">
            <div>
              {/* Gold Eyebrow */}
              <span className="font-condensed text-[#B08B3E] font-semibold text-[10px] sm:text-[11px] xl:text-[12px] tracking-[0.16em] uppercase block">
                ABOUT GRIFFIN BROTHERS
              </span>

              {/* Editorial Serif Heading */}
              <h2 className="font-serif-story font-semibold text-[#111820] text-[18px] sm:text-[20px] lg:text-[19.5px] xl:text-[25px] 2xl:text-[27px] leading-[1.2] tracking-[-0.01em] mt-2 sm:mt-2.5 xl:mt-3">
                Rooted in the Shoals.
                <br />
                Focused on what matters.
              </h2>

              {/* Description Paragraph */}
              <p className="font-sans text-[#4A5568] text-[11px] sm:text-[12px] xl:text-[13.5px] leading-[1.5] mt-2.5 sm:mt-3 xl:mt-3.5 max-w-[325px] sm:max-w-[360px] xl:max-w-[430px]">
                We&apos;re hands-on owners and developers who believe in building
                quality properties, long-term relationships, and strong
                communities.
              </p>
            </div>

            {/* Solid Gold Button */}
            <div className="mt-6 sm:mt-7 md:mt-0 pt-0.5">
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-1.5 whitespace-nowrap bg-[#B08B3E] hover:bg-[#9A762E] text-white font-condensed font-semibold uppercase tracking-[0.14em] text-[10px] sm:text-[10.5px] xl:text-[11.5px] h-[32px] sm:h-[34px] xl:h-[38px] px-3.5 sm:px-4.5 xl:px-5 rounded-[1px] transition-all duration-300 shadow-[0_2px_6px_rgba(176,139,62,0.2)] hover:shadow-[0_4px_12px_rgba(176,139,62,0.35)] group"
              >
                <span>LEARN MORE ABOUT US</span>
                <span className="text-[12px] xl:text-[13px] leading-none transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>

          {/* Vertical Hairline Divider between About and Contact (Desktop/Tablet) */}
          <div
            className="hidden md:block w-[1px] bg-[#CBC7C0] self-stretch md:my-[34px] lg:my-[40px] xl:my-[48px] shrink-0"
            aria-hidden="true"
          />

          {/* Horizontal Divider for Mobile Only */}
          <div
            className="block md:hidden w-[calc(100%-3rem)] mx-auto h-[1px] bg-[#CBC7C0]"
            aria-hidden="true"
          />

          {/* Right Column: Get In Touch (43.5% of right area) */}
          <div className="w-full md:w-[43.5%] shrink-0 flex flex-col justify-between px-6 sm:px-10 md:px-0 md:pl-[28px] lg:pl-[36px] xl:pl-[48px] md:pr-[36px] lg:pr-[48px] xl:pr-[64px] py-8 sm:py-10 md:py-0 md:pt-[34px] lg:pt-[40px] xl:pt-[48px] md:pb-[34px] lg:pb-[40px] xl:pb-[48px]">
            <div>
              {/* Gold Eyebrow */}
              <span className="font-condensed text-[#B08B3E] font-semibold text-[10px] sm:text-[11px] xl:text-[12px] tracking-[0.16em] uppercase block">
                GET IN TOUCH
              </span>

              {/* Contact List */}
              <ul className="mt-2.5 sm:mt-3 xl:mt-4 space-y-2 sm:space-y-2.5 xl:space-y-3.5">
                {/* Phone */}
                <li>
                  <a
                    href="tel:2567649310"
                    className="group inline-flex items-center gap-3 text-[#111820] hover:text-[#B08B3E] transition-colors duration-200"
                  >
                    <span className="w-4 flex items-center justify-center shrink-0">
                      <svg
                        className="w-[14px] h-[14px] xl:w-[15px] xl:h-[15px] text-[#111820] group-hover:text-[#B08B3E] transition-colors"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z" />
                      </svg>
                    </span>
                    <span className="font-sans font-medium text-[12px] sm:text-[13px] xl:text-[14.5px] tracking-normal">
                      256.764.9310
                    </span>
                  </a>
                </li>

                {/* Email */}
                <li>
                  <a
                    href="mailto:info@griffinbrothers.com"
                    className="group inline-flex items-center gap-3 text-[#111820] hover:text-[#B08B3E] transition-colors duration-200"
                  >
                    <span className="w-4 flex items-center justify-center shrink-0">
                      <svg
                        className="w-[14px] h-[14px] xl:w-[16px] xl:h-[16px] text-[#111820] group-hover:text-[#B08B3E] transition-colors"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4.25l-8 5-8-5V6.5l8 5 8-5v1.75z" />
                      </svg>
                    </span>
                    <span className="font-sans font-medium text-[11.5px] sm:text-[12.5px] xl:text-[13.5px] tracking-normal">
                      info@griffinbrothers.com
                    </span>
                  </a>
                </li>

                {/* Address */}
                <li className="flex items-start gap-3 text-[#111820]">
                  <span className="w-4 flex items-center justify-center shrink-0 pt-0.5">
                    <svg
                      className="w-[14px] h-[14px] xl:w-[16px] xl:h-[16px] text-[#111820]"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                  </span>
                  <address className="font-sans not-italic font-medium text-[11px] sm:text-[12px] xl:text-[13px] leading-[1.35] text-[#111820]">
                    3001 Wilson Dam Rd, Suite 10
                    <br />
                    Muscle Shoals, AL 35661
                  </address>
                </li>
              </ul>
            </div>

            {/* Solid Gold Button */}
            <div className="mt-6 sm:mt-7 md:mt-0 pt-0.5">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-1.5 whitespace-nowrap bg-[#B08B3E] hover:bg-[#9A762E] text-white font-condensed font-semibold uppercase tracking-[0.14em] text-[10px] sm:text-[10.5px] xl:text-[11.5px] h-[32px] sm:h-[34px] xl:h-[38px] px-3.5 sm:px-4.5 xl:px-5 rounded-[1px] transition-all duration-300 shadow-[0_2px_6px_rgba(176,139,62,0.2)] hover:shadow-[0_4px_12px_rgba(176,139,62,0.35)] group"
              >
                <span>LET&apos;S START A CONVERSATION</span>
                <span className="text-[12px] xl:text-[13px] leading-none transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

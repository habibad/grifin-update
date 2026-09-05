import type { Metadata, Viewport } from "next";
import { Oswald, DM_Serif_Display, Manrope, Lora } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/providers/SmoothScroll";

const oswald = Oswald({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});

const dmSerifDisplay = DM_Serif_Display({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-dm-serif",
  display: "swap",
});

const lora = Lora({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});

const manrope = Manrope({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Griffin Brothers Properties | Commercial Real Estate Ownership & Development",
  description:
    "Family-owned commercial real estate ownership and development company rooted in the Shoals, Alabama. We own it. We build it. We make it work.",
  keywords: [
    "Griffin Brothers Properties",
    "Shoals Alabama Real Estate",
    "Commercial Real Estate",
    "Property Development",
    "Commercial Leasing Shoals",
  ],
  openGraph: {
    title: "Griffin Brothers Properties | Commercial Real Estate Ownership & Development",
    description:
      "Family-owned commercial real estate ownership and development company rooted in the Shoals, Alabama. We own it. We build it. We make it work.",
    type: "website",
    locale: "en_US",
    siteName: "Griffin Brothers Properties",
  },
};

export const viewport: Viewport = {
  themeColor: "#0B1117",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${oswald.variable} ${dmSerifDisplay.variable} ${manrope.variable} ${lora.variable}`}
    >
      <body className="bg-[#0B1117] text-white selection:bg-[#B18A3A] selection:text-[#0B1117]">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}

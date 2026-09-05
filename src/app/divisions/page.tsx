import Header from "@/components/layout/Header";
import Link from "next/link";

export default function DivisionsPage() {
  return (
    <main className="min-h-screen bg-[#0B1117] text-white flex flex-col justify-between">
      <Header />
      <div className="container-custom flex-1 flex flex-col items-center justify-center pt-32 pb-16 text-center">
        <span className="text-[12px] font-bold tracking-[0.2em] text-[#B18A3A] uppercase mb-4">
          Griffin Brothers Properties
        </span>
        <h1 className="font-[var(--font-condensed)] font-extrabold uppercase text-5xl md:text-7xl mb-6">
          Divisions
        </h1>
        <p className="font-[var(--font-editorial)] text-xl text-[#F3EFE6]/80 max-w-lg mb-8">
          Detailed division portfolios coming soon.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-8 py-3.5 border border-[#B18A3A] text-sm font-semibold tracking-widest uppercase hover:bg-[#B18A3A] hover:text-[#111820] transition-colors"
        >
          Return to Home
        </Link>
      </div>
    </main>
  );
}

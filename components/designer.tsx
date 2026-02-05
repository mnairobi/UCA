"use client";

import { Copyright } from "lucide-react";

const Designer = () => {
  return (
    <div className="bg-primary text-white text-sm md:text-base flex items-center justify-center gap-3 py-2 px-4">
      <Copyright size={15} className="shrink-0" />
      <p className="whitespace-nowrap">2026 UCA</p>

      <p className="text-xs text-white/90">
        Developer:{" "}
        <a
          className="text-gray-200 hover:text-white underline underline-offset-4 transition"
          href="https://portfolio-klaus.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Klaus
        </a>
      </p>
    </div>
  );
};

export default Designer;
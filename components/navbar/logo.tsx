"use client";

import Image from "next/image";
import Link from "next/link";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600"], // normal/medium/semibold
});

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2 sm:gap-3 min-w-0">
      <Image
        src="/ucaO.png"
        width={800}
        height={800}
        alt="School Logo"
        className="h-12 w-12 p-1 sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-20 lg:w-20 shrink-0"
        priority
      />

      <div className={`${montserrat.className} flex flex-col min-w-0 leading-tight`}>
        {/* Party name */}
        <p className="font-semibold text-[12px] sm:text-sm md:text-base lg:text-lg text-black whitespace-normal break-words">
          UNITED COMRADES ALLIANCE
        </p>

        {/* Slogan (same font, smaller + less bold) */}
        <p className="font-normal text-[11px] sm:text-xs md:text-sm text-gray-700 whitespace-normal break-words">
          One MUT, One Voice
        </p>
      </div>
    </Link>
  );
};

export default Logo;
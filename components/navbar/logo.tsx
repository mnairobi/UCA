"use client";

import { Playwrite_IN } from "next/font/google"

import Image from "next/image";
import Link from "next/link";


const font = Playwrite_IN({
    });

const Logo = () => {
  return (
    <div className="flex items-center gap-3">
        {/* logo */}
        <div className="">
            <Link href = "/">
                <Image 
                    src = "/uca.png"
                    width={800}
                    height={800}
                    alt="school Logo"
                    className="h-14 w-14 p-1 md:h-16  md:w-16 lg:h-24 lg:w-24"
                />
            </Link>
            
        </div>
        {/* flag */}
        {/* <div>
            <div className="flex flex-col items-center">
                <div className="w-1 h-3 lg:h-4 bg-black"></div>
                <div className="w-1 h-1 lg:h-2 bg-white"></div>
                <div className="w-1 h-3 lg:h-4 bg-red-700"></div>
                <div className="w-1 h-1 lg:h-2 bg-white"></div>
                <div className="w-1 h-3 lg:h-4 bg-green-600"></div>
            </div>
        </div> */}
        {/* lg screens */}
        <div className="hidden lg:flex">
            <p>#mutdecides2026</p>
        </div>

        {/* <=sm screens */}
        <div className="lg:hidden">
            <p className = {`${font.className} antialiased text-sm`}>#mut<br />decides2025</p>
        </div>
    </div>
  )
}

export default Logo
"use client";

import { useState, useCallback } from "react";
import { AlignJustify } from "lucide-react";
import Image from "next/image";

import { Playwrite_IN } from "next/font/google"
import { menuItems } from "./menu";
import Link from "next/link";



const font = Playwrite_IN({
    });

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = useCallback(() => setIsOpen((state) => !state), []);
  const closeSidebar = useCallback(() => setIsOpen(false), []);

  return (
    <div>
      {/* toggle icon */}
      <div  className="p-2 bg-primary text-white rounded-md lg:hidden">
            <AlignJustify size = {25} onClick={toggleSidebar} />
      </div>
      
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closeSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-56 bg-white shadow-lg transform z-50 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* content */}
        <div className="">
          <div className="flex flex-col items-center justify-center py-3">
            <Image 
              src = "/partylogo.jpeg"
              width={500}
              height={500}
              alt = "partylogo"
              className="h-32 w-32"
            />
            <p className = {`${font.className} text-center`}>Vote Us Vote the Change you deserve.</p>
          </div>
          
          {/* menuItems */}
          <div className="space-y-8">
              <div>
                  {menuItems.map((item, index) => (
                    <div key = {index} className="flex">
                      <div onClick={closeSidebar} className="flex items-center gap-2 p-2 py-3">
                        <p className="text-secondary">{item.icon}</p>
                        <Link href = {item.link}>{item.label}</Link>
                      </div>
                        
                    </div>
                  ))}
              </div>
                {/* donate button
              <div className="flex justify-center">
                <Donate />
              </div> */}
              <p className="fixed bottom-0 px-4 text-sm">Site developed by: <Link className="hover:text-[whitesmoke] transition text-blue-600" href = "https://www.linkedin.com/in/david-waweru-9040b7241/">David, </Link><Link className="hover:text-[whitesmoke] transition text-blue-600" href = "https://www.linkedin.com/in/nicholus-kiriinya-nkonge-data-scientist/">Nicholas and</Link> <Link className="hover:text-[whitesmoke] transition text-blue-600" href = "https://www.linkedin.com/in/kevin-njuguna-815098267/">Kevin</Link> </p>

          </div>
          
        </div>

        
      </div>
    </div>
  );
}
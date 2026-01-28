"use client";

import { Copyright } from "lucide-react";
import Link from "next/link";

const Designer = () => {
  return (
    <div className="bg-primary text-white text-sm md:text-base flex gap-3 items-center justify-center">
        <Copyright size={15} />
        <p>2025 Ronny Ian</p>
        <p className="text-xs">Site developed by: <Link className="hover:text-[whitesmoke] transition text-gray-400" href = "https://www.linkedin.com/in/david-waweru-9040b7241/">David, </Link><Link className="hover:text-[whitesmoke] transition text-gray-400" href = "https://www.linkedin.com/in/nicholus-kiriinya-nkonge-data-scientist/">Nicholas and</Link> <Link className="hover:text-[whitesmoke] transition text-gray-400" href = "https://www.linkedin.com/in/kevin-njuguna-815098267/">Kevin</Link> </p>
    </div>
  )
}

export default Designer
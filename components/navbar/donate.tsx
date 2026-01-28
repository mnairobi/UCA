"use client";

import Link from "next/link";
import { HandHelping } from 'lucide-react';


const Donate = () => {
  return (
    <div className="px-2">
        <button className="flex items-center gap-3 bg-primary text-gray-100 p-2 lg:p-3 rounded-xl lg:rounded-2xl">
            <HandHelping />
            <Link href = "/donate">Donate</Link>
        </button>
    </div>
  )
}

export default Donate
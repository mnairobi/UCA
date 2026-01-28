"use client"

import { ClipboardCheck, House, Telescope, UsersRound } from "lucide-react"
import Link from "next/link"

export const menuItems = [
    {
        label: "Home",
        link: "/",
        icon: <House />
    },
    {
        label: "Vision",
        link: "/#vision",
        icon: <Telescope />
    },
    {
        label: "Agenda",
        link: "/#agenda",
        icon: <ClipboardCheck />
    },
    {
        label: "Delegates",
        link: "/delegates",
        icon: <UsersRound />
    },
   
]

const Menu = () => {
    
  return (
    <div className="hidden lg:flex">
        <div className="flex items-center space-x-7">
            {menuItems.map((item, index) => (
                <div key = {index} className="flex items-center relative group">
                    <Link href = {item.link}>{item.label}</Link>
                    <span
                        className={`absolute left-0 bottom-0 w-0 h-[3px] rounded-md bg-primary transition-all duration-300 
                            group-hover:w-full`}
                    ></span>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Menu
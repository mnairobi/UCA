"use client";

import Link from "next/link"
import Container from "../Container"
import Logo from "./logo"
import Menu from "./menu"
import Sidebar from "./sidebar"
import Image from "next/image"

const Navbar = () => {
  return (
        <Container>
            <div className="flex items-center justify-between z-40">
                <Logo />
                <Menu />
                <div className="hidden lg:flex">
                  {/* <Donate /> */}
                  {/* logo */}
                  <div className="">
                      <Link href = "/">
                          <Image 
                              src = "/partylogo.jpeg"
                              width={300}
                              height={300}
                              alt="Party Logo"
                              className="rounded-2xl h-16 md:h-20 lg:h-24 w-16 md:w-20 lg:w-24"
                          />
                      </Link>
                      
                  </div>
                </div>
                <div className="lg:hidden">
                  <Sidebar />
                </div>
            </div>
        </Container>
    
  )
}

export default Navbar
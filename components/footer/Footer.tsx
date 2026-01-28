"use client";

import Image from "next/image";
import MainContainer from "../MainContainer";
import Link from "next/link";

const Footer = () => {
  return (
    <MainContainer>
      <div className="text-primary flex md:justify-center pb-3">
        <div className="pb-4">
          <Image
            src="/partylogo.jpeg"
            width={500}
            height={500}
            alt="logo"
            className="h-28 w-28 mx-2 rounded-b-md"
          />
        </div>
        <div className="flex flex-col items-center">
          <p className="text-secondary text-center p-2 text-lg">Important links</p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 mx-3">
            <Link href="/">Home</Link>
            <Link href="/#vision">About Us</Link>
            <Link href="#agenda">Our Agenda</Link>
            <Link href="/delegates">Delegates</Link>
          </div>
        </div>
      </div>
    </MainContainer>
  );
};

export default Footer;

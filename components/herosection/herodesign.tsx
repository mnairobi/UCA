"use client";

import Image from "next/image";
import { Playwrite_IN } from "next/font/google"
import CountdownTimer from "./countdown";

const font = Playwrite_IN({
});

const Gang = () => {
  return (
    <div>
        <div className="grid lg:grid-cols-12 gap-3 my-4">
          <div className="col-span-6 border-2 h-auto">
            <Image
              src="/thegang.jpeg"
              width={600}
              height={600}
              alt="The gang"
              className="w-full h-full object-contain rounded-lg"
            />
          </div>

          <div className="col-span-6 bg-transparent flex flex-col gap-1">
            {/* <CountdownTimer targetDate="2025-02-21 08:00:00" /> */}
            <CountdownTimer targetDate="2026-02-20T08:00:00+03:00" />
              <div className="flex items-center justify-center flex-col">
                  <Image 
                   height={500}
                   width={500}
                   src = "/vote.webp"
                   alt = "vote"
                   className="h-[22rem] w-[22rem] 2xl:h-[27rem] 2xl:w-[27rem]"
                  />

                  <h3 className={`${font.className} text-center text-xl lg:text-2xl`}>Vote CCP vote the change you deserve.</h3>
              </div>
          </div>
        </div>

    </div>
  )
}

export default Gang
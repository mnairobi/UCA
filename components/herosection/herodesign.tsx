// "use client";

// import Image from "next/image";
// import { Playwrite_IN } from "next/font/google"
// import CountdownTimer from "./countdown";

// const font = Playwrite_IN({
// });

// const Gang = () => {
//   return (
//     <div>
//         <div className="grid lg:grid-cols-12 gap-3 my-4">
//           <div className="col-span-6 border-2 h-auto">
//             <Image
//               src="/thegang.jpeg"
//               width={600}
//               height={600}
//               alt="The gang"
//               className="w-full h-full object-contain rounded-lg"
//             />
//           </div>

//           <div className="col-span-6 bg-transparent flex flex-col gap-1">
//             <CountdownTimer targetDate="2026-02-20T08:00:00+03:00" />
//               <div className="flex items-center justify-center flex-col">
//                   <Image 
//                    height={500}
//                    width={500}
//                    src = "/vote.webp"
//                    alt = "vote"
//                    className="h-[22rem] w-[22rem] 2xl:h-[27rem] 2xl:w-[27rem]"
//                   />

//                   <h3 className={`${font.className} text-center text-xl lg:text-2xl`}>Vote CCP vote the change you deserve.</h3>
//               </div>
//           </div>
//         </div>

//     </div>
//   )
// }

// export default Gang

import Image from "next/image";
import Link from "next/link";
import { Playwrite_IN } from "next/font/google";
import CountdownTimer from "./countdown";
import { Button } from "@/components/ui/button";

const font = Playwrite_IN({
  // if needed later: subsets: ["latin"]
});

const Gang = () => {
  return (
    <div className="grid items-center gap-8 lg:grid-cols-12">
      {/* LEFT: Message + countdown + CTAs */}
      <div className="lg:col-span-6 flex flex-col gap-5">
        {/* Badge */}
        <div className="w-fit rounded-full border border-primary/20 bg-white px-3 py-1 text-sm text-primary">
          Campaign 2026 • Murang’a University
        </div>

        {/* Headline */}
        <div className="space-y-2">
          <h1 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl lg:text-5xl">
            A better campus starts with{" "}
            <span className="text-primary">your vote</span>.
          </h1>

          <p className="text-base text-gray-700 sm:text-lg">
            Transparent leadership, student-first services, and a team that shows up.
            Meet our delegates and see what we’re changing this year.
          </p>
        </div>

        {/* Countdown card */}
        <div className="rounded-2xl border border-primary/15 bg-primary p-3 sm:p-4">
          <div className="flex flex-col gap-2">
            <p className="text-sm text-white/90">
              Election Day: <span className="font-semibold">20 Feb 2026 • 8:00 AM (Nairobi)</span>
            </p>
            <CountdownTimer targetDate="2026-02-20T08:00:00+03:00" />
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button asChild>
            <Link href="/delegates">Meet the Delegates</Link>
          </Button>

          <Button variant="outline" asChild>
            <Link href="/#agenda">Read Our Agenda</Link>
          </Button>
        </div>

        {/* Quick points (trust builders) */}
        <div className="grid gap-2 sm:grid-cols-2 text-sm text-gray-700">
          <p className="rounded-lg bg-white/70 border p-3">
            <span className="font-semibold text-primary">Accountability:</span> clear progress updates.
          </p>
          <p className="rounded-lg bg-white/70 border p-3">
            <span className="font-semibold text-primary">Service:</span> student issues, handled fast.
          </p>
          <p className="rounded-lg bg-white/70 border p-3">
            <span className="font-semibold text-primary">Inclusion:</span> every school represented.
          </p>
          <p className="rounded-lg bg-white/70 border p-3">
            <span className="font-semibold text-primary">Results:</span> practical solutions, not noise.
          </p>
        </div>

        {/* Slogan */}
        <h3 className={`${font.className} text-center text-lg text-primary sm:text-left sm:text-xl`}>
          Vote for the change you deserve.
        </h3>
      </div>

      {/* RIGHT: Team photo */}
      <div className="lg:col-span-6">
        <div className="relative overflow-hidden rounded-2xl border border-primary/15 bg-white shadow-sm">
          <Image
            src="/thegang.jpeg"
            width={1200}
            height={900}
            alt="Campaign team"
            priority
            className="h-auto w-full object-cover"
          />

          {/* overlay label */}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-4">
            <p className="text-white text-sm sm:text-base">
              The team behind the campaign — delegates, volunteers, and organizers.
            </p>
          </div>

          {/* Optional: small vote badge (instead of huge vote.webp) */}
          <div className="absolute right-3 top-3 rounded-xl bg-white/90 p-2 shadow">
            <Image
              height={70}
              width={70}
              src="/vote.webp"
              alt="Vote"
              className="h-14 w-14"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gang;
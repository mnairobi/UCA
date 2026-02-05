import Image from "next/image";
import Link from "next/link";
import { Playwrite_IN } from "next/font/google";
import CountdownTimer from "./countdown";
import { Button } from "@/components/ui/button";

const font = Playwrite_IN({
  // subsets: ["latin"], // add if your Next/font setup requires it
});

const Gang = () => {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-10 items-center">
      {/* RIGHT (on mobile first): Team photo */}
      <div className="lg:col-span-6 min-w-0">
        <div className="relative overflow-hidden rounded-2xl border border-primary/15 bg-white shadow-sm">
          {/* Keep image height reasonable on small screens */}
          {/* <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-full">
            <Image
              src="/umoja.jpeg"
              alt="Campaign team"
              priority
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
              className="object-cover"
            />
          </div> */}

          <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3]">
  <Image
    src="/umoja.jpeg"
    alt="Campaign team"
    priority
    fill
    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
    className="object-cover"
  />
</div>

          {/* overlay label */}
          {/* <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-3 sm:p-4">
            <p className="text-white text-xs sm:text-base">
              The team behind the campaign — delegates, volunteers, and organizers.
            </p>
          </div> */}

          {/* vote badge (smaller on mobile) */}
          {/* <div className="absolute right-2 top-2 sm:right-3 sm:top-3 rounded-xl bg-white/90 p-2 shadow">
            <Image
              height={56}
              width={56}
              src="/vote.webp"
              alt="Vote"
              className="h-10 w-10 sm:h-14 sm:w-14"
            />
          </div> */}
        </div>
      </div>

      {/* LEFT: Message + countdown + CTAs */}
      <div className="lg:col-span-6 flex flex-col gap-4 sm:gap-5 min-w-0">
        {/* Badge */}
        <div className="w-fit rounded-full border border-primary/20 bg-white px-3 py-1 text-xs sm:text-sm text-primary">
          Campaigns 2026 • Murang’a University
        </div>

        {/* Headline */}
        <div className="space-y-2">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-black">
            A better campus starts with{" "}
            <span className="text-primary">your vote</span>.
          </h1>

          <p className="text-sm sm:text-lg text-gray-700">
            Transparent leadership, student-first services, and a team that shows up.
      
          </p>
        </div>

        {/* Countdown card */}
        <div className="rounded-2xl border border-primary/15 bg-primary p-3 sm:p-4 overflow-hidden">
          <div className="flex flex-col gap-2">
            <p className="text-xs sm:text-sm text-white/90">
              Election Day:{" "}
              <span className="font-semibold">
                20 Feb 2026 • 8:00 AM (Nairobi)
              </span>
            </p>

            {/* If your CountdownTimer layout is wide, this helps prevent overflow */}
            <div className="max-w-full overflow-x-auto">
              <CountdownTimer targetDate="2026-02-20T08:00:00+03:00" />
            </div>
          </div>
        </div>

       <div className="flex flex-col sm:flex-row gap-3">
  <Button asChild className="w-full sm:w-auto">
    <Link href="/delegates">Meet the Delegates</Link>
  </Button>
</div>

      

  
      </div>
    </div>
  );
};

export default Gang;
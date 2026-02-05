"use client";

import { motion } from "framer-motion";
import MainContainer from "../MainContainer";
import { manifestoItems } from "./manifesto-items";



const Manifesto = () => {
  return (
    <section id="manifesto" className="py-10 sm:py-14">
      <MainContainer>
        <div className="px-4 sm:px-6">
          <h2 className="text-center text-primary text-xl sm:text-2xl lg:text-3xl font-semibold mb-6 lg:mb-10">
            Our Manifesto
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            {manifestoItems.map((item, index) => (
              <motion.div
                key={index}
                className="rounded-2xl border border-primary/15 bg-white p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow"
                initial={{ y: 24, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  type: "spring",
                  stiffness: 110,
                  damping: 22,
                  delay: index * 0.06,
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center rounded-xl bg-primary text-white w-12 h-12 shrink-0">
                    <item.icon size={22} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-black font-semibold text-base sm:text-lg leading-snug">
                      {item.title}
                    </p>
                    {/* <p className="mt-2 text-sm sm:text-[15px] text-gray-700 leading-relaxed">
                      {item.description}
                    </p> */}

                    <p className="mt-2 text-sm sm:text-[15px] text-gray-700 leading-relaxed whitespace-pre-line">
  {item.description}
</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </MainContainer>
    </section>
  );
};

export default Manifesto;
"use client";

import { motion } from "framer-motion";
import { visionItems } from "./visionMission";

const VisionDesign = () => {
  return (
    <section id="vision">
      <div className="p-5">
        <h2 className="text-center text-primary text-lg md:text-2xl lg:text-3xl mb-3 lg:mb-7 lg:m-7">
          About Us
        </h2>
        <div className="grid grid-cols-1 gap-4 lg:gap-8 md:grid-cols-3">
          {visionItems.map((agenda, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true, amount: 0.2 }} 
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.2, 
              }}
              className="bg-secondary rounded-lg flex flex-col items-center justify-center"
            >
              <div className="flex flex-col items-center justify-center my-4 rounded-full text-white bg-primary w-14 h-14 lg:w-20 lg:h-20">
                <agenda.icon size={35} />
              </div>
              <p className="text-center text-lg md:text-xl lg:text-2xl mb-2 text-white">
                {agenda.label}
              </p>
              <p className="mt-3 p-4 text-center text-white">
                {agenda.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionDesign;

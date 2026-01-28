"use client";

import { motion } from "framer-motion";
import MainContainer from "../MainContainer";
import { agendaItems } from "./agendas";

const Agenda = () => {
  return (
    <MainContainer>
      <section id="agenda">
        <div className="p-5">
          <h2 className="text-center text-primary text-lg md:text-2xl lg:text-3xl mb-3 lg:mb-7 lg:m-7">
            Our Agenda
          </h2>
          <div className="grid grid-cols-1 gap-4 lg:gap-8 lg:grid-cols-2">
            {agendaItems.map((agenda, index) => (
              <motion.div
                key={index}
                className="bg-green-300 rounded-lg flex flex-col items-center justify-center"
                initial={{ y: 50, opacity: 0 }}  
                whileInView={{ y: 0, opacity: 1 }} 
                viewport={{ once: true, amount: 0.2 }} 
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 25,
                  delay: index * 0.1,  
                }}
              >
                <div className="flex flex-col items-center justify-center my-4 rounded-full text-white bg-secondary w-14 h-14 lg:w-20 lg:h-20">
                  <agenda.icon size={35} />
                </div>
                <p className="text-center text-lg md:text-xl lg:text-2xl mb-2">{agenda.agenda}</p>
                <p className="mt-3 p-4 text-center">{agenda.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </MainContainer>
  );
};

export default Agenda;

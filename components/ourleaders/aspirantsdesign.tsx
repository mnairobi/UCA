"use client";

import { motion } from "framer-motion";
import MainContainer from "../MainContainer";
import Image from "next/image";

const AspirantsDesign = () => {
  const leaderItems = [
    {
      name: "Hon Billy",
      post: "Party leader",
      partyPost: "Chairman",
      image: "/aspirants/pl.jpeg",
      message: "Empowering voices, driving change and building a better MUT together."
    },
    {
      name: "Moha",
      post: "Deputy party leader",
      partyPost: "Deputy",
      image: "/aspirants/dpl.jpeg",
      message: "Together, we can bring change that benefits every student, every day!"
    },
    {
      name: "FAYZAL KE",
      post: "Party Treasurer",
      partyPost: "Treasurer",
      image: "/aspirants/tresurer.jpeg",
      message: "Transparency, Accountability, and Growth!."
    },
    {
      name: "Olwande",
      post: "Chief Campaigner",
      partyPost: "Campaigner",
      image: "/aspirants/cc.jpeg",
      message: "This is more than just a campaign—it is a movement!"
    },
    {
      name: "Yussuf",
      post: "Presidential Aspirant",
      partyPost: "President",
      image: "/aspirants/president.jpeg",
      message: "I stand before you not just as a candidate, but as a fellow student who believes in the power of unity, progress, and real change."
    },
    {
      name: "Yvonne",
      post: "Running mate",
      partyPost: "Vice president",
      image: "/aspirants/vp.jpeg",
      message: "Committed to Service, Dedicated to You!"
    },
    {
      name: "Desmond Soi",
      post: "Seretary General",
      partyPost: "Secretary",
      image: "/aspirants/secgen.jpeg",
      message: "Your Voice, Our Commitment!"
    },
    {
      name: "Emmanuel kobia",
      post: "Finance Minister",
      partyPost: "Finance",
      image: "/aspirants/finance.jpeg",
      message: "Financial Integrity for a Better Tomorrow"
    },
    {
      name: "Prisca Mbodze",
      post: "Academics Minister",
      partyPost: "Academics",
      image: "/aspirants/academics.jpeg",
      message: "Empowering Minds, Elevating Standards!"
    },
    {
      name: "Silvia Momanyi",
      post: "Accomodation Minister",
      partyPost: "Accomodation",
      image: "/aspirants/accomodation.jpeg",
      message: "Better Housing, Better Campus Life"
    },
    {
      name: "Davis Musau",
      post: "Sports Minister",
      partyPost: "Sports and Entertainment",
      image: "/aspirants/sports.jpeg",
      message: "Stronger Together, Champions Forever."
    },
  ];

  return (
    <MainContainer>
      {/* desktop view */}
      <div className="relative hidden lg:flex flex-col items-center justify-center py-12 z-10">
        <h2 className="text-3xl font-bold text-primary mb-8">Our Leaders</h2>

        <div className="absolute top-24 rounded-md bottom-16 left-1/2 w-1 bg-primary transform -translate-x-1/2 z-0"></div>

        {/* Aspirants List */}
        <div className="relative w-full max-w-4xl flex flex-col gap-4 z-10">
          {leaderItems.map((aspirant, index) => (
            <div
              key={index}
              className={`relative flex items-center w-full ${index % 2 === 0 ? "justify-start" : "justify-end"} z-10`}
            >
              {/* Connector Circle */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-secondary rounded-full z-20"></div>

              {/* Aspirant Card */}
              <motion.div
                className={`flex items-center max-w-md p-4 bg-gray-100 shadow-md rounded-lg ${
                  index % 2 === 0 ? "-ml-[2px]" : "-mr-[2px] flex-row-reverse"
                } z-10`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }} 
                viewport={{ once: true, amount: 0.2 }} 
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: index * 0.2, 
                }}
              >
                {/* Image */}
                <Image
                  src={aspirant.image}
                  alt={aspirant.name}
                  width={500}
                  height={500}
                  className="w-64 lg:w-[18rem] h-64 lg:h-[18rem] rounded-2xl border-4 border-primary object-cover"
                />
                {/* Info */}
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-gray-800">{aspirant.name}</h3>
                  <p className="text-sm text-gray-500">{aspirant.post} - {aspirant.partyPost}</p>
                  <p className="text-gray-700 mt-2">{aspirant.message}</p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Medium & Small screens View */}
<div className="lg:hidden">
  <h2 className="text-center text-primary text-xl md:text-2xl lg:text-3xl mb-2 lg:mb-7 lg:m-7">
    Our Leaders
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
    {leaderItems.map((aspirant, index) => (
      <motion.div
        key={index}
        className="flex flex-col items-center bg-gray-100 p-4 shadow-md rounded-lg"
        initial={{ opacity: 0, y: 50 }} // Only from below
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
          delay: index * 0.1, // Reduced delay for smoother appearance
        }}
      >
        <Image
          src={aspirant.image}
          alt={aspirant.name}
          width={500}
          height={500}
          className="w-48 h-48 rounded-xl border-4 border-primary object-cover"
        />
        <h3 className="text-lg font-bold text-gray-800 mt-4">{aspirant.name}</h3>
        <p className="text-sm text-gray-500">
          {aspirant.post} - {aspirant.partyPost}
        </p>
        <p className="text-gray-700 mt-2 text-center">{aspirant.message}</p>
      </motion.div>
    ))}
  </div>
</div>

    </MainContainer>
  );
};

export default AspirantsDesign;

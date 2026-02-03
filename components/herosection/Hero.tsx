// "use client";

// import MainContainer from "../MainContainer";
// import Gang from "./herodesign";


// const HeroSection = () => {
//   return (
//     <MainContainer>
//       <div className="">
//         <Gang />
//       </div>
//     </MainContainer>
//   )
// }

// export default HeroSection
import MainContainer from "../MainContainer";
import Gang from "./herodesign";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* subtle background */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/10 via-white to-white" />

      <MainContainer>
        <div className="relative py-6 sm:py-10 lg:py-14">
          <Gang />
        </div>
      </MainContainer>
    </section>
  );
};

export default HeroSection;
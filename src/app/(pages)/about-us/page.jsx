import React from "react";
import AboutHero from "../../(components)/About/HeroSection";
import AboutDigital from "@/app/(components)/About/AboutDigital";
import ChooseUs from "@/app/(components)/About/ChooseUs";
import WorkProcess from "@/app/(components)/About/WorkProcess";
import Testimonials from "@/app/(components)/About/Testimonials";
import ProfessionalTeam from "@/app/(components)/About/ProfessionalTeam";

const About = () => {
  return (
    <>
      <AboutHero />
      <AboutDigital />
      <WorkProcess />
      <ChooseUs />
      <Testimonials />
      <ProfessionalTeam />
    </>
  );
};

export default About;

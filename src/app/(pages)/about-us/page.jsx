"use client";
import React, { useEffect, useState } from "react";
import AboutHero from "../../(components)/About/HeroSection";
import AboutDigital from "@/app/(components)/About/AboutDigital";
import ChooseUs from "@/app/(components)/About/ChooseUs";
import WorkProcess from "@/app/(components)/About/WorkProcess";
import Testimonials from "@/app/(components)/About/Testimonials";
import ProfessionalTeam from "@/app/(components)/About/ProfessionalTeam";
import { getAboutUs } from "@/lib/queries/getAboutUs";

const About = () => {
  const [digitalAgency, setDigitalAgency] = useState({});
  const [workingProcess, setWorkingProcess] = useState({});
  const [chooseUs, setChooseUs] = useState({});
  const [testimonials, setTestimonials] = useState({});

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const response = await getAboutUs();
      if (response) {
        setIsLoading(false);
        setDigitalAgency(response?.data?.digitalAgency);
        setWorkingProcess(response?.data?.workingProcess);
        setChooseUs(response?.data?.chooseUs);
        setTestimonials(response?.data?.testimonials);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-[--primary] rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <>
      <AboutHero />
      <AboutDigital data={digitalAgency} />
      <WorkProcess data={workingProcess} />
      <ChooseUs data={chooseUs} />
      <Testimonials data={testimonials} />
      {/* <ProfessionalTeam /> */}
    </>
  );
};

export default About;

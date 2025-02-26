"use client";
import ServicesHero from "@/app/(components)/About/HeroSection";
import WorkProcess from "@/app/(components)/About/WorkProcess";
import ServicesSection from "@/app/(components)/Services/ServicesSection";
import ServiceTestimonial from "@/app/(components)/Services/ServiceTestimonial";
import { getAboutUs } from "@/lib/queries/getAboutUs";
import React, { useEffect, useState } from "react";

const Services = () => {
  const [workingProcess, setWorkingProcess] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const response = await getAboutUs();
      if (response) {
        setIsLoading(false);
        setWorkingProcess(response?.data?.workingProcess);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-[#F26B01] rounded-full animate-spin"></div>
      </div>
    );
  }
  return (
    <>
      <ServicesHero />
      <ServicesSection />
      <WorkProcess data={workingProcess} />
      <ServiceTestimonial />
    </>
  );
};

export default Services;

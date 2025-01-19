import ServicesHero from "@/app/(components)/About/HeroSection";
import WorkProcess from "@/app/(components)/About/WorkProcess";
import ServicesSection from "@/app/(components)/Services/ServicesSection";
import ServiceTestimonial from "@/app/(components)/Services/ServiceTestimonial";
import React from "react";

const Services = () => {
  return (
    <>
      <ServicesHero />
      <ServicesSection />
      <WorkProcess />
      <ServiceTestimonial />
    </>
  );
};

export default Services;

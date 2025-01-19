import React from "react";
import Hero from "@/app/(components)/HeroSection";
import AboutUs from "@/app/(components)/About";
import Service from "@/app/(components)/Service";
import DigitalAgency from "@/app/(components)/DigitalAgency";
import CaseStudies from "@/app/(components)/CaseStudies";
import OffService from "@/app/(components)/OffService";
import ExpertTeam from "@/app/(components)/ExpertTeam";
import BlogSection from "@/app/(components)/Blog";
import TrustStrategySlider from "@/app/(components)/TrustStrategySlider";
import MarketingSlider from "@/app/(components)/MarketingSlider";
import ContactInfo from "@/app/(components)/ContactInfo";
const Landing = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <Service />
      <DigitalAgency />
      <CaseStudies />
      <OffService />
      <ExpertTeam />
      <BlogSection />
      <TrustStrategySlider />
      <MarketingSlider />
      <ContactInfo />
    </>
  );
};

export default Landing;

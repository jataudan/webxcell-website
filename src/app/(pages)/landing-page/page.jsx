"use client";
import React, { useEffect, useState } from "react";
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
import { getLandingData } from "@/lib/queries/getLandingPage";

const Landing = () => {
  const [about, setAbout] = useState({});
  const [service, setService] = useState({});
  const [digitalAgency, setDigitalAgency] = useState({});
  const [offService, setOffService] = useState({});
  const [trustedPartner, setTrustedPartner] = useState({});

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const response = await getLandingData();
      if (response) {
        setIsLoading(false);
        setAbout(response?.data?.about);
        setService(response?.data?.services);
        setDigitalAgency(response?.data?.digital);
        setOffService(response?.data?.offer);
        setTrustedPartner(response?.data?.strategicPartnersImages);
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
      <Hero />
      <AboutUs data={about} />
      <Service data={service} />
      <DigitalAgency data={digitalAgency} />
      <CaseStudies />
      <OffService data={offService} />
      <ExpertTeam />
      <BlogSection />
      <TrustStrategySlider data={trustedPartner} />
      <MarketingSlider />
      <ContactInfo />
    </>
  );
};

export default Landing;

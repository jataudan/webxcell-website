import React from "react";
import ContactUsMap from "@/app/(components)/ContactUs/ContactUsMap/ContactUsMap";
import ContactUsHero from "@/app/(components)/About/HeroSection";
import ContactUsForm from "@/app/(components)/ContactUs/ContactUsForm/ContactUsForm";

const ContactUs = () => {
  return (
    <>
      <ContactUsHero />
      <ContactUsForm />
      <ContactUsMap />
    </>
  );
};

export default ContactUs;

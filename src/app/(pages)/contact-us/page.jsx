"use client";

import React, { useEffect, useState } from "react";
import ContactUsMap from "@/app/(components)/ContactUs/ContactUsMap/ContactUsMap";
import ContactUsHero from "@/app/(components)/About/HeroSection";
import ContactUsForm from "@/app/(components)/ContactUs/ContactUsForm/ContactUsForm";
import { getContactUs } from "@/lib/queries/getContactUs";

const ContactUs = () => {
  const [contact, setContact] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getContactUs();
      if (response) {
        setIsLoading(false);
        setContact(response?.data);
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
      <ContactUsHero />
      <ContactUsForm contact={contact} />
      <ContactUsMap contact={contact?.contactCard} />
    </>
  );
};

export default ContactUs;

"use client";

import { getCookiePolicyData } from "@/lib/queries/getPoliciesSeo";
import React, { useEffect, useState } from "react";
import { StrapiImage } from "../../StrapiImage/StrapiImage";
import RichText from "@/lib/richText";

const CookiesPolicyComponent = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [cookiesData, setCookiesData] = useState({});

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const response = await getCookiePolicyData();
        if (response) {
          setIsLoading(false);
          setCookiesData(response?.data);
        }
      } catch (error) {
        console.log("Error : ", error);
      } finally {
        setIsLoading(false);
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
    <div className="container mx-auto min-h-screen py-10 px-5 md:px-0 mb-[150px] font-montserrat">
      <div className="flex flex-col md:flex-row gap-4 w-full h-[364px]">
        <div className="flex flex-col justify-center w-full md:w-1/2">
          <div className="leading-7">
            <h1 className="text-[--primary] inline mr-2">
              {cookiesData?.highlighted}
            </h1>
            <h1 className="inline">{cookiesData?.suffix}</h1>
          </div>
          <p className="mt-10 mb-10 text-[--blog-description]">
            {cookiesData?.description}
          </p>
        </div>
        <div className="flex flex-col justify-center w-full md:w-1/2">
          <StrapiImage
            src={cookiesData?.image500x500?.url}
            alt={cookiesData?.image500x500?.name}
            width={cookiesData?.image500x500?.width || 500}
            height={cookiesData?.image500x500?.width || 500}
            className="mx-auto"
          />
        </div>
      </div>
      <div className="mb-6">
        <RichText content={cookiesData?.content} />
      </div>
    </div>
  );
};

export default CookiesPolicyComponent;

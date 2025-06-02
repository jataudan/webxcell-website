"use client";

import { getTermsConditionData } from "@/lib/queries/getPoliciesSeo";
import React, { useEffect, useState } from "react";
import { StrapiImage } from "../../StrapiImage/StrapiImage";
import RichText from "@/lib/richText";

const TermsConditionComponent = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [termsConditionData, setTermsConditionData] = useState({});

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const response = await getTermsConditionData();
        if (response) {
          setIsLoading(false);
          setTermsConditionData(response?.data);
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
      <div className="flex flex-col md:flex-row gap-4 w-full md:h-[364px]">
        <div className="flex flex-col justify-center w-full md:w-1/2">
          <div className="leading-7 inline">
            <h1 className="inline mr-2">{termsConditionData?.prefix}</h1>
            <h1 className="text-[--primary] inline mr-2">
              {termsConditionData?.highlighted}
            </h1>
            <h1 className="inline">{termsConditionData?.suffix}</h1>
          </div>
          <p className="mt-10 mb-10 text-[--blog-description]">
            {termsConditionData?.description}
          </p>
        </div>
        <div className="flex flex-col justify-center w-full md:md:w-1/2 mb-[30px] md:mb-0 md:mt-24">
          <StrapiImage
            src={termsConditionData?.image500x500?.url}
            alt={termsConditionData?.image500x500?.name}
            width={450}
            height={400}
            className="w-full md:w-[initial] md:mx-auto"
          />
        </div>
      </div>
      <div className="mb-6">
        <RichText content={termsConditionData?.content} />
      </div>
    </div>
  );
};

export default TermsConditionComponent;

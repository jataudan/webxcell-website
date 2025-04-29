import Head from "next/head";
import React from "react";

const TermsConditions = () => {
  return (
    <>
      <Head>
        <title>Terms & Conditions – Coming Soon</title>
      </Head>
      <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Terms & Conditions
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-xl mb-6">
          We're currently working on our Terms & Conditions page.
          <br />
          This page will be available soon.
        </p>
      </div>
    </>
  );
};

export default TermsConditions;

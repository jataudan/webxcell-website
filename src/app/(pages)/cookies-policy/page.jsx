import React from "react";
import Head from "next/head";

const CookiesPolicy = () => {
  return (
    <>
      <Head>
        <title>Cookies Policy</title>
      </Head>
      <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Cookies Policy
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mb-6">
          Our Cookies Policy will be available here soon. We're working to
          ensure all legal and privacy details are transparent and clear for our
          users.
        </p>
      </div>
    </>
  );
};

export default CookiesPolicy;

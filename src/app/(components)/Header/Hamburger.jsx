"use client";

import { AppContext } from "@/context/appContext";
import Image from "next/image";
import React, { useContext } from "react";

const Hamburger = () => {
  const { isMobileMenuOpen, toggleMobileMenu } = useContext(AppContext);

  return (
    <button
      className="lg:hidden text-black focus:outline-none"
      onClick={toggleMobileMenu}
    >
      <Image
        src={
          isMobileMenuOpen ? "/assets/menu/close.png" : "/assets/menu/open.png"
        }
        alt="menu"
        width={isMobileMenuOpen ? 17 : 24}
        height={isMobileMenuOpen ? 17 : 24}
      />
    </button>
  );
};

export default Hamburger;

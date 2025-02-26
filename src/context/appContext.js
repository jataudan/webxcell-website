"use client";

import React, { useState, createContext } from "react";

const context = {};

export const AppContext = createContext(context);

export const AppContextProvider = (props) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <AppContext.Provider
      value={{
        setIsMobileMenuOpen,
        isMobileMenuOpen,
        toggleMobileMenu,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

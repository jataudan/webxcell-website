"use client";

import React, { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";
import Hamburger from "./Hamburger";
import NavLinks from "./NavLinks";
import { StrapiImage } from "../StrapiImage/StrapiImage";
import { getTopNavData } from "@/lib/queries/getTopNav";
import Link from "next/link";

export default function Header() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const response = await getTopNavData();
      if (response) {
        setIsLoading(false);
        setData(response?.data);
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

  const { topnav, mainTopNav } = data;

  return (
    <header className="bg-white font-montserrat fixed top-0 left-1/2 transform -translate-x-1/2 w-full max-w-[1350px] z-50 text-white shadow-lg rounded-bl-[20px] rounded-br-[20px]">
      {/* Top Bar */}
      <div className="bg-black rounded-bl-[20px] rounded-br-[20px]">
        <div className="max-w-[1350px] mx-auto flex items-center justify-between px-4 lg:px-16 py-2 gap-4 overflow-hidden">
          {/* Contact Information */}
          <div className="flex items-center gap-4 text-sm flex-nowrap">
            <div className="flex items-center gap-2">
              {topnav?.phoneLink?.image18x18 && (
                <StrapiImage
                  src={topnav?.phoneLink?.image18x18?.url}
                  alt="phoneLink image"
                  width={16}
                  height={16}
                />
              )}
              <a
                href={`tel:${topnav?.phoneLink.text}`}
                className="text-[10px] sm:text-sm md:text-[13px] whitespace-nowrap truncate"
              >
                {topnav?.phoneLink?.text}
              </a>
            </div>
            <div className="flex items-center gap-2">
              {topnav?.emailLink?.image17x17 && (
                <StrapiImage
                  src={topnav?.emailLink?.image17x17?.url}
                  alt="email image"
                  width={16}
                  height={16}
                />
              )}
              <a
                href={`mailto:${topnav?.emailLink?.text}`}
                className="text-[10px] sm:text-sm md:text-[13px] whitespace-nowrap truncate"
              >
                {topnav?.emailLink?.text}
              </a>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex items-center gap-2 sm:gap-3 text-sm flex-nowrap">
            {topnav?.socialLinks &&
              topnav?.socialLinks?.map((link) => {
                const iconName = link?.image18x18?.name?.split(".")[0];

                const iconClass = `icon-${iconName}`;

                return (
                  <a
                    key={link?.id}
                    href={link?.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`hover:text-[--primary] ${iconClass}`}
                  >
                    <StrapiImage
                      src={link?.image18x18?.url}
                      alt={link?.image18x18?.alternativeText || iconName}
                      width={link?.width || 16}
                      height={link?.height || 16}
                    />
                  </a>
                );
              })}
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-[#eff1fe] text-black rounded-bl-[20px] rounded-br-[20px]">
        <div className="max-w-[1350px] mx-auto flex items-center justify-between py-4 px-4 lg:px-16 rounded-bl-[20px] rounded-br-[20px]">
          {/* Logo */}
          {mainTopNav?.logoLink?.logo187x38 && (
            <Link href="/">
              <StrapiImage
                src={mainTopNav?.logoLink?.logo187x38[0]?.url}
                alt="webxcell"
                width={187}
                height={38}
              />
            </Link>
          )}

          {/* Hamburger Menu for Mobile */}
          <Hamburger />

          {/* Navigation Links */}
          <NavLinks navigationItems={mainTopNav?.navItems} />

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center gap-4 font-montserrat">
            <a
              href={mainTopNav?.cta?.href}
              className="text-sm bg-orange-gradient text-white px-6 py-2 rounded-lg shadow-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              {mainTopNav?.cta.text}
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        navigationItems={mainTopNav?.navItems}
        cta={mainTopNav?.cta}
      />
    </header>
  );
}

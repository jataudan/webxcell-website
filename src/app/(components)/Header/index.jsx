"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation"; // Use Next.js hook for current path
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const pathname = usePathname(); // Automatically gets the current path

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActive = (path) => pathname === path;

  return (
    <header className="bg-white fixed top-0 left-1/2 transform -translate-x-1/2 w-full max-w-[1350px] z-50 text-white shadow-lg rounded-bl-[20px] rounded-br-[20px]">
      {/* Top Bar */}
      <div className="bg-black rounded-bl-[20px] rounded-br-[20px]">
        <div className="max-w-[1350px] mx-auto flex items-center justify-between px-4 lg:px-16 py-2 gap-4 overflow-hidden">
          {/* Contact Information */}
          <div className="flex items-center gap-4 text-sm flex-nowrap">
            <div className="flex items-center gap-2">
              <Image
                src="/assets/header/phone.png"
                alt="phone"
                width={16}
                height={16}
              />
              <a
                href="tel:+448001957512"
                className="text-[10px] sm:text-sm md:text-base whitespace-nowrap truncate"
              >
                +44 800 195 7512
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/assets/header/message.png"
                alt="message"
                width={16}
                height={16}
              />
              <a
                href="mailto:team@webxcell.com"
                className="text-[10px] sm:text-sm md:text-base whitespace-nowrap truncate"
              >
                team@webxcell.com
              </a>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex items-center gap-2 sm:gap-3 text-sm flex-nowrap">
            <a href="#" className="hover:text-orange-500">
              <Image
                src="/assets/header/facebook.png"
                alt="FaceBook"
                width={7}
                height={12}
              />
            </a>
            <a href="#" className="hover:text-orange-500">
              <Image
                src="/assets/header/twitter.png"
                alt="Twitter"
                width={10}
                height={12}
              />
            </a>
            <a href="#" className="hover:text-orange-500">
              <Image
                src="/assets/header/linkedinIn.png"
                alt="LinkedIn"
                width={10}
                height={12}
              />
            </a>
            <a href="#" className="hover:text-orange-500">
              <Image
                src="/assets/header/youtube.png"
                alt="YouTube"
                width={12}
                height={12}
              />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-[#eff1fe] text-black rounded-bl-[20px] rounded-br-[20px]">
        <div className="max-w-[1350px] mx-auto flex items-center justify-between py-4 px-4 lg:px-16 rounded-bl-[20px] rounded-br-[20px]">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <Image
              src="/assets/header/logo.png"
              alt="webxcell"
              width={187}
              height={38}
            />
          </div>

          {/* Hamburger Menu for Mobile */}
          <button
            className="lg:hidden text-black focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <Image
              src={
                isMobileMenuOpen
                  ? "/assets/menu/close.png"
                  : "/assets/menu/open.png"
              }
              alt="menu"
              width={isMobileMenuOpen ? 17 : 24}
              height={isMobileMenuOpen ? 17 : 24}
            />
          </button>

          {/* Navigation Links */}
          <nav className="hidden lg:flex gap-8 font-medium">
            <Link
              href="/"
              className={`hover:text-orange-500 ${
                isActive("/") ? "text-orange-500" : ""
              }`}
            >
              Home
            </Link>
            <Link
              href="/about-us"
              className={`hover:text-orange-500 ${
                isActive("/about-us") ? "text-orange-500" : ""
              }`}
            >
              About Us
            </Link>
            <Link
              href="/services"
              className={`hover:text-orange-500 ${
                isActive("/services") ? "text-orange-500" : ""
              }`}
            >
              Services
            </Link>
            <Link
              href="/portfolio"
              className={`hover:text-orange-500 ${
                isActive("/portfolio") ? "text-orange-500" : ""
              }`}
            >
              Portfolio
            </Link>
            <Link
              href="/blog"
              className={`hover:text-orange-500 ${
                isActive("/blog") ? "text-orange-500" : ""
              }`}
            >
              Blog
            </Link>
            <Link
              href="/contact-us"
              className={`hover:text-orange-500 ${
                isActive("/contact-us") ? "text-orange-500" : ""
              }`}
            >
              Contact Us
            </Link>
            <div className="flex items-center">
              <Image
                src="/assets/header/search.png"
                alt="search"
                width={16}
                height={16}
              />
            </div>
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#"
              className="text-sm bg-gradient-to-r from-[#ff6700] to-[#00bfff] text-white px-6 py-2 rounded-lg shadow-lg"
            >
              WORK WITH US
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-[#eff1fe] text-black rounded-bl-[20px] rounded-br-[20px] absolute w-full top-[100%] left-0 z-50 shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col items-start p-6 space-y-4">
          <Link
            href="/"
            className={`hover:text-orange-500 ${
              isActive("/") ? "text-orange-500" : ""
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about-us"
            className={`hover:text-orange-500 ${
              isActive("/about-us") ? "text-orange-500" : ""
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            href="/services"
            className={`hover:text-orange-500 ${
              isActive("/services") ? "text-orange-500" : ""
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/portfolio"
            className={`hover:text-orange-500 ${
              isActive("/portfolio") ? "text-orange-500" : ""
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Portfolio
          </Link>
          <Link
            href="/blog"
            className={`hover:text-orange-500 ${
              isActive("/blog") ? "text-orange-500" : ""
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Blog
          </Link>
          <Link
            href="/contact-us"
            className={`hover:text-orange-500 ${
              isActive("/contact-us") ? "text-orange-500" : ""
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact Us
          </Link>
          <a
            href="#"
            className="mt-4 text-sm bg-gradient-to-r from-[#ff6700] to-[#00bfff] text-white px-6 py-2 rounded-lg shadow-lg"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            WORK WITH US
          </a>
        </nav>
      </div>
    </header>
  );
}

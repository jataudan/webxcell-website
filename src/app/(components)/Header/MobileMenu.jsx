"use client";

import { AppContext } from "@/context/appContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useContext } from "react";

const MobileMenu = ({ navigationItems, cta }) => {
  const { isMobileMenuOpen } = useContext(AppContext);
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  return (
    <div
      className={`lg:hidden bg-[#eff1fe] text-black rounded-bl-[20px] rounded-br-[20px] absolute w-full top-[100%] left-0 z-50 shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${
        isMobileMenuOpen ? "max-h-screen" : "max-h-0"
      }`}
    >
      <nav className="flex flex-col items-start p-6 space-y-4">
        {navigationItems.map((nav) => {
          if (!nav.href || !nav.text) {
            return null;
          }

          return (
            <Link
              key={nav.id}
              href={nav.href}
              className={`hover:text-orange-500 ${
                isActive(nav.href) ? "text-orange-500" : ""
              }`}
            >
              {nav.text}
            </Link>
          );
        })}
        <a
          href="#"
          className="mt-4 text-sm bg-gradient-to-r from-[#ff6700] to-[#00bfff] text-white px-6 py-2 rounded-lg shadow-lg"
        >
          {cta.text}
        </a>
      </nav>
    </div>
  );
};

export default MobileMenu;

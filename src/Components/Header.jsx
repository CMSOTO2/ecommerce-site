import React from "react";
import { ShoppingCartIcon } from "@heroicons/react/solid";
import { MenuIcon } from "@heroicons/react/solid";
import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hamMenuOpen, setHamMenuOpen] = useState(false);
  return (
    <div className="shadow-lg sticky top-0  bg-white z-50 w-full">
      <div className="flex justify-between items-center max-w-1440px pr-6 pl-2 py-4">
        <div className="flex justify-center max-h-15 min-h-5 object-cover overflow-hidden  ">
          <img
            className="object-contain overflow-hidden max-h-10 md:max-h-14"
            src="./images/currentFurnishLogo.png"
            alt="Current-Furnish-Logo"
          />
        </div>
        <nav className="hidden sm:flex gap-3 lg:gap-9 md:text-xl lg:text-3xl items-center h-10">
          <button onClick={() => setMenuOpen(!menuOpen)}>Categories</button>

          {menuOpen && (
            <div className=" absolute flex flex-col border-solid border-2 mt-52 w-20 md:w-[95px] lg:w-28">
              <ul>
                <li>Sofas</li>
                <li>Dining</li>
                <li>Lighting</li>
                <li>Outdoor</li>
                <li>Bedroom</li>
              </ul>
            </div>
          )}

          <ShoppingCartIcon className="lg:h-8 lg:w-8 sm:h-6 sm:w-6  cursor-pointer" />
        </nav>
        <MenuIcon
          onClick={() => setHamMenuOpen(!hamMenuOpen)}
          className="h-6 w-6 cursor-pointer visible sm:hidden z-50"
        />
        {hamMenuOpen && (
          <div className=" z-1 sm:hidden absolute flex flex-col items-center justify-evenly h-screen w-full top-0 bg-gray-500 bg-opacity-95">
            <ul className=" flex flex-col gap-24 text-center mr-8">
              <li>Sofas</li>
              <li>Dining</li>
              <li>Lighting</li>
              <li>Outdoor</li>
              <li>Bedroom</li>
              <li>Shopping Cart</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;

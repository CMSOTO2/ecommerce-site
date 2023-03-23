import React from "react";
import { ShoppingCartIcon } from "@heroicons/react/solid";
import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className=" sticky top-0 z-50 flex justify-between items-center max-w-1440px h-10 w-full">
      <div className="  flex justify-center items-center max-h-15 min-h-5 object-cover overflow-hidden  ">
        <img
          className=" object-contain overflow-hidden max-h-12 md:max-h-16 lg:max-h-20"
          src="./images/currentFurnishLogo.png"
          alt=""
        />
      </div>
      <nav className="flex gap-3 lg:gap-9 md:text-xl lg:text-2xl items-center h-10">
        <a onClick={() => setMenuOpen(!menuOpen)} href="">
          Categories
        </a>
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

        <ShoppingCartIcon className="h-6 w-6 cursor-pointer" />
      </nav>
    </div>
  );
}

export default Header;

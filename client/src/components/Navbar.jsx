import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "@assets/logo.svg";
import { GrSearch } from "react-icons/gr";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
const Navbar = () => {
  const [scrolled, setIsScrolled] = useState(false);
  const [toogleNav, setToogleNav] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setIsScrolled]);
  const handleToogleNav = () => {
    setToogleNav(!toogleNav);
  };
  return (
    <nav
      className={`h-[80px] md:h-max z-50 fixed w-full px-5 ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      <div className="max-w-[1200px] flex flex-wrap items-center justify-between mx-auto py-4">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="w-[50px]" />
        </Link>
        <button
          onClick={handleToogleNav}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg md:hidden text-2xl"
        >
          {toogleNav ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
        <div
          className={`w-full md:flex md:w-auto md:translate-y-0 md:transform transition-all duration-300 ease-in-out
    ${toogleNav ? "translate-y-0" : "-translate-y-[200%]"}
  `}
        >
          <button className="hidden md:block text-xl text-black mr-10  p-2.5 rounded-full transition-all duration-300 ease-in-out hover:bg-gray-200 hover:text-[1.4rem]">
            <GrSearch />
          </button>
          <ul className="font-medium flex flex-col p-10 gap-10 md:gap-0 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white items-center">
            <li>
              <Link
                onClick={handleToogleNav}
                to="/"
                className="relative inline-block group"
              >
                Home
                <span class="absolute inset-x-1/2 -bottom-2 w-0 h-[2px] bg-gray-700 origin-center group-hover:w-full transition-all duration-300 ease-in-out transform -translate-x-1/2"></span>
              </Link>
            </li>
            <li>
              <Link
                onClick={handleToogleNav}
                to="/hotel"
                className="relative inline-block group"
              >
                Hotel
                <span class="absolute inset-x-1/2 -bottom-2 w-0 h-[2px] bg-gray-700 origin-center group-hover:w-full transition-all duration-300 ease-in-out transform -translate-x-1/2"></span>
              </Link>
            </li>
            <li>
              <Link
                onClick={handleToogleNav}
                to="/room-type"
                className="relative inline-block group"
              >
                Room type
                <span class="absolute inset-x-1/2 -bottom-2 w-0 h-[2px] bg-gray-700 origin-center group-hover:w-full transition-all duration-300 ease-in-out transform -translate-x-1/2"></span>
              </Link>
            </li>
            <li className="md:pl-10">
              <Link
                onClick={handleToogleNav}
                className="py-1 md:border-b md:border-gray-700"
                to={"/login"}
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                onClick={handleToogleNav}
                to={"/register"}
                className="px-5 bg-blue-400 py-1 rounded-md text-white text-center hover:opacity-95 text-sm font-normal transition-all"
              >
                Register
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

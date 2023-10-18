import React from "react";
import logo from "@assets/logo.svg";
import { Link } from "react-router-dom";
import { HiArrowNarrowRight } from "react-icons/hi";
import { BiLogoFacebook, BiLogoLinkedin, BiLogoTwitter } from "react-icons/bi";
const Footer = () => {
  return (
    <footer className="bg-[#04002E] w-full h-full py-[50px] lg:py-[100px]">
      <div className="max-w-[1200px] mx-auto">
        <div className="gap-[50px] md:flex px-10 lg:px-0 w-full ">
          <div className="w-max">
            <img src={logo} alt="Logo" className="w-[50px]" />
          </div>
          <div className="w-full sm:flex flex-wrap gap-5 sm:justify-between mt-10 md:mt-0 items-start space-y-4 sm:space-y-0">
            <div className="w-max">
              <h2 className="text-[16px] leading-[28px] text-white">
                Room Type
              </h2>
              <ul className="text-[14px] text-white opacity-50 space-y-2 mt-1 lg:mt-3 ">
                <li>
                  <Link className="hover:underline transition-all ease-in-out">
                    Single Room
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline transition-all ease-in-out">
                    Suite Room
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline transition-all ease-in-out">
                    Family Room
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline transition-all ease-in-out">
                    Deluxe Room
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline transition-all ease-in-out">
                    Presidential Room
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline transition-all ease-in-out">
                    Standard Room
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-max">
              <h2 className="text-[16px] leading-[28px] text-white">
                Information
              </h2>
              <ul className="text-[14px] text-white opacity-50 space-y-2 mt-1 lg:mt-3 ">
                <li>
                  <Link className="hover:underline transition-all ease-in-out">
                    Faq
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline transition-all ease-in-out">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline transition-all ease-in-out">
                    Help
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-max">
              <h2 className="text-[16px] leading-[28px] text-white">Contact</h2>
              <ul className="text-[14px] text-white opacity-50 space-y-2 mt-1 lg:mt-3 ">
                <li>
                  <Link className="hover:underline transition-all ease-in-out">
                    0878-3949-8911
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline transition-all ease-in-out">
                    thecontinental@gmail.com
                  </Link>
                </li>
              </ul>
            </div>
            <div className="px-[50px] py-[20px] space-y-3 bg-white/20 max-w-[350px] ">
              <h2 className="text-[16px] font-bold text-white">Subscribe</h2>
              <form action="#" className="flex">
                <input
                  type="email"
                  className="bg-white w-[150px] lg:w-[200px] h-[30px] lg:h-[40px] px-3"
                  placeholder="Your Email"
                />
                <button className="bg-[#1E1E1E] text-white px-3 lg:px-5">
                  <HiArrowNarrowRight />
                </button>
              </form>
              <p className="text-[12px] leading-[20px] text-white/60">
                Hello, we are Ampera Souvenirs. Our goal is to translate the
                positive effects of revolutionizing the way companies engage
                with their clients & teams.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex-col flex lg:grid lg:grid-cols-3 mt-[4rem] gap-5">
          <div className="col-start-2 col-span-1 flex justify-center items-center gap-5">
            <Link className="text-[14px] text-white font-light">Home</Link>
            <Link className="text-[14px] text-white font-light">Hotel</Link>
            <Link className="text-[14px] text-white font-light">Room Type</Link>
          </div>
          <div className="flex gap-5 justify-center lg:justify-end">
            <button className="border border-gray-600 rounded-full p-2">
              <Link className="text-white">
                <BiLogoLinkedin />
              </Link>
            </button>
            <button className="border border-gray-600 rounded-full p-2">
              <Link className="text-white">
                <BiLogoFacebook />
              </Link>
            </button>
            <button className="border border-gray-600 rounded-full p-2">
              <Link className="text-white">
                <BiLogoTwitter />
              </Link>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

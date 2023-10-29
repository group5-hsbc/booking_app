import React from "react";
import bannerHeader from "@assets/images/banner-home-1.svg";

const HeaderBanner = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${bannerHeader})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
      className="h-screen lg:h-[800px] flex w-full flex-col justify-center items-center gap-8"
    >
      <h1 className="text-[2.5rem] lg:text-[4.5rem] font-bold text-white text-center max-w-[1200px] shadow-sm">
        Welcome To The Continental Hotel
      </h1>
      <div>
        <button className="px-5 py-2 rounded-full bg-[#148EFF] text-white font-medium shadow-md tracking-wide">
          Order Here
        </button>
      </div>
    </section>
  );
};

export default HeaderBanner;

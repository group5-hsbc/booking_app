import React from "react";
import bannerImage from "../assets/images/banner-all-page.svg";
import Container from "./Container";
const Banner = ({ page }) => {
  return (
    <Container
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0)), url(${bannerImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
      className="h-[400px] max-w-[1200px] mx-auto flex justify-center items-center"
    >
      <h1 className="text-[30px] md:text-[40px] text-white font-semibold shadow-md">
        {page}
      </h1>
    </Container>
  );
};

export default Banner;

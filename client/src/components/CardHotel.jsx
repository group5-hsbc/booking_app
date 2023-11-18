import React from "react";
import MLK4 from "@assets/images/malaka4.png";
import { IoStarSharp } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";

const CardHotel = ({ data }) => {
  return (
    <div className="rounded-md w-[320px] h-[400px] shadow-md">
      <div className="w-full h-[250px]">
        <img
          src={MLK4}
          alt="hotel-image"
          className="w-full h-full object-cover rounded-t-md"
        />
      </div>
      <div className="flex w-full h-[150px] justify-between items-center px-[23px] py-3">
        <div className="w-10/12 h-full flex flex-col justify-start items-start gap-3 overflow-hidden">
          <h1 className="text-[#304022] text-[20px] font-semibold truncate">
            Lenora Hotel asdas as asdasdas
          </h1>
          <div className="flex justify-center w-max gap-2 items-center">
            <IoStarSharp className="w-[25px] h-[25px] text-[#FDCC0D]" />
            <span className="text-lg">4.9</span>
          </div>
          <span className="text-[20px] text-[#F14336] font-semibold">
            Rp 320.000
          </span>
        </div>
        <div className="w-2/12 flex justify-center h-full items-center">
          <IoIosHeartEmpty className="text-[#FF1919] text-4xl" />
        </div>
      </div>
    </div>
  );
};

export default CardHotel;

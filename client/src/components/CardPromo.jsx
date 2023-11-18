import React from "react";
import Promo from "@assets/images/promo-1.png";

const CardPromo = () => {
  return (
    <div className="w-[700px] h-[386px]">
      <img src={Promo} alt="promo" className="w-full h-full rounded-md" />
    </div>
  );
};

export default CardPromo;

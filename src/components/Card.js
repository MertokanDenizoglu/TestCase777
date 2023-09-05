import React from "react";
import CardImg from "../assets/images/card.png";
import Dot from "../assets/images/·.png";
import Eth from "../assets/images/cardF.png";
const Card = () => {
  return (
    <div className="p-6 bg-[#1E1E1E] w-[261px] h-[382px] max-lg:w-full   rounded-lg">
      <div className="w-full h-full">
        <img className="w-full" src={CardImg} alt="..." />
        <div className="flex justify-around mt-3">
          <h1 className="text-white font-poppins text-lg">The Big Mac</h1>
          <h1 className="text-[#A27DF9] text-sm">3 in Stock</h1>
        </div>
        <div className="flex justify-between px-1 ">
          <h1 className="text-slate-600 text-lg font-poppins">Creator</h1>
          <img className="h-1 mt-1" src={Dot} alt="..." />{" "}
          <h1 className="text-slate-500 text-lg">Roger Waters</h1>
        </div>
        <div className="flex mt-3 gap-x-2">
          <button className="text-white px-10 py-2 bg-[#A27DF9] rounded-lg">
            Mint
          </button>
          <img className="w-15 h-7 mt-3" src={Eth} alt="..." />
        </div>
      </div>
    </div>
  );
};

export default Card;

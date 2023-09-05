import React from "react";
import HomeImg from "../assets/images/Foundation.png";
import CollectiveImg from "../assets/images/2.png";
import Soon from "../assets/images/SOON.png";
import SenseLabsImg from "../assets/images/Vector.png";
import AnalyticsImg from "../assets/images/analytic.png";
import FeedImg from "../assets/images/feed.png";
//!!Tab Şeklinde devam edip koşullu css yazabilirdim Tailwind CSS bu işler için çok uygundur fakat tasarım tek sayfa ...
// Eğer koşullu css yazsaydım `${active === 1 ? "border-[#1CEFB4]" : "border-none"}` Şeklinde ekleme yapardım.
const Header = ({ active, setActive }) => {
  return (
    <div className="flex justify-between  max-lg:hidden px-40 max-lg:px-3  pt-5 font-poppins">
      <div
        onClick={() => {
          setActive(1);
        }}
        className="flex cursor-pointer border-b-4 w-40 max-lg:w-24 justify-center items-center border-[#1CEFB4] "
      >
        <img className="max-lg:w-4" src={HomeImg} alt="..." />
        <h1 className="text-white text-base max-lg:text-xs">Home</h1>
      </div>
      <div className="flex  ">
        <img className="max-lg:w-4 max-lg:object-cover" src={CollectiveImg} alt="..." />
        <h1 className="text-white text-base max-lg:text-xs ">Collective</h1>
        <img className="h-2" src={Soon} alt="..." />
      </div>
      <div className="flex ">
        <img className="max-lg:w-4 max-lg:object-cover" src={SenseLabsImg} alt="..." />
        <h1 className="text-white text-base max-lg:text-xs">Sense Labs</h1>
      </div>
      <div className="flex ">
        <img className="max-lg:w-4 max-lg:object-cover" src={AnalyticsImg} alt="..." />
        <h1 className="text-white text-base max-lg:text-xs">Analytics</h1>
        <img className="h-2" src={Soon} alt="..." />
      </div>
      <div className="flex ">
        <img className="max-lg:w-4 max-lg:object-cover" src={FeedImg} alt="..." />
        <h1 className="text-white text-base max-lg:text-xs">Feed</h1>
      </div>
    </div>
  );
};

export default Header;

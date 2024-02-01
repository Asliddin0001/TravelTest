import React from "react";
import img from "../images/lighthouse 1.png";

export default function Tour() {
  return (
    <div className="container mx-auto mt-[6vw]">
      <div className="w-[570px] h-[700px] relative">
        <img className="w-full h-full object-cover" src={img} alt="" />
        <div className="w-[140px] h-[140px] bg-[#FFCA45] absolute -top-[60px] -right-[60px] rounded-[12px] -z-10"></div>
      </div>
      
    </div>
  );
}

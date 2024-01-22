import React from "react";
import Button from "./button";

export default function Header() {
  return (
    <div className="header flex flex-col justify-center pl-[9vw] sm:items-center sm:px-[10px] md:pl-[40px]">
      <h1 className="w-[70%] lg:w-[100%] text-[84px] leading-[110px] font-bold md:text-[50px] sm:text-[35px] md:leading-normal align-middle sm:text-center">
        <span className="text_gradient"> It’s Time</span> To ExploreThe World
      </h1>
      <Button text={"Plan Your Trip"} width={200} height={60} marginTop={30} />
    </div>
  );
}

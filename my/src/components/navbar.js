import React, { useState } from "react";
import logo from "../images/logo.svg";
import { navbarLinks } from "../util/constant";
import { HiOutlineUser } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { styles } from "../util/style";
import { BiMenuAltRight } from "react-icons/bi";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const toggleHandler = () => setToggleMenu((prev) => !prev);
  return (
    <div className={`${styles.justifyBetween} py-[20px]`}>
      <a href="/">
        <img
          src={logo}
          alt="logo"
          className="w-auto md:w-[180px] object-contain"
        />
      </a>
      <ul className={`${styles.row} flex sm:hidden`}>
        {navbarLinks.map((item) => {
          return (
            <li
              className={`lg:mx-[10px] mx-[30px] duration-200 hover:text-primary cursor-pointer ${styles.informationText}`}
            >
              {item.name}
            </li>
          );
        })}
      </ul>
      <div className={`${styles.row} ${styles.informationText} flex sm:hidden`}>
        <div
          className={`${styles.row} hover:text-primary duration-200 cursor-pointer border-r-[1px] mr-[10px] pr-[10px] border-[#F1E0DD]`}
        >
          <HiOutlineUser className="mr-[5px]" />
          <p>My Account</p>
        </div>
        <IoSearchOutline className="hover:text-primary cursor-pointer" />
      </div>
      <BiMenuAltRight
        className="hidden sm:flex size-[45px] cursor-pointer"
        onClick={toggleHandler}
      />
      <div
        className={`w-[100%] fixed top-0 bg-primary h-[100vh] duration-200
        ${toggleMenu === false ? "left-[100%]" : "left-0"}
      `}
      >
        <ul className="w-full flex-col mt-[20px] text-center pt-[40px] relative">
          {navbarLinks.map((item) => {
            return (
              <li
                className={`duration-200 text-[#fff] hover:text-textInfo cursor-pointer text-[20px] mt-[10px]`}
              >
                {item.name}
              </li>
            );
          })}
          <IoMdClose
            className="absolute top-0 right-[10px] size-[40px] text-[#fff] hover:text-textInfo cursor-pointer"
            onClick={toggleHandler}
          />
        </ul>
      </div>
    </div>
  );
}

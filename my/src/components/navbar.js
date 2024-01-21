import React from "react";
import logo from "../images/logo.svg";
import { navbarLinks } from "../util/constant";
import { HiOutlineUser } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import { styles } from "../util/style";

export default function Navbar() {
  return (
    <div className={`container mx-auto ${styles.justifyBetween} py-[20px]`}>
      <img src={logo} alt="logo" />
      <ul className={`${styles.row}`}>
        {navbarLinks.map((item, idex) => {
          return <li className={`mx-[30px] duration-200 hover:text-primary cursor-pointer ${styles.informationText}`}>{item.name}</li>;
        })}
      </ul>
      <div className={`${styles.row} ${styles.informationText}`}>
        <div className={`${styles.row} hover:text-primary duration-200 cursor-pointer `}>
          <HiOutlineUser className="mr-[5px]" />
          <p>My Account</p>
        </div>
        <IoSearchOutline className="hover:text-primary cursor-pointer" />
      </div>
    </div>
  );
}

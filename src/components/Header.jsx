import React from "react";
import logo from "../assets/Logo.jpg";
import profilePhoto from '../assets/profile.png'
import { IoIosArrowDown } from "react-icons/io";


const Header = () => {
  return (
    <div className="absolute z-100 w-full h-20 py-3 px-6 flex items-center justify-between bg-white border border-b-gray-300">
      <div className="flex items-center gap-3">
        <img className="w-14" src={logo} />
        <h1 className="font-bold text-[#3777F6] text-xl">App Distributor</h1>
      </div>

      <div className="flex items-center  gap-2">
        <img className="w-14" src={profilePhoto}/>
        <div className="flex items-center gap-1.5">
            <div>
            <h1>Thulasimanikandan</h1>
            <h1 className="text-gray-500">Team Leader</h1>
            </div>
           <IoIosArrowDown/>
        </div>
      </div>

    </div>
  );
};

export default Header;

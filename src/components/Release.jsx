import React from "react";
import goBackIcon from "../assets/GoBackIcon.svg";
import filterIcon from "../assets/filterIcon.svg";
import searchIcon from "../assets/searchIcon.svg";
const Release = () => {
  return (
    <div>
      <div className="flex justify-between m-6">
        <div className="flex justify-between items-center  ">
          <img src={goBackIcon} className="mr-5"></img>
          <div className="flex justify-between px-8 py-1.5 mr-5 rounded-xl text-black bg-[#3777F61A] cursor-pointer">
            <input placeholder="Search Release" className="outline-none" />
            <img src={searchIcon}></img>
          </div>

          <div className="p-4  rounded-xl  bg-[#3777F61A] cursor-pointer">
            <img src={filterIcon}></img>
          </div>
        </div>
        <button className="px-8 py-1.5  rounded-xl text-black bg-[#3777F61A] cursor-pointer">
          Add Release
        </button>
      </div>
    </div>
  );
};

export default Release;

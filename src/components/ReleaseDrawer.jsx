import React, { useState } from "react";
import { useParams } from "react-router-dom";

const ReleaseDrawer = ({ onClose, isOpen }) => {
  const { appName, appId } = useParams();
  return (
    <div
      className={`fixed top-0 right-0 w-full max-w-md h-full bg-white rounded-lg z-[9999]
      transition-transform duration-300 ease-in-out
      ${isOpen ? "translate-x-0" : "translate-x-full"}
      shadow-2xl border border-[#E6E7EA]`}
    >
      <div className="p-6 pb-32 overflow-y-auto h-full">
        {" "}
        {/* Add extra padding-bottom */}
        <div className="flex justify-center items-center mb-6">
          <h2 className="text-2xl font-semibold">Add New</h2>
        </div>
        <form className="space-y-5">
          <div className="mb-6">
            <label className="block mb-1 ">App Version</label>
            <input
              type="text"
              placeholder="Enter app version"
              className="w-full border outline-none rounded-md px-4 py-2"
            />
          </div>
          <div className="mb-6">
            <label className="block mb-1 ">Upload App</label>
            <div className="relative  w-full">
              <input
                type="text"
                placeholder=".apk,.aab,.ipa,.dmg"
                className="w-full border outline-none rounded-md px-4 py-2 pr-24"
              />
              <button className="absolute font-medium  top-1/2 right-2 -translate-y-1/2 bg-[#3777F61A] px-4 py-1.5 rounded text-sm">
                Choose
              </button>
            </div>
          </div>
          <div>
            <label className="block mb-1 ">Release Notes</label>
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Enter release notes"
                className="w-full border outline-none rounded-md px-4 py-2 pr-24"
              />
            </div>
          </div>
        </form>
      </div>

      {/* ✅ Fixed footer buttons */}
      <div className="absolute bottom-4 left-0 w-full bg-white px-5 py-4 flex justify-center gap-[10px]  border-gray-200">
        <button
          onClick={onClose}
          className="w-[180px] h-[58px] rounded-[10px] border border-gray-300
          px-[12px] py-[10px] bg-[#E6E7EA] text-black"
        >
          Cancel
        </button>
        <button
          className="w-[180px] h-[58px] rounded-[10px] border border-gray-300
        px-[12px] py-[10px] bg-[#3777F61A] text-black"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default ReleaseDrawer;

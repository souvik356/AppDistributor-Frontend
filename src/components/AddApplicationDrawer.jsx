import React from "react";

const AddApplicationDrawer = ({ onClose, isOpen }) => {
  return (
    <div
      className={`fixed top-0 right-0 w-full max-w-md h-full bg-white rounded-lg z-[9999]
      transition-transform duration-300 ease-in-out 
      ${isOpen ? "translate-x-0" : "translate-x-full"} 
      shadow-2xl border border-[#E6E7EA]`}
    >
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex justify-center items-center p-6">
          <h2 className="text-2xl font-semibold">Add New</h2>
        </div>

        {/* Scrollable Form Section */}
        <div className="flex-1 overflow-y-auto px-6 py-2">
          <form className="space-y-7 pb-24">
            <div>
              <label className="block mb-1 font-medium">App Name</label>
              <input
                type="text"
                placeholder="Enter app name"
                className="w-full border border-gray-300 rounded-md px-4 py-2"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">App Icon</label>
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Add app icon"
                  className="w-full border border-gray-300 rounded-md px-4 py-2"
                />
                <button className="absolute top-1/2 right-2 -translate-y-1/2 bg-[#3777F61A] px-4 py-1.5 rounded text-sm">
                  Choose
                </button>
              </div>
            </div>
            <div>
              <label className="block mb-1 font-medium">Release Type</label>
              <select className="w-full border border-gray-300 rounded-md px-4 py-2">
                <option>Select Release Type</option>
                <option>Beta</option>
                <option>Production</option>
              </select>
            </div>
            <div>
              <label className="block mb-1 font-medium">Platform</label>
              <select className="w-full border border-gray-300 rounded-md px-4 py-2">
                <option>Select Platform</option>
                <option>Flutter</option>
                <option>Java</option>
                <option>Kotlin</option>
              </select>
            </div>
            <div>
              <label className="block mb-1 font-medium">Operating System</label>
              <select className="w-full border border-gray-300 rounded-md px-4 py-2">
                <option>Select OS</option>
                <option>Android</option>
                <option>iOS</option>
              </select>
            </div>
          </form>
        </div>

        {/* Fixed Footer */}
        <div className="absolute bottom-4 left-0 w-full bg-white px-5 py-4 flex justify-center gap-[10px] border-t border-gray-200">
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
    </div>
  );
};

export default AddApplicationDrawer;

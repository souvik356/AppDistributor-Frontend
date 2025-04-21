import React from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import CompName from "./CompName";
import Dashboard from "./Dashboard";
import { Outlet } from "react-router-dom";

const MainBody = () => {
  return (
    <div className="min-h-screen flex flex-col">
      
      <Header />

      {/* Main content section */}
      <div className="flex flex-1 bg-[#3777F61A] overflow-hidden">
        <SideBar />

        <div className="flex flex-col w-full gap-6 px-6 py-4 overflow-hidden">
          {/* Fixed height or shrink component */}
          <CompName />

          {/* Flexible growing Dashboard */}
          <div className="flex-1 bg-white overflow-auto rounded-xl">
            <Outlet/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBody;

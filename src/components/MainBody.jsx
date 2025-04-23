import React from "react";
import { Outlet } from "react-router-dom";
import CompName from "./CompName";
import Header from "./Header";
import SideBar from "./SideBar";

const MainBody = () => {
  return (
    <div className="h-screen flex flex-col">
      <Header />

      <div className="flex flex-1 bg-[#3777F61A] overflow-hidden">
        <SideBar />

        <div className="flex flex-col flex-1 gap-6 px-6 py-4 overflow-hidden min-h-0">
          <CompName />

          <div className="flex-1 bg-white rounded-xl overflow-hidden min-h-0">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBody;

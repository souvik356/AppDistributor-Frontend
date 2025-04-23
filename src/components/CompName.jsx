import React, { useEffect, useState } from "react";
import { GoHome } from "react-icons/go";
import { useLocation } from "react-router-dom";
import { GrAppsRounded } from "react-icons/gr";
import AppIcon from "../assets/AppIcon1.svg";
const CompName = () => {
  const [compName, setCompName] = useState("");
  const location = useLocation();
  // console.log(location);
  const { pathname } = location;
  // console.log(pathname);

  useEffect(() => {
    if (pathname === "/dashboard") {
      setCompName("Dashboard");
    } else if (pathname === "/dashboard/application") {
      setCompName("Application");
    } else if (pathname.startsWith("/dashboard/release/")) {
      setCompName("Release");
    }
  }, [pathname]);

  console.log(compName);
  return (
    <div className=" pt-22 h-50 flex items-center justify-between px-6 rounded-bl-4xl rounded-br-4xl bg-white">
      <div>
        <h1 className="text-5xl font-semibold">{compName}</h1>
      </div>
      <div>
        {compName == "Dashboard" ? <GoHome size={80} /> : <img src={AppIcon} />}
      </div>
    </div>
  );
};

export default CompName;

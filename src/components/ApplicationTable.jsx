import Cookies from "js-cookie";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import deleteIcon from "../assets/deleteIcon.svg";
import editIcon from "../assets/editIcon.svg";
import { fetchAppList } from "../store/getAppListSlice";
const ApplicationTable = () => {
  //   const applications = [
  //     {
  //       name: "Instagram",
  //       os: "Android",
  //       releaseType: "Beta",
  //       platform: "Flutter",
  //     },
  //     {
  //       name: "Play Store",
  //       os: "Android",
  //       releaseType: "Production",
  //       platform: "Kotlin",
  //     },
  //     {
  //       name: "Whatsapp",
  //       os: "Android",
  //       releaseType: "Beta",
  //       platform: "Java",
  //     },
  //     {
  //       name: "Whatsapp",
  //       os: "Android",
  //       releaseType: "Beta",
  //       platform: "Java",
  //     },
  //     {
  //       name: "Whatsapp",
  //       os: "Android",
  //       releaseType: "Beta",
  //       platform: "Java",
  //     },
  //     {
  //       name: "Whatsapp",
  //       os: "Android",
  //       releaseType: "Beta",
  //       platform: "Java",
  //     },
  //   ];
  const dispatch = useDispatch();
  const accessToken = Cookies.get("token");
  console.log(accessToken);
  const {
    items: applicationList,
    isLoading,
    isError,
  } = useSelector((state) => state.getAppList);
  console.log("appList from Redux:", applicationList, isLoading, isError);

  useEffect(() => {
    if (accessToken) {
      dispatch(fetchAppList(accessToken));
    }
  }, [dispatch, accessToken]);

  return (
    <div className="h-full  overflow-hidden  rounded-tl-xl shadow-sm">
      {/* Table header */}
      <table className="w-full table-fixed border-separate border-spacing-y-2 sm:border-spacing-y-3">
        <thead className="sticky top-0 bg-[#3777F61A] text-left text-lg sm:text-lg md:text-xl text-[#7E7F81] z-10">
          <tr>
            <th className="pl-4 sm:pl-10 p-2 sm:p-4  rounded-tl-2xl font-normal">
              Name
            </th>
            <th className="p-2 sm:p-4 font-normal">Operating System</th>
            <th className="p-2 sm:p-4 font-normal">Release Type</th>
            <th className="p-2 sm:p-4 font-normal">Platform</th>
            <th className="p-2 sm:p-4 font-normal rounded-tr-2xl">Actions</th>
          </tr>
        </thead>
      </table>

      {/* Table body (scrollable) */}
      <div className="overflow-y-auto  h-full ">
        <table className="w-full mb-22 table-fixed border-separate border-spacing-y-2 sm:border-spacing-y-3">
          <tbody className="text-sm md:text-lg text-black">
            {applicationList.map((app, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-white" : "bg-[#3777F61A]"
                } shadow-md rounded-md font-semibold`}
              >
                <td className="pl-4 sm:pl-10 p-2 sm:p-4 rounded-l-md">
                  <Link to={`/release/${app._id}`}>{app.appName}</Link>
                </td>
                <td className="p-2 sm:p-4">{app.osType}</td>
                <td className="p-2 sm:p-4">{app.releaseType}</td>
                <td className="p-2 sm:p-4">{app.platformType}</td>
                <td className="p-2 sm:p-4 rounded-r-md">
                  <div className="flex justify-start ml-4 space-x-2">
                    <img
                      src={editIcon}
                      alt="Edit"
                      className="w-4 h-4 md:w-8 sm:h-6 cursor-pointer"
                    />
                    <img
                      src={deleteIcon}
                      alt="Delete"
                      className="w-4 h-4 md:w-8 sm:h-6 cursor-pointer"
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApplicationTable;

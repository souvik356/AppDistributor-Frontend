// import React, { useState } from "react";
// import { MdDeleteSweep, MdOutlineEditNote } from "react-icons/md";
// import filterIcon from "../assets/filterIcon.svg";
// import searchIcon from "../assets/searchIcon.svg";
// import AddApplicationDrawer from "./AddApplicationDrawer";
// const Application = () => {
//   const [showDrawer, setShowDrawer] = useState(false);
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
//   ];

//   return (
//     <div className="p-4">
//       <div className="flex justify-between items-center mb-4">
//         <div className="flex items-center space-x-3">
//           <div className="flex justify-between px-8 py-1.5 mr-5 rounded-xl text-black bg-[#3777F61A] cursor-pointer">
//             <input placeholder="Search Application" className="outline-none" />
//             <img src={searchIcon}></img>
//           </div>
//           <div className="p-4  rounded-xl  bg-[#3777F61A] cursor-pointer">
//             <img src={filterIcon}></img>
//           </div>
//         </div>
//         <button
//           onClick={() => setShowDrawer(true)}
//           className="px-8 py-2 rounded-xl bg-[#3777F61A] text-black cursor-pointer"
//         >
//           Add Application
//         </button>
//       </div>

//       <div className="overflow-x-auto border border-gray-200 rounded-lg">
//         <table className="min-w-full text-sm text-left">
//           <thead>
//             <tr className="bg-blue-100 text-gray-800">
//               <th className="px-6 py-3 font-semibold">Name</th>
//               <th className="px-6 py-3 font-semibold">Operating System</th>
//               <th className="px-6 py-3 font-semibold">Release Type</th>
//               <th className="px-6 py-3 font-semibold">Platform</th>
//               <th className="px-6 py-3 font-semibold">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {applications.map((app, index) => (
//               <tr
//                 key={index}
//                 className={`${
//                   index % 2 !== 0 ? "bg-blue-50" : "bg-white"
//                 } border-t border-gray-200`}
//               >
//                 <td className="px-6 py-4 font-medium">{app.name}</td>
//                 <td className="px-6 py-4">{app.os}</td>
//                 <td className="px-6 py-4">{app.releaseType}</td>
//                 <td className="px-6 py-4">{app.platform}</td>
//                 <td className="px-6 py-4 space-x-2">
//                   <button className="text-blue-600 hover:underline text-sm">
//                     <MdOutlineEditNote className="text-black text-xl hover:text-black" />
//                   </button>
//                   <button className="text-red-600 hover:underline text-sm">
//                     <MdDeleteSweep className="text-black text-xl hover:text-black" />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       {showDrawer && (
//         <div
//           className="fixed inset-0 bg-[#3777F61A] bg-opacity-30 z-[9998] transition-opacity duration-300"
//           onClick={() => setShowDrawer(false)}
//         />
//       )}
//       <AddApplicationDrawer
//         isOpen={showDrawer}
//         onClose={() => setShowDrawer(false)}
//       />
//     </div>
//   );
// };

// export default Application;



import React, { useState } from "react";
import searchIcon from "../assets/searchIcon.svg";
import filterIcon from "../assets/filterIcon.svg";

import ApplicationTable from "./ApplicationTable";
import { useNavigate } from "react-router-dom";
import AddApplicationDrawer from "./AddApplicationDrawer";

 
const Application = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const navigate = useNavigate();
 
  return (
    <div className="flex flex-col h-full p-4">
      <div className="flex flex-row items-center justify-between gap-2 mb-4 flex-nowrap min-w-0">
        <div className="flex flex-row items-center gap-2 min-w-0 flex-nowrap">
 
          <div className="flex items-center gap-1 px-2 py-1 sm:px-3 sm:py-2 rounded-xl text-black bg-[#3777F61A] cursor-pointer min-w-0">
            <input
              placeholder="Search Application"
              className="outline-none bg-transparent text-xs sm:text-sm w-24 sm:w-32 md:w-48 h-6"
            />
            <img
              src={searchIcon}
              alt="Search"
              className="w-4 h-4 sm:w-5 sm:h-5"
            />
          </div>
 
          <div className="p-2 sm:p-3 rounded-xl bg-[#3777F61A] cursor-pointer">
            <img
              src={filterIcon}
              alt="Filter"
              className="w-3 h-3 sm:w-4 sm:h-4"
            />
          </div>
        </div>
 
        <button
          onClick={() => setShowDrawer(true)}
          className="px-3 sm:px-5 py-2 sm:py-2 rounded-xl text-black bg-[#3777F61A] cursor-pointer text-xs sm:text-sm whitespace-nowrap"
        >
          Add Application
        </button>
      </div>
 
      <div className="flex-1  bg-white rounded-xl overflow-hidden min-h-0 ">
        <ApplicationTable />
      </div>
 
      {showDrawer && (
        <div
          className="fixed inset-0 bg-[#3777F61A] bg-opacity-30 z-[9998] transition-opacity duration-300"
          onClick={() => setShowDrawer(false)}
        />
      )}
      <AddApplicationDrawer isOpen={showDrawer} onClose={() => setShowDrawer(false)} />
    </div>
  );
};
export default Application;
 
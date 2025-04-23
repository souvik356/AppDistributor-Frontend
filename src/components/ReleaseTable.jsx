import React, { useState } from "react";
import editIcon from "../assets/editIcon.svg";
import deleteIcon from "../assets/deleteIcon.svg";
import DeleteModal from "./DeleteModal";

const ReleaseTable = ({ releases, appId }) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const handleDelete = () => {
    setShowDeleteModal(true); // Show the delete modal
  };

  const closeDeleteModal = () => {
    setShowDeleteModal(false); // Close the delete modal
  };

  // const releases = [
  //   { name: "3.0", version: "3.0.0", type: "Beta" },
  //   { name: "2.8", version: "2.9.4", type: "Stable" },
  //   { name: "3.6", version: "3.0.0", type: "Beta" },
  //   { name: "2.7", version: "2.9.4", type: "Stable" },
  //   { name: "3.1", version: "3.0.0", type: "Beta" },
  //   { name: "2.4", version: "2.9.4", type: "Stable" },
  //   { name: "3.0", version: "3.0.0", type: "Beta" },
  //   { name: "2.9", version: "2.9.4", type: "Stable" },
  //   { name: "3.0", version: "3.0.0", type: "Beta" },
  //   { name: "2.9", version: "2.9.4", type: "Stable" },
  //   { name: "3.0", version: "3.0.0", type: "Beta" },
  //   { name: "2.9", version: "2.9.4", type: "Stable" },
  //   { name: "3.0", version: "3.0.0", type: "Beta" },
  //   { name: "2.9", version: "2.9.4", type: "Stable" },
  //   { name: "3.0", version: "3.0.0", type: "Beta" },
  //   { name: "2.9", version: "2.9.4", type: "Stable" },
  //   { name: "3.0", version: "3.0.0", type: "Beta" },
  //   { name: "2.9", version: "2.9.4", type: "Stable" },
  //   { name: "3.0", version: "3.0.0", type: "Beta" },
  //   { name: "2.9", version: "2.9.4", type: "Stable" },
  //   { name: "3.2", version: "3.0.0", type: "Beta" },
  //   { name: "3.1", version: "2.9.4", type: "Stable" },
  // ];

  return (
    <div className="h-full  overflow-hidden  rounded-tl-xl shadow-sm">
      {/* Table header */}
      <table className="w-full table-fixed border-separate border-spacing-y-2 sm:border-spacing-y-3">
        <thead className="sticky top-0 bg-[#3777F61A] text-left text-lg sm:text-lg md:text-xl text-[#7E7F81] z-10">
          <tr>
            <th className="pl-4 sm:pl-10 p-2 sm:p-4  rounded-tl-2xl font-normal">
              Name
            </th>
            <th className="p-2 sm:p-4 font-normal">Version</th>
            {/* <th className="p-2 sm:p-4 font-normal">Release Type</th> */}
            <th className="p-2 sm:p-4 font-normal rounded-tr-2xl">Actions</th>
          </tr>
        </thead>
      </table>

      {/* Table body (scrollable) */}
      <div className="overflow-y-auto  h-full ">
        <table className="w-full mb-22 table-fixed border-separate border-spacing-y-2 sm:border-spacing-y-3">
          <tbody className="text-sm md:text-lg text-black">
            {releases.map((release, index) => (
              <tr
                key={release._id}
                className={`${
                  index % 2 === 0 ? "bg-white" : "bg-[#3777F61A]"
                } shadow-md rounded-md font-semibold`}
              >
                <td className="pl-4 sm:pl-10 p-2 sm:p-4 rounded-l-md">
                  {release.buildNumber}
                </td>
                <td className="p-2 sm:p-4">{release.version}</td>
                {/* <td className="p-2 sm:p-4">Beta</td> */}
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
                      onClick={handleDelete}
                      className="w-4 h-4 md:w-8 sm:h-6 cursor-pointer"
                    />
                  </div>
                </td>
                {showDeleteModal && (
                  <DeleteModal
                    onClose={closeDeleteModal}
                    releaseId={release._id}
                    appId={appId}
                  />
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReleaseTable;
{
  /* <DeleteModal
          onClose={closeDeleteModal}
          releaseId={release._id}
          appId={appId}
        /> */
}

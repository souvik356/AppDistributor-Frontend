import { fetchReleaseData } from "@/store/getReleaseDataSlice";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import goBackIcon from "../assets/GoBackIcon.svg";
import filterIcon from "../assets/filterIcon.svg";
import searchIcon from "../assets/searchIcon.svg";
import ReleaseDrawer from "./ReleaseDrawer";
import ReleaseTable from "./ReleaseTable";
const Release = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { appId } = useParams();

  const accessToken = Cookies.get("token");
  useEffect(() => {
    if (accessToken) {
      dispatch(fetchReleaseData({ accessToken, appId }));
    }
  }, [dispatch, accessToken, appId]);
  const items = useSelector((state) => state.getReleaseData.items);
  console.log("item", items);
  return (
    <div className="flex flex-col h-full p-4">
      <div className="flex flex-row items-center justify-between gap-2 mb-4 flex-nowrap min-w-0">
        <div className="flex flex-row items-center gap-2 min-w-0 flex-nowrap">
          <img
            src={goBackIcon}
            className="cursor-pointer w-6 h-6 sm:w-7 sm:h-7"
            onClick={() => navigate("/dashboard/application")}
            alt="Go Back"
          />

          <div className="flex items-center gap-1 px-2 py-1 sm:px-3 sm:py-2 rounded-xl text-black bg-[#3777F61A] cursor-pointer min-w-0">
            <input
              placeholder="Search Release"
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
          className="px-3 sm:px-5 py-2 sm:py-2 rounded-md text-black bg-[#3777F61A] cursor-pointer text-xs sm:text-sm whitespace-nowrap"
        >
          Add Release
        </button>
      </div>
      {items.length > 0 ? (
        <div className="flex-1  bg-white rounded-xl overflow-hidden min-h-0 ">
          <ReleaseTable releases={items} appId={appId} />
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center h-screen py-16">
          <img className="w-60 h-50 " src="/empty-box.png" />
          <p className="text-2xl font-bold leading-8">
            You have no releases yet
          </p>
        </div>
      )}

      {showDrawer && (
        <div
          className="fixed inset-0 bg-[#3777F61A] bg-opacity-30 z-[9998] transition-opacity duration-300"
          onClick={() => setShowDrawer(false)}
        />
      )}
      <ReleaseDrawer isOpen={showDrawer} onClose={() => setShowDrawer(false)} />
    </div>
  );
};

export default Release;

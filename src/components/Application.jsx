import Cookies from "js-cookie";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import filterIcon from "../assets/filterIcon.svg";
import searchIcon from "../assets/searchIcon.svg";
import { fetchAppList } from "../store/getAppListSlice";
import AddApplicationDrawer from "./AddApplicationDrawer";
import ApplicationTable from "./ApplicationTable";

const Application = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const accessToken = Cookies.get("token");
  console.log("at", accessToken);

  const fetchApps = useCallback(() => {
    if (accessToken) {
      dispatch(fetchAppList(accessToken));
    }
  }, [dispatch, accessToken]);

  useEffect(() => {
    fetchApps();
  }, [fetchApps]);
  const items = useSelector((state) => state.getAppList.items);
  console.log("appList from Redux:", items);
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

      {/* <div className="flex-1  bg-white rounded-xl overflow-hidden min-h-0 ">
        <ApplicationTable applications={items} />
      </div> */}
      {items.length > 0 ? (
        <div className="flex-1  bg-white rounded-xl overflow-hidden min-h-0 ">
          <ApplicationTable applications={items} />
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center h-screen py-16">
          <img className="w-60 h-50 " src="/empty-box.png" />
          <p className="text-2xl font-bold leading-8">
            You have no applications yet
          </p>
        </div>
      )}
      {showDrawer && (
        <div
          className="fixed inset-0 bg-[#3777F61A] bg-opacity-30 z-[9998] transition-opacity duration-300"
          onClick={() => setShowDrawer(false)}
        />
      )}
      <AddApplicationDrawer
        isOpen={showDrawer}
        onClose={() => setShowDrawer(false)}
        onAppAdded={fetchApps}
      />
    </div>
  );
};
export default Application;

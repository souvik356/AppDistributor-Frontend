import { useState } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { postAppData } from "../store/appDataSlice";
const AddApplicationDrawer = ({ onClose, isOpen, onAppAdded }) => {
  const dispatch = useDispatch();

  const [appName, setAppName] = useState("");
  const [appIcon, setAppIcon] = useState(""); // Optional: implement file upload
  const [releaseType, setReleaseType] = useState("");
  const [platformType, setPlatformType] = useState("");
  const [osType, setOsType] = useState("");
  const notifyApplicationSuccess = () => {
    toast.success("App Uploaded successfully");
  };
  const notifyApplicationFailure = (msg) => toast.error(msg);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const appData = {
      appName,
      appIcon,
      releaseType,
      osType,
      platformType,
    };

    try {
      await dispatch(postAppData(appData)).unwrap();
      onAppAdded(); // callback to refresh list
      onClose(); // close drawer
      notifyApplicationSuccess();
    } catch (err) {
      notifyApplicationFailure(err);
      console.error("Failed to add application", err);
    }
  };
  return (
    <>
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
                  onChange={(e) => setAppName(e.target.value)}
                  placeholder="Enter app name"
                  className="w-full border border-gray-300 rounded-md px-4 py-2"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">App Icon</label>
                <div className="relative w-full">
                  <input
                    type="text"
                    onChange={(e) => setAppIcon(e.target.value)}
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
                <select
                  value={releaseType}
                  onChange={(e) => setReleaseType(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-4 py-2"
                  required
                >
                  <option value="">Select Release Type</option>
                  <option value="Alpha">Alpha</option>
                  <option value="Beta">Beta</option>
                  <option value="Enterprise">Enterprise</option>
                  <option value="Production">Production</option>
                  <option value="Store">Store</option>
                </select>
              </div>
              <div>
                <label className="block mb-1 font-medium">Platform</label>
                <select
                  value={platformType}
                  onChange={(e) => setPlatformType(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-4 py-2"
                  required
                >
                  <option value="">Select Platform</option>
                  <option value="java">Java</option>
                  <option value="kotlin">Kotlin</option>
                  <option value="react-native">React Native</option>
                </select>
              </div>
              <div>
                <label className="block mb-1 font-medium">
                  Operating System
                </label>
                <select
                  value={osType}
                  onChange={(e) => setOsType(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-4 py-2"
                  required
                >
                  <option value="">Select OS</option>
                  <option value="android">Android</option>
                  <option value="ios">IOS</option>
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
              onClick={handleSubmit}
              className="w-[180px] h-[58px] rounded-[10px] border border-gray-300
            px-[12px] py-[10px] bg-[#3777F61A] text-black"
            >
              Add
            </button>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        style={{ marginTop: "60px" }}
      />
    </>
  );
};

export default AddApplicationDrawer;

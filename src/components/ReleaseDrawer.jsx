import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

// import { notifySuccess, notifyFailure } from "../your/notifications"; // 🔁 replace with actual functions
import { fetchReleaseData } from "@/store/getReleaseDataSlice";
import { postReleaseData } from "@/store/releaseDataSlice";
import {
  clearBuildUrlData,
  postUploadBuildData,
} from "@/store/uploadBuildDataSlice";
import Cookies from "js-cookie";
import { ToastContainer, toast } from "react-toastify";

const ReleaseDrawer = ({ onClose, isOpen }) => {
  const { appName, appId } = useParams();
  const dispatch = useDispatch();
  const fileInputRef = useRef(null);

  const [version, setVersion] = useState("");
  const [releaseNote, setReleaseNote] = useState("");
  const [fileName, setFileName] = useState("");
  const [fileSize, setFileSize] = useState(null);
  const [fileExtension, setFileExtension] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState("");

  const { buildUrlData } = useSelector((state) => state.uploadBuildData);
  const accessToken = Cookies.get("token");

  console.log("url", buildUrlData?.data || "No data available");
  const handleFileButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  const notifyReleaseSuccess = () => {
    toast.success("Release Uploaded successfully");
  };

  const notifyReleaseFailure = (msg) => toast.error(msg);
  useEffect(() => {
    if (accessToken) {
      dispatch(fetchReleaseData({ accessToken, appId }));
    }
  }, [dispatch, accessToken, appId]);

  const triggerFetchData = () => {
    if (accessToken) {
      dispatch(fetchReleaseData({ accessToken, appId }));
    }
  };
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log(file);
    if (file) {
      fileUpload(file);
    }
  };

  const fileUpload = (file) => {
    const fileSizeMB = (file.size / 1024 / 1024).toFixed(2);
    const fileExt = file.name.split(".").pop().toLowerCase();

    setFileName("");
    setFileSize(fileSizeMB);
    setFileExtension(fileExt);
    setError("");

    if (["apk", "ipa", "dmg", "aab"].includes(fileExt)) {
      setIsUploading(true);

      dispatch(postUploadBuildData(file)).then((response) => {
        setIsUploading(false);
        if (!response.payload?.success) {
          setError(response.payload?.message || "Upload failed");
          // notifyFailure(response.payload?.message || "Upload failed");
        } else {
          setFileName(file.name);
          // notifySuccess("File uploaded successfully!");
        }
      });
    } else {
      setError(`.${fileExt} is not supported`);
    }
  };
  const onSubmit = () => {
    setFileName("");
    setError("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }

    if (!version || !releaseNote) {
      setError("Version and release note are required.");
      return;
    }

    if (buildUrlData?.data) {
      dispatch(
        postReleaseData({
          build: buildUrlData.data,
          version,
          releaseNote,
          appId,
          fileSize,
          fileExtension,
        })
      ).then((response) => {
        if (!response.payload?.success) {
          console.log("error");
          notifyReleaseFailure(response.payload?.message);
        } else {
          notifyReleaseSuccess();
          triggerFetchData();
          dispatch(clearBuildUrlData());
          setVersion("");
          setReleaseNote("");
        }
      });
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
        <div className="p-6 pb-32 overflow-y-auto h-full">
          <div className="flex justify-center items-center mb-6">
            <h2 className="text-2xl font-semibold">Add New</h2>
          </div>
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="mb-6">
              <label className="block mb-1">Release Version</label>
              <input
                type="text"
                placeholder="Enter release version"
                value={version}
                onChange={(e) => setVersion(e.target.value)}
                className="w-full border outline-none rounded-md px-4 py-2"
              />
            </div>
            <div className="mb-6">
              <label className="block mb-1">Upload App</label>
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder={
                    isUploading
                      ? "Uploading..."
                      : fileName
                      ? `${fileName} uploaded`
                      : ".apk,.aab,.ipa,.dmg"
                  }
                  className="w-full border outline-none rounded-md px-4 py-2 pr-24"
                  readOnly
                />
                <button
                  type="button"
                  onClick={handleFileButtonClick}
                  className="absolute cursor-pointer font-medium top-1/2 right-2 -translate-y-1/2 bg-[#3777F61A] px-4 py-1.5 rounded text-sm"
                >
                  Choose
                </button>
                <input
                  type="file"
                  ref={fileInputRef}
                  className="hidden"
                  accept=".apk,.aab,.ipa,.dmg"
                  onChange={handleFileChange}
                />
              </div>
              {error && <p className="text-red-500 mt-1 text-sm">{error}</p>}
            </div>
            <div>
              <label className="block mb-1">Release Notes</label>
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Enter release notes"
                  value={releaseNote}
                  onChange={(e) => setReleaseNote(e.target.value)}
                  className="w-full border outline-none rounded-md px-4 py-2 pr-24"
                />
              </div>
            </div>
          </form>
        </div>

        <div className="absolute bottom-4 left-0 w-full bg-white px-5 py-4 flex justify-center gap-[10px] border-gray-200">
          <button
            onClick={onClose}
            className=" cursor-pointer w-[180px] h-[58px] rounded-[10px] border border-gray-300
        px-[12px] py-[10px] bg-[#E6E7EA] text-black"
          >
            Cancel
          </button>
          <button
            onClick={onSubmit}
            className="cursor-pointer w-[180px] h-[58px] rounded-[10px] border border-gray-300
      px-[12px] py-[10px] bg-[#3777F61A] text-black"
          >
            Add
          </button>
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

export default ReleaseDrawer;

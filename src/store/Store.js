import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";
import getAppListSlice from "./getAppListSlice";

import deleteReleaseDataSlice from "./deleteReleaseDataSlice";
import getReleaseDataSlice from "./getReleaseDataSlice";
import uploadBuildDataSlice from "./uploadBuildDataSlice";
import releaseDataSlice from "./releaseDataSlice";

const Store = configureStore({
  reducer: {
    user: UserSlice,
    getAppList: getAppListSlice,
    getReleaseData: getReleaseDataSlice,
    deleteReleaseData: deleteReleaseDataSlice,
    uploadBuildData: uploadBuildDataSlice,
    releaseData: releaseDataSlice,
  },
});

export default Store;

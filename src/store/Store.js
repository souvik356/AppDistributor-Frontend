import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";
import getAppListSlice from "./getAppListSlice";

const Store = configureStore({
    reducer:{
        user: UserSlice,
        getAppList: getAppListSlice,
    }
})

export default Store
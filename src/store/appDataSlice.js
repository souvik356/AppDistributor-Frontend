import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

export const postAppData = createAsyncThunk("postAppData", async (appData) => {
  try {
    console.log("appData", appData);
    const { appName, appIcon, releaseType, osType, platformType } = appData;
    console.log("appName", appName);
    const accessToken = Cookies.get("token");
    console.log("at", accessToken);
    if (!accessToken) {
      console.error("No JWT token found.User is not authenticated");
      throw new Error("No token found");
    }

    const response = await fetch(
      `http://localhost:8000/api/app/registerApplication`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        credentials: "include",
        body: JSON.stringify({
          appName,
          releaseType,
          osType,
          platformType,
        }),
      }
    );
    const responseData = await response.json();
    console.log("rd", responseData);
    return responseData;
  } catch (error) {
    console.log("Error in login user data", error);
    throw error;
  }
});

const appDataSlice = createSlice({
  name: "appData",
  initialState: {
    isLoading: false,
    buildData: null,
    isError: false,
  },

  extraReducers: (builder) => {
    builder.addCase(postAppData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(postAppData.fulfilled, (state, action) => {
      console.log("action", action); //{type: 'postLoginData/fulfilled', payload: {…}, meta: {…}}
      state.isLoading = false;
      state.buildData = action.payload;
      state.isError = false;
      console.log("action", action); //{type: 'postLoginData/fulfilled', payload: {…}, meta: {…}}
    });
    builder.addCase(postAppData.rejected, (state) => {
      state.isError = true;
    });
  },
});

export default appDataSlice.reducer;

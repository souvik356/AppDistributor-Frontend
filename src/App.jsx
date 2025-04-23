import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import "./App.css";
import LoginRegisterPage from "./components/LoginRegisterPage";
import MainBody from "./components/MainBody";
import Dashboard from "./components/Dashboard";
import Release from "./components/Release";
import Application from "./components/Application";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { fetchUserDetails } from "./utils/fetchUserDetails";
import { useDispatch } from "react-redux";
import { addUser } from "./store/UserSlice";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const dispatch = useDispatch()
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <LoginRegisterPage />,
    },
    {
      path: "dashboard",
      element: <ProtectedRoute><MainBody/></ProtectedRoute>,
      children: [
        {
          path: "dashboard",
          element: <ProtectedRoute><Dashboard /></ProtectedRoute>,
        },
        {
          path: "release/:appId",
          element: <ProtectedRoute><Release /></ProtectedRoute>,
        },
        {
          path: "application",
          element: <ProtectedRoute><Application /></ProtectedRoute>,
        },
      ],
    },
  ]);

  useEffect(()=>{
    fetchUser()
  },[])

  const fetchUser = async()=>{
    const user = await fetchUserDetails()
    dispatch(addUser({userId: user._id,name:user.name,email:user.email,role: user.role,mobile: user.mobileNumber}))
  }
  return (
    <>
      <RouterProvider router={appRouter} />
      <ToastContainer position="top-center" autoClose={3000} style={{ marginTop: '60px' }} />
    </>
  );
}

export default App;

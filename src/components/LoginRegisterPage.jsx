import React, { useState } from "react";
import cameraPhoto from "../assets/loginReg.jpg";
import logo from "../assets/Logo.jpg";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaEyeSlash } from "react-icons/fa";

const LoginRegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [confirmShowPassword, setConfirmShowPassword] = useState(false)
  const [registerPage, setRegisterPage] = useState(false);
  return (
    <div className="w-full h-screen flex">

      <div className="w-[50%] h-full bg-amber-400">
        <img className="w-full h-full object-cover" src={cameraPhoto} />
      </div>

      <div className="w-[50%] px-16 py-4 flex items-center flex-col">
        <div className="flex items-center gap-5">
          <img className="w-14" src={logo} />
          <h1 className="font-bold text-[#3777F6] text-xl">App Distributor</h1>
        </div>

        <div className="mt-4 w-full border border-[#E6E7EA] rounded px-14 py-4.5 flex flex-col gap-2.5">
          <div>
            <h1 className="font-extralight text-5xl">{registerPage?"Register":"Login"}</h1>
            <h1 className="mt-4 text-lg">
              {registerPage?"Get started with just a few details.":"Access your account to get started."}
            </h1>
          </div>

          {registerPage && <div className="flex flex-col gap-4">
            <div>
              <h1>Name</h1>
              <input
                className="w-full mt-2 border border-[#E6E7EA] outline-none px-2 py-2.5 rounded"
                placeholder="Enter Full Name"
              />
            </div>
           </div> }

          <div className="flex flex-col gap-4">
            <div>
              <h1>{registerPage?"Email ID":"Username"}</h1>
              <input
                className="w-full mt-2 border border-[#E6E7EA] outline-none px-2 py-2.5 rounded"
                placeholder="Enter email-id or mobile number"
              />
            </div>

            {registerPage && (<div className="flex flex-col gap-4">
            <div>
              <h1>Contact Number</h1>
              <input
                className="w-full mt-2 border border-[#E6E7EA] outline-none px-2 py-2.5 rounded"
                placeholder="Enter Mobile Number"
              />
            </div>
           </div>)}

            <div>
              <h1>Password</h1>
              <div className="w-full mt-2 border border-[#E6E7EA] px-2 py-2.5 rounded flex items-center">
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full outline-none"
                  placeholder="Enter Password"
                />
                <div
                  onClick={() => setShowPassword(!showPassword)}
                  className="cursor-pointer"
                >
                  {showPassword ? (
                    <MdOutlineRemoveRedEye size={20} />
                  ) : (
                    <FaEyeSlash size={20} />
                  )}
                </div>
              </div>
            </div>

            {registerPage && (<div>
              <h1>Confirm Password</h1>
              <div className="w-full mt-2 border border-[#E6E7EA] px-2 py-2.5 rounded flex items-center">
                <input
                  type={confirmShowPassword ? "text" : "password"}
                  className="w-full outline-none"
                  placeholder="Enter Password"
                />
                <div
                  onClick={() => setConfirmShowPassword(!confirmShowPassword)}
                  className="cursor-pointer"
                >
                  {confirmShowPassword ? (
                    <MdOutlineRemoveRedEye size={20} />
                  ) : (
                    <FaEyeSlash size={20} />
                  )}
                </div>
              </div>
            </div>)}

          </div>

          <div className="w-full mt-4 flex items-center justify-center gap-4 flex-col">
            <button className="px-36 py-2.5 rounded-4xl text-white bg-[#3777F6] cursor-pointer">
              {registerPage?"Get Started":"Login"}
            </button>
            <div onClick={()=>setRegisterPage(!registerPage)} className="flex items-center gap-2 cursor-pointer">
              <h4>{registerPage ? "Already a member?":"Don’t have an account?"}</h4>
              <h4 className="text-[#3777F6]">{registerPage?"Login Now":"Sign up"}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginRegisterPage;

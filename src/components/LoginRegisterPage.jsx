import React, { useState } from "react";
import cameraPhoto from "../assets/loginReg.jpg";
import logo from "../assets/Logo.jpg";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaEyeSlash } from "react-icons/fa";
import { loginApi, signUpApi } from "../common/SummaryApi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie'
import { useDispatch } from "react-redux";
import { addUser } from "../store/UserSlice";

const LoginRegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [confirmShowPassword, setConfirmShowPassword] = useState(false);
  const [registerPage, setRegisterPage] = useState(false);
  const [confirmPassword,setConfirmPassword] = useState('')

  const [registerPageData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
    mobileNumber: "",
  });

  const [loginData,setLoginData] = useState({
    email:'',
    password :''
  })

  const navigate = useNavigate()
  const dispatch = useDispatch()
   
  const handleChange = (e) => {
     const {name,value} = e.target
     setRegisterData((preve)=>{
      return{
        ...preve,
        [name]:value
      }
     })
  };

  const handleChangeLogin = (e)=>{
     const {name,value} = e.target
     setLoginData((preve)=>{
       return{
        ...preve,
        [name] : value
       }
     })
  }

  const handleRegister = async()=>{
    if(registerPageData.password === confirmPassword){
     try {
      const response = await fetch(`${signUpApi.api}`,{
      method : signUpApi.method,
      headers:{
        "Content-type" : "application/json"
      },
      body: JSON.stringify(registerPageData)
      })
      const result = await response.json()
      console.log(result);
      if(result.success){
        toast.success(result.message)
        setRegisterPage(false)
      }
      if(!result.success){
        toast.error(result.message)
      }
     } catch (error) {
      // console.log(error || error.message);
      toast.error(error || error.message)
     }
    }else{
      toast.warning('Please confirm your password')
    }
  }

  const handleLogin = async()=>{
    try {
      const response = await fetch(`${loginApi.api}`,{
        method: loginApi.method,
        headers :{
          'Content-type' : 'application/json'
        },
        body: JSON.stringify(loginData)
      })
      const result = await response.json()

      if(result.success){
        // console.log(result.data)
         toast.success('Logged in Successfull')
         Cookies.set('token',result.data, { expires:7 })
         dispatch(addUser({userId:result?.userDetail?._id,name:result?.userDetail?.name,email:result?.userDetail?.email,role:result?.userDetail?.role,mobile:result?.userDetail?.mobileNumber}))
         navigate('dashboard')
      }
      if(!result.success){
        toast.error(result.message || 'Something went wrong')
      }
    } catch (error) {
      toast.error(error || error.message)
    }
  }
  
  return (
    <div className="w-full h-screen flex flex-col lg:flex-row overflow-hidden">
      
      <div className="lg:w-[50%] w-full h-[300px] lg:h-full">
        <img className="w-full h-full object-cover" src={cameraPhoto} />
      </div>

      
      <div className="lg:w-[50%] w-full px-6 md:px-10 lg:px-16 py-4 overflow-y-auto">
        <div className="flex items-center gap-5 justify-center">
          <img className="w-14" src={logo} />
          <h1 className="font-bold text-[#3777F6] text-xl">App Distributor</h1>
        </div>

        <div className="mt-4 w-full border border-[#E6E7EA] rounded px-4 md:px-10 py-6 flex flex-col gap-4">
          
          <div>
            <h1 className="font-extralight text-4xl sm:text-5xl">
              {registerPage ? "Register" : "Login"}
            </h1>
            <h1 className="mt-6 text-sm md:text-lg">
              {registerPage
                ? "Get started with just a few details."
                : "Access your account to get started."}
            </h1>
          </div>

          
          {registerPage && (
            <div>
              <h1>Name</h1>
              <input
                className="w-full mt-4 border border-[#E6E7EA] outline-none px-2 py-2.5 rounded"
                placeholder="Enter Full Name"
                name="name"
                value={registerPageData.name}
                onChange={registerPage?handleChange:handleChangeLogin}
              />
            </div>
          )}

          <div>
            <h1>{registerPage ? "Email ID" : "Username"}</h1>
            <input
              className="w-full mt-2 border border-[#E6E7EA] outline-none px-2 py-2.5 rounded"
              placeholder="Enter email-id or mobile number"
              name="email"
              value={registerPage?registerPageData.email:loginData.email}
              onChange={registerPage?handleChange:handleChangeLogin}
            />
          </div>

          {registerPage && (
            <div>
              <h1>Contact Number</h1>
              <input
                className="w-full mt-2 border border-[#E6E7EA] outline-none px-2 py-2.5 rounded"
                placeholder="Enter Mobile Number"
                name="mobileNumber"
                value={registerPageData.mobileNumber}
                onChange={registerPage?handleChange:handleChangeLogin}
              />
            </div>
          )}

          {registerPage && (
            <div className="flex flex-col gap-1.5">
              <label htmlFor="role">Role</label>
              <select
                name="role"
                value={registerPageData.role}
                className="px-2 py-2.5 border outline-none border-[#E6E7EA]"
                id="role"
                onChange={registerPage?handleChange:handleChangeLogin}
              >
                <option value="">Select Role</option>
                <option value="Admin">Admin</option>
                <option value="Team Leader">Team Leader</option>
                <option value="Customer">Customer</option>
                <option value="Agent">Agent</option>
              </select>
            </div>
          )}

          {/* Password */}
          <div>
            <h1>Password</h1>
            <div className="w-full mt-2 border border-[#E6E7EA] px-2 py-2.5 rounded flex items-center">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full outline-none"
                placeholder="Enter Password"
                name="password"
                value={registerPage?registerPageData.password:loginData.password}
                onChange={registerPage?handleChange:handleChangeLogin}
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

          { /*Confirm password */}
          {registerPage && (
            <div>
              <h1>Confirm Password</h1>
              <div className="w-full mt-2 border border-[#E6E7EA] px-2 py-2.5 rounded flex items-center">
                <input
                  type={confirmShowPassword ? "text" : "password"}
                  className="w-full outline-none"
                  placeholder="Enter Password"
                  value={confirmPassword}
                  onChange={(e)=>setConfirmPassword(e.target.value)}
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
            </div>
          )}

          
          <div className="w-full mt-4 flex items-center justify-center gap-4 flex-col">
            <button onClick={registerPage ?handleRegister:handleLogin} className="w-full md:w-auto px-10 py-2.5 rounded-full text-white bg-[#3777F6] cursor-pointer">
              {registerPage ? "Get Started" : "Login"}
            </button>
            <div
              onClick={() => setRegisterPage(!registerPage)}
              className="flex items-center gap-2 cursor-pointer"
            >
              <h4>
                {registerPage ? "Already a member?" : "Don’t have an account?"}
              </h4>
              <h4 className="text-[#3777F6]">
                {registerPage ? "Login Now" : "Sign up"}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginRegisterPage;
import React from 'react';
import { GoHome } from "react-icons/go";
import app from '../assets/AppIcon1.svg';
import blueApp from '../assets/BlueApp.svg';
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosLogOut } from 'react-icons/io';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { logOutApi } from '../common/SummaryApi';
import Cookies from 'js-cookie'
import { useDispatch } from 'react-redux';
import { removeUser } from '../store/UserSlice';

const SideBar = () => {
  const location = useLocation();
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const isActive = (path) => location.pathname === path;

  const handleLogOut = async()=>{
    const token = Cookies.get('token')
    // console.log(token);
    
    if(!token){
      toast.error('Please log in')
      return
    }
    try {
      const response = await fetch(`${logOutApi.api}`,{
        method: logOutApi.method,
        headers : {
          'Content-type' : 'application/json',
          'Authorization' : `Bearer ${token}`
        },
        credentials : "include"
      })
      const result = await response.json()
      if(result.success){
         toast.success('Logout successful')
         Cookies.remove('token')
         navigate('/')
         dispatch(removeUser())
      }
      if(!result.success){
        toast.error('Logout cannot be performed')
      }
    } catch (error) {
      toast.error('Something went wrong')
      console.log(error || error.message);
      
    }
  } 

  return (
    <div className='pt-28 flex flex-col justify-between h-screen w-24 lg:w-28 xl:w-32 bg-white rounded-br-4xl'>
     
      <div className='flex flex-col items-center gap-8'>

        
        <Link to='/dashboard' className='relative w-full flex flex-col items-center'>
          {isActive('/dashboard') && (
            <div className='absolute left-0 top-0 h-full w-2 bg-blue-600 rounded-tr-md rounded-br-md' />
          )}
          <GoHome className={`lg:size-[44px] xl:size-[48px]`}  color={isActive('/dashboard') ? 'blue' : 'black'} />
          <h3 className={`${isActive('/dashboard') ? 'text-blue-700' : 'text-black'}`}>Home</h3>
        </Link>

        
        <Link to='/dashboard/application' className='relative w-full flex flex-col items-center'>
          {isActive('/dashboard/application') && (
            <div className='absolute left-0 top-0 h-full w-2 bg-blue-600 rounded-tr-md rounded-br-md' />
          )}
          <img src={isActive('/dashboard/application') ? blueApp : app} className='w-10 h-10 lg:w-12 lg:h-12' alt='App icon' />
          <h3 className={`${isActive('/dashboard/application') ? 'text-blue-700' : 'text-black'}`}>Apps</h3>
        </Link>

      </div>

      
      <div className='flex flex-col items-center gap-8 pb-8'>
        <div className='flex flex-col items-center'>
          <IoSettingsOutline className={`lg:size-[44px] xl:size-[48px]`} />
          <h3>Settings</h3>
        </div>
        <div onClick={handleLogOut} className='flex flex-col items-center cursor-pointer'>
          <IoIosLogOut className={`lg:size-[44px] xl:size-[48px]`} />
          <h3>Log Out</h3>
        </div>
      </div>
    </div>
  );
};

export default SideBar;

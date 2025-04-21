import React from 'react';
import { GoHome } from "react-icons/go";
import app from '../assets/AppIcon1.svg';
import blueApp from '../assets/BlueApp.svg';
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosLogOut } from 'react-icons/io';
import { Link, useLocation } from 'react-router-dom';

const SideBar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className='pt-28 flex flex-col justify-between h-screen w-24 bg-white rounded-br-4xl'>
     
      <div className='flex flex-col items-center gap-8'>

        
        <Link to='/dashboard' className='relative w-full flex flex-col items-center'>
          {isActive('/dashboard') && (
            <div className='absolute left-0 top-0 h-full w-2 bg-blue-600 rounded-tr-md rounded-br-md' />
          )}
          <GoHome size={48} color={isActive('/dashboard') ? 'blue' : 'black'} />
          <h3 className={`${isActive('/dashboard') ? 'text-blue-700' : 'text-black'}`}>Home</h3>
        </Link>

        
        <Link to='/dashboard/application' className='relative w-full flex flex-col items-center'>
          {isActive('/dashboard/application') && (
            <div className='absolute left-0 top-0 h-full w-2 bg-blue-600 rounded-tr-md rounded-br-md' />
          )}
          <img src={isActive('/dashboard/application') ? blueApp : app} className='w-12 h-12' alt='App icon' />
          <h3 className={`${isActive('/dashboard/application') ? 'text-blue-700' : 'text-black'}`}>Apps</h3>
        </Link>

      </div>

      
      <div className='flex flex-col items-center gap-8 pb-8'>
        <div className='flex flex-col items-center'>
          <IoSettingsOutline size={48} />
          <h3>Settings</h3>
        </div>
        <div className='flex flex-col items-center'>
          <IoIosLogOut size={48} />
          <h3>Log Out</h3>
        </div>
      </div>
    </div>
  );
};

export default SideBar;

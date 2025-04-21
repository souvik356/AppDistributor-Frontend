import React, { useEffect, useState } from 'react'
import { GoHome } from "react-icons/go";
import { useLocation } from 'react-router-dom';

const CompName = () => {
    const [compName,setCompName] = useState('')
    const location = useLocation()
    // console.log(location);
    const {pathname} = location
    // console.log(pathname);

    useEffect(()=>{
        if(pathname === '/dashboard'){
            setCompName('Dashboard')
        }
        else if(pathname === '/dashboard/application'){
            setCompName('Application')
        }
        else if(pathname === '/dashboard/release'){
            setCompName('Release')
        }
    },[pathname])
    
  return (
    <div className=' pt-22 h-50 flex items-center justify-between px-6 rounded-bl-4xl rounded-br-4xl bg-white'>
        <div>
           <h1 className='text-5xl font-semibold'>{compName}</h1>
        </div>
        <div>
            <GoHome size={80}/>
        </div>
    </div>
  )
}

export default CompName
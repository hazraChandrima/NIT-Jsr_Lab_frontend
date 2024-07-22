import React from 'react';
import Link from "next/link";
import { achievementsSubroutes } from '@/routes/navbarRoutes';

function AchievementsHoverDropdown() {
  return (
    <div className='text-white bg-black h-52 w-screen fixed left-0'>
      <div className='grid grid-cols-1 text-xl text-center mt-14 lg:grid-cols-3 gap-7'>
        {achievementsSubroutes.map((route, index) => (

          <Link key={index} href={route.href}>
            <div className='research-item flex items-center hover:text-blue-400 transition duration-500 mx-5 my-5'>
              <span className='flex-1'>{route.name}</span>
            </div>
          </Link>
        ))}
      </div>    
      </div>
  )
}

export default AchievementsHoverDropdown

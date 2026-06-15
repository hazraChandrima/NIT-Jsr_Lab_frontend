import React from 'react';
import Link from "next/link";
import { achievementsSubroutes } from '@/routes/navbarRoutes';

function AchievementsHoverDropdown() {
  return (
    <div className='bg-white shadow-lg rounded-md border border-gray-100 text-slate-700 w-56 flex flex-col py-2'>
      {achievementsSubroutes.map((route, index) => (
        <Link key={index} href={route.href}>
          <div className='flex items-center px-4 py-2 hover:bg-gray-100 transition duration-200 text-sm font-medium'>
            <span>{route.name}</span>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default AchievementsHoverDropdown

import React from 'react';
import Link from "next/link";
import { membersSubroutes } from '@/routes/navbarRoutes';

function MembersHoverDropdown() {
  return (
    <div className='text-white bg-black h-60 w-screen fixed left-0'>
      <div className='grid grid-cols-1  md:grid-cols-3 lg:grid-cols-5 gap-7'>
        {membersSubroutes.map((route, index) => (

          <Link key={index} href={route.href}>
            <div className='grayscale hover:grayscale-0 research-item flex items-center hover:text-blue-400 transition duration-500 mx-5 my-5'>
              <span className='flex-1'>{route.name}</span>
            </div>
          </Link>
        ))}
      </div>    </div>
  )
}

export default MembersHoverDropdown


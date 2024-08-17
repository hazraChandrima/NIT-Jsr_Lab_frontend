"use client";
import Image from 'next/image';
import React from 'react'
import Link from 'next/link'
import { useResearchSubroutes } from '@/routes/navbarRoutes'

function ResearchHoverDropdown() {

  const {researchSubroutes, loading}= useResearchSubroutes();

  return (

    <div className='research-dropdown text-white bg-black h-auto w-screen fixed left-0 p-4 px-5 pb-20 z-50'>

      <div className='grid grid-cols-1 mt-10 md:grid-cols-3 lg:grid-cols-5 gap-5'>

        {researchSubroutes.map((route, index) => (
          <Link key={index} href={route.href}>
            <div className='grayscale hover:grayscale-0 research-item flex items-center hover:text-sky-300 transition duration-300 mx-5 my-5'>
              <Image
              src={route.image} 
              alt={route.name} 
              width={100}
              height={100}
              className='h-24 w-24 object-cover mr-4' />
              <span className='flex-1'>{route.name}</span>
            </div>
          </Link>
        ))}

      </div>
    </div>
  )
}

export default ResearchHoverDropdown

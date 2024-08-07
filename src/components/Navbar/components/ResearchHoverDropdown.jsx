import React from 'react'
import Link from 'next/link'
import { researchSubroutes } from '@/routes/navbarRoutes'

const image = "https://image.slidesdocs.com/responsive-images/background/detailed-3d-rendering-of-laboratory-instruments-and-microscope-perfect-for-chemical-research-on-a-blue-backdrop-powerpoint-background_d56837dd13__960_540.jpg"

function ResearchHoverDropdown() {

  return (

    <div className='research-dropdown text-white bg-black h-auto w-screen fixed left-0 p-4 px-5 pb-20 z-50'>

      <div className='grid grid-cols-1 mt-10 md:grid-cols-3 lg:grid-cols-5 gap-5'>
        {researchSubroutes.map((route, index) => (
          
          <Link key={index} href={route.href}>
            <div className='grayscale hover:grayscale-0 research-item flex items-center hover:text-sky-300 transition duration-500 mx-5 my-5'>
              <img src={image} alt={route.name} className='h-24 w-24 object-cover mr-4' />
              <span className='flex-1'>{route.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default ResearchHoverDropdown

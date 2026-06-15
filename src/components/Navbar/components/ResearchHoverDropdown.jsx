"use client";
import Image from 'next/image';
import React from 'react'
import Link from 'next/link'
import { useResearchSubroutes } from '@/routes/navbarRoutes'

function ResearchHoverDropdown() {
  const { researchSubroutes, loading } = useResearchSubroutes();

  return (
    <div className='bg-white shadow-lg rounded-md border border-gray-100 text-slate-700 w-72 flex flex-col py-2'>
      {loading ? (
        <div className="px-4 py-3 text-sm text-gray-400">Loading...</div>
      ) : researchSubroutes.length > 0 ? (
        researchSubroutes.map((route, index) => (
          <Link key={index} href={route.href}>
            <div className='flex items-center px-4 py-2 hover:bg-gray-100 transition duration-200 text-sm font-medium'>
              {route.image && (
                <Image
                  src={route.image} 
                  alt={route.name} 
                  width={32}
                  height={32}
                  className='h-8 w-8 object-cover rounded-md mr-3' 
                />
              )}
              <span className='line-clamp-2'>{route.name}</span>
            </div>
          </Link>
        ))
      ) : (
        <div className="px-4 py-3 text-sm text-gray-400">No areas found</div>
      )}
    </div>
  )
}

export default ResearchHoverDropdown

"use client";
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
// import { researchSubroutes } from '@/routes/navbarRoutes'

function ResearchHoverDropdown() {

  const [researchData, setResearchData]= useState([]);
  const [loading, setLoading]= useState(true);
  const apiURL= `https://cozy-captain-963d285ad5.strapiapp.com/api/research-sections?populate[Thumbnail]=*`;

  useEffect(()=> {
    const getResearchData= async() =>{
      try{ 
      const response = await fetch(apiURL);
      const result= await response.json();
      if(result.data){
        setResearchData(result.data);
      }
    }
    catch(error) {
      console.error("Error fetching thumbnail:", error);
    }
    finally{
      setLoading(false);
    }
    };
    getResearchData();
  },[]);

  return (

    <div className='research-dropdown text-white bg-black h-auto w-screen fixed left-0 p-4 px-5 pb-20 z-50'>

      <div className='grid grid-cols-1 mt-10 md:grid-cols-3 lg:grid-cols-5 gap-5'>

        {researchData.map((route, index) => (
          <Link key={index} href={`/Research/${route.id}`}>
            <div className='grayscale hover:grayscale-0 research-item flex items-center hover:text-sky-300 transition duration-300 mx-5 my-5'>
              <Image
              src={route.attributes.Thumbnail?.data?.attributes?.url} 
              alt={route.attributes.ResearchTitle} 
              width={100}
              height={100}
              className='h-24 w-24 object-cover mr-4' />
              <span className='flex-1'>{route.attributes.ResearchTitle}</span>
            </div>
          </Link>
        ))}

      </div>
    </div>
  )
}

export default ResearchHoverDropdown

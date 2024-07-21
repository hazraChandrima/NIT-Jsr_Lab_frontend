// pages/Members.js
"use client"
import React from 'react';
import ProgramWiseCard from '../../_components/ProgramWiseCards';
import StaffCard from '../../_components/StaffCard';

const members = [
  {
    name: 'Makiko Tazaki',
    role: 'hsgdjsykgvdhask   sdausgdla gsuda sdassda a sdda bjhb',
    imageUrl: 'https://images.squarespace-cdn.com/content/v1/530806bbe4b01885d314f575/1425441723794-480XZ60GYSYM6HMFO61D/image-asset.jpeg'
  },
  {
    name: 'Makiko Tazaki',
    role: 'hsgdjsykgvdhask   sdausgdla gsuda sdassda a sdda bjhb',
    imageUrl: 'https://images.squarespace-cdn.com/content/v1/530806bbe4b01885d314f575/1425441723794-480XZ60GYSYM6HMFO61D/image-asset.jpeg'
  },
  {
    name: 'Makiko Tazaki',
    role: 'hsgdjsykgvdhask   sdausgdla gsuda sdassda a sdda bjhb',
    imageUrl: 'https://images.squarespace-cdn.com/content/v1/530806bbe4b01885d314f575/1425441723794-480XZ60GYSYM6HMFO61D/image-asset.jpeg'
  },
  {
    name: 'Makiko Tazaki',
    role: 'hsgdjsykgvdhask   sdausgdla gsuda sdassda a sdda bjhb',
    imageUrl: 'https://images.squarespace-cdn.com/content/v1/530806bbe4b01885d314f575/1425441723794-480XZ60GYSYM6HMFO61D/image-asset.jpeg'
  },
  {
    name: 'Makiko Tazaki',
    role: 'hsgdjsykgvdhask   sdausgdla gsuda sdassda a sdda bjhb',
    imageUrl: 'https://tse2.mm.bing.net/th?id=OIP.nOTkSuCQ1DUPod4CWqirmgHaLG&pid=Api&P=0&h=180'
  },
  
  // Add more members as needed
];

const Members = () => {
  return (
    <main className="min-h-screen w-full flex flex-col items-center bg-gray-800 py-20 px-5">
      <div className='flex flex-col items-start max-w-[1256px]'>
        {/* //Faculty */}
      <div className=' mb-20'>
       {/* //heading */}
      <div className='mb-10'>
        <h1 className='text-2xl text-white'>Faculty</h1>
        <div className='w-full h-[2px] bg-white'>
          <div className='w-[15%] h-full bg-blue-500'>
          </div>
        </div>
        </div>
      <div className=" w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {members.map((member, index) => (
          <StaffCard
            key={index}
            name={member.name}
            role={member.role}
            imageUrl={member.imageUrl}
          />
        ))}
      </div>
      </div>

      {/* //Reserch and Administrative staff */}
      <div className=' mb-20'>
       {/* //heading */}
      <div className='mb-10'>
        <h1 className='text-2xl text-white'>Reserch and Administrative staff </h1>
        <div className='w-full h-[2px] bg-white'>
          <div className='w-[15%] h-full bg-blue-500'>
          </div>
        </div>
        </div>
      <div className=" w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {members.map((member, index) => (
          <StaffCard
            key={index}
            name={member.name}
            role={member.role}
            imageUrl={member.imageUrl}
          />
        ))}
      </div>
      </div>
     
      </div>
      
    </main>
  );
};

export default Members;

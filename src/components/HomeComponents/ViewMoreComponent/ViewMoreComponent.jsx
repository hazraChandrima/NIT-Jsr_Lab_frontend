"use client";

import React, { useState } from 'react';

const ViewMore = ({ width }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <span
      className="flex flex-col w-fit items-start cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative font-sans text-xl mt-5 font-light text-right">
        <span className="mr-2 text-black ">View More</span>
        <span className="text-2xl text-black">{hovered ? '-' : '+'}</span>
      </div>
      <div
        className="relative h-[2px] rounded-xl overflow-hidden bg-slate-200 mt-4 mb-7 lg:mb-3 "
        style={{ width: `${width}px` }}
      >
        
        <div
          className={`absolute rounded-xl top-0 left-0 h-full transition-all duration-300 ${hovered ? 'w-full bg-blue-500' : 'w-1/5 bg-blue-500'}`}
        ></div>
      </div>
      
    </span>
  );
};

export default ViewMore;

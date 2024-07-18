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
      <div className="relative mt-2 text-center text-white">
        <span className="mr-2">View More</span>
        <span className="text-xl font-bold">{hovered ? '-' : '+'}</span>
      </div>
      <div
        className="relative h-1 rounded-xl overflow-hidden  bg-white mt-4 "
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

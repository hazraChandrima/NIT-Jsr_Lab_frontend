"use client"

import React from 'react';

import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import useAnimationHook from '@/hooks/AnimationHooks/moveUp';


function NewsCard() {

  const{ref, controls}= useAnimationHook();


  return (
    <motion.div
    ref={ref}
    initial={{ opacity: 0, y: 50 }} // Start slightly below with 0 opacity
    animate={controls}
    className='px-5'>
    <div className='flex flex-col sm:flex-row p-4 gap-4 items-center bg-slate-900 rounded-lg shadow-md text-white'>
      <div className='flex gap-4 items-center'>
        <p>7/12/2024</p>
        <div className='flex flex-col gap-2'>
          <button className="bg-blue-500 text-white px-4 py-2 rounded w-max">View More</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Gallery</button>
        </div>
      </div>
      <div className='flex-grow '>
        <p className='line-clamp-6 sm:line-clamp-4 overflow-hidden'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur saepe non, eaque fugiat quod eveniet quaerat quam, sit ratione tenetur quo aliquam. Corporis dolores dolor neque inventore, a optio veritatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt in, et rem sunt provident neque accusamus vitae esse similique quod harum quae tenetur, optio reiciendis iusto perspiciatis debitis tempora deserunt!
        </p>
      </div>
     
    </div>
    <hr className='h-[3px] w-full bg-black text-red-100' />
    </motion.div>
  );
}

export default NewsCard;

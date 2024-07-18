"use client"

import React from 'react';

import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import useAnimationHook from '@/hooks/AnimationHooks/moveUp';


function ProgramWiseCard() {

  const{ref, controls}= useAnimationHook();


  return (
    <motion.div
    ref={ref}
    initial={{ opacity: 0, y: 50 }} // Start slightly below with 0 opacity
    animate={controls}
    className=' flex flex-col'>
     
    <div className='flex flex-col text-white gap-1'>

    <div className='flex flex-col sm:flex-row gap-1 sm:gap-7 text-left rounded-lg shadow-md text-white'>
      
      {/* //name */}
      <p> Regmi Loknath </p>

      {/* //admisson */}
      <p>D1 April Admission</p>
     
    </div>
     {/* //Detail */}
     <p>(JST/Chiba University) All direction scholarship PhD Student / the Partnership Program Lorem ipsum dolor, sit amet consectetur  mollitia!</p>
    </div>
    <hr className='h-[2px] w-full bg-black text-red-100' />
    </motion.div>
  );
}

export default ProgramWiseCard;

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
    className=' flex flex-col text-slate-500 hover:shadow-2xl shadow-lg '>
     
    <div className='flex flex-col gap-2'>

    <div className='flex flex-col sm:flex-row gap-1 sm:gap-7 text-left rounded-sm shadow-sm'>
      
      {/* //name */}
      <p> Regmi Loknath </p>

      {/* //admisson */}
      <p>D1 April Admission</p>
     
    </div>
     {/* //Detail */}
     <p>(JST/Chiba University) All direction scholarship PhD Student / the Partnership Program Lorem ipsum dolor, sit amet consectetur  mollitia!</p>
    </div>
    <hr className='h-[1px] w-full bg-slate-300' />
    </motion.div>
  );
}

export default ProgramWiseCard;

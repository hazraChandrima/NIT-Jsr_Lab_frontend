"use client"

import React from 'react';
import { motion } from 'framer-motion';
import useAnimationHook from '@/hooks/AnimationHooks/moveUp';

const StaffCard = ({ name, role, imageUrl }) => {

  const { ref, controls } = useAnimationHook();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      className='bg-white rounded-sm shadow-lg overflow-hidden'
    >
      {/* //image */}
      {/* <div className='h-[288px] sm:h-[324px] md:h-[216px] overflow-hidden'>
        <img src={imageUrl} alt={name} className='h-full w-full object-cover' />
      </div> */}
      <div className='overflow-hidden flex items-center justify-center'>
        <img src={imageUrl} alt={name} className='h-full w-auto' />
      </div>
      <div className='p-3 bg-sky-500 w-[85%] relative bottom-4 text-white'>
        <p className='text-lg font-light truncate'>{role}</p>
      </div>
      <div className='px-3'>
        <hr className='bg-slate-500 h-[1px]' />
      </div>
      <div className='px-4 py-2 '>
      <div className='border-l-4 border-sky-500 px-2'>
      <p className='text-black font-sans text-left text-xl truncate'>{name}</p>
      </div>
      </div>
    </motion.div>
  );
};

export default StaffCard;

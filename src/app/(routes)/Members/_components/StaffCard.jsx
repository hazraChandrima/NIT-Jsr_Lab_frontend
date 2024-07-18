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
      className='bg-slate-300 rounded-lg shadow-lg overflow-hidden'
    >
      {/* //image */}
      {/* <div className='h-[288px] sm:h-[324px] md:h-[216px] overflow-hidden'>
        <img src={imageUrl} alt={name} className='h-full w-full object-cover' />
      </div> */}
      <div className='h-[288px] sm:h-[324px] md:h-[216px] overflow-hidden flex items-center justify-center'>
        <img src={imageUrl} alt={name} className='h-full w-auto' />
      </div>
      {/* //info */}
      <div className='p-3 bg-blue-500 w-[85%] relative bottom-4 text-white'>
        <p className='text-lg font-semibold  truncate'>{role}</p>
      </div>
      <div className='px-3'>
        <hr className='bg-slate-800 h-[2px]' />
      </div>
      {/* //name */}
      <div className='px-4 py-2 '>
      <div className='border-l-4 border-blue-500 px-2'>
      <p className='text-black text-left text-xl font-bold truncate'>{name}</p>
      </div>
      </div>
    </motion.div>
  );
};

export default StaffCard;

// components/StaffCard.js
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
      className='bg-white rounded-lg shadow-lg overflow-hidden'
    >
      {/* //image */}
      <div className='h-[288px] sm:h-[324px] md:h-[216px] overflow-hidden'>
        <img src={imageUrl} alt={name} className='h-full w-full object-cover' />
      </div>
      {/* //info */}
      <div className='p-4 bg-slate-100'>
        <p className='text-lg font-semibold text-gray-800 truncate'>{role}</p>
      </div>
      {/* //name */}
      <div className='px-4 py-2 bg-blue-500'>
        <p className='text-white text-center text-xl font-bold'>{name}</p>
      </div>
    </motion.div>
  );
};

export default StaffCard;

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import useAnimationHook from '@/hooks/AnimationHooks/moveUp';
import Link from 'next/link';

function NewsCard({ date, title, description, viewMoreLink, galleryLink }) {
  const { ref, controls } = useAnimationHook();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }} // Start slightly below with 0 opacity
      animate={controls}
      className='px-5'
    >
      <Link href={`/News/${title}`}>
      <div className='flex flex-col sm:flex-row p-4 gap-4 items-center bg-slate-900 rounded-lg shadow-md text-white'>
        <div className='flex gap-4 items-center'>
          <p>{date}</p>
          <div className='flex flex-col gap-2'>
            <Link href={viewMoreLink} className="bg-blue-500 text-white px-4 py-2 rounded w-max">View More</Link>
            <Link href={galleryLink} className="bg-blue-500 text-white px-4 py-2 rounded">Gallery</Link>
          </div>
        </div>
        <div className='flex-grow'>
          <h2 className='text-lg font-bold'>{title}</h2>
          <p className='line-clamp-6 sm:line-clamp-4 overflow-hidden'>
            {description}
          </p>
        </div>
      </div>
      <hr className='h-[3px] w-full bg-black text-red-100' />
      </Link>
    </motion.div>
  );
}

export default NewsCard;

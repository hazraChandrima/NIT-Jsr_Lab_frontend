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
      className='px-5 py-5 text-xl font-sans font-light'
    >
     
      <div className='flex flex-col sm:flex-row p-4 gap-4 items-center bg-transparent text-gray-600 rounded-lg shadow-md'>
        <div className='flex gap-4 items-center'>
          <p>{date}</p>
          <div className='flex flex-col gap-2'>
            <Link href={viewMoreLink} className="bg-transparent border text-xl text-center border-gray-500 px-4 py-2 rounded w-max">View More</Link>
            <Link href={galleryLink} className="bg-transparent border text-xl text-center border-gray-500  px-4 py-2 rounded">Gallery</Link>
          </div>
        </div>
        <Link href={`/News/${title}`}>
        <div className='flex-grow hover:text-sky-500 transition duration-300 '>
          <h2 className='text-3xl mb-4 text-sky-800 '>{title}</h2>
          <p className='line-clamp-6 sm:line-clamp-4 overflow-hidden'>
            {description}
          </p>
        </div>
        </Link>
      </div>
      {/* <hr className='h-[1px] w-full bg-black text-transparent' /> */}
    
    </motion.div>
  );
}

export default NewsCard;

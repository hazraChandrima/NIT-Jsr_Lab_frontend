"use client"

import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const TeamComponent = ({ title, description, imageUrl }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.3, // Trigger when 50% of the component is in view
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
      });
    }
  }, [controls, inView]);

  return (
    
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }} // Start slightly below with 0 opacity
      animate={controls}
      className="relative h-[345px] w-full"
      
    >
      <img src={imageUrl} className='h-full w-full filter grayscale hover:filter-none transition-all duration-400'  />
      <div className="absolute top-0 right-0 p-4 text-slate-900">
        <h2 className="text-lg font-bold">{title}</h2>
      </div>
      <div className="absolute bottom-0 left-0 p-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">View More</button>
      </div>
    </motion.div>
  );
};

export default TeamComponent;
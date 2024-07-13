"use client"

import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ViewMore from '../ViewMoreComponent/ViewMoreComponent';
import useAnimationHook from '@/hooks/AnimationHooks/moveUp';

// const TeamComponent = ({ title, description, imageUrl }) => {
//   const controls = useAnimation();
//   const [ref, inView] = useInView({
//     triggerOnce: true, // Only trigger once
//     threshold: 0.3, // Trigger when 50% of the component is in view
//   });

//   useEffect(() => {
//     if (inView) {
//       controls.start({
//         opacity: 1,
//         y: 0,
//         transition: { duration: 0.5 },
//       });
//     }
//   }, [controls, inView]);

//   return (
    
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, y: 50 }} // Start slightly below with 0 opacity
//       animate={controls}
//       className="relative h-[345px] w-full"
      
//     >
//       <img src={imageUrl} className='h-full w-full filter grayscale hover:filter-none transition-all duration-400'  />
//       <div className="absolute top-0 right-0 p-4 text-slate-900">
//         <h2 className="text-lg font-bold">{title}</h2>
//       </div>
//       <div className="absolute bottom-0 left-0 p-4">
//         <ViewMore width={70}/>
//       </div>
//     </motion.div>
//   );
// };

// export default TeamComponent;

const TeamComponent = ({ title, description, imageUrl }) => {
  const { ref, controls } = useAnimationHook();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      className="relative h-[345px] w-full"
    >
      <img src={imageUrl} className='h-full w-full filter grayscale hover:filter-none transition-all duration-400' />
      <div className="absolute top-0 right-0 p-4 text-slate-900">
        <h2 className="text-lg font-bold">{title}</h2>
      </div>
      <div className="absolute bottom-0 left-0 p-4">
        <ViewMore width={70} />
      </div>
    </motion.div>
  );
};

export default TeamComponent;
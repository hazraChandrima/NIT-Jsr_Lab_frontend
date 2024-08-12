"use client";
// import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ViewMore from "../ViewMoreComponent/ViewMoreComponent";
import Link from "next/link";

const TeamComponent = ({ title, description, link, imageUrl}) => {
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
    <Link href={link}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }} // Start slightly below with 0 opacity
        animate={controls}
        className="relative h-[345px] w-full filter grayscale hover:filter-none transition-all transition-duration-500"
      >
        <img
          src={imageUrl}
          alt="Research Image"
          // width={250}
          // height={500}
          className="h-full object-cover w-full "
        />

        <div className="absolute top-2 left-0 p-4 text-slate-900">
          <h2 className="text-3xl lg:text-2xl font-light font-sans text-white">{title}</h2>
        </div>
        <div className="absolute bottom-0 right-3 ">
          {/* <button className="bg-blue-500 text-white px-4 py-2 rounded">View More</button> */}
          <ViewMore width={90} />
        </div>
      </motion.div>
    </Link>
  );
};

export default TeamComponent;

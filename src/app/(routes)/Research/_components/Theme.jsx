"use client";
import React from "react"; // Ensure React is imported
import { motion } from "framer-motion";
import useAnimationHook from "@/hooks/AnimationHooks/moveUp";

const Theme = ({ themes, heading }) => {
  const { ref, controls } = useAnimationHook();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }} // Start slightly below with 0 opacity
      animate={controls}
      className="mb-16 box-border"
    >
      <div className="w-11/12 max-w-screen-xl mx-auto my-5 box-border text-center">
        <div className="font-serif text-xl box-border">
          <h2 className="mb-10">{heading}</h2>
          <hr className="mb-10 mx-auto w-[150px] border-box border-gray-800 border-t-[1px] "></hr>
        </div>
        <h3 className="mb-3 text-lg font-bold  text-sky-900 opacity-80">THEME</h3>
        <p className="text-slate-500 opacity-90 font-bold text-sm lg:text-base">
          {themes && themes.length > 0 ? (
            themes.map((theme, index) => (
              <React.Fragment key={index}>
                <span>{theme}</span>
                <br />
                <br />
              </React.Fragment>
            ))
          ) : (
            <span>No themes available</span>
          )}
        </p>
      </div>
    </motion.div>
  );
};

export default Theme;

"use client";
import React from "react";
import { motion } from "framer-motion";
import useAnimationHook from "@/hooks/AnimationHooks/moveUp";

const Theme = ({ themes, heading }) => {
  const { ref, controls } = useAnimationHook();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="mb-16"
    >
      <div className="w-11/12 max-w-screen-xl mx-auto my-5 text-center backdrop-blur-md bg-white/80 rounded-lg shadow-lg p-6 md:p-8">
        <div className="font-serif text-xl">
          <h2 className="mb-6 text-xl md:text-xl font-light text-sky-950">
            {heading}
          </h2>
          <hr className="mb-6 mx-auto w-24 border-t-2 border-sky-500" />
        </div>

        <h3 className="mb-4 text-lg font-bold text-sky-900 opacity-80">THEME</h3>

        <div className="text-slate-600 opacity-90 font-medium text-sm lg:text-base">
          {themes && themes.length > 0 ? (
            themes.map((theme, index) => (
              <React.Fragment key={index}>
                <p className="mb-3">{theme}</p>
                {index !== themes.length - 1 && <hr className="my-3 border-gray-200" />}
              </React.Fragment>
            ))
          ) : (
            <p className="text-slate-500">No themes available</p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Theme;
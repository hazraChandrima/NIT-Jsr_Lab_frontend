"use client";
import { motion } from "framer-motion";
import useAnimationHook from "@/hooks/AnimationHooks/moveUp";

const Theme = () => {
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
          <h2 className="mb-10">
            Development of a portable Lab-on-a-CD impedance analyzer for
            label-free early diagnosis of malaria in resource-limited settings
          </h2>
          <hr className="mb-10 mx-auto w-[150px] border-box border-gray-800 border-t-[1px] "></hr>
        </div>
        <h3 className="mb-3 text-lg font-bold opacity-65">THEME</h3>
        <p className="text-blue-500 font-bold text-sm lg:text-base">
          <font>Skin & Fat Phantom Manufacturing</font>
          <br />
          <br />
          <font>
            Coplanar Sensor Image Reconstruction Algorithm and Spectroscopic
            Analysis　
          </font>
          <br />
          <br />
          <font>
            Micro Coplanar Sensor and Data Acquisition System Development
          </font>
          <br />
          <br />
        </p>
      </div>
    </motion.div>
  );
};

export default Theme;

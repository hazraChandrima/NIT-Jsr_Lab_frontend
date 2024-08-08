import React from "react";
import { motion } from "framer-motion";
import useAnimationHook from "@/hooks/AnimationHooks/moveUp";
import Button from "./Button";
import Image from "next/image";
import image_1 from "../assests/ResearchImages/img_1.jpg";
import image_2 from "../assests/ResearchImages/img_2.jpg";

function ResearchSummary({ summary }) {
  const { ref, controls } = useAnimationHook();
  const { ref: ref2, controls: controls2 } = useAnimationHook();
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }} // Start slightly below with 0 opacity
      animate={controls}
      className="w-full pt-10 pb-4 flex flex-wrap justify-around items-start "
    >
      <div className="flex-[1_1_330px] h-full text-white p-4 m-2 max-width-[600px] relative">
        <div className="w-full h-[20rem] mb-5">
          <Image src={image_1} alt="Image 1" />
        </div>
        <div className="w-[60%]  ml-[5rem] ">
          <Image src={image_2} alt="Image 2" />
        </div>
      </div>
      <div className="flex-[1_1_330px] items-start text-white p-4 m-2 max-width-[600px] ">
      <h3 className="text-xl pb-6 text-md text-blue-900 tracking-wide opacity-95 font-bold">
          RESEARCH SUMMARY AND AIM
        </h3>
        <p className="text-sm text-gray-700 tracking-wider pb-6">{summary}</p>
        <Button text={"Back to Research list"} href={"/Research"} />
      </div>
    </motion.div>
  );
}

export default ResearchSummary;

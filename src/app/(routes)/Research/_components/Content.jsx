import React from "react";
import Image from "next/image";
import image_1 from "../assests/ResearchImages/img_1.jpg";
import image_2 from "../assests/ResearchImages/img_2.jpg";
import Button from "./Button";
import { motion } from "framer-motion";
import useAnimationHook from "@/hooks/AnimationHooks/moveUp";

const Content = ({ content }) => {
  const { ref, controls } = useAnimationHook();
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }} // Start slightly below with 0 opacity
      animate={controls}
      className="flex flex-wrap justify-around items-start "
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
        <h3 className="font-serif pb-6 text-md text-gray-700  tracking-wide font-bold">
          Research Content
        </h3>
        <p className="text-sm text-gray-700 tracking-wider pb-6">{content}</p>
        <Button text={"Research Contents PDF"} href={"/"} />
      </div>

      <div className="w-full h-[40vw] bg-blue-500 relative  lg:max-h-[400px] xl:max-h-[400px] py-4 my-4">
        <Image
          src={image_2}
          alt="Image 2"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </motion.div>
  );
};

export default Content;

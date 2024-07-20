import React from "react";
import Image from "next/image";
import image_1 from "../assests/ResearchImages/img_1.jpg";
import image_2 from "../assests/ResearchImages/img_2.jpg";
import Button from "./Button";
import { motion } from "framer-motion";
import useAnimationHook from "@/hooks/AnimationHooks/moveUp";

const Content = () => {
  const { ref, controls } = useAnimationHook();
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }} // Start slightly below with 0 opacity
      animate={controls}
      className="flex flex-wrap justify-around items-start bg-blue-100"
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
          Electrophysiological monitoring of skin and fat
        </h3>
        <p className="text-sm text-gray-700 tracking-wider pb-6">
          Skin and fat are the first barrier of the human body to protect, sense
          and react to external stimuli and conditions. Moreover, it has been
          found that the health status can be indirectly known by looking at the
          electrophysiological status. To observe the vital status of the human
          body, in this respect, electrophysiological monitoring of skin and fat
          plays an important role. In accordance with the sustainable
          development goals of Society 5.0, we set our research objectives as
          follows: (1) Development of micro coplanar sensors and data
          acquisition systems for electronic skin devices; (2) Coplanar sensor
          image reconstruction algorithm and spectroscopic analysis for
          electrophysiological skin fat status prediction based on conformal
          mapping and distribution of relaxation time; (3) Skin fat biomaterial
          phantom fabrication based on long-term durable material recipe.
        </p>
        <Button />
      </div>

      <div className="w-full h-[40vw] bg-blue-500 relative lg:max-h-[400px] lg:max-h-[400px] xl:max-h-[400px] py-4 my-4">
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

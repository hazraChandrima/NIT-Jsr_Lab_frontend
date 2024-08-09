import React from "react";
import Image from "next/image"; // Keep this import for next/image
import Button from "./Button";
import { motion } from "framer-motion";
import useAnimationHook from "@/hooks/AnimationHooks/moveUp";

const Content = ({ link, text, imageUrl, thumbnailImage }) => {
  const { ref, controls } = useAnimationHook();
  const mainImage = imageUrl[0];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      className="flex flex-wrap justify-around items-start "
    >
      <div className="flex-[1_1_330px] h-full text-white p-4 m-2 max-width-[600px] relative">
        <div className="w-full mb-5">
          <Image
            src={mainImage.url} // Use the renamed variable here
            alt="Research Image"
            width={mainImage.width}
            height={mainImage.height}
            layout="responsive"
          />
        </div>
      </div>
      <div className="flex-[1_1_330px] items-start text-white p-4 m-2 max-width-[600px] ">
        <h3 className="pb-6 text-xl text-blue-900 opacity-95 tracking-wide font-bold">
          RESEARCH CONTENT
        </h3>
        <p className="text-sm text-gray-700 tracking-wider pb-6">{text}</p>
        <Button text={"Research Contents PDF"} href={link || "/"} />
      </div>

      <div className="w-full h-[40vw] bg-blue-500 relative lg:max-h-[400px] xl:max-h-[400px] py-4 my-4">
        <Image
          src={thumbnailImage.url}
          alt={`Content Image `}
          layout="fill"
          // width={600}
          // height={400}
          className=""
        />
      </div>
    </motion.div>
  );
};

export default Content;

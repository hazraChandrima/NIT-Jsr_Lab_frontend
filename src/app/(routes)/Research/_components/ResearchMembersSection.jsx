import React from "react";
import { motion } from "framer-motion";
import useAnimationHook from "@/hooks/AnimationHooks/moveUp";
import image_2 from "../assests/ResearchImages/img_2.jpg";
import Image from "next/image";

function ResearchMembers() {
  const { ref, controls } = useAnimationHook();
  console.log(ref);
  const { ref: ref2, controls: controls2 } = useAnimationHook();
  console.log(ref2);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }} // Start slightly below with 0 opacity
      animate={controls}
      className="w-full pt-4"
    >
      <div className="text-center w-[90vw] mx-auto  border-2 border-transparent border-b-slate-200 pb-16">
        <h3 className=" text-xl font-bold mb-6 opacity-65 ">MEMBER</h3>
        <p className="mb-6">
          <span className=" opacity-50  text-sm sm:text-base md:text-sm lg:text-sm">
            Marlin Ramadhan BAIDILLAH Ph.D (Leader, Postdoctoral Researcher)
          </span>{" "}
          <br />
          <br />
          <span className=" opacity-50 text-sm sm:text-base md:text-sm lg:text-sm">
            Ridwan WICAKSONO, Ph.D (Co-Leader, Postdoctoral Researcher)
          </span>{" "}
          <br />
          <br />
          <span className=" opacity-50 text-sm sm:text-base md:text-sm lg:text-sm">
            Isnan Nur RIFAI (D3),Kiagus Aufa IBRAHIM (D3)
          </span>{" "}
          <br />
          <br />
          <span className=" opacity-50 text-sm sm:text-base   md:text-sm lg:text-sm">
            Daichi FURUKAWA (B4)
          </span>
          <br />
          <br />
        </p>
        <motion.div
          ref={ref2}
          initial={{ opacity: 0, y: 50 }} // Start slightly below with 0 opacity
          animate={controls2}
          className="flex justify-center"
        >
          <Image src={image_2} alt="Image 2" />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default ResearchMembers;

import React from "react";
import { motion } from "framer-motion";
import useAnimationHook from "@/hooks/AnimationHooks/moveUp";
// import Image from "next/image";

function ResearchMembers({ membersList }) {
  const { ref, controls } = useAnimationHook();
  const { ref: ref2, controls: controls2 } = useAnimationHook();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }} // Start slightly below with 0 opacity
      animate={controls}
      className="w-full pt-4"
    >
      <div className="text-center w-[90vw] mx-auto border-2 border-transparent border-b-slate-200 ">
        <h3 className="text-xl font-bold mb-6 opacity-80 text-sky-900">
          MEMBERS
        </h3>
        <div className="mb-6">
          {membersList && membersList.length > 0 ? (
            membersList.map((member, index) => (
              <React.Fragment key={index}>
                <span className="opacity-50 text-sm sm:text-base md:text-sm lg:text-sm">
                  {member}
                </span>
                <br />
                <br />
              </React.Fragment>
            ))
          ) : (
            <span className="opacity-50 text-sm sm:text-base md:text-sm lg:text-sm">
              No members listed
            </span>
          )}
        </div>
        <motion.div
          ref={ref2}
          initial={{ opacity: 0, y: 50 }} // Start slightly below with 0 opacity
          animate={controls2}
          className="flex justify-center"
        ></motion.div>
      </div>
    </motion.div>
  );
}

export default ResearchMembers;

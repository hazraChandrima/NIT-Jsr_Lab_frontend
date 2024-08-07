import React from "react";
import { motion } from "framer-motion";
import useAnimationHook from "@/hooks/AnimationHooks/moveUp";

function ResearchPapers({ papers }) {
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
        <h3 className="text-xl font-bold mb-6 opacity-80 text-sky-900">PAPERS PUBLISHED</h3>
        <div className="mb-6">
          {papers && papers.length > 0 ? (
            papers.map((paper, index) => (
              <React.Fragment key={index}>
                <span className="opacity-50 text-sm sm:text-base md:text-sm lg:text-sm">
                  {paper.title} - {paper.authors.join(", ")} ({paper.year}){" "}
                  <br />
                  Published in: {paper.publishedIn}
                </span>
                <br />
                <br />
              </React.Fragment>
            ))
          ) : (
            <span className="opacity-50 text-sm sm:text-base md:text-sm lg:text-sm">
              No papers listed
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default ResearchPapers;

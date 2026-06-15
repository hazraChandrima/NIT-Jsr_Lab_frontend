"use client";
import React from "react";
import { motion } from "framer-motion";
import useAnimationHook from "@/hooks/AnimationHooks/moveUp";

function ResearchPapers({ papers }) {
  const { ref, controls } = useAnimationHook();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full pt-4 backdrop-blur-md bg-white/80 rounded-lg shadow-lg p-6 md:p-8 mx-auto my-10 max-w-[1256px]"
    >
      <div className="text-center border-b-2 border-slate-200 pb-6">
        <h3 className="text-2xl font-bold text-sky-900 opacity-90">
          PAPERS PUBLISHED
        </h3>
      </div>

      <div className="mt-6">
        {papers && papers.length > 0 ? (
          papers.map((paper, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="mb-6"
            >
              <p className="text-sm sm:text-base text-slate-600 opacity-90">
                <span className="font-semibold">{paper.title}</span>
                {paper.description && ` - ${paper.description}`}
              </p>
              {index !== papers.length - 1 && (
                <hr className="my-4 border-gray-200" />
              )}
            </motion.div>
          ))
        ) : (
          <p className="text-sm sm:text-base text-slate-600 opacity-90">
            No papers listed
          </p>
        )}
      </div>
    </motion.div>
  );
}

export default ResearchPapers;
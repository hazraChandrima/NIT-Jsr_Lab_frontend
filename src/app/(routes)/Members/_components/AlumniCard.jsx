"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import useAnimationHook from "@/hooks/AnimationHooks/moveUp";
import Link from "next/link";

const AlumniCard = ({ name, role, imageUrl, id }) => {
  const { ref, controls } = useAnimationHook();

  return (
    <Link href={`/Members/PassOutStudents/${id}`}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        className="bg-white  rounded-sm hover:shadow-2xl shadow-lg overflow-hidden cursor-pointer"
      >
        <div className="overflow-hidden flex items-center justify-center">
          <Image 
          src={imageUrl} 
          alt={name} 
          width={300}
          height={150}
          className="h-52 w-80 object-cover" />
        </div>
        <div className="p-3 bg-sky-600 w-[85%] relative bottom-4 text-white">
          <p className="text-lg font-light truncate">{role}</p>
        </div>
        <div className="px-3">
          <hr className="bg-slate-500 h-[1px]" />
        </div>
        <div className="px-4 py-2">
          <div className="border-l-4 border-sky-600 px-2">
            <p className="text-black font-sans text-left text-xl truncate">
              {name}
            </p>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default AlumniCard;

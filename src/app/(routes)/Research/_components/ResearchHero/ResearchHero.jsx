"use client";
import Image from "next/image";
import "./Hero.css";
import { useEffect, useState } from "react";
import img from "../../assests/HeroImg/bg2.png";
import useAnimationHook from "@/hooks/AnimationHooks/moveUp";
import { motion } from "framer-motion";

export default function Hero({ title, subtitle }) {
  const { ref, controls } = useAnimationHook();
  //   const [index, updateIndex] = useState(0);
  //   useEffect(() => {
  //     setTimeout(() => {
  //       let i = index + 1 >= props.images.length ? 0 : index + 1;
  //       updateIndex(i);
  //       console.log(i);
  //     }, 5000);
  //   }, [index]);

  return (
    <div style={{ height: "82vh", overflow: "clip", position: "relative" }}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }} // Start slightly below with 0 opacity
        animate={controls}
        className="textContainer heroText mb-10"
      >
        <div className="subtext ">{title}</div>

        <div className="subtextSmall">{subtitle}</div>
      </motion.div>
      <Image
        src={img}
        className="img"
        style={{
          width: "100%",
          animation: "zoom 5s infinite alternate",
        }}
      ></Image>
    </div>
  );
}

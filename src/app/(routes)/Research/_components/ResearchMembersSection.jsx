import React from "react";
import { motion } from "framer-motion";
import useAnimationHook from "@/hooks/AnimationHooks/moveUp";
import image_2 from "../assests/ResearchImages/img_2.jpg";
import Image from "next/image";

function ResearchMembers() {
  const { ref, controls } = useAnimationHook();
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }} // Start slightly below with 0 opacity
      animate={controls}
      className="w-full pt-4"
    >
      <div className="text-center w-[90vw] mx-auto mb-16">
        <h3 className=" text-xl font-bold mb-6 opacity-65 ">MEMBER</h3>
        <p classname=" ">
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
        <div className="flex justify-center">
          <Image src={image_2} alt="Image 2" />
        </div>
      </div>
    </motion.div>
  );
}
//   return (
//     <div className="container mx-auto px-4">
//       <h2 className="text-2xl font-bold text-gray-800 mb-4">MEMBER</h2>
//       <ul className="list-disc pl-5">
//         <li className="mb-2">
//           <span className="font-medium">Marlin Ramadhan BAIDILLAH Ph.D</span>{" "}
//           (Leader, Postdoctoral Researcher)
//         </li>
//         <li className="mb-2">
//           <span className="font-medium">Ridwan WICAKSONO, Ph.D</span>{" "}
//           (Co-Leader, Postdoctoral Researcher)
//         </li>
//         <li className="mb-2">
//           <span className="font-medium">Isnan Nur RIFAI</span> (D3),{" "}
//           <span className="font-medium">Kiagus Aufa IBRAHIM</span> (D3)
//         </li>
//         <li>
//           <span className="font-medium">Daichi FURUKAWA</span> (B4)
//         </li>
//       </ul>
//     </div>
//   );
// }

export default ResearchMembers;

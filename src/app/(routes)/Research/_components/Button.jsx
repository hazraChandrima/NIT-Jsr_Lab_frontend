import { motion } from "framer-motion";
import useAnimationHook from "@/hooks/AnimationHooks/moveUp";
const Button = ({ text, href }) => {
  const { ref, controls } = useAnimationHook();
  return (
    // <button className="transition duration-500 border-2 border-blue-500 ease-in-out bg-blue-500 text-white hover:bg-transparent hover:text-blue-500   py-2 px-4">
    //   Search Contents PDF
    // </button>
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }} // Start slightly below with 0 opacity
      animate={controls}
      className=" hover:border-[1px] max-w-[500px] bg-opacity-80 hover:border-cyan-600 ease-in-out bg-cyan-600 text-white hover:bg-transparent hover:text-cyan-600 py-2 px-4 mx-10 my-10 "
    >
      <a href={href} target="_blank" rel="noopener noreferrer">
        {text}
      </a>
    </motion.div>
  );
};

export default Button;

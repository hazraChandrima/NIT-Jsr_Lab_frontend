"use client";
import { useTransform, useScroll, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ImageCard from "./ImageCard";
import Image from "next/image";
import groupPhoto from "@/assets/images/group_photo.png";

function Gallery() {
  const { scrollYProgress } = useScroll();
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  const distance = useTransform(scrollYProgress, [0, 1], [1500, 0]);
  const imageUrl =
    "https://tomocloud.xsrv.jp/takei-lab/wp-content/uploads/2023/01/img_03.jpg";
  const imageUrl2 =
    "https://pbs.twimg.com/media/GMFspXnasAAFGXs?format=jpg&name=large";
  return (
    <>
    <div className=" md:mt-36  h-52 w-full bg-contain bg-slate-100 md:mt-30 mt-16 ">
      
      </div>
      <div ref={ref} className="w-screen h-[125vw] bg-white relative">
        <ImageCard height={35} width={24} left={20} top={12} imgSrc={imageUrl} />
        <ImageCard height={33} width={24} left={10} top={75} imgSrc={imageUrl} />
        <ImageCard height={50} width={35} left={60} top={50} imgSrc={imageUrl} />

        <motion.div
          className="w-screen h-[120vh] bg-transparent"
          style={{
            y: distance,
            opacity: 1,
          }}
        >
          <div className="w-screen relative">
            <ImageCard
              height={15}
              width={20}
              left={0}
              top={-40}
              imgSrc={imageUrl2}
            />
            <ImageCard
              height={13}
              width={27}
              left={70}
              top={-35}
              imgSrc={imageUrl2}
            />
            <ImageCard
              height={30}
              width={29}
              left={45}
              top={-10}
              imgSrc={imageUrl2}
            />
          </div>
        </motion.div>

      </div>
      <div className="h-fit w-full bg-contain ">
        <div className="w-dvw h-vh relative">
          <Image
            src={groupPhoto}
          />
        </div>
      </div>
    </>
  );
}

export default Gallery;

// function Gallery() {
//     const images = [
//         { height: 35, width: 24, left: 20, top: 12, imgSrc: "https://breezynotes.com/wp-content/uploads/2017/03/image-goes-here-billboard-700x366.jpg" },
//         { height: 33, width: 24, left: 10, top: 75, imgSrc: "https://breezynotes.com/wp-content/uploads/2017/03/image-goes-here-billboard-700x366.jpg" },
//         { height: 50, width: 35, left: 60, top: 50, imgSrc: "https://breezynotes.com/wp-content/uploads/2017/03/image-goes-here-billboard-700x366.jpg" }
//     ];

//     return (
//         <div className="w-screen h-[40rem] bg-white relative overflow-hidden">
//             {images.map((image, index) => (
//                 <ImageCard
//                     key={index}
//                     height={image.height}
//                     width={image.width}
//                     left={image.left}
//                     top={image.top}
//                     imgSrc={image.imgSrc}
//                 />
//             ))}
//         </div>
//     );
// }
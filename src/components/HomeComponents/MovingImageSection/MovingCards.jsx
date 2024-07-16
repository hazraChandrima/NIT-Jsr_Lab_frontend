// // components/ImageCard.js
// "use client";

// import { useEffect, useRef } from 'react';

// const ImageCard = ({ src, alt, speed }) => {
//   const ref = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       const element = ref.current;
//       if (element) {
//         const rect = element.getBoundingClientRect();
//         const offset = window.pageYOffset;
//         const yPos = (offset - rect.top) * speed;
//         element.style.transform = `translateY(${Math.min(Math.max(yPos, -window.innerHeight), window.innerHeight)}px)`;
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, [speed]);

//   return (
//     <div
//       ref={ref}
//       className="relative w-full h-[300px] overflow-hidden"
//     >
//       <img
//         src={src}
//         alt={alt}
//         className="w-full h-full object-cover filter grayscale hover:filter-none transition-all duration-500"
//       />
//     </div>
//   );
// };

// export default ImageCard;

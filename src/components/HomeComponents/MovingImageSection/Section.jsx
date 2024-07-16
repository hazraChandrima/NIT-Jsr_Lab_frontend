// import ImageCard from "./MovingCards";

// const ImageSection = () => {
//   const movingImages = [
//     { src: 'https://tse2.mm.bing.net/th?id=OIP.Z_PIeIRDajXPmZHROt-T_QHaEK&pid=Api&P=0&h=180', alt: 'Moving Image 1', speed: 0.1 },
//     { src: 'https://tse2.mm.bing.net/th?id=OIP.Z_PIeIRDajXPmZHROt-T_QHaEK&pid=Api&P=0&h=180', alt: 'Moving Image 2', speed: 0.2 },
//     { src: 'https://tse2.mm.bing.net/th?id=OIP.Z_PIeIRDajXPmZHROt-T_QHaEK&pid=Api&P=0&h=180', alt: 'Moving Image 3', speed: 0.3 },
//   ];

//   const staticImages = [
//     { src: 'https://tse2.mm.bing.net/th?id=OIP.Z_PIeIRDajXPmZHROt-T_QHaEK&pid=Api&P=0&h=180', alt: 'Static Image 1', className: 'top-0 left-0' },
//     { src: 'https://tse2.mm.bing.net/th?id=OIP.Z_PIeIRDajXPmZHROt-T_QHaEK&pid=Api&P=0&h=180', alt: 'Static Image 2', className: 'bottom-0 right-0' },
//   ];

//   return (
//     <div className="relative min-h-screen bg-gray-800 text-white">
//       {staticImages.map((image, index) => (
//         <div
//           key={index}
//           className={`absolute ${image.className} w-[150px] h-[150px] bg-cover bg-center`}
//           style={{ backgroundImage: `url(${image.src})` }}
//         >
//           <img
//             src={image.src}
//             alt={image.alt}
//             className="w-full h-full object-cover filter grayscale hover:filter-none transition-all duration-500"
//           />
//         </div>
//       ))}

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
//         {movingImages.map((image, index) => (
//           <ImageCard
//             key={index}
//             src={image.src}
//             alt={image.alt}
//             speed={image.speed}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ImageSection;

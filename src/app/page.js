"use client";

import NewsSection from "@/components/HomeComponents/NewsComponents/NewsSection";
import ParallaxImageComponent from "@/components/HomeComponents/ParallaxSection/ParallaxImageComponent";
import Gallery from "@/components/HomeComponents/Gallery/GallerySection";
import Hero from "@/components/Hero/hero";
import img1 from "../assets/images/lab1.png";
import img2 from "../assets/images/lab2.png";
import ResearchSection from "@/app/(routes)/Research/_components/ResearchSection/ResearchSection";
import bg from '@/assets/images/bg.jpg';
import Navbar from "@/components/Navbar/navbar";
export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      
      <Navbar/>
      <Hero images={[img1, img2]} transition={true} height="100vh">
        <div className="font-sans px-5 lg:text-8xl md:text-7xl text-5xl text-white backdrop-blur-sm bg-black/20 p-4 rounded-lg">
          NIT JAMSHEDPUR
        </div>
      </Hero>

      <div className="flex flex-col items-center w-full overflow-hidden">
        <div
          className="w-full h-auto flex items-center justify-center bg-cover bg-center py-16"
          style={{
            backgroundImage: `url(${bg.src})`,
          }}
        >
          <div className="max-w-[1256px] w-full px-4">
            <NewsSection />
          </div>
        </div>
        {/* <ParallaxImageComponent /> */}
        <ResearchSection />
        <Gallery />
      </div>
    </div>
  );
}
import MovingCardsSection from "@/components/HomeComponents/MovingImageSection/Section";
import NewsSection from "@/components/HomeComponents/NewsComponents/NewsSection";
import ParallaxImageComponent from "@/components/HomeComponents/ParallaxSection/ParallaxImageComponent";
import TeamSection from "@/components/HomeComponents/TeamSection/Section";
import Gallery from "@/components/HomeComponents/Gallery/GallerySection";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";
import Hero from "@/components/Hero/hero";

export default function Home() {
  return (
    <div className="bg-slate-700 flex flex-col items-center w-full">
      <Navbar/>
      
      <Hero/>
      <div className="w-full h-auto flex items-center justify-center bg-cover relative "
        style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg')" }}>
          <div className="max-w-[1256px] w-full px-4">
            <NewsSection />
            </div>
      </div>
      <ParallaxImageComponent />
      <div className="w-full h-auto flex items-center justify-center bg-cover relative"
        style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg')" }}>
      <div className="max-w-[1256px] w-full px-4">
      <TeamSection />
      </div>
      </div>
      
      <Gallery />
      <Footer/>
     
      
    </div>
  );
}

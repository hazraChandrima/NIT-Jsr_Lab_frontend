import Gallery from "@/components/Gallery/GallerySection";
import NewsSection from "@/components/HomeComponents/NewsComponents/NewsSection";
import ParallaxImageComponent from "@/components/HomeComponents/ParallaxSection/ParallaxImageComponent";
import TeamSection from "@/components/HomeComponents/TeamSection/Section";


import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="h-dvh grid grid-cols-1 bg-slate-800">
     
    </div>
    <NewsSection/>
    <ParallaxImageComponent/>
    <TeamSection/>
      <Gallery/>
    </>
  );
}

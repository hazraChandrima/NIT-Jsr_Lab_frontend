import MovingCardsSection from "@/components/HomeComponents/MovingImageSection/Section";
import NewsSection from "@/components/HomeComponents/NewsComponents/NewsSection";
import ParallaxImageComponent from "@/components/HomeComponents/ParallaxSection/ParallaxImageComponent";
import TeamSection from "@/components/HomeComponents/TeamSection/Section";
import Gallery from "@/components/HomeComponents/Gallery/GallerySection";
import Navbar from "@/components/Navbar/navbar";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar/>
      <div className="h-dvh w-dvw bg-slate-800"></div>
      <NewsSection />
      <ParallaxImageComponent />
      <TeamSection />
      <Gallery />
      <Footer/>
    </>
  );
}

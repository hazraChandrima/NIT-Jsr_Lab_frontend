import MovingCardsSection from "@/components/HomeCompPritam/MovingImageSection/Section";
import NewsSection from "@/components/HomeCompPritam/NewsComponents/NewsSection";
import ParallaxImageComponent from "@/components/HomeCompPritam/ParallaxSection/ParallaxImageComponent";
import TeamSection from "@/components/HomeCompPritam/TeamSection/Section";
import Gallery from "@/components/HomeCompPritam/Gallery/GallerySection";
import Navbar from "@/components/Navbar/Navbar";
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

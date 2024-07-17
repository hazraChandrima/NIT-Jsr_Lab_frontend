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
    <>
      <Navbar/>
      <Hero/>
      <NewsSection />
      <ParallaxImageComponent />
      <TeamSection />
      <Gallery />
      <Footer/>
    </>
  );
}

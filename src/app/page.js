import MovingCardsSection from "@/components/HomeCompPritam/MovingImageSection/Section";
import NewsSection from "@/components/HomeCompPritam/NewsComponents/NewsSection";
import ParallaxImageComponent from "@/components/HomeCompPritam/ParallaxSection/ParallaxImageComponent";
import TeamSection from "@/components/HomeCompPritam/TeamSection/Section";
import Gallery from "@/components/HomeCompPritam/Gallery/GallerySection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="h-dvh bg-slate-800"></div>
      <NewsSection />
      <ParallaxImageComponent />
      <TeamSection />
      <Gallery />
    </>
  );
}

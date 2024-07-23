import MovingCardsSection from "@/components/HomeComponents/MovingImageSection/Section";
import NewsSection from "@/components/HomeComponents/NewsComponents/NewsSection";
import ParallaxImageComponent from "@/components/HomeComponents/ParallaxSection/ParallaxImageComponent";
import TeamSection from "@/components/HomeComponents/TeamSection/Section";
import Gallery from "@/components/HomeComponents/Gallery/GallerySection";
import Image from "next/image";
import Hero from "@/components/Hero/hero";
import img1 from "../assets/images/lab1.png";
import img2 from "../assets/images/lab2.png";

export default function Home() {
  return (
    <div className="w-full overflow-hidden">

      <Hero images={[img1, img2]} transition={true} height="100vh">
        <div className="font-sans px-5 lg:text-8xl md:text-7xl text-5xl ">NIT JAMSHEDPUR</div>
      </Hero>

      <div className="bg-sky-100 flex flex-col items-center w-full overflow-hidden">

        <div
          className="w-full h-auto flex items-center justify-center bg-cover relative "
          style={{
            backgroundImage:
              "url('https://visme.co/blog/wp-content/uploads/2017/07/50-Beautiful-and-Minimalist-Presentation-Backgrounds-08.jpg')"
          }}
        >
          <div className="max-w-[1256px] w-full px-4">
            <NewsSection />
          </div>
        </div>

        <ParallaxImageComponent />
        
        <div
          className="w-full h-auto flex items-center justify-center bg-cover relative"
          // style={{
          //   backgroundImage:
          //     "url('https://visme.co/blog/wp-content/uploads/2017/07/50-Beautiful-and-Minimalist-Presentation-Backgrounds-08.jpg')",
          // }}
        >
          <div className="max-w-[1256px] w-full px-4">
            <TeamSection />
          </div>
        </div>

        <Gallery />
      </div>
    </div>
  );
}

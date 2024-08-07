import MovingCardsSection from "@/components/HomeComponents/MovingImageSection/Section";
import NewsSection from "@/components/HomeComponents/NewsComponents/NewsSection";
import ParallaxImageComponent from "@/components/HomeComponents/ParallaxSection/ParallaxImageComponent";
import Gallery from "@/components/HomeComponents/Gallery/GallerySection";
import Image from "next/image";
import Hero from "@/components/Hero/hero";
import img1 from "../assets/images/lab1.png";
import img2 from "../assets/images/lab2.png";
import TeamComponent from "@/components/HomeComponents/TeamSection/Cards";
import researchData from "./(routes)/Research/data";


export default function Home() {
  return (
    <div className="w-full overflow-hidden">

      <Hero images={[img1, img2]} transition={true} height="100vh">
        <div className="font-sans px-5 lg:text-8xl md:text-7xl text-5xl ">NIT JAMSHEDPUR</div>
      </Hero>

      <div className=" flex flex-col items-center w-full overflow-hidden">

        <div
          className="w-full h-auto flex items-center justify-center bg-cover bg-right relative "
          style={{
            backgroundImage:
              "url('https://media.istockphoto.com/id/1497687876/photo/abstract-blur-inside-of-hospital-interior-background-for-design-display-ads-banner-concept.jpg?s=612x612&w=0&k=20&c=NeTuGOBnDLFikZesPLyyoxwDAOhc2iqHJHkq0eBc91k=')"
          }}
        >
          <div className="max-w-[1256px] w-full px-4">
            <NewsSection />
          </div>
        </div>

        <ParallaxImageComponent />
        
        <div
          className="w-full h-auto flex items-center justify-center bg-right bg-cover relative"
          // style={{
          //   backgroundImage:
          //     "url('https://media.istockphoto.com/id/1497687876/photo/abstract-blur-inside-of-hospital-interior-background-for-design-display-ads-banner-concept.jpg?s=612x612&w=0&k=20&c=NeTuGOBnDLFikZesPLyyoxwDAOhc2iqHJHkq0eBc91k=')",
          // }}
        >
          <div className="max-w-[1256px] w-full px-14 py-5">
          <h1 className="text-6xl font-sans text-sky-900 font-light text-right relative mb-5 mt-10 right-2">
          RESEARCH{" "}
        </h1>
        <h2 className="text-2xl font-sans text-slate-700 font-light text-right relative mb-20 right-3">
          {" "}
          - research projects
        </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1">
          {researchData.map((item) => (
            <TeamComponent
              key={item.id}
              title={item.title}
              link={`/Research/${item.id}`}
              description={item.description}
              imageUrl={item.imageUrl}
            />
          ))}
          </div>
          </div>
        </div>

        <Gallery />
      </div>
    </div>
  );
}

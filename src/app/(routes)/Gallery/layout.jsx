"use client"
import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import ResearchHero from "../Research/_components/ResearchHero/ResearchHero";
import img from "../Research/assests/HeroImg/bg2.png";
import { useParams } from "next/navigation";

export default function Gallery({ children }) {
    const { id } = useParams();

    return (
      <div>
        <ResearchHero title={"Gallery"} subtitle={id} imageUrl={img} />
        <div className="text-sm sm:text-base bg-white">
          <BreadCrumbs title="Gallery" />
          {children}
        </div>
      </div>
    );
}

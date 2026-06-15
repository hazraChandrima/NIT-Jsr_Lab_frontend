"use client"
import ResearchHero from "../Research/_components/ResearchHero/ResearchHero";
import img from "../Research/assests/HeroImg/bg2.png";
import { usePathname } from "next/navigation";

export default function AchievementsLayout({ children }) {
    const pathname = usePathname();
    const pathSegments = pathname.split("/").filter(Boolean);
    const subtitle = pathSegments[pathSegments.length - 1]?.replace(/-/g, " ") || "";

    return (
        <div>
            <ResearchHero
                title={"Achievements"}
                imageUrl={img}
            />
            {children}
        </div>
    )
}

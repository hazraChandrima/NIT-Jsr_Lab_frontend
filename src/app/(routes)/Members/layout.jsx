"use client"
import ResearchHero from "../Research/_components/ResearchHero/ResearchHero";
import Navigation from "./_components/Navigation";
import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import img from "../Research/assests/HeroImg/bg2.png";
import { usePathname } from "next/navigation";

export default function MemberLayout({ children }) {
    const pathname = usePathname();
    const pathSegments = pathname.split("/").filter(Boolean);
    const title = pathSegments[pathSegments.length - 1]?.replace(/-/g, " ") || "Members";

    return (
        <div>
            <ResearchHero
                title={title.charAt(0).toUpperCase() + title.slice(1)}
                subtitle={title.charAt(0).toUpperCase() + title.slice(1)}
                imageUrl={img}
            />

            <BreadCrumbs title="Members"/>
            <div className="text-sm sm:text-base bg-white flex flex-col items-center">
                <Navigation />
                {children}
            </div>
        </div>
    );
}

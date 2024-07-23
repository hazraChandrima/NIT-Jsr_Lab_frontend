import ResearchHero from "../Research/_components/ResearchHero/ResearchHero";
import Navigation from "./_components/Navigation";
import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";

export default function MemberLayout({children}) {
    return (
    <div>
        <ResearchHero/>
        <div className="text-sm sm:text-base bg-white">
        <BreadCrumbs/>
        <Navigation/>
        {children}
        </div>
    </div>
    )
}

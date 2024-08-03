import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import ResearchHero from "../Research/_components/ResearchHero/ResearchHero";


export default function AboutLayout({ children }) {
    return (
        <div>
        <ResearchHero/>
        <div className="text-sm sm:text-base bg-white">
        <BreadCrumbs/>
        {children}
        </div>
    </div>
    )
}

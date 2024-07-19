
import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import ResearchHero from "../Research/_components/ResearchHero";


export default function NewsLayout({children}) {
    return <div>
        <ResearchHero/>
        <div className="absolute">
        <BreadCrumbs/>
        </div>
        {children}</div>
}

import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import ResearchHero from "../Research/_components/ResearchHero";

export default function NewsLayout({children}) {
    return <div>
        <ResearchHero/>
        <BreadCrumbs/>
        {children}</div>
}

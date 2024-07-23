
import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import ResearchHero from "../Research/_components/ResearchHero/ResearchHero";

export default function NewsLayout({ children }) {
    return (
        <div className="overflow-x-hidden">
            <ResearchHero />
            {children}
        </div>
    )
}

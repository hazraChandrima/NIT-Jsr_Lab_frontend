
import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import ResearchHero from "../Research/_components/ResearchHero/ResearchHero";
import Footer from "@/components/Footer/Footer";


export default function NewsLayout({children}) {
    return <div className="overflow-x-hidden">
        <ResearchHero/>
        {children}
        <Footer/>
        </div>
}

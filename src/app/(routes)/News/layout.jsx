
import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import ResearchHero from "../Research/_components/ResearchHero";
import Footer from "@/components/Footer/Footer";


export default function NewsLayout({children}) {
    return <div>
        <ResearchHero/>
        {children}
        <Footer/>
        </div>
}

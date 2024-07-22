
import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import ResearchHero from "../Research/_components/ResearchHero/ResearchHero";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/navbar"
import { MobileNavbar } from "@/components/MobileNavbar/mobileNavbar"

export default function NewsLayout({ children }) {

    return (
        <div className="overflow-x-hidden">
            <MobileNavbar/>
            <Navbar/>
            <ResearchHero />
            {children}
            <Footer />
        </div>
    )
}

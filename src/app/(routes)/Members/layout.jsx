import Navbar from "@/components/Navbar/navbar"
import ResearchHero from "../Research/_components/ResearchHero/ResearchHero";
import Footer from "@/components/Footer/Footer"
import Navigation from "./_components/Navigation";
import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import { MobileNavbar } from "@/components/MobileNavbar/mobileNavbar";

export default function MemberLayout({children}) {
    return (
    <div>
        <MobileNavbar/>
        <Navbar/>
        <ResearchHero/>
        <div className="text-sm sm:text-base bg-white">
        <BreadCrumbs/>
        <Navigation/>
        {children}
        <Footer/>
        </div>
    </div>
    )
}

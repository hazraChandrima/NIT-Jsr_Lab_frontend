import Navbar from "@/components/Navbar/navbar"
import ResearchHero from "../Research/_components/ResearchHero/ResearchHero";
import Footer from "@/components/Footer/Footer"
import Navigation from "./_components/Navigation";
import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";

export default function MemberLayout({children}) {
    return (
    <div className="overflow-x-hidden ">
        <Navbar/>
        <ResearchHero/>
        <div className="text-sm sm:text-base bg-slate-800">
        <BreadCrumbs/>
        <Navigation/>
        {children}
        <Footer/>
        </div>
    </div>
    )
}

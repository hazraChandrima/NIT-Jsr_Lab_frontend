import Navbar from "@/components/Navbar/navbar"
import { MobileNavbar } from "@/components/MobileNavbar/mobileNavbar"
import Footer from "@/components/Footer/Footer"
import ResearchHero from "../Research/_components/ResearchHero/ResearchHero";


export default function AboutLayout({ children }) {
    
    return (
        <div>
            <MobileNavbar />
            <Navbar />
            <ResearchHero />
            {children}
            <Footer />
        </div>
    )
}

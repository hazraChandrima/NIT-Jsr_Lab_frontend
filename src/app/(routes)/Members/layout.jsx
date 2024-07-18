import Navbar from "@/components/Navbar/navbar"
import Footer from "@/components/Footer/Footer"

export default function MemberLayout({children}) {
    return (
    <div>
        <Navbar/>
        {children}
        <Footer/>
    </div>
    )
}

import Navbar from "@/components/Navbar/navbar"
import { MobileNavbar } from "@/components/MobileNavbar/mobileNavbar"
import Footer from "@/components/Footer/Footer"

export default function Page() {
    return (
      <div>
        <MobileNavbar/>
        <Navbar/>
        Access
        <Footer/>
      </div>
    )
  }
import ResearchHero from "./_components/ResearchHero";
import Breadcrumbs from "./_components/Breadcrumbs";
import Theme from "./_components/Theme";
import Navbar from "@/components/Navbar/navbar";
import Footer from "@/components/Footer/Footer";

export default function ResearchLayout({ children }) {
  return (
    <div>
      <Navbar/>
      <ResearchHero />
      <Breadcrumbs />
      <Theme />
      {children}
      <Footer/>
    </div>
  );
}

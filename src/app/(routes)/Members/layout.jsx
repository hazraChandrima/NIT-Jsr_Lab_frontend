import ResearchHero from "../Research/_components/ResearchHero/ResearchHero";
import Navigation from "./_components/Navigation";
import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";

export default function MemberLayout({ children }) {
  return (
    <div>
      <ResearchHero />
      <BreadCrumbs />
      <div className="text-sm sm:text-base bg-white flex flex-col items-center">
        <Navigation/>
        {children} 
      </div>
    </div>
  );
}

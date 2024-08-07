import TeamSection from "@/components/HomeComponents/TeamSection/Section";
import ResearchSection from "./ResearchSection/ResearchSection";
import ResearchHero from "./_components/ResearchHero/ResearchHero";


export default function Page() {
  return (
    <div>
      <div className="w-full h-auto mb-20 flex items-center justify-center bg-cover relative">
        <div className=" w-full">
          {/* <TeamSection /> */}
          <ResearchHero/>
          <ResearchSection />
        </div>
      </div>
    </div>
  );
}

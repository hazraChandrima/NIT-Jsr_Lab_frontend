import TeamSection from "@/components/HomeComponents/TeamSection/Section";
import ResearchSection from "./ResearchSection/ResearchSection";
import ResearchHero from "./_components/ResearchHero/ResearchHero";


export default function Page() {
  return (
    <div>
      <div className="w-full h-auto flex items-center justify-center bg-cover relative">
        <div className="max-w-[1256px] w-full">
          {/* <TeamSection /> */}
          <ResearchHero/>
          <ResearchSection />
        </div>
      </div>
      Research Main page
    </div>
  );
}

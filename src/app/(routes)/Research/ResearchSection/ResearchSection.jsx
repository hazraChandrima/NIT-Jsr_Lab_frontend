import TeamComponent from "@/components/HomeComponents/TeamSection/Cards";
import researchData from "../data";
const researchListItems = {};

export default function ResearchSection() {
  return (
    <main className="min-h-screen w-full ">
      <div className="min-h-dvh text-white px-7 py-5">
        <h1 className="text-6xl font-sans text-sky-900 font-light text-right relative mb-5 mt-10 right-2">
          RESEARCH{" "}
        </h1>
        <h2 className="text-2xl font-sans text-slate-700 font-light text-right relative mb-20 right-3">
          {" "}
          - research projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1">
          {researchData.map((item) => (
            <TeamComponent
              key={item.id}
              title={item.title}
              link={`/Research/${item.id}`}
              description={item.description}
              imageUrl={item.imageUrl}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

"use client";
import { useEffect, useState } from "react";
import TeamComponent from "@/components/HomeComponents/TeamSection/Cards"; // Import the utility function
import { fetchData } from "@/utils/fetchData";

export default function ResearchSection() {
  const [researchData, setResearchData] = useState([]);
  const apiUrl =
    "https://cozy-captain-963d285ad5.strapiapp.com/api/research-sections";

  useEffect(() => {
    const getResearchData = async () => {
      const data = await fetchData(apiUrl);
      console.log(data);
      if (data && data.data) {
        setResearchData(data.data);
      }
    };

    getResearchData();
  }, []);

  return (
    <main className="min-h-screen w-full ">
      <div className="min-h-dvh text-white px-16 py-5">
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
              title={item.attributes.ResearchTitle}
              link={`/Research/${item.id}`}
              description={item.attributes.ResearchTitle}
              // imageUrl={item.attributes.imageUrl}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

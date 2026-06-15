"use client";
import { useEffect, useState } from "react";
import TeamComponent from "@/components/HomeComponents/TeamSection/Cards";
import { fetchData } from "@/utils/fetchData";

export default function ResearchSection() {
  const [researchData, setResearchData] = useState([]);
  const [loading, setLoading] = useState(true);

  const apiURL =
    "/api/research-sections?populate[Thumbnail]=*";

  useEffect(() => {
    const getResearchData = async () => {
      try {
        const response = await fetch(apiURL);
        const result = await response.json();
        if (result.data) {
          setResearchData(result.data);
        }
      } catch (error) {
        console.error("Error fetching thumbnail:", error);
      } finally {
        setLoading(false);
      }
    };
    getResearchData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-2xl text-sky-900 font-light">Loading...</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen w-full bg-gray-50">
      <div className="min-h-dvh px-4 sm:px-8 lg:px-16 py-10">

        <div className="text-right mb-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-sans text-sky-900 font-light">
            RESEARCH
          </h1>
          <h2 className="text-xl sm:text-2xl font-sans text-slate-700 font-light mt-2">
            - research projects
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {researchData.map((item) => (
            <TeamComponent
              key={item.id}
              title={item.attributes.ResearchTitle}
              link={`/Research/${item.id}`}
              description={item.attributes.ResearchTitle}
              imageUrl={item.attributes.Thumbnail?.data?.attributes?.url}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
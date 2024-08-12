"use client";
import { useEffect, useState } from "react";
import TeamComponent from "@/components/HomeComponents/TeamSection/Cards"; 
import { fetchData } from "@/utils/fetchData";

export default function ResearchSection() {
  const [researchData, setResearchData] = useState([]);
  const[loading,setLoading]=useState(true);
  const apiURL =
    "https://cozy-captain-963d285ad5.strapiapp.com/api/research-sections?populate[Thumbnail]=*";

  useEffect(() => {
    const getResearchData= async() =>{
      try{ 
      const response = await fetch(apiURL);
      const result= await response.json();
      if(result.data){
        setResearchData(result.data);
      }
    }
    catch(error) {
      console.error("Error fetching thumbnail:", error);
    }
    finally{
      setLoading(false);
    }
    };
    getResearchData();
  },[]);

  if (loading) {
    return <p>Loading...</p>;
  }

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
              imageUrl={item.attributes.Thumbnail?.data?.attributes?.url}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

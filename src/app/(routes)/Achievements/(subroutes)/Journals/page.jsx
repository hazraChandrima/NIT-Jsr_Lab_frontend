"use client";
import { useEffect, useState } from "react";
import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";

export default function JournalsPage() {
  const [researchData, setResearchData] = useState({});
  const [years, setYears] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("https://cozy-captain-963d285ad5.strapiapp.com/api/achievements");
      const data = await response.json();

      // Sort the data by Date in descending order
      const sortedData = data.data.sort((a, b) => new Date(b.attributes.Date) - new Date(a.attributes.Date));

      // Group the sorted data by year
      const groupedData = sortedData.reduce((acc, item) => {
        const year = new Date(item.attributes.Date).getFullYear();
        if (!acc[year]) {
          acc[year] = [];
        }
        acc[year].push(item);
        return acc;
      }, {});

      setResearchData(groupedData);
      setYears(Object.keys(groupedData).sort((a, b) => b - a)); // Sort years in descending order
    };

    getData();
  }, []);

  return (
    <div className='flex flex-col bg-white py-5 min-h-dvh text-slate-600 items-center'>
      <BreadCrumbs />
      <h1 className='text-5xl font-sans font-light relative text-center text-sky-900'>JOURNALS</h1>
      {
        years.map((year, i) => (
          <div className="journals items-center " key={i}>
            <h1 className="text-3xl font-sans font-light text-sky-950 my-8 text-center" key={i}>
              Published on {year}
            </h1>
            {researchData[year].map((data) => (
              <div key={data.id} className=" mb-12 bg-slate-50 rounded-sm mx-auto px-8 max-w-4xl flex flex-col sm:flex-row items-center sm:items-start py-8 w-4/5 ">
                <div className=" w-full mx-4 md:w-3/4 " key={data.id}>
                  <p className="text-center md:text-left font-bold" key={data.id}>{data.attributes.Title}</p>
                  <br/>
                  <p className="text-center md:text-left" key={data.id}>{data.attributes.Description}</p>
                  <br/>
                  <p className="italic text-center md:text-left" key={data.id}>{data.attributes.Date}</p>
                </div>
                <button
                  className="relative right-0 sm:top-[-18px] mt-5 bg-cyan-600 text-white py-2 px-4 border border-cyan-600 hover:bg-transparent hover:text-cyan-600 transition-all duration-300 w-48"
                  onClick={() => { window.open(data.attributes.Link) }} key={data.id}
                >
                  Paper
                </button>
              </div>
            ))}
          </div>
        ))
      }
    </div>
  );
}

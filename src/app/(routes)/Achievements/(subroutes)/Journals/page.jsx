"use client";
import { useEffect, useState } from "react";
import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";

export default function JournalsPage() {
  const [researchData, setResearchData] = useState({});
  const [years, setYears] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`https://cozy-captain-963d285ad5.strapiapp.com/api/achievements?populate=author`);
      const data = await response.json();

      const sortedData = data.data.sort((a, b) => new Date(b.attributes.Date) - new Date(a.attributes.Date));

      const groupedData = sortedData.reduce((acc, item) => {
        const year = new Date(item.attributes.Date).getFullYear();
        if (!acc[year]) {
          acc[year] = [];
        }
        acc[year].push(item);
        return acc;
      }, {});

      setResearchData(groupedData);
      setYears(Object.keys(groupedData).sort((a, b) => b - a)); 
    };

    getData();
  }, []);

  return (
    <div className='flex flex-col bg-white py-5 min-h-dvh text-slate-600 '>
      <BreadCrumbs />
      <h1 className='text-5xl font-sans font-light relative text-right text-sky-900 mr-6 sm:mr-10 my-8'>JOURNALS</h1>
      <div className=" h-[2px] bg-slate-300 mx-10 mb-5"></div>
      {
        years.map((year, i) => (
          <div className="journals items-center " key={i}>
            <h1 className="text-3xl font-sans font-light text-sky-950 my-8 text-center" key={i}>
              Published on {year}
            </h1>
            {researchData[year].map((data) => (
              <div className="mb-12 bg-slate-50 rounded-sm mx-auto px-8 flex flex-col items-center sm:items-center py-8 w-4/5 md:w-2/3">
              <div key={data.id} className="  ">
                <div className=" w-full relative " key={data.id}>
                  <span className="text-left absolute font-bold" key={data.id}>{data.attributes.Title}</span>
                  <span className="italic absolute right-4 text-right" key={data.id}>{data.attributes.Date}</span>
                  <br/>
                  <p className="text-left mt-5" key={data.id}>{data.attributes.Description}</p>
                  <br/>
                  
                  <br/>
                 
                </div>
              
              </div>
              <div className="flex sm:flex-row sm:justify-between flex-wrap flex-col items-center w-full">
                <button className="font-semibold px-3 py-1 sm:mr-3 rounded-sm bg-gray-200 text-left" key={data.id}>{data.attributes.author.data.attributes.name}</button>
                <button
                  className=" right-0  bg-cyan-600 sm:ml-3 mt-5 sm:mt-0 text-white py-2 px-4 border-2 border-cyan-600 hover:bg-transparent hover:text-cyan-600 transition-all duration-300 w-48"
                  onClick={() => { window.open(data.attributes.Link) }} key={data.id}
                >
                  Paper
                </button>
                </div> 
              </div>
            ))}
          </div>
        ))
      }
    </div>
  );
}

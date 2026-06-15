"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";

export default function JournalsPage() {
  const router = useRouter();
  const [researchData, setResearchData] = useState({});
  const [years, setYears] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`/api/journal?populate=author`);
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
      <BreadCrumbs title="Journals" />
      <h1 className='text-5xl font-sans font-light relative text-right text-sky-900 mr-6 sm:mr-10 my-8'>JOURNALS</h1>
      <div className=" h-[2px] bg-slate-300 mx-10 mb-5"></div>
      {
        years.map((year, i) => (
          <div className="journals items-center " key={i}>
            <h1 className="text-3xl font-sans font-light text-sky-950 my-8 text-center" key={i}>
              Published on {year}
            </h1>
            {researchData[year].map((data) => (
              <div 
                className="mb-8 bg-slate-50 rounded-lg shadow-sm border border-slate-200 mx-auto px-6 sm:px-10 py-8 flex flex-col w-11/12 md:w-3/4 max-w-4xl cursor-pointer hover:shadow-md hover:border-sky-300 transition-all duration-300"
                key={data.id}
                onClick={() => router.push(`/Achievements/Journals/${data.id}`)}
              >
                
                {/* Header: Title and Date */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-6 mb-4">
                  <h3 className="text-left font-semibold text-xl text-sky-950 hover:text-sky-700 transition-colors">{data.attributes.Title}</h3>
                  <span className="italic text-slate-500 whitespace-nowrap pt-1">{data.attributes.Date}</span>
                </div>
                
                {/* Description Text */}
                <p className="text-left text-slate-600 mb-6 leading-relaxed w-full">
                  {data.attributes.Description}
                </p>

                {/* Footer Controls */}
                <div className="flex flex-col sm:flex-row sm:justify-between items-center w-full border-t border-gray-200 pt-5 mt-auto">
                  <span className="font-medium bg-white border border-gray-200 px-4 py-2 text-slate-700 rounded-md w-full sm:w-auto text-center sm:text-left mb-4 sm:mb-0">
                    {data.attributes.author?.data?.attributes?.name || 'Unknown author'}
                  </span>
                  
                  {data.attributes.Link ? (
                    <button
                      className="bg-sky-600 text-white py-2 px-6 rounded-md shadow-sm hover:bg-sky-700 hover:shadow transition-all duration-300 w-full sm:w-auto font-medium"
                      onClick={() => { window.open(data.attributes.Link, '_blank') }}
                    >
                      View Paper
                    </button>
                  ) : (
                    <button
                      className="bg-slate-300 text-slate-500 py-2 px-6 rounded-md w-full sm:w-auto font-medium cursor-not-allowed"
                      disabled
                    >
                      No Paper Link
                    </button>
                  )}
                </div> 
              </div>
            ))}
          </div>
        ))
      }
    </div>
  );
}

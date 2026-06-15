"use client";
import { useRouter } from "next/navigation";
import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import { useEffect, useState } from "react";

export default function PatentsPage() {
  const router = useRouter();


  const [patentData, setPatentData] = useState({});
  const [years, setYears] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`/api/patent?populate[docs][fields][0]=*&populate[head][fields][0]=*&populate[collaborators][fields][0]=*`);
      const data = await response.json();
      

      const sortedData = data.data.sort((a, b) => new Date(b.attributes.date_of_publication) - new Date(a.attributes.date_of_publication));

      const groupedData = sortedData.reduce((acc, item) => {
        const year = new Date(item.attributes.date_of_publication).getFullYear();
        if (!acc[year]) {
          acc[year] = [];
        }
        acc[year].push(item);
        return acc;
      }, {});
      console.log("grouped datA",groupedData);
      
      setPatentData(groupedData);
      setYears(Object.keys(groupedData).sort((a, b) => b - a)); 
    };

    getData();
  }, []);

  return (
    <div className='flex flex-col bg-white py-5 min-h-dvh text-slate-600'>
      <BreadCrumbs title="Patents"/>
      <h1 className='text-5xl font-sans font-light relative text-left ml-7 sm:ml-10 mt-14 mb-7 text-sky-900'>PATENTS</h1>
      <div className=" h-[2px] bg-slate-300 mx-8">
        {/* <div className="w-[25%] h-full bg-sky-600"></div> */}
      </div>
      {years.map((year, i) => (
        <div className="journals mt-8 flex flex-col " key={i}>
          <h1 className="text-3xl font-sans text-sky-950 font-thin mt-8 ml-4 sm:ml-7">
            Fiscal Year {year}
          </h1>
          {patentData[year].map((patent, index) => {
            const collaborators = patent.attributes.collaborators?.data || [];
            const headName = patent.attributes.head?.data?.attributes?.name || 'Unknown head';
            const docs = patent.attributes.docs?.data || [];

            return (
              <div
                key={index}
                className="relative ml-4 sm:ml-7 mb-8 p-6 bg-slate-50 rounded-lg border border-slate-200 cursor-pointer hover:shadow-md hover:border-sky-300 transition-all duration-300"
                onClick={() => router.push(`/Achievements/Patents/${patent.id}`)}
              >
                <div className="w-4/5">
                  <p className="font-bold mt-0 text-sky-600 hover:text-sky-800 transition-colors">{patent.attributes.title}</p>
                  <p>{patent.attributes.description || 'No description provided.'}</p>
                  <p className="font-semibold">Inventors: {collaborators.length > 0 ? collaborators.map((c) => c.attributes?.name || 'Unknown').join(', ') : 'N/A'}</p>
                  <p className="font-semibold">Head: {headName}</p>
                  <p className="font-semibold">Date of Publication: {patent.attributes.date_of_publication || 'Unknown'}</p>
                  {docs.length > 0 && docs[0]?.attributes?.url && (
                    <p className="">
                      Links:{' '}
                      <a href={docs[0].attributes.url} target="_blank" rel="noopener noreferrer" className="text-blue-400">
                        {docs[0].attributes.name || docs[0].attributes.url}
                      </a>
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

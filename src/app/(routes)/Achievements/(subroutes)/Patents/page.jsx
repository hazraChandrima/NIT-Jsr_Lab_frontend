"use client";
import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import { useEffect, useState } from "react";

export default function PatentsPage() {


  const [patentData, setPatentData] = useState({});
  const [years, setYears] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`https://cozy-captain-963d285ad5.strapiapp.com/api/patents?populate[docs][fields][0]=*&populate[head][fields][0]=*&populate[collaborators][fields][0]=*`);
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
    <div className='flex flex-col bg-white py-5 min-h-dvh text-slate-600 items-center'>
      <BreadCrumbs />
      <h1 className='text-5xl font-sans font-light relative text-center text-sky-900'>PATENTS</h1>
      {years.map((year, i) => (
        <div className="journals mt-8 flex flex-col items-center" key={i}>
          <h1 className="text-3xl font-sans font-light text-sky-950 my-8 text-center">
            Fiscal Year {year}
          </h1>
          {patentData[year].map((patent, index) => (
            <div
              key={index}
              className="relative mb-10 w-4/5 flex flex-col items-center border-b-2 border-[#015fa7] border-dotted pb-8"
            >
              <div className="w-4/5 text-center">
                <p className="font-bold">{patent.attributes.title}</p>
                <p>{patent.attributes.description?patent.attributes.description:patent.attributes.description}</p>
                <p>Inventors: {patent.attributes.collaborators.data.map(c => c.attributes.name).join(', ')}</p>
                <p className="">Head: {patent.attributes.head.data.attributes.name}</p>
                <p className="">Date of Publication: {patent.attributes.date_of_publication}</p>
                {patent.attributes.docs.data.length > 0 && (
                  <p className="">
                    Links:{" "}
                    <a href={patent.attributes.docs.data[0].attributes.url} target="_blank" rel="noopener noreferrer" className="text-blue-400">
                      {patent.attributes.docs.data[0].attributes.name}
                    </a>
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

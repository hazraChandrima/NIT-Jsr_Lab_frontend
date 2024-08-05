"use client";
import { useEffect, useState } from "react"
import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";

export default function JournalsPage() {
  const [researchData,setResearchData]=useState({});
  const [years,setYears]=useState([]);
      useEffect(()=>{
         fetch('https://nitjsr.ac.in/backend/api/publications?id=CS103')
         .then(res=>res.json())
         .then((data)=>{
           let rd={}
           data.result.map((i)=>{
            let year=i.pub_date.substring(i.pub_date.length-4);
             if(!rd[year])
             rd[year]=[];
             rd[year].push(i);
            
           })
           setResearchData(rd);
           let yrs=Object.keys(rd);
           yrs.reverse();
           setYears(yrs);
         })
      },[])
      console.log(Object.keys(researchData));
    return (
      <div className='flex flex-col bg-white py-5 min-h-dvh text-slate-600 items-center'>
       
         <BreadCrumbs/>
         <h1 className='text-5xl font-sans font-light relative text-right right-6 text-sky-950'>JOURNALS</h1>
      {

        years.map((year)=>(
          
          <div className="journals items-center my-8">
  <h1 className="text-3xl font-sans font-light text-sky-950 my-8 text-center">
    Published on {year}
  </h1>
  {researchData[year].map((data) => (
    <div key={data.id} className="relative mb-20 mx-auto max-w-4xl flex items-center pb-8 w-full border-0 border-b-2 border-[#00a2ff] border-dotted">
      <div className="w-full md:w-3/4 pr-48">
        <p className="text-center md:text-left font-bold">{data.authors}</p>
        <br/>
        <p className="text-center md:text-left">{data.title}</p>
        <br/>
        <p className="italic text-center md:text-left">{data.journal}</p>
      </div>
      <button
        className="relative right-0 bg-[#00a2ff] text-white py-2 px-4 border border-[#00a2ff] hover:bg-white hover:text-[#00a2ff] transition-all duration-300 w-48"
        onClick={()=>{window.open(data.link)}}
      >
        Paper
      </button>
    </div>
  ))}
</div>

        
        
        ))
      }
      </div>
    )
  }
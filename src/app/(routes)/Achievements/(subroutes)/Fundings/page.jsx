"use client";
import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import { useEffect,useState} from "react";
export default function FundingsPage() {
  const [fundingData,setData]=useState({});

  useEffect(()=>{
     
     fetch("https://cozy-captain-963d285ad5.strapiapp.com/api/fundings")
     .then(res=>res.json())
     .then((obj)=>{
          let fd={};
          obj.data.map((data)=>{
            let attr={...data.attributes};
            attr.year=attr.date_of_funding.substring(0,4);
            if(!fd[attr.year]){
              fd[attr.year]=[];
            }
            fd[attr.year].push(attr);
            
          })
          setData(fd);
     })
  },[])
    return (
      <div className='flex flex-col bg-white py-5 min-h-dvh text-slate-600 items-center'>
       
      <BreadCrumbs/>
      <h1 className='text-5xl font-sans font-light relative text-right right-6 text-sky-950'>RESEARCH FUNDINGS</h1>
   {

     Object.keys(fundingData).map((year,i)=>(
       
      <div className="journals my-8 flex flex-col items-center" key={i}>
  <h1 className="text-3xl font-sans font-light text-sky-950 my-8 text-center" key={i}>
    Fiscal Year {year}
  </h1>
  {fundingData[year].map((data, index) => (
    <div
      key={index}
      className="relative mb-20 max-w-4xl flex flex-col items-center border-b-2 border-[#00a2ff] border-dotted pb-8 w-full"
    >
      <div className="w-full text-center" key={index}>
        <p className="font-bold" key={index}>{data.agency}</p>
        <br/>
        <p key={index}>{data.title}</p>
        <p key={index}>{data.description}</p>
        <br/>
        <p className="italic" key={index}>Rs. {data.amount}</p>
        
      </div>
    </div>
))}
</div>

     
     
     ))
   }
   </div>
    )
    
  }
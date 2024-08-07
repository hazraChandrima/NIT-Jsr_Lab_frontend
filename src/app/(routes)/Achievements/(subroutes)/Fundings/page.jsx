"use client";
import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
export default function FundingsPage() {
  const fundingData = {
    2023: [
      {
        year: 2023,
        date: '30th August 2023',
        org: 'Tech Innovations Pvt Ltd',
        title: 'Advanced Quantum Computing Algorithm',
        amount: '₹5,000,000'
      }
    ],
    2022: [
      {
        year: 2022,
        date: '9th April 2022',
        org: 'Green Energy Solutions',
        title: 'Novel Energy Storage Solution',
        amount: '₹3,500,000'
      },
      {
        year: 2022,
        date: '18th May 2022',
        org: 'BuildSmart Industries',
        title: 'Self-Healing Materials for Construction',
        amount: '₹4,200,000'
      }
    ],
    2021: [
      {
        year: 2021,
        date: '15th November 2021',
        org: 'HealthTech Corp',
        title: 'AI-Driven Healthcare Diagnostic System',
        amount: '₹6,000,000'
      }
    ],
    2020: [
      {
        year: 2020,
        date: '8th January 2020',
        org: 'AutoTech Ltd',
        title: 'Wireless Charging Technology for Electric Vehicles',
        amount: '₹4,800,000'
      }
    ],
    2019: [
      {
        year: 2019,
        date: '23rd July 2019',
        org: 'CyberSec Innovations',
        title: 'Enhanced Data Encryption Methods',
        amount: '₹3,200,000'
      }
    ],
    2018: [
      {
        year: 2018,
        date: '5th March 2018',
        org: 'AquaPure Ltd',
        title: 'Eco-Friendly Water Purification System',
        amount: '₹2,500,000'
      },
      {
        year: 2018,
        date: '21st February 2018',
        org: 'EduTech Ventures',
        title: 'Augmented Reality for Education',
        amount: '₹3,000,000'
      }
    ],
    2017: [
      {
        year: 2017,
        date: '12th October 2017',
        org: 'SolarTech International',
        title: 'High-Efficiency Solar Panel Design',
        amount: '₹4,500,000'
      },
      {
        year: 2017,
        date: '3rd December 2017',
        org: 'Wearable Innovations',
        title: 'Smart Wearable Health Monitor',
        amount: '₹3,800,000'
      }
    ]
  };
    return (
      <div className='flex flex-col bg-white py-5 min-h-dvh text-slate-600 items-center'>
       
      <BreadCrumbs/>
      <h1 className='text-5xl font-sans font-light relative text-center  text-sky-900'>RESEARCH FUNDINGS</h1>
   {

     Object.keys(fundingData).map((year,i)=>(
       
      <div className="journals mt-8 flex flex-col items-center justify-start" key={i}>
  <h1 className="text-3xl font-sans font-light text-cyan-800 my-8 text-center" key={i}>
    Fiscal Year {year}
  </h1>
  {fundingData[year].map((data, index) => (
    <div
      key={index}
      className="relative mb-10 max-w-4xl flex flex-col items-center border-b-2 border-[#008ccd] border-dotted pb-8 w-3/4"
    >
      <div className="w-full text-center" key={index}>
        <p className="font-bold" key={index}>{data.date}</p>
        <br/>
        <p key={index}>{data.org}</p>
        <p key={index}>{data.title}</p>
        <br/>
        <p className="italic" key={index}>{data.amount}</p>
        
      </div>
    </div>
))}
</div>

     
     
     ))
   }
   </div>
    )
    
  }
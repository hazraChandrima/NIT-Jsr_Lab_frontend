"use client";
import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
export default function PatentsPage() {
  const patentData = {
    2023: [
      {
        PatentNo: 'US7890123G',
        Inventors: ['Kevin Scott', 'Laura King'],
        Applicant: 'National Institute of Technology Jamshedpur',
        date: '30th August 2023',
        title: 'Advanced Quantum Computing Algorithm'
      }
    ],
    2022: [
      {
        PatentNo: 'US6789012F',
        Inventors: ['Isaac Lee', 'Judy Martinez'],
        Applicant: 'National Institute of Technology Jamshedpur',
        date: '9th April 2022',
        title: 'Novel Energy Storage Solution'
      },
      {
        PatentNo: 'US8901234H',
        Inventors: ['Michael Young', 'Nina Green'],
        Applicant: 'National Institute of Technology Jamshedpur',
        date: '18th May 2022',
        title: 'Self-Healing Materials for Construction'
      }
    ],
    2021: [
      {
        PatentNo: 'US5678901E',
        Inventors: ['George Clark', 'Helen Adams'],
        Applicant: 'National Institute of Technology Jamshedpur',
        date: '15th November 2021',
        title: 'AI-Driven Healthcare Diagnostic System'
      }
    ],
    2020: [
      {
        PatentNo: 'US4567890D',
        Inventors: ['Edward Harris', 'Fiona Wilson'],
        Applicant: 'National Institute of Technology Jamshedpur',
        date: '8th January 2020',
        title: 'Wireless Charging Technology for Electric Vehicles'
      }
    ],
    2019: [
      {
        PatentNo: 'US3456789C',
        Inventors: ['Charlie Davis', 'Diana Evans'],
        Applicant: 'National Institute of Technology Jamshedpur',
        date: '23rd July 2019',
        title: 'Enhanced Data Encryption Methods'
      }
    ],
    2018: [
      {
        PatentNo: 'US2345678B',
        Inventors: ['Alice Johnson', 'Bob Brown'],
        Applicant: 'National Institute of Technology Jamshedpur',
        date: '5th March 2018',
        title: 'Eco-Friendly Water Purification System'
      },
      {
        PatentNo: 'US9012345I',
        Inventors: ['Olivia Wright', 'Patrick Hill'],
        Applicant: 'National Institute of Technology Jamshedpur',
        date: '21st February 2018',
        title: 'Augmented Reality for Education'
      }
    ],
    2017: [
      {
        PatentNo: 'US1234567A',
        Inventors: ['John Doe', 'Jane Smith'],
        Applicant: 'National Institute of Technology Jamshedpur',
        date: '12th October 2017',
        title: 'High-Efficiency Solar Panel Design'
      },
      {
        PatentNo: 'US0123456J',
        Inventors: ['Quincy Jones', 'Rachel Taylor'],
        Applicant: 'National Institute of Technology Jamshedpur',
        date: '3rd December 2017',
        title: 'Smart Wearable Health Monitor'
      }
    ]
  };
  
    return (
      <div className='flex flex-col bg-white py-5 min-h-dvh text-slate-600 items-center'>
       
      <BreadCrumbs/>
      <h1 className='text-5xl font-sans font-light relative text-right right-6 text-sky-950'>PATENTS</h1>
   {

     Object.keys(patentData).map((year)=>(
       
      <div className="journals my-8 flex flex-col items-center">
  <h1 className="text-3xl font-sans font-light text-sky-950 my-8 text-center">
    Fiscal Year {year}
  </h1>
  {patentData[year].map((data, index) => (
    <div
      key={index}
      className="relative mb-20 max-w-4xl flex flex-col items-center border-b-2 border-[#00a2ff] border-dotted pb-8 w-full"
    >
      <div className="w-full text-center">
        <p className="font-bold">Patent No: {data.PatentNo}</p>
        <br/>
        <p>{data.title}</p>
        <p>Inventors: {data.Inventors.join(', ')}</p>
        <br/>
        <p className="italic">Applicant: {data.Applicant}</p>
        <p className="italic">Registration Date: {data.date}</p>
      </div>
    </div>
))}
</div>

     
     
     ))
   }
   </div>
    )
  }
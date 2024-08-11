"use client";
import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import useAnimationHook from "@/hooks/AnimationHooks/moveUp";


export default function FundingsPage() {
  const [fundingData, setData] = useState({});
  // const { ref, controls } = useAnimationHook();

  useEffect(() => {

    fetch("https://cozy-captain-963d285ad5.strapiapp.com/api/fundings")
      .then(res => res.json())
      .then((obj) => {
        let fd = {};
        obj.data.map((data) => {
          let attr = { ...data.attributes };
          attr.year = attr.date_of_funding.substring(0, 4);
          if (!fd[attr.year]) {
            fd[attr.year] = [];
          }
          fd[attr.year].push(attr);

        })
        setData(fd);
      })
  }, [])
  return (
    <div className='flex flex-col bg-white py-5 min-h-dvh text-slate-600'>

      <BreadCrumbs />
      <h1 className='text-5xl font-sans font-light relative text-left ml-7 sm:ml-10 mt-14 mb-7 text-sky-900'>RESEARCH FUNDINGS</h1>
      <div className=" h-[2px] bg-slate-300 mx-8">
        {/* <div className="w-[25%] h-full bg-sky-600"></div> */}
      </div>
      {
        Object.keys(fundingData).reverse().map((year, i) => (
          <div className="journals mt-8 flex flex-col "
            key={i}>
            <div className="border-b-2 border-slate-200 mx-8">
              <h1 className="text-3xl font-sans text-sky-950 font-thin my-8 ml-4 sm:ml-7" key={i}>
                Fiscal Year {year}
              </h1>
              {fundingData[year].map((data, index) => (
                <div
                  key={index}
                  className="relative mb-8 ml-4 sm:ml-7"
                >
                  <div className="w-4/5" key={index}>
                    <p className="font-bold text-sky-600" key={index}>{data.agency}</p>
                    <br />
                    <p key={index}>{data.title}</p>
                    <p key={index}>{data.description}</p>
                    <br />
                    <p className="italic" key={index}>Rs.{data.amount}</p>

                  </div>
                </div>
              ))}
            </div>
          </div>
        ))
      }
    </div>
  )

}
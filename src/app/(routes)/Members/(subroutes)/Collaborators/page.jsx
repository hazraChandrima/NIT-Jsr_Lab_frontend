"use client"

import React, { useEffect, useState } from "react";
import StaffCard from "../../_components/StudentCard";




function Collaborators() {

  const [collaborators,setCollaborators]= useState([]);
  const[loading, setLoading]= useState(false);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const activitiesData = await fetch(
        `https://cozy-captain-963d285ad5.strapiapp.com/api/members?populate=profilePhoto`
      );
      const res = await activitiesData.json();
      setCollaborators(res.data);
      setLoading(false);
    };

    getData();

    
  }, []);



  return (
    <main className="min-h-screen w-full flex flex-col items-center bg-white py-20 px-5">
      <div className="flex flex-col items-start max-w-[1256px]">
        {
          loading?<>
          <div>Loading Data...</div>
          </>:<>
          {/* //Faculty */}
        <div className=" mb-20">
          {/* //heading */}
          <div className="mb-10">
            <h1 className="text-3xl mb-5 text-sky-950">
              Collaborative Researchers
            </h1>
            <div className="w-full h-[2px] bg-slate-400">
              <div className="w-[15%] h-full bg-sky-500"></div>
            </div>
          </div>
          <div className=" w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {collaborators.map((member, index) => (
              <StaffCard
                key={member.id}
                name={member.
                  attributes.name}
                role={member.
                  attributes.role}
                imageUrl={member.attributes.profilePhoto.data.attributes.url}
              />
            ))}
          </div>
        </div>
          </>
        }
        
      </div>
    </main>
  );
}

export default Collaborators;

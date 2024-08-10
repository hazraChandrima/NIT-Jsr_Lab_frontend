"use client";

import React, { useEffect, useState } from "react";
import CollaboratorsCard from "../../_components/CollaboratorsCard";

function Collaborators() {
  const [collaborators, setCollaborators] = useState([]);
  const [loading, setLoading] = useState(false);
  const imageUrl =
    "https://i.pinimg.com/736x/09/21/fc/0921fc87aa989330b8d403014bf4f340.jpg";

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
        {loading ? (
          <div>Loading Data...</div>
        ) : (
          <>
            {/* Faculty */}
            <div className="mb-20">
              {/* Heading */}
              <div className="mb-10">
                <h1 className="text-3xl mb-5 text-sky-950">
                  Collaborative Researchers
                </h1>
                <div className="w-full h-[2px] bg-slate-400">
                  <div className="w-[15%] h-full bg-sky-500"></div>
                </div>
              </div>
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {collaborators.map((member) => (
                  <CollaboratorsCard
                    id={member.id}
                    name={member.attributes.name}
                    role={member.attributes.role}
                    imageUrl={imageUrl}
                  />
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </main>
  );
}

export default Collaborators;

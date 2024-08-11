"use client";
import React, { useEffect, useState } from "react";
import AlumniCard from "../../_components/AlumniCard";
import { fetchData } from "@/utils/fetchData";

export default function PassOutStudentsPage() {
  const [alumni, setAlumni] = useState([]);

  useEffect(() => {
    async function fetchAlumni() {
      try {
        const response = await fetchData(
          "https://cozy-captain-963d285ad5.strapiapp.com/api/members?filters[role][$eq]=Alumni&populate=*"
        );
        const data = response.data;

        const alumniMembers = data.map((member) => ({
          id: member.id,
          name: member.attributes.name,
          role: member.attributes.role,
          about: member.attributes.about,
          position: member.attributes.position || "N/A",
          profilePic: member.attributes.profilePhoto?.data?.attributes?.url,
        }));

        setAlumni(alumniMembers);
      } catch (error) {
        console.error("Error fetching alumni data:", error);
      }
    }

    fetchAlumni();
  }, []);

  return (
    <main className="min-h-screen w-full flex flex-col items-center bg-white py-20 px-8">
      <div className="flex flex-col items-start max-w-[1256px]">
        <div className="mb-20">
          <div className="mb-10">
            <h1 className="text-3xl mb-5 text-sky-950">Pass Out Students</h1>
            <div className="w-full h-[2px] bg-slate-400">
              <div className="w-[15%] h-full bg-sky-500"></div>
            </div>
          </div>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {alumni.map((member, index) => (
              <AlumniCard
                key={index}
                name={member.name}
                role={member.role}
                imageUrl={member.profilePic}
                id={member.id}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

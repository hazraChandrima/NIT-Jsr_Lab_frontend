"use client";
import React, { useEffect, useState } from "react";
import StudentCard from "../../_components/StudentCard";

export default function Page() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStudents = async () => {
      try {  
        const response = await fetch(
          `https://cozy-captain-963d285ad5.strapiapp.com/api/Students?populate[profilePhoto]=*`
        );
        const data = await response.json();
        setStudents(data.data);
      } catch (error) {
        console.error("Error fetching students:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  // Filter students by degree
  const phdStudents = students.filter(
    (student) => student.attributes.degree === "Ph. D"
  );
  const partTimePhdStudents = students.filter(
    (student) => student.attributes.degree === "Part Time Ph.D"
  );
  const mastersStudents = students.filter(
    (student) => student.attributes.degree === "Masters Program"
  );
  const undergraduateStudents = students.filter(
    (student) => student.attributes.degree === "Undergraduate Program"
  );

  return (
    <main className="min-h-screen w-full flex flex-col items-center bg-white py-20 px-8">
      <div className="flex flex-col items-start max-w-[1256px]">

        <div className="mb-20">
          <div className="mb-10">
            <h1 className="text-3xl mb-5 text-sky-950">Ph.D</h1>
            <div className="w-full h-[2px] bg-slate-400">
              <div className="w-[15%] h-full bg-cyan-500"></div>
            </div>
          </div>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {phdStudents.map((member, index) => (
              <StudentCard
                key={index}
                name={member.attributes.name}
                role={member.attributes.degree}
                imageUrl={member.attributes.profilePhoto?.data?.attributes?.url}
                rollNumber={member.attributes.roll}
              />
            ))}
          </div>
        </div>

        <div className="mb-20">
          <div className="mb-10">
            <h1 className="text-3xl mb-5 text-sky-950">Part Time Ph.D</h1>
            <div className="w-full h-[2px] bg-slate-400">
              <div className="w-[15%] h-full bg-cyan-500"></div>
            </div>
          </div>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {partTimePhdStudents.map((member, index) => (
              <StudentCard
                key={index}
                name={member.attributes.name}
                role={member.attributes.degree}
                imageUrl={member.attributes.profilePhoto?.data?.attributes?.url}
                rollNumber={member.attributes.roll}
              />
            ))}
          </div>
        </div>

        <div className="mb-20">
          <div className="mb-10">
            <h1 className="text-3xl mb-5 text-sky-950">Masters Program</h1>
            <div className="w-full h-[2px] bg-slate-400">
              <div className="w-[15%] h-full bg-cyan-500"></div>
            </div>
          </div>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {mastersStudents.map((member, index) => (
              <StudentCard
                key={index}
                name={member.attributes.name}
                role={member.attributes.degree}
                imageUrl={member.attributes.profilePhoto?.data?.attributes?.url}
                rollNumber={member.attributes.roll}
              />
            ))}
          </div>
        </div>

        <div className="mb-20">
          <div className="mb-10">
            <h1 className="text-3xl mb-5 text-sky-950">
              Undergraduate Program
            </h1>
            <div className="w-full h-[2px] bg-slate-400">
              <div className="w-[15%] h-full bg-cyan-500"></div>
            </div>
          </div>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {undergraduateStudents.map((member, index) => (
              <StudentCard
                key={index}
                name={member.attributes.name}
                role={member.attributes.degree}
                imageUrl={member.attributes.profilePhoto?.data?.attributes?.url}
                rollNumber={member.attributes.roll}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

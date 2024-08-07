import React from "react";

import StudentCard from "../../_components/StudentCard";
import students from "./data";
export default function page() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center bg-white py-20 px-5">
      <div className="flex flex-col items-start max-w-[1256px]">
        <div className=" mb-20">
          <div className="mb-10">
            <h1 className="text-3xl mb-5 text-sky-950">Ph.D</h1>
            <div className="w-full h-[2px] bg-slate-400">
              <div className="w-[15%] h-full bg-cyan-500"></div>
            </div>
          </div>
          <div className=" w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {students.map((member, index) => (
              <StudentCard
                key={index}
                name={member.name}
                role={member.role}
                imageUrl={member.photo}
                rollNumber={member.rollNumber}
              />
            ))}
          </div>
        </div>

        <div className=" mb-20">
          <div className="mb-10">
            <h1 className="text-3xl mb-5 text-sky-950">Part Time Ph.D</h1>
            <div className="w-full h-[2px] bg-slate-400">
              <div className="w-[15%] h-full bg-cyan-500"></div>
            </div>
          </div>
          <div className=" w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {students.map((member, index) => (
              <StudentCard
                key={index}
                name={member.name}
                role={member.role}
                imageUrl={member.photo}
                rollNumber={member.rollNumber}
              />
            ))}
          </div>
        </div>

        <div className=" mb-20">
          <div className="mb-10">
            <h1 className="text-3xl mb-5 text-sky-950">Masters Program</h1>
            <div className="w-full h-[2px] bg-slate-400">
              <div className="w-[15%] h-full bg-cyan-500"></div>
            </div>
          </div>
          <div className=" w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {students.map((member, index) => (
              <StudentCard
                key={index}
                name={member.name}
                role={member.role}
                imageUrl={member.photo}
                rollNumber={member.rollNumber}
              />
            ))}
          </div>
        </div>

        <div className=" mb-20">
          <div className="mb-10">
            <h1 className="text-3xl mb-5 text-sky-950">
              Undergraduate Program
            </h1>
            <div className="w-full h-[2px] bg-slate-400">
              <div className="w-[15%] h-full bg-cyan-500"></div>
            </div>
          </div>
          <div className=" w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {students.map((member, index) => (
              <StudentCard
                key={index}
                name={member.name}
                role={member.role}
                imageUrl={member.photo}
                rollNumber={member.rollNumber}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

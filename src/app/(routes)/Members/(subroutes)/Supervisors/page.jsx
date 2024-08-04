// pages/Members.js
"use client";
import React from "react";
import ProgramWiseCard from "../../_components/ProgramWiseCards";
import StaffCard from "../../_components/StudentCard";

const members = [
  {
    name: "Makiko Tazaki",
    role: "Assistant Professor",
    imageUrl:
      "https://i.pinimg.com/736x/09/21/fc/0921fc87aa989330b8d403014bf4f340.jpg",
  },
  {
    name: "Makiko Tazaki",
    role: "Assistant Professor",
    imageUrl:
      "https://i.pinimg.com/736x/09/21/fc/0921fc87aa989330b8d403014bf4f340.jpg",
  },
  {
    name: "Makiko Tazaki",
    role: "Assistant Professor",
    imageUrl:
      "https://i.pinimg.com/736x/09/21/fc/0921fc87aa989330b8d403014bf4f340.jpg",
  },
  {
    name: "Makiko Tazaki",
    role: "Assistant Professor",
    imageUrl:
      "https://i.pinimg.com/736x/09/21/fc/0921fc87aa989330b8d403014bf4f340.jpg",
  },
  {
    name: "Makiko Tazaki",
    role: "Assistant Professor",
    imageUrl:
      "https://i.pinimg.com/736x/09/21/fc/0921fc87aa989330b8d403014bf4f340.jpg",
  },

  // Add more members as needed
];

const Supervisors = () => {
  return (
    <main className="min-h-screen w-full flex flex-col items-center bg-white py-20 px-5">
      <div className="flex flex-col items-start max-w-[1256px]">
        {/* //Faculty */}
        <div className=" mb-20">
          {/* //heading */}
          <div className="mb-10">
            <h1 className="text-3xl mb-5 text-sky-950">Supervisors</h1>
            <div className="w-full h-[2px] bg-slate-400">
              <div className="w-[15%] h-full bg-sky-500"></div>
            </div>
          </div>
          <div className=" w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {members.map((member, index) => (
              <StaffCard
                key={index}
                name={member.name}
                role={member.role}
                imageUrl={member.imageUrl}
              />
            ))}
          </div>
        </div>

        {/* //Reserch and Administrative staff */}
        <div className=" mb-20">
          {/* //heading */}
          <div className="mb-10">
            <h1 className="text-3xl mb-5 text-sky-950">
              Research and Administrative staff{" "}
            </h1>
            <div className="w-full h-[2px] bg-slate-400">
              <div className="w-[15%] h-full bg-sky-500"></div>
            </div>
          </div>
          <div className=" w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {members.map((member, index) => (
              <StaffCard
                key={index}
                name={member.name}
                role={member.role}
                imageUrl={member.imageUrl}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Supervisors;

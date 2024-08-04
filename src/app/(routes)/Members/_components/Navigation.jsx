import Link from "next/link";
import React from "react";


function Navigation() {
  return (
    <div className="w-full  flex justify-center items-center bg-white pt-10 px-5">
    <div className="bg-white w-full  max-w-[1256px]">
       <div className='mb-10'>
        <h1 className='text-3xl mb-5 text-sky-950'>Members</h1>
        <div className='w-full h-[2px] bg-slate-400'>
          <div className='w-[15%] h-full bg-sky-500'>
          </div>
        </div>
        </div>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 ">
      <Link
      href={'/Members/Supervisors'}
        className="transition duration-500 border-2 rounded-sm max-w-[300px] border-sky-500 ease-in-out bg-sky-500 text-white flex items-center justify-center hover:bg-white hover:text-sky-500 py-2 px-4 "
        style={{ opacity: "1", transform: "none", willChange: "auto" }}
      >
        
          Supervisors
        
      </Link>
      <Link
      href={'/Members/Students'}
        className="transition duration-500 border-2 rounded-sm max-w-[300px] border-sky-500 ease-in-out bg-sky-500 text-white flex items-center justify-center hover:bg-white hover:text-sky-500 py-2 px-4 "
        style={{ opacity: "1", transform: "none", willChange: "auto" }}
      >
        
         Students
        
      </Link>
      <Link
      href={'/Members/Collaborators'}
        className="transition duration-500 border-2 rounded-sm max-w-[300px] border-sky-500 ease-in-out bg-sky-500 text-white flex items-center justify-center hover:bg-white hover:text-sky-500 py-2 px-4 "
        style={{ opacity: "1", transform: "none", willChange: "auto" }}
      >
        
        Collaborative Researchers
        
      </Link>
      <Link
      href={'/Members/LabHead'}
        className="transition duration-500 border-2 rounded-sm max-w-[300px] border-sky-500 ease-in-out bg-sky-500 text-white flex items-center justify-center hover:bg-white hover:text-sky-500 py-2 px-4 "
        style={{ opacity: "1", transform: "none", willChange: "auto" }}
      >
        
       Lab Head
        
      </Link>
          
    </div>
    </div>
    </div>
  );
}

export default Navigation;

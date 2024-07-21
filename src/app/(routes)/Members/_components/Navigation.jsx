import Link from "next/link";
import React from "react";


function Navigation() {
  return (
    <div className="w-full  flex justify-center items-center bg-slate-800 pt-10 px-5">
    <div className="bg-slate-800 w-full  max-w-[1256px]">
       <div className='mb-10'>
        <h1 className='text-2xl text-white'>Members</h1>
        <div className='w-full h-[2px] bg-white'>
          <div className='w-[15%] h-full bg-blue-500'>
          </div>
        </div>
        </div>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 ">
      <Link
      href={'/Members/Staff'}
        className="transition duration-500 border-2 rounded-md max-w-[300px] border-blue-500 ease-in-out bg-blue-500 text-white flex items-center justify-center hover:bg-white hover:text-blue-500 py-2 px-4 "
        style={{ opacity: "1", transform: "none", willChange: "auto" }}
      >
        
          Staff
        
      </Link>
      <Link
      href={'/Members/Students'}
        className="transition duration-500 border-2 rounded-md max-w-[300px] border-blue-500 ease-in-out bg-blue-500 text-white flex items-center justify-center hover:bg-white hover:text-blue-500 py-2 px-4 "
        style={{ opacity: "1", transform: "none", willChange: "auto" }}
      >
        
         Students
        
      </Link>
      <Link
      href={'/Members/AffiliatedResearchers'}
        className="transition duration-500 border-2 rounded-md max-w-[300px] border-blue-500 ease-in-out bg-blue-500 text-white flex items-center justify-center hover:bg-white hover:text-blue-500 py-2 px-4 "
        style={{ opacity: "1", transform: "none", willChange: "auto" }}
      >
        
        Affiliated Researchers
        
      </Link>
      <Link
      href={'/'}
        className="transition duration-500 border-2 rounded-md max-w-[300px] border-blue-500 ease-in-out bg-blue-500 text-white flex items-center justify-center hover:bg-white hover:text-blue-500 py-2 px-4 "
        style={{ opacity: "1", transform: "none", willChange: "auto" }}
      >
        
        Graduation Path
        
      </Link>      
    </div>
    </div>
    </div>
  );
}

export default Navigation;

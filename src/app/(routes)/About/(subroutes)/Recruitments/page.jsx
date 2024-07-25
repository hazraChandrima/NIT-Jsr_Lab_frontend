// pages/Members.js
import Link from 'next/link';
import React from 'react';


const Recruitment = () => {
  return (
    <main className="min-h-screen w-full flex flex-col items-center bg-white py-10 px-14">
      <div className='flex flex-col items-start max-w-[1256px]'>
        {/* //Recruitments 1*/}
      <div className=' mb-20 w-full'>
      {/* //heading */}
        <div className='mb-10 w-full'>
        <h1 className='text-3xl mb-5 text-sky-950'>Recruitment Details</h1>
        <div className='w-full h-[2px] bg-slate-400'>
          <div className='w-[15%] h-full bg-sky-500'>
          </div>
        </div>  
        </div >
      {/* //heading */}
        <div className='flex flex-col items-start gap-9'>
          <p className='font-light text-lg text-left'>
          Our laboratory is recruiting doctoral students and postdoctoral researchers who wish to study process tomography (PT).
          </p>
          {/* //button */}
          <div className='w-full flex justify-center'>
          <Link href={'/'} target="_blank" rel="noopener noreferrer">
          <div
              class="transition duration-500 border-2 rounded-sm max-w-[300px] border-sky-500 ease-in-out bg-sky-500 text-white hover:bg-gray-100 hover:text-sky-500 py-2 px-4 "
              style={{"opacity":"1","transform":"none","willChange":"auto"}}
            >
              
              Click for more details
            </div>
            </Link>
          </div>
        </div>
      </div>

      {/* //research content */}
      <div className=' mb-20 w-full'>
      {/* //heading */}
        <div className='mb-10 w-full'>
        <h1 className='text-3xl mb-5 text-sky-950'>research content</h1>
        <div className='w-full h-[2px] bg-slate-400'>
          <div className='w-[15%] h-full bg-sky-500'>
          </div>
        </div>  
        </div >
      {/* //heading */}
        <div className='flex flex-col items-start gap-7'>
          {/* //item1 */}

          <div className='flex flex-col items-start gap-3'>
            <p className='font-bold text-blue-400 text-lg'>1. Electrical, Electronic and Information Engineering and PT</p>
            <p className='font-light text-lg'>
            Research and development of hardware (circuit design, sensors, etc.) and software (inverse problems, etc.) related to process tomography (PT) Research
            and development of IoT hardware, software, information and communications, and big data software for industrial machinery, medical equipment, and bioengineering equipment equipped with PT.
          </p>
          </div>
           {/* //item1 */}

           <div className='flex flex-col items-start gap-3'>
            <p className='font-bold text-blue-400 text-lg'>1. Electrical, Electronic and Information Engineering and PT</p>
            <p className='font-light text-lg'>
            Research and development of hardware (circuit design, sensors, etc.) and software (inverse problems, etc.) related to process tomography (PT) Research
            and development of IoT hardware, software, information and communications, and big data software for industrial machinery, medical equipment, and bioengineering equipment equipped with PT.
          </p>
          </div>
           {/* //item1 */}

           <div className='flex flex-col items-start gap-3'>
            <p className='font-bold text-blue-400 text-lg'>1. Electrical, Electronic and Information Engineering and PT</p>
            <p className='font-light text-lg'>
            Research and development of hardware (circuit design, sensors, etc.) and software (inverse problems, etc.) related to process tomography (PT) Research
            and development of IoT hardware, software, information and communications, and big data software for industrial machinery, medical equipment, and bioengineering equipment equipped with PT.
          </p>
          </div>
        </div>
      </div>

      {/* //Desired Talent */}
      <div className=' mb-20 w-full'>
      {/* //heading */}
        <div className='mb-10 w-full'>
        <h1 className='text-3xl mb-5 text-sky-950'>Desired talent</h1>
        <div className='w-full h-[2px] bg-slate-400'>
          <div className='w-[15%] h-full bg-sky-500'>
          </div>
        </div>  
        </div >
      {/* //heading */}
        <div className='flex flex-col items-start gap-9'>
          <p className='font-light text-lg text-left'>
          Those who can make every effort to develop PT. Ability to proactively adopt new academic technology and integrate with PT. Passion for transforming society through practical application.
          </p>
          {/* //button */}
          <div className='w-full flex justify-center'>
          <Link href={'/'} target="_blank" rel="noopener noreferrer">
          <div
              class="transition duration-500 border-2 rounded-sm max-w-[300px] border-sky-500 ease-in-out bg-sky-500 text-white hover:bg-gray-100 hover:text-sky-500 py-2 px-4 "
              style={{"opacity":"1","transform":"none","willChange":"auto"}}
            >
              
              Apply Here
            </div>
            </Link>
          </div>
        </div>
      </div>
     
      </div>
      
    </main>
  );
};

export default Recruitment;

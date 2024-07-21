import React from 'react'
import ProgramWiseCard from '../../_components/ProgramWiseCards'


export default function page() {
    return (
      <main className='min-h-screen w-full flex flex-col items-center bg-gray-800 py-20 px-5'>
        <div className='flex flex-col items-start w-full max-w-[1256px]'>
            {/* //Program Based */}
      <div className='w-full flex mb-16 flex-col gap-14'>
        <div>
        <h1 className='text-2xl text-white'>Doctoral Program</h1>
        <div className='w-full h-[2px] bg-white'>
          <div className='w-[15%] h-full bg-blue-500'>
          </div>
        </div>
        </div>
        <div className='flex flex-col gap-4'>
        <ProgramWiseCard/>
        <ProgramWiseCard/>
        <ProgramWiseCard/>
        <ProgramWiseCard/>
        </div>
      </div>
      
      <div className='w-full flex flex-col gap-14'>
        <div>
        <h1 className='text-2xl text-white'>Masters Program</h1>
        <div className='w-full h-[2px] bg-white'>
          <div className='w-[15%] h-full bg-blue-500'>
          </div>
        </div>
        </div>
        <div className='flex flex-col gap-4'>
        <ProgramWiseCard/>
        <ProgramWiseCard/>
        <ProgramWiseCard/>
        </div>
      </div>

      {/* //Program Based */}
        </div>
      </main>
    )
  }
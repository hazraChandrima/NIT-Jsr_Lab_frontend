import React from 'react'
import ProgramWiseCard from '../../_components/ProgramWiseCards'


export default function page() {
    return (
      <main className='min-h-screen w-full flex flex-col items-center bg-white py-20 px-5'>
        <div className='flex flex-col items-start w-full max-w-[1256px]'>

      <div className='w-full flex mb-16 flex-col gap-14'>
        <div>
        <h1 className='text-2xl mb-5 text-sky-950'>Doctoral Program</h1>
        <div className='w-full h-[2px] bg-slate-400'>
          <div className='w-[15%] h-full bg-sky-500'>
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
        <h1 className='text-2xl mb-5 text-sky-950'>Masters Program</h1>
        <div className='w-full h-[2px] bg-slate-400'>
          <div className='w-[15%] h-full bg-sky-500'>
          </div>
        </div>
        </div>
        <div className='flex flex-col gap-4'>
        <ProgramWiseCard/>
        <ProgramWiseCard/>
        <ProgramWiseCard/>
        </div>
      </div>

        </div>
      </main>
    )
  }
import React from 'react'

function SingleNews({params}) {
  const description = params.title;
  return (
    <div className='flex flex-col py-5 h-dvh text-white text-right items-center'>

      <div className="py-6 text-left flex flex-col items-center max-w-[1256px] w-full px-4">
        <h1 className='text-blue-300'>{description}</h1>
      </div>
    </div>
  )
}

export default SingleNews
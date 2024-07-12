import React from 'react'
import NewsCard from './NewsCard'
import ViewMore from '../ViewMoreComponent/ViewMoreComponent'

function NewsSection() {
  return (
    <div className='flex flex-col py-5 min-h-dvh bg-slate-900 text-white text-right items-end'>
      <h1 className='text-3xl relative right-3'>NEWS</h1>
      <div className="py-6 text-left">
      <NewsCard/>
      <NewsCard/>
      <NewsCard/>
      <NewsCard/>
      <NewsCard/>
      </div>
      <div className='relative right-3 mb-7'>
      <ViewMore width={300}/>
      </div>
    </div>
  )
}

export default NewsSection
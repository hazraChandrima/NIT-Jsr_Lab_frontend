import Image from 'next/image'
import React from 'react'
// import nitJsrImage from '@/assets/nit_jsr.jpeg';


function ParallaxImageComponent() {
  return (
    <div className="min-h-screen w-full bg-gray-800">
      
      <section
        className="h-[65vh] w-full flex items-center justify-center bg-cover relative bg-fixed"
        style={{ backgroundImage: "url('https://tse2.mm.bing.net/th?id=OIP.Z_PIeIRDajXPmZHROt-T_QHaEK&pid=Api&P=0&h=180')" }}
      >
        <img src={"https://tse2.mm.bing.net/th?id=OIP.Z_PIeIRDajXPmZHROt-T_QHaEK&pid=Api&P=0&h=180"} className='absolute left-0 top-[-50px] w-[223px] sm-[350px] md:w-[30vw]'/>
        
      </section>
    </div>
  )
}

export default ParallaxImageComponent
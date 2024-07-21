import Image from 'next/image'
import React from 'react'
// import nitJsrImage from '@/assets/nit_jsr.jpeg';


function ParallaxImageComponent() {
  return (
    <div className="min-h-screen w-full bg-gray-800">
      
      <section
        className="h-[65vh] w-full flex items-center justify-center bg-cover relative bg-fixed"
        style={{ backgroundImage: "url('https://nitjsr.ac.in/backend/uploads/banner/add/ecb12f68-a5cb-4cec-aa33-c0ac7d622791-1.jpg')" }}
      >
        <img src={"https://nitjsr.ac.in/backend/uploads/banner/add/ecb12f68-a5cb-4cec-aa33-c0ac7d622791-1.jpg"} className='absolute left-0 top-[-50px] w-[223px] sm-[350px] md:w-[30vw]'/>
        
      </section>
    </div>
  )
}

export default ParallaxImageComponent
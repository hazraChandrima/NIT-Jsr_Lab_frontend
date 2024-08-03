import Image from 'next/image'
import React from 'react'
// import nitJsrImage from '@/assets/nit_jsr.jpeg';


function ParallaxImageComponent() {
  return (
    <div className="min-h-screen w-full bg-cover"
      style={{
            backgroundImage:
              "url('https://visme.co/blog/wp-content/uploads/2017/07/50-Beautiful-and-Minimalist-Presentation-Backgrounds-08.jpg')",
          }}
        >
      
      <section
        className="h-[65vh] w-full flex items-center justify-center bg-cover relative bg-fixed"
        style={{ backgroundImage: "url('https://www.bnl.gov/today/body_pics/2013/12/D7110613_isb-720px.jpg')" }}
      >
        <img src={"https://newscenter.lbl.gov/wp-content/uploads/2010/09/ALS-USB-ext-Sep8-sm.jpg"} className='absolute grayscale left-0 top-[-50px] w-[223px] sm-[350px] md:w-[30vw]'/>
        
      </section>
    </div>
  )
}

export default ParallaxImageComponent
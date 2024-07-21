import React from 'react'
import Link from 'next/link';
import './Footer.css';
import Image from 'next/image';
import logo from '@/assets/images/nitlogo.png';
function Footer() {
  return (
    <div className=' bg-slate-400 h-80 w-screen' style={{position:"relative"}}>
      <div className="footerLinks">
       <Link href="/Research">Research Content</Link>
       <Link href="#">Members</Link>
       <Link href="/Achievements/Awards">Research Achievements</Link>
       <Link href="#">Recruitment Information</Link>
       <Link href="#">Lecture Materials</Link>
       <Link href="/Information">Information</Link>
       <Link href="/News">News</Link>
      </div>
      <Image src={logo} className="footerLogo"/>
    </div>
    
  )
}

export default Footer

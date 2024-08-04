import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/images/nitlogo.png';

function Footer() {
  return (
    <div className="bg-sky-50 w-full font-sans z-30">
      <div className="max-w-7xl relative mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav className=" flex flex-wrap justify-center space-x-4" aria-label="Footer">
          <div className="px-5 py-2">
            <Link href="/Research" className="text-lg text-gray-500 hover:text-sky-500 transition duration-300">Research Projects</Link>
          </div>
          <div className="px-5 py-2">
            <Link href="/Gallery" className="text-lg text-gray-500 hover:text-sky-500 transition duration-300">Gallery</Link>
          </div>
          <div className="px-5 py-2">
            <Link href="/Achievements/Journals" className="text-lg text-gray-500 hover:text-sky-500 transition duration-300">Journals</Link>
          </div>
          <div className="px-5 py-2">
            <Link href="/Achievements/Patents" className="text-lg text-gray-500 hover:text-sky-500 transition duration-300">Patents</Link>
          </div>
          <div className="px-5 py-2">
            <Link href="/Information" className="text-lg text-gray-500 hover:text-sky-500 transition duration-300">Information</Link>
          </div>
          <div className="px-5 py-2">
            <Link href="/News" className="text-lg text-gray-500 hover:text-sky-500 transition duration-300">News</Link>
          </div>
        </nav>
        <div className="my-12 flex justify-center">
          <Image src={logo} alt="Logo" className="h-28 w-auto"/>
        </div>
        <div className='border-t-2 mb-5 absolute -left-3 w-[103%] border-slate-200 '></div>
        <p className="mt-20 text-center text-lg text-gray-400">
          &copy; 2024 NIT Jamshedpur Laboratory. All rights reserved.
        </p>
        
      </div>
    </div> 
  );
}

export default Footer;

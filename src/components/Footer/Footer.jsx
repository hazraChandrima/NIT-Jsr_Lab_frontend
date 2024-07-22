import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/images/nitlogo.png';

function Footer() {
  return (
    <div className="bg-sky-50 border-t-2 border-slate-200 w-full font-sans ">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <nav className=" flex flex-wrap justify-center space-x-4" aria-label="Footer">
          <div className="px-5 py-2">
            <Link href="/Research" className="text-lg text-gray-500 hover:text-sky-500 transition duration-300">Research Contents</Link>
          </div>
          <div className="px-5 py-2">
            <Link href="/About/Gallery" className="text-lg text-gray-500 hover:text-sky-500 transition duration-300">Gallery</Link>
          </div>
          <div className="px-5 py-2">
            <Link href="/Achievements/Awards" className="text-lg text-gray-500 hover:text-sky-500 transition duration-300">Achievements</Link>
          </div>
          <div className="px-5 py-2">
            <Link href="/About/Recruitments" className="text-lg text-gray-500 hover:text-sky-500 transition duration-300">Recruitments</Link>
          </div>
          <div className="px-5 py-2">
            <Link href="/About/LectureMaterial" className="text-lg text-gray-500 hover:text-sky-500 transition duration-300">Lecture Materials</Link>
          </div>
          <div className="px-5 py-2">
            <Link href="/Information" className="text-lg text-gray-500 hover:text-sky-500 transition duration-300">Information</Link>
          </div>
          <div className="px-5 py-2">
            <Link href="/News" className="text-lg text-gray-500 hover:text-sky-500 transition duration-300">News</Link>
          </div>
        </nav>
        <div className="mt-12 flex justify-center">
          <Image src={logo} alt="Logo" className="h-28 w-auto"/>
        </div>
        <p className="mt-12 text-center text-lg text-gray-400">
          &copy; 2024 NIT Jamshedpur Laboratory. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;

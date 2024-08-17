import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/images/logo.png';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import PinDropOutlinedIcon from '@mui/icons-material/PinDropOutlined';

function Footer() {
  return (

    <div className="bg-sky-50 w-full h-full font-sans z-30 mt-24">
      <div className="max-w-7xl relative mx-10 py-12  px-5 sm:px-10 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start justify-evenly mb-14 mt-9 lg:mb-20">
          <div className="flex items-start space-x-4 mb-10 lg:mb-0">
            <Link href="/">
              <Image
                src={logo}
                height={100}
                width={100}
                alt="logo"
              />
            </Link>
          </div>
          <div className="flex flex-col  lg:flex-row sm:ml-3 ml-3 lg:space-x-24">
            <div className="flex flex-col items-start mb-8 lg:mb-0 ">
              <div className="flex items-center space-x-2 mb-2">
                <span className='text-cyan-600'><PhoneOutlinedIcon /></span>
                <h2 className="text-xl font-semibold text-gray-800">Get in Touch</h2>
              </div>
              <p className="text-gray-600 pl-8 ">
                +91 9102197734
                <br />
                <a href="mailto:koushendra.cse@nitjsr.ac.in" className="text-cyan-600">koushlendra.cse@nitjsr.ac.in</a>
                <br />
                <a href="mailto:mai2022@nitjsr.ac.in" className="text-cyan-600">mai2022@nitjsr.ac.in</a>
              </p>
            </div>
            <div className="flex flex-col items-start  mb-6 lg:mb-0">
              <div className="flex items-center space-x-2 mb-2">
                <span className='text-cyan-600'><PinDropOutlinedIcon /></span>
                <h2 className="text-xl font-semibold text-gray-800">Address</h2>
              </div>
              <p className="text-gray-600 pl-8">
                National Institute of Technology,
                <br />
                Adityapur, Jamshedpur,
                <br />
                Jharkhand 831014
              </p>
            </div>
          </div>
        </div>
        <div className="h-[1px] my-5 w-full bg-slate-200"></div>
        <p className="text-center text-lg text-gray-600 mt-10">
          &copy; 2024 NIT Jamshedpur Laboratory. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;

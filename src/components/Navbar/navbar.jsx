'use client'
import Image from "next/image"
import logo from "../../assets/images/logo.png"
import Link from "next/link"
import { easeInOut, motion } from "framer-motion"
import React, { useState } from "react"
import AchievementsHoverDropdown from "./components/AchievementsHoverDropdown"
import MembersHoverDropdown from "./components/MembersHoverDropdown"
import ResearchHoverDropdown from "./components/ResearchHoverDropdown"
import './styles.css'

export default function Navbar() {

  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (item) => {
    setHoveredItem(item);
  }

  const handleMouseLeave = () => {
    setHoveredItem(null);
  }

  // for dropdown animations

  const dropdownVariants = {
    hidden: {
      opacity: 1,
      scaleY: 0,
      originX: 0,
      left: 0,
    },
    visible: {
      opacity: 1,
      scaleY: 1,
      originX: 0,
      left: 0,
    },
    exit: {
      scaleY: 0,
      originX: 0,
      left: 0,
    },
  };



  return (

    <div className="lg:visible font-sans xl:visible invisible bg-white flex flex-row fixed h-20 w-full z-40 text-black bg-opacity-70">

      <div className="relative flex items-center justify-center" >
        <span className="p-4 font-semibold text-xl">
          <span><Link href="/">
          <Image 
          src={logo}
          width={80}
          height={80}
          alt="logo"
          />

          </Link></span>
        </span>
      </div>



      {/* Research  */}
      <div className="relative px-3 flex items-center justify-center">
        <span className="test p-4 md:ml-32" onMouseEnter={() => handleMouseEnter('Research')} onMouseLeave={handleMouseLeave}>
          <span className="navbar-option font-semibold"><Link href="/Research">RESEARCH</Link></span>
        </span>
      </div>
      <motion.div
        className="absolute top-full left-0 right-0"
        initial="hidden"
        animate={hoveredItem === 'Research' ? 'visible' : 'hidden'}
        exit="exit"
        variants={dropdownVariants}
        transition={{
          duration: 0.3,
          delay: 0.1,
          ease: easeInOut
        }}
      >
        <div onMouseEnter={() => handleMouseEnter('Research')} onMouseLeave={handleMouseLeave}>
          <ResearchHoverDropdown />
        </div>

      </motion.div>



      {/* Members  */}
      <div className="relative px-4 flex items-center justify-center">
        <span className="test p-4 md:left-1/4 cursor-pointer" onMouseEnter={() => handleMouseEnter('Members')} onMouseLeave={handleMouseLeave}>
          <span className="navbar-option font-semibold">MEMBERS</span>
        </span>

      </div>
      <motion.div
        className="absolute top-full left-0 right-0"
        initial="hidden"
        animate={hoveredItem === 'Members' ? 'visible' : 'hidden'}
        exit="exit"
        variants={dropdownVariants}
        transition={{
          duration: 0.3,
          delay: 0.1,
          ease: easeInOut
        }}
      >
        <div onMouseEnter={() => handleMouseEnter('Members')} onMouseLeave={handleMouseLeave}>
          <MembersHoverDropdown />
        </div>

      </motion.div>



      {/* Achievements  */}
      <div className="relative px-4 flex items-center justify-center">
        <span className="test p-4 md:left-1/2" onMouseEnter={() => handleMouseEnter('Achievements')} onMouseLeave={handleMouseLeave}>
          <span className="navbar-option font-semibold"><Link href="/Achievements">ACHIEVEMENTS</Link></span>
        </span>
      </div>
      <motion.div
        className="absolute top-full left-0 right-0"
        initial="hidden"
        animate={hoveredItem === 'Achievements' ? 'visible' : 'hidden'}
        exit="exit"
        variants={dropdownVariants}
        transition={{
          duration: 0.3,
          delay: 0.1,
          ease: easeInOut
        }}
      >
        <div onMouseEnter={() => handleMouseEnter('Achievements')} onMouseLeave={handleMouseLeave}>
          <AchievementsHoverDropdown />
        </div>
      </motion.div>



      {/* Gallery */}
      <div className="relative px-4 flex items-center justify-center">
        <span className="test p-4 " onMouseLeave={handleMouseLeave}>
          <span className="test navbar-option font-semibold"><Link className="text-sky-800" href="/Gallery">GALLERY</Link></span>
        </span>

      </div>


    </div>
  )
}

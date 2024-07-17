'use client'
import Link from "next/link"
import { easeInOut, motion } from "framer-motion"
import React, { useState } from "react"
import AboutHoverDropdown from "./components/AboutHoverDropdown"
import AchievementsHoverDropdown from "./components/AchievementsHoverDropdown"
import MemberHoverDropdown from "./components/MembersHoverDropdown"
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

    <div className=" bg-white flex flex-row fixed h-16 w-full z-40 text-black bg-opacity-70">

      <div className="relative" >
        <span className="p-4 flex items-center justify-center">
          <span><Link href="/">NIT Jsr Lab</Link></span>
        </span>
      </div>



      {/* Research  */}
      <div className="relative">
        <span className="p-4 flex items-center justify-center md:ml-32" onMouseEnter={() => handleMouseEnter('Research')} onMouseLeave={handleMouseLeave}>
          <span className="navbar-option"><Link href="/Research">Research</Link></span>
        </span>
      </div>
      <motion.div
        className="absolute top-full left-0 right-0"
        initial="hidden"
        animate={hoveredItem === 'Research' ? 'visible' : 'hidden'}
        exit="exit"
        variants={dropdownVariants}
        transition={{
          duration: 0.4,
          delay: 0.1,
          ease: easeInOut
        }}
      >
        <div onMouseEnter={() => handleMouseEnter('Research')} onMouseLeave={handleMouseLeave}>
          <ResearchHoverDropdown />
        </div>
      </motion.div>



      {/* Members  */}
      <div className="relative">
        <span className="p-4 flex items-center justify-center md:left-1/4 cursor-pointer" onMouseEnter={() => handleMouseEnter('Members')} onMouseLeave={handleMouseLeave}>
          <span className="navbar-option">Members</span>
        </span>
      </div>
      <motion.div
        className="absolute top-full left-0 right-0"
        initial="hidden"
        animate={hoveredItem === 'Members' ? 'visible' : 'hidden'}
        exit="exit"
        variants={dropdownVariants}
        transition={{
          duration: 0.4,
          delay: 0.1,
          ease: easeInOut
        }}
      >
        <div onMouseEnter={() => handleMouseEnter('Members')} onMouseLeave={handleMouseLeave}>
          <MemberHoverDropdown />
        </div>
      </motion.div>



      {/* Achievements  */}
      <div className="relative">
        <span className="p-4 flex items-center justify-center md:left-1/2" onMouseEnter={() => handleMouseEnter('Achievements')} onMouseLeave={handleMouseLeave}>
          <span className="navbar-option"><Link href="/Achievements">Achievements</Link></span>
        </span>
      </div>
      <motion.div
        className="absolute top-full left-0 right-0"
        initial="hidden"
        animate={hoveredItem === 'Achievements' ? 'visible' : 'hidden'}
        exit="exit"
        variants={dropdownVariants}
        transition={{
          duration: 0.4,
          delay: 0.1,
          ease: easeInOut
        }}
      >
        <div onMouseEnter={() => handleMouseEnter('Achievements')} onMouseLeave={handleMouseLeave}>
          <AchievementsHoverDropdown />
        </div>
      </motion.div>



      {/* About  */}
      <div className="relative">
        <span className="p-4 flex items-center justify-center md:left-3/4 cursor-pointer" onMouseEnter={() => handleMouseEnter('About')} onMouseLeave={handleMouseLeave}>
          <span className="navbar-option">About</span>
        </span>
      </div>
      <motion.div
        className="absolute top-full left-0 right-0"
        initial="hidden"
        animate={hoveredItem === 'About' ? 'visible' : 'hidden'}
        exit="exit"
        variants={dropdownVariants}
        transition={{
          duration: 0.4,
          delay: 0.1,
          ease: easeInOut
        }}
      >
        <div onMouseEnter={() => handleMouseEnter('About')} onMouseLeave={handleMouseLeave}>
          <AboutHoverDropdown />
        </div>
      </motion.div>



      {/* Information  */}
      <div className="relative">
        <span className="p-4 flex items-center justify-center" onMouseLeave={handleMouseLeave}>
          <span className="navbar-option"><Link href="/Information">Information</Link></span>
        </span>
      </div>


      {/* News  */}
      <div className="relative">
        <span className="relative p-4 flex items-center justify-center">
          <span className="navbar-option"><Link href="/News">News</Link></span>
        </span>
      </div>

    </div>
  )
}
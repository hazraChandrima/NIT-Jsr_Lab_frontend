'use client'
import Link from "next/link"
import { easeInOut, motion } from "framer-motion"
import React, { useState } from "react"
import AboutHoverDropdown from "./components/AboutHoverDropdown"
import AchievementsHoverDropdown from "./components/AchievementsHoverDropdown"
import MemberHoverDropdown from "./components/MembersHoverDropdown"
import ResearchHoverDropdown from "./components/ResearchHoverDropdown"

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

      <div className="relative">
        <div className="p-4 flex items-center justify-center">
          <Link href="/">NIT Jsr Lab</Link>
        </div>
      </div>


      {/* Research  */}
      <div className="relative">
        <div className="p-4 flex items-center justify-center md:ml-32" onMouseEnter={() => handleMouseEnter('Research')} >
          <Link href="/Research">Research</Link>
        </div>
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
        <ResearchHoverDropdown onMouseEnter={() => handleMouseEnter('Research')} onMouseLeave={handleMouseLeave} />
      </motion.div>


      {/* Members  */}
      <div className="relative">
        <div className="p-4 flex items-center justify-center md:left-1/4 cursor-pointer" onMouseEnter={() => handleMouseEnter('Members')} >
          Members
        </div>
      </div>
      <motion.div
        className="absolute top-full left-0 right-0"
        initial="hidden"
        animate={hoveredItem === 'Members' || hoveredItem === 'MemberDropdown' ? 'visible' : 'hidden'}
        exit="exit"
        variants={dropdownVariants}
        transition={{
          duration: 0.4,
          delay: 0.1,
          ease: easeInOut
        }}
      >
        <MemberHoverDropdown onMouseEnter={() => handleMouseEnter('Members')} onMouseLeave={handleMouseLeave} />
      </motion.div>


      {/* Achievements  */}
      <div className="relative">
        <div className="p-4 flex items-center justify-center md:left-1/2" onMouseEnter={() => handleMouseEnter('Achievements')} onMouseLeave={handleMouseLeave}>
          <Link href="/Achievements">Achievements</Link>
        </div>
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
        <AchievementsHoverDropdown />
      </motion.div>


      {/* About  */}
      <div className="relative">
        <div className="p-4 flex items-center justify-center md:left-3/4 cursor-pointer" onMouseEnter={() => handleMouseEnter('About')} onMouseLeave={handleMouseLeave}>
          About
        </div>
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
        <AboutHoverDropdown />
      </motion.div>


      {/* Information  */}
      <div className="relative">
        <div className="p-4 flex items-center justify-center" onMouseEnter={()=>handleMouseEnter('Info')}  onMouseLeave={handleMouseLeave}>
          <Link href="/Information">Information</Link>
        </div>
      </div>


      {/* News  */}
      <div className="relative">
        <div className="relative p-4 flex items-center justify-center">
          <Link href="/News">News</Link>
        </div>
      </div>

    </div>
  )
}
'use client'
import Link from "next/link"
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

  return (
    <div className=" bg-black flex flex-row fixed h-16 w-full z-40 text-white">
      <Link href="/"><p className="p-4">NIT Jsr Lab</p></Link>

      <div className="relative">
        <div className="p-4 flex items-center justify-center md:ml-32" onMouseEnter={() => handleMouseEnter('Research')} onMouseLeave={handleMouseLeave}>
          Research
        </div>
        {hoveredItem === 'Research' &&
          <div className="absolute left-0 mt-10 md:mt-0">
            <ResearchHoverDropdown />
          </div>
        }
      </div>

      <div className="relative">
        <div className="p-4 flex items-center justify-center md:left-1/4" onMouseEnter={() => handleMouseEnter('Members')} onMouseLeave={handleMouseLeave}>
          Members
        </div>
        {hoveredItem === 'Members' &&
          <div className="absolute left-0 mt-10 md:mt-0">
            <MemberHoverDropdown />
          </div>
        }
      </div>

      <div className="relative">
        <div className="p-4 flex items-center justify-center md:left-1/2" onMouseEnter={() => handleMouseEnter('Achievements')} onMouseLeave={handleMouseLeave}>
          Achievements
        </div>
        {hoveredItem === 'Achievements' &&
          <div className="absolute left-0 mt-10 md:mt-0">
            <AchievementsHoverDropdown />
          </div>
        }
      </div>

      <div className="relative">
        <div className="p-4 flex items-center justify-center md:left-3/4" onMouseEnter={() => handleMouseEnter('About')} onMouseLeave={handleMouseLeave}>
          About
        </div>
        {hoveredItem === 'About' &&
          <div className="absolute left-0 mt-10 md:mt-0">
            <AboutHoverDropdown />
          </div>
        }
      </div>

      <div className="relative">
        <div className="p-4 flex items-center justify-center md:left- ">
          <Link href="/Information">Information</Link>
        </div>
      </div>

      <div className="relative">
        <div className="relative p-4 flex items-center justify-center md:left- ">
          <Link href="/News">News</Link>
        </div>
      </div>

    </div>
  )
}
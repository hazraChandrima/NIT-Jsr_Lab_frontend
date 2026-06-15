'use client';

import Image from "next/image";
import logo from "../../assets/images/logo.png";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";
import AchievementsHoverDropdown from "./components/AchievementsHoverDropdown";
import MembersHoverDropdown from "./components/MembersHoverDropdown";
import ResearchHoverDropdown from "./components/ResearchHoverDropdown";
import {
  useResearchSubroutes,
  membersSubroutes,
  achievementsSubroutes,
  gallerySubroutes,
  updatesSubroutes,
} from "@/routes/navbarRoutes";

/* ── Navigation data shared by desktop & mobile ─────────────────────── */
const NAV_ITEMS = [
  { name: "Research", href: "/Research", hasDropdown: false },
  { name: "Members", href: "/Members/LabHead", hasDropdown: true },
  { name: "Achievements", href: "/Achievements/Fundings", hasDropdown: true },
  { name: "Gallery", href: "/Gallery", hasDropdown: false },
  { name: "Updates", href: "/Updates", hasDropdown: false },
];

/* ── Framer-motion variants ──────────────────────────────────────────── */
const dropdownVariants = {
  hidden: { opacity: 0, y: -8, scale: 0.95, transformOrigin: "top" },
  visible: { opacity: 1, y: 0, scale: 1, transformOrigin: "top" },
  exit: { opacity: 0, y: -8, scale: 0.95, transformOrigin: "top" },
};

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.07 } },
  exit: { opacity: 0, transition: { delay: 0.2, duration: 0.35 } },
};

const mobileItemVariants = {
  hidden: { opacity: 0, y: -16 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -16 },
};

/* ── Chevron icon (for mobile accordion) ─────────────────────────────── */
const ChevronDown = ({ open }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`h-4 w-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);

/* ── Small Caret Icon (for desktop dropdowns) ────────────────────────── */
const CaretDown = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-[14px] w-[14px] ml-1 opacity-70" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
  </svg>
);

/* ── Hamburger button ────────────────────────────────────────────────── */
const HamburgerIcon = ({ isOpen, toggle }) => (
  <button
    onClick={toggle}
    aria-label={isOpen ? "Close menu" : "Open menu"}
    className="relative z-[60] flex flex-col justify-center items-center w-10 h-10 gap-[5px] group"
  >
    <span
      className={`block h-[2.5px] w-6 rounded-full bg-gray-800 transition-all duration-300 ${
        isOpen ? "translate-y-[7.5px] rotate-45" : ""
      }`}
    />
    <span
      className={`block h-[2.5px] w-6 rounded-full bg-gray-800 transition-all duration-300 ${
        isOpen ? "opacity-0 scale-0" : ""
      }`}
    />
    <span
      className={`block h-[2.5px] w-6 rounded-full bg-gray-800 transition-all duration-300 ${
        isOpen ? "-translate-y-[7.5px] -rotate-45" : ""
      }`}
    />
  </button>
);

/* ════════════════════════════════════════════════════════════════════════
   NAVBAR — single unified component (responsive)
   ════════════════════════════════════════════════════════════════════════ */
export default function Navbar() {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState(null);

  const { researchSubroutes, loading } = useResearchSubroutes();

  /* Build subroutes map for mobile accordion */
  const subroutesMap = {
    Research: researchSubroutes,
    Members: membersSubroutes,
    Achievements: achievementsSubroutes,
    Gallery: gallerySubroutes,
    Updates: updatesSubroutes,
  };

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const closeMobile = () => {
    setMobileOpen(false);
    setExpandedSection(null);
  };

  const toggleSection = (name) =>
    setExpandedSection((prev) => (prev === name ? null : name));

  /* Desktop dropdown component picker */
  const DesktopDropdown = ({ name }) => {
    if (name === "Research") return <ResearchHoverDropdown />;
    if (name === "Members") return <MembersHoverDropdown />;
    if (name === "Achievements") return <AchievementsHoverDropdown />;
    return null;
  };

  return (
    <nav className="fixed top-0 w-full backdrop-blur-md bg-white/80 border-b border-gray-200 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">

          {/* ── Logo ─────────────────────────────────────────── */}
          <a href="/"  className="flex-shrink-0" onClick={closeMobile}>
            <Image src={logo} width={80} height={80} alt="Lab Logo" />
          </a>

          {/* ══════════════════════════════════════════════════
              DESKTOP NAV (hidden below lg)
              ═══════════════════════════════════════════════ */}
          <div className="hidden lg:flex items-center space-x-8">
            {NAV_ITEMS.map((item) =>
              item.hasDropdown ? (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => setHoveredItem(item.name)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <Link
                    href={item.href}
                    className="flex items-center text-gray-700 hover:text-blue-600 font-semibold transition-colors py-2"
                  >
                    {item.name.toUpperCase()}
                    <CaretDown />
                  </Link>

                  <AnimatePresence>
                    {hoveredItem === item.name && (
                      <motion.div
                        className="absolute top-full left-0 pt-2 z-50 w-max"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={dropdownVariants}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                      >
                        <DesktopDropdown name={item.name} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 font-semibold transition-colors py-2"
                >
                  {item.name.toUpperCase()}
                </Link>
              )
            )}
          </div>

          {/* ── Right-side actions ───────────────────────────── */}
          <div className="flex items-center gap-3">
            <Link
              href="/admin/login"
              className="hidden sm:inline-flex bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg transition"
            >
              Admin Login
            </Link>

            {/* Hamburger — visible only below lg */}
            <div className="lg:hidden">
              <HamburgerIcon
                isOpen={mobileOpen}
                toggle={() => setMobileOpen((v) => !v)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════
          MOBILE MENU (visible only below lg)
          ═══════════════════════════════════════════════════ */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="lg:hidden fixed inset-0 w-full h-screen bg-black/50 backdrop-blur-sm pt-20 z-40"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={overlayVariants}
            onClick={closeMobile}
          >
            <motion.div
              className="bg-gray-950/95 backdrop-blur-md rounded-2xl mx-4 mt-2 p-6 shadow-2xl overflow-y-auto max-h-[80vh]"
              variants={mobileItemVariants}
              onClick={(e) => e.stopPropagation()}
            >
              {NAV_ITEMS.map((item) => {
                const subs = subroutesMap[item.name] || [];
                const isExpanded = expandedSection === item.name;

                return (
                  <motion.div
                    key={item.name}
                    className="mb-4"
                    variants={mobileItemVariants}
                  >
                    {/* Section header */}
                    {item.hasDropdown && subs.length > 0 ? (
                      <button
                        onClick={() => toggleSection(item.name)}
                        className="w-full flex items-center justify-between text-left text-xl font-semibold text-cyan-200/90 hover:text-cyan-100 transition-colors py-2"
                      >
                        <Link href={item.href} onClick={closeMobile}>
                          {item.name}
                        </Link>
                        <ChevronDown open={isExpanded} />
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={closeMobile}
                        className="block text-xl font-semibold text-cyan-200/90 hover:text-cyan-100 transition-colors py-2"
                      >
                        {item.name}
                      </Link>
                    )}

                    {/* Divider */}
                    <div className="h-px w-full bg-gray-700/60 mt-1" />

                    {/* Accordion subroutes */}
                    <AnimatePresence>
                      {isExpanded && subs.length > 0 && (
                        <motion.ul
                          className="mt-2 ml-2 space-y-1 overflow-hidden"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                        >
                          {subs.map((route, idx) => (
                            <li key={idx}>
                              <Link
                                href={route.href}
                                onClick={closeMobile}
                                className="block px-3 py-2 text-base text-slate-300 hover:text-cyan-300 hover:bg-white/5 rounded-lg transition-colors duration-200"
                              >
                                {route.name}
                              </Link>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}

              {/* Admin Login (mobile) */}
              <motion.div variants={mobileItemVariants} className="mt-4 pt-4 border-t border-gray-700/60">
                <Link
                  href="/admin/login"
                  onClick={closeMobile}
                  className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-3 rounded-xl transition"
                >
                  Admin Login
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
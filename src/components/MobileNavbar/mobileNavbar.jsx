"use client"
import React, { useState } from 'react';
import { Squash as Hamburger } from "hamburger-react";
import MobileNavDropdown from './components/mobileNavDropdown';
import Link from "next/link"
import { AnimatePresence, motion, easeInOut } from "framer-motion";


export const MobileNavbar = () => {

    const dropdownVariants = {
        hidden: {
            opacity: 0,
            originX: 0,
            scaleY: 0,
            left: 0,
        },
        visible: {
            opacity: 1,
            originX: 0,
            scaleY: 1,
            left: 0,
        },
        exit: {
            scaleY: 0,
            originX: 0,
            opacity:0,
            left: 0,
        },
    };

    const [isOpen, setOpen] = useState(false);

    return (

            <div className="lg:invisible xl:invisible sm:visible md:visible fixed flex flex-row justify-between top-0 left-0 h-20 z-50 w-screen bg-white bg-opacity-70">
                <span className="p-4 text-xl font-semibold flex items-center ">
                    <Link href="/">NIT Jsr Lab</Link>
                </span>
                <span className="mx-3 flex items-center justify-center">
                    <Hamburger toggled={isOpen} size={40} toggle={setOpen} />
                </span>
            
            <motion.div
                initial="hidden"
                animate={isOpen ? 'visible' : 'hidden'}
                exit="exit"
                variants={dropdownVariants}
                transition={{
                    duration: 0.4,
                    delay: 0.1,
                    ease: easeInOut
                }}
                className='absolute top-full left-0 right-0 z-50'>
                <MobileNavDropdown />
            </motion.div>
            </div>

    );
};

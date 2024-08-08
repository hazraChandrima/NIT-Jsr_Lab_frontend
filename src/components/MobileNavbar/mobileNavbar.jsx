"use client"
import React, { useState } from 'react';
import { Squash as Hamburger } from "hamburger-react";
import Link from "next/link"
import logo from "../../assets/images/logo.png"
import Image from 'next/image';
import { motion, AnimatePresence } from "framer-motion";
import { researchSubroutes, membersSubroutes, achievementsSubroutes, gallerySubroutes, updatesSubroutes } from '@/routes/navbarRoutes';

const subroutes = [
    {
        name: 'Research',
        href:'/Research',
        subroutes: researchSubroutes,
    },
    {
        name: 'Members',
        href:'/',
        subroutes: membersSubroutes,
    },
    {
        name: 'Achievements',
        href:'/Achievements',
        subroutes: achievementsSubroutes,
    },
    {
        name: 'Gallery',
        href:'/Gallery',
        subroutes: gallerySubroutes,
    },
    {
        name: 'Updates',
        href:'/Updates',
        subroutes: updatesSubroutes,
    }
];


export const MobileNavbar = () => {

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
        exit: {
            opacity: 0,
            transition: {
                delay: 0.3,
                duration: 0.5
            },
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 }
    };

    const [isOpen, setOpen] = useState(false);

    const handleLinkClick =() => {
        setOpen(false);
    }


    return (

        <div className="lg:invisible xl:invisible sm:visible md:visible fixed flex flex-row justify-between top-0 left-0 h-20 z-50 w-screen bg-white bg-opacity-70">

            <span className="p-4 text-2xl font-semibold flex items-center ">
                <Link href="/">
                <Image
                src={logo}
                height={70}
                width={70}
                alt="logo"
                />
                </Link>
            </span>
            <span className="mx-3 flex items-center justify-center">
                <Hamburger toggled={isOpen} size={40} toggle={setOpen} />
            </span>

            <AnimatePresence>
                {isOpen &&
                    <motion.div
                        className="fixed w-screen overflow-y-scroll h-screen top-20 p-5 pt-0 bg-black opacity-100 border-b border-b-white/20 flex items-center justify-center"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={containerVariants}
                    >
                        <div className="overflow-y-scroll font-sans pt-10 mt-auto mb-10 pb-8 text-white text-center h-auto w-full max-w-3xl">
                            {subroutes.map((section, index) => (
                                <motion.div key={index}
                                    className="mb-6"
                                    variants={itemVariants}>

                                    <h2 className="text-3xl text-cyan-200 opacity-90 mb-2 "><Link  href={`/${section.href}`}>{section.name}</Link></h2>
                                    <hr className='h-[1px] w-56 bg-gray-300 mx-auto mb-5' />
                                    <ul className="list-none p-0">

                                        {section.subroutes.map((route, routeIndex) => (
                                            <motion.li key={routeIndex}
                                                className="mb-2"
                                                variants={itemVariants}>

                                                <Link href={route.href} onClick={handleLinkClick}>
                                                    <div className="block p-1 text-xl hover:text-2xl hover:text-cyan-300 rounded transition duration-200 ease-in-out transform hover:scale-105 font-light ">
                                                        {route.name}
                                                    </div>
                                                </Link>

                                            </motion.li>
                                        ))}

                                    </ul>

                                </motion.div>
                            ))}

                        </div>
                    </motion.div>
                }
            </AnimatePresence>

        </div>

    );
};
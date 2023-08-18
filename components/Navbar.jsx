"use client";
import { Inter } from 'next/font/google';
import { useState } from 'react';
import { motion } from "framer-motion";

const inter = Inter({ subsets: ['latin'] });

export default function Navbar(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return(
        <div>
            {/* Navbar */}
            <nav className="hidden flex-row justify-between py-8 bg-gray-950 z-3 xs:px-2 sm:px-8 md:px-12 lg:px-12 xl:px-80 2xl:px-96 md:flex">
            <div className="flex flex-row items-left justify-left absolute px-8 bg-gray-900 rounded-full z-3">
                <motion.a 
                href='/#'
                className="lg:text-2xl sm:p-2 lg:p-4 font-bold text-white z-3 "
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                >Home</motion.a>
                <motion.a 
                href='/#about'
                className="lg:text-2xl sm:p-2 lg:p-4 font-bold text-white z-3 "
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                >About</motion.a>
                <motion.a 
                href='/#sponsors'
                className="lg:text-2xl sm:p-2 lg:p-4 font-bold text-white z-3 "
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                >Sponsors</motion.a>
                <motion.a 
                href='/#contact'
                className="lg:text-2xl sm:p-2 lg:p-4 font-bold text-white z-3 "
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                >Contact</motion.a>
                <motion.a 
                href='/Schedule'
                className="lg:text-2xl sm:p-2 lg:p-4 font-bold text-white z-3 "
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                >Schedule</motion.a>
            </div>
            </nav>

            {/* Mobile Navbar */}
            <nav className="justify-between p-4 bg-gray-900 text-white md:hidden">
            <div className="flex items-center md:hidden">
            <button
                className="block md:hidden text-white hover:text-gray-400 focus:outline-none"
                onClick={toggleMenu}
            >
                <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                >
                {isMenuOpen ? (
                    <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20 6H4V4H20V6ZM20 12H4V10H20V12ZM20 18H4V16H20V18Z"
                    />
                ) : (
                    <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 6H20V8H4V6ZM4 12H20V14H4V12ZM4 18H20V20H4V18Z"
                    />
                )}
                </svg>
            </button>
                {/* <button
                className="text-white hover:text-gray-400 focus:outline-none"
                onClick={toggleMenu}
                >
                Click me
                </button> */}
            </div>

            <div className={`md:flex ${isMenuOpen ? 'block' : 'hidden'}`}>
                <a href="#" className="block mx-4 py-2">Home</a>
                <a href="#" className="block mx-4 py-2">About</a>
                <a href="#" className="block mx-4 py-2">Services</a>
                <a href="#" className="block mx-4 py-2">Contact</a>
            </div>
            </nav>
        </div>
    );
}
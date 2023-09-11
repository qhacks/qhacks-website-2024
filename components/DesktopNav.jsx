import { Inter } from 'next/font/google';
import { useState, useEffect } from 'react';
import { motion, useAnimation } from "framer-motion";
import ScrollIntoView from 'react-scroll-into-view';

export default function DesktopNav(){
 
    // Scroll Detection
    const [scrolling, setScrolling] = useState(false);
    const controls = useAnimation();

    useEffect(() => {
        const handleScroll = () => {
        if (window.scrollY > 0 && !scrolling) {
            setScrolling(true);
            controls.start({ y: -100, opacity: 0 });
        } else if (window.scrollY === 0 && scrolling) {
            setScrolling(false);
            controls.start({ y: 0, opacity: 1 });
        }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolling, controls]);
    
    return(
        <nav className='fixed w-full h-auto'>
            <div className="flex flex-row justify-center items-center mt-10">
                <div className="flex flex-row items-left justify-left absolute px-8 bg-gray-900 rounded-full">
                    <motion.span 
                        className="hover:cursor-pointer lg:text-2xl sm:p-2 lg:p-4 font-bold text-white"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <ScrollIntoView selector="#">
                            Home
                        </ScrollIntoView>
                    </motion.span>
                    <motion.span 
                        
                        className="hover:cursor-pointer lg:text-2xl sm:p-2 lg:p-4 font-bold text-white"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <ScrollIntoView selector="#about">
                            About
                        </ScrollIntoView>
                    </motion.span>
                    <motion.span 
                        
                        className="hover:cursor-pointer lg:text-2xl sm:p-2 lg:p-4 font-bold text-white"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <ScrollIntoView selector="#sponsors">
                            Sponsors
                        </ScrollIntoView>
                    </motion.span>
                    <motion.span 
                        
                        className="hover:cursor-pointer lg:text-2xl sm:p-2 lg:p-4 font-bold text-white"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <ScrollIntoView selector="#contact">
                            Contact
                        </ScrollIntoView>
                    </motion.span>
                    {/* <motion.a 
                        href='/Schedule'
                        className="lg:text-2xl sm:p-2 lg:p-4 font-bold text-white"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        Schedule
                    </motion.a> */}
                </div>
            </div>
        </nav>
    );
}
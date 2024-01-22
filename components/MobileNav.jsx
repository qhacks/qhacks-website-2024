import { Inter } from 'next/font/google';
import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation, AnimatePresence, useInView } from "framer-motion";
import ScrollIntoView from 'react-scroll-into-view';
import Link from 'next/link';

export default function MobileNav(){
    const [isExpanded, setExpanded] = useState(false);
 
    return(
        <motion.nav
            className="w-full fixed top-0 justify-between p-4 bg-gray-900 text-white z-50"
        >
            <div className="flex items-center">
                <motion.div
                    initial={false}
                    animate={{color: isExpanded ? "#FBBF24" : "#ffffff"}}
                    className="block text-white hover:text-gray-400 focus:outline-none"
                    onClick={() => setExpanded(!isExpanded)}
                    transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                >
                    <svg
                        className="h-6 w-6 fill-current"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4 6H20V8H4V6ZM4 12H20V14H4V12ZM4 18H20V20H4V18Z"
                        />
                    </svg>
                </motion.div>
            </div>
            <AnimatePresence initial={false}>
                {isExpanded && (
                    <motion.div
                        key="content"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                            open: { opacity: 1, height: "auto" },
                            collapsed: { opacity: 0, height: 0 }
                        }}
                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                        {window.location.href.substring(window.location.href.lastIndexOf('/')) != '/' ? 
                        <motion.div>
                            <motion.span 
                                className="block mx-4 py-2"
                            >
                                <a href="/">
                                    Home
                                </a>
                            </motion.span>
                        </motion.div>
                        :
                        <motion.div>
                            {/* <motion.a href="/" className="block mx-4 py-2">
                                Home
                            </motion.a> */}
                            <motion.span className="block mx-4 py-2">
                                <ScrollIntoView selector="#home">
                                    Home
                                </ScrollIntoView>
                                
                            </motion.span>
                            <motion.span className="block mx-4 py-2">
                                <ScrollIntoView selector="#about">
                                    About
                                </ScrollIntoView>
                                
                            </motion.span>
                            <motion.span className="block mx-4 py-2">
                                <ScrollIntoView selector="#sponsors">
                                    Sponsors
                                </ScrollIntoView>
                                
                            </motion.span>
                            <motion.span className="block mx-4 py-2">
                                <ScrollIntoView selector="#contact">
                                    Contact
                                </ScrollIntoView>
                                
                            </motion.span>
                            <motion.a className="block mx-4 py-2">
                                <a href='/Schedule'>Schedule</a>
                            </motion.a>
                        </motion.div>
                        } 
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
"use client";
import { Inter } from 'next/font/google';
import { useEffect, useState } from 'react';
import { motion, useAnimation } from "framer-motion";
import ScrollIntoView from 'react-scroll-into-view';


import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';

const inter = Inter({ subsets: ['latin'] });

export default function Navbar(){
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

    useEffect(() => {
    // Update the viewport width when the window is resized
    const handleResize = () => {
        setViewportWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
        window.removeEventListener('resize', handleResize);
    };
    }, []);


   


    return(
        <motion.div>
            {viewportWidth <= 768 ? (
                // Render Element 1 if viewport width is 768px or less
                <MobileNav />
            ) : (
                // Render Element 2 if viewport width is greater than 768px
                <DesktopNav />
            )}
        </motion.div>
    );
}
import { motion } from "framer-motion";
import ScrollIntoView from 'react-scroll-into-view';

export default function DesktopNav(){
    return(
        <nav className='fixed w-full h-auto z-50'>
            <div className="flex flex-row justify-center items-center mt-10">
                <div className="flex flex-row items-left justify-left absolute px-8 bg-gray-900 rounded-full">
                    {/* <motion.a
                        href='/'
                        className="hover:cursor-pointer lg:text-2xl sm:p-2 lg:p-4 font-bold text-white"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        Home
                    </motion.a> */}
                    <motion.span 
                        
                        className="hover:cursor-pointer lg:text-2xl sm:p-2 lg:p-4 font-bold text-white"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <ScrollIntoView selector="#home">
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
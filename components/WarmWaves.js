import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function WarmWaves(){
    return(
        <div className="hidden md:flex">
            <div className="absolute w-full -top-6 h-96 overflow-hidden">				
                <motion.div
                    className="absolute w-[120%] top-0 h-full overflow-hidden object-fill"
                    initial={{ x: "0%" }} 
                    animate={{ x: "-8%" }} 
                    exit={{ x: "15%" }}
                    whileHover="hover"
                    // variants={speeds}
                    transition={{ duration: 14, repeat: Infinity, ease: "easeOut", repeatType: "reverse"  }} // Animation duration and easing
                >
                    <img className="w-full absolute -top-6 rotate-180 transform object-fill" src="/wave1.svg" alt=""></img>
                </motion.div>
                <motion.div
                    className="absolute w-[120%] top-0 h-full overflow-hidden"object-fill
                    initial={{ x: "0%" }} 
                    animate={{ x: "-18%" }} 
                    exit={{ x: "18%" }} 
                    transition={{ duration: 16, repeat: Infinity, ease: "easeOut", repeatType: "reverse"  }} // Animation duration and easing
                >
                    <img className="w-full absolute -top-6 rotate-180 transform object-fill" src="/wave2.svg" alt=""></img>
                </motion.div>
                <motion.div
                    className="absolute w-[120%] top-0 h-full overflow-hidden"object-fill
                    initial={{ x: "0%" }} 
                    animate={{ x: "18%" }} 
                    exit={{ x: "-18%" }} 
                    transition={{ duration: 13, repeat: Infinity, ease: "easeOut", repeatType: "reverse"  }} // Animation duration and easing
                >
                    <img className="w-full absolute -top-6 rotate-180 transform object-fill" src="/wave3.svg" alt=""></img>
                </motion.div>
                <motion.div
                    className="absolute w-[120%] top-0 h-full overflow-hidden"object-fill
                    initial={{ x: "0%" }} 
                    animate={{ x: "-18%" }} 
                    exit={{ x: "18%" }} 
                    transition={{ duration: 17, repeat: Infinity, ease: "easeOut", repeatType: "reverse"  }} // Animation duration and easing
                >
                    <img className="w-full absolute -top-6 rotate-180 transform object-fill" src="/wave4.svg" alt=""></img>
                </motion.div>
                <motion.div
                    className="absolute w-[120%] top-0 h-full overflow-hidden"object-fill
                    initial={{ x: "0%" }} 
                    animate={{ x: "18%" }} 
                    exit={{ x: "-18%" }} 
                    transition={{ duration: 18, repeat: Infinity, ease: "easeOut", repeatType: "reverse"  }} // Animation duration and easing
                >
                    <img className="w-full absolute -top-6 rotate-180 transform object-fill" src="/wave5.svg" alt=""></img>
                </motion.div>
            </div>
        </div>
    );
};
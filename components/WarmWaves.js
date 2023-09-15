import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function WarmWaves(){

    // const speeds = () => {
    //     normal: { transition:{ duration: 14; repeat: Infinity; ease: "easeOut"; repeatType: "reverse"  }}},
    //     hover:  { transition:{ duration: 14; repeat: Infinity; ease: "easeOut"; repeatType: "reverse"  }}}
    // }

    return(
        <div className="hidden md:flex">
            <div className="absolute w-full -top-20 h-64 overflow-hidden">				
                <motion.div
                    className="absolute w-[2300px] top-0 h-full overflow-hidden "
                    initial={{ x: "0%" }} 
                    animate={{ x: "-18%" }} 
                    exit={{ x: "18%" }}
                    whileHover="hover"
                    // variants={speeds}
                    transition={{ duration: 14, repeat: Infinity, ease: "easeOut", repeatType: "reverse"  }} // Animation duration and easing
                >
                    <img className="w-full absolute -top-6 rotate-180 transform" src="/wave1.svg" alt=""></img>
                </motion.div>
                <motion.div
                    className="absolute w-[2300px] top-0 h-full overflow-hidden"
                    initial={{ x: "0%" }} 
                    animate={{ x: "-18%" }} 
                    exit={{ x: "18%" }} 
                    transition={{ duration: 16, repeat: Infinity, ease: "easeOut", repeatType: "reverse"  }} // Animation duration and easing
                >
                    <img className="w-full absolute -top-6 rotate-180 transform" src="/wave2.svg" alt=""></img>
                </motion.div>
                <motion.div
                    className="absolute w-[2300px] top-0 h-full overflow-hidden"
                    initial={{ x: "0%" }} 
                    animate={{ x: "18%" }} 
                    exit={{ x: "-18%" }} 
                    transition={{ duration: 13, repeat: Infinity, ease: "easeOut", repeatType: "reverse"  }} // Animation duration and easing
                >
                    <img className="w-full absolute -top-6 rotate-180 transform" src="/wave3.svg" alt=""></img>
                </motion.div>
                <motion.div
                    className="absolute w-[2300px] top-0 h-full overflow-hidden"
                    initial={{ x: "0%" }} 
                    animate={{ x: "-18%" }} 
                    exit={{ x: "18%" }} 
                    transition={{ duration: 17, repeat: Infinity, ease: "easeOut", repeatType: "reverse"  }} // Animation duration and easing
                >
                    <img className="w-full absolute -top-6 rotate-180 transform" src="/wave4.svg" alt=""></img>
                </motion.div>
                <motion.div
                    className="absolute w-[2300px] top-0 h-full overflow-hidden"
                    initial={{ x: "0%" }} 
                    animate={{ x: "18%" }} 
                    exit={{ x: "-18%" }} 
                    transition={{ duration: 18, repeat: Infinity, ease: "easeOut", repeatType: "reverse"  }} // Animation duration and easing
                >
                    <img className="w-full absolute -top-6 rotate-180 transform" src="/wave5.svg" alt=""></img>
                </motion.div>
            </div>
        </div>
    );
};
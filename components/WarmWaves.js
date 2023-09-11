import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function WarmWaves(){

    const [windowWidth, setWindowWidth] = useState(0);
	useEffect(() => {
		// Function to update window width
		const updateWindowWidth = () => {
		setWindowWidth(window.innerWidth);
		};

		// Initial update
		updateWindowWidth();

		// Add a resize event listener to update width when the window is resized
		window.addEventListener("resize", updateWindowWidth);

		// Clean up the event listener when the component unmounts
		return () => {
		window.removeEventListener("resize", updateWindowWidth);
		};
	}, []);

    return(
        <div>
            <div className="absolute w-full -top-20 h-64 overflow-hidden">				
                <motion.div
                    className="absolute w-[2200px] h-full overflow-hidden top-0 "
                    initial={{ x: "0%" }} 
                    animate={{ x: "-18%" }} 
                    exit={{ x: "18%" }} 
                    transition={{ duration: 14, repeat: Infinity, ease: "easeOut", repeatType: "reverse"  }} // Animation duration and easing
                >
                    <img className="w-full absolute top-0 rotate-180 transform" src="/wave1.svg" alt=""></img>
                </motion.div>
                <motion.div
                    className="absolute w-[2200px] h-full overflow-hidden top-0"
                    initial={{ x: "0%" }} 
                    animate={{ x: "-18%" }} 
                    exit={{ x: "18%" }} 
                    transition={{ duration: 16, repeat: Infinity, ease: "easeOut", repeatType: "reverse"  }} // Animation duration and easing
                >
                    <img className="w-full absolute top-0 rotate-180 transform" src="/wave2.svg" alt=""></img>
                </motion.div>
                <motion.div
                    className="absolute w-[2200px] h-full overflow-hidden top-0"
                    initial={{ x: "0%" }} 
                    animate={{ x: "18%" }} 
                    exit={{ x: "-18%" }} 
                    transition={{ duration: 13, repeat: Infinity, ease: "easeOut", repeatType: "reverse"  }} // Animation duration and easing
                >
                    <img className="w-full absolute top-0 rotate-180 transform" src="/wave3.svg" alt=""></img>
                </motion.div>
                <motion.div
                    className="absolute w-[2200px] h-full overflow-hidden top-0"
                    initial={{ x: "0%" }} 
                    animate={{ x: "-18%" }} 
                    exit={{ x: "18%" }} 
                    transition={{ duration: 17, repeat: Infinity, ease: "easeOut", repeatType: "reverse"  }} // Animation duration and easing
                >
                    <img className="w-full absolute top-0 rotate-180 transform" src="/wave4.svg" alt=""></img>
                </motion.div>
                <motion.div
                    className="absolute w-[2200px] h-full overflow-hidden top-0"
                    initial={{ x: "0%" }} 
                    animate={{ x: "18%" }} 
                    exit={{ x: "-18%" }} 
                    transition={{ duration: 18, repeat: Infinity, ease: "easeOut", repeatType: "reverse"  }} // Animation duration and easing
                >
                    <img className="w-full absolute top-0 rotate-180 transform" src="/wave5.svg" alt=""></img>
                </motion.div>
            </div>
        </div>
    );
};
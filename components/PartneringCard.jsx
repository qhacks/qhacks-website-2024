import { motion } from "framer-motion";
import Image from "next/image";

export default function PartneringCard() {

    return(
        <div className="m-4 border-2 rounded-2xl w-72 md:w-96 2xl:w-[600px] h-44 2xl:h-60 p-2 md:p-4 flex flex-row items-center justify-center">
            <div className="2xl:px-3">
                <Image
                    className="2xl:w-44 2xl:h-44"
                    src="/Handshake.svg"
                    alt="Handshake image"
                    width={122}
                    height={122}
                />
            </div>
            <div  className="2xl:px-3 flex justify-center">
                <div className="text-center p-4">
                    <h4 className="text-white 2xl:text-2xl font-bold">
                        Interested in Partnering?
                    </h4>
                    <p className="text-white 2xl:text-lg">Contact us at:</p>
                    <motion.a
                        href="mailto:partnership@qhacks.io"
                        className="text-white 2xl:text-lg"
                    >
                        <motion.p whileHover={{scale:1.1, color: "#FBBF24"}}>partnership@qhacks.io</motion.p>
                    </motion.a>
                    <a
                        href="https://drive.google.com/file/d/1zkrt4qKh9HaB_tRDXZ45H5J7J1RSR3jk/view?usp=drive_link"
                        className="text-white hover:text-sky-500"
                        target="_blank"
                    >
                        <motion.p whileHover={{scale:1.1}} className="2xl:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-600">Partnerships Package</motion.p>
                    </a>
                </div>
            </div>
        </div>
    );
}
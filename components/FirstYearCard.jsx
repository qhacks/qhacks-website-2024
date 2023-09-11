import { motion } from "framer-motion";
import Image from "next/image";

export default function FirstYearCard() {

    return(
        <div className="m-4 border-2 rounded-2xl w-72 md:w-96 2xl:w-[600px] h-44 2xl:h-60 p-2 md:p-4 flex flex-row items-center justify-center">
            <div className="2xl:px-3">
                <Image
                    className="2xl:w-44 2xl:h-44"
                    src="/Loudspeaker.svg"
                    alt="Handshake image"
                    width={122}
                    height={122}
                />
            </div>
            <div  className="2xl:px-3 flex justify-center">
                <div className="text-center p-4">
                    <h4 className="text-white 2xl:text-2xl font-bold">
                        Were currently recruiting for first year reps by sept 22nd
                    </h4>
                    <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSeFeu7YHRbxE5tzoKgG6KtCCpqJMrji00e430VOLTaFVKUWVg/viewform"
                        className="text-white hover:text-sky-500"
                    >
                        <motion.p whileHover={{scale:1.1}} className="2xl:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-600">Application Link</motion.p>
                    </a>
                </div>
            </div>
        </div>
    );
}
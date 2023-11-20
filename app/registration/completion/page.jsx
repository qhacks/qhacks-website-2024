"use client"
import { motion } from 'framer-motion';

// import React from "react";
// import Image from 'next/image'
// import Dropdown from "../../../components/dropDown";
// import parse from "html-react-parser"
// import RedWave1 from "../../../public/RedWaves1.svg"
// import RedWave2 from "../../../public/RedWaves2.svg"

export default function Info() {
  // const textBoxStyle = "rounded px-4 py-1 mt-[2px] text-sm border border-white bg-[#2D2D2D]"

  // return (
  //   <div className="flex justify-center text-white w-screen h-screen bg-[#111010]">
  //       <Image src={RedWave1} className="absolute right-0 top-0 z-1"/>
  //       <Image src={RedWave2} className="absolute left-0 bottom-0 z-1"/>

  //     {/* BACKGROUND */}
  //     <div className="absolute z-[-1] w-full h-full bg-[#111010]">
  //       <img src="/redBlobTR.svg" className="absolute right-0 top-0 z-1"/>
  //       <img src="/redBlobBL.svg" className="absolute left-0 bottom-0 z-1"/>
        
  //     </div>
      
  //       <div className="z-10 w-[80%] lg:w-[60%] flex flex-col justify-center">
  //           <div className="flex flex-col gap-[1rem] justify-between bg-[#202020] py-[2rem] md:py-[4rem] px-[2rem] md:px-[3rem] mt-[1rem] rounded-lg">
  //               <h1 className="text-3xl lg:text-[35px] font-bold">{`All Set!`}</h1>
  //               <p className="text-lg sm:text-xl lg:text-2xl leading-tight">{`You have completed the application form for QHacks 2024. Our team will be reviewing applications after the dashboard closes, so keep an eye out for your status of admission. At any point in time until December 9th, you are able to edit the submission of each page separately by making changes and clicking the "Save and Submit" button. Thank you for applying to QHacks 2024!`}</p>
                
  //               <div className="flex justify-center">
  //                   <button onClick={() => {
  //                       window.location.href = "/dashboard"
  //                   }} className="rounded-[5px] w-[150px] bg-[#EE4036] py-[0.5rem] text-[22px] font-medium self-end">Your Profile</button>
  //               </div>
  //           </div>
  //       </div>
  //   </div>
  // );
  return (
    <div className='h-screen bg-gray-950 flex flex-col items-center justify-center text-center'>
      <h2 className='text-white text-4xl mb-5'>Error this page does not exist</h2>
      <motion.a href='/' whileHover={{scale:1.1}} className='p-4 bg-red-500 text-white font-bold rounded-full'>Return Home</motion.a>
    </div>
  )
};
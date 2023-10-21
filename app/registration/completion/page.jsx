"use client"

import React from "react";
import Image from 'next/image'
import Dropdown from "../../../components/dropDown";
import parse from "html-react-parser"
import RedWave1 from "../../../public/RedWaves1.svg"
import RedWave2 from "../../../public/RedWaves2.svg"

export default function Info() {
  const textBoxStyle = "rounded px-4 py-1 mt-[2px] text-sm border border-white bg-[#2D2D2D]"

  return (
    <div className="flex justify-center text-white w-screen h-screen bg-[#111010]">
        <Image src={RedWave1} className="absolute right-0 top-0 z-1"/>
        <Image src={RedWave2} className="absolute left-0 bottom-0 z-1"/>

      {/* BACKGROUND */}
      <div className="absolute z-[-1] w-full h-full bg-[#111010]">
        <svg xmlns="http://www.w3.org/2000/svg" width="531" height="531" viewBox="0 0 531 531" fill="none" className="absolute right-0">
            <path d="M531 530.1C490.1 531 449.2 531.9 413 516.8C376.9 501.7 345.4 470.5 317.5 443.3C289.6 416.1 265.2 392.8 231.7 375.3C198.2 357.8 155.5 346 131.5 318.6C107.4 291.2 102 248.2 92.2004 211.3C82.4004 174.4 68.3004 143.5 52.3004 109.3C36.4004 75 18.6004 37.5 0.900391 0H531V530.1Z" fill="#381718"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="398" height="398" viewBox="0 0 398 398" fill="none" className="absolute right-0">
            <path d="M398 397.6C367.3 398.3 336.7 398.9 309.5 387.6C282.4 376.3 258.8 352.9 237.9 332.5C217 312 198.7 294.6 173.5 281.5C148.4 268.3 116.4 259.5 98.4004 239C80.3004 218.4 76.3004 186.2 68.9004 158.5C61.6004 130.8 50.9004 107.6 39.0004 81.9C27.0004 56.3 13.7004 28.1 0.400391 0H398V397.6Z" fill="#86181F"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="265" height="266" viewBox="0 0 265 266" fill="none" className="absolute right-0">
            <path d="M265 265C244.6 265.5 224.1 266 206 258.4C187.9 250.8 172.2 235.2 158.3 221.6C144.3 208 132.1 196.4 115.4 187.6C98.6 178.9 77.3 173 65.2 159.3C53.2 145.6 50.5 124.1 45.6 105.7C40.7 87.2 33.6 71.7 25.7 54.6C17.7 37.5 8.8 18.8 0 0H265V265Z" fill="#D70716"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="133" height="133" viewBox="0 0 133 133" fill="none" className="absolute right-0">
            <path d="M133 132.5C122.8 132.8 112.6 133 103.5 129.2C94.5 125.4 86.6 117.6 79.6 110.8C72.7 104 66.6 98.2 58.2 93.8C49.8 89.4 39.1 86.5 33.1 79.7C27.1 72.8 25.8 62.1 23.3 52.8C20.9 43.6 17.3 35.9 13.3 27.3C9.3 18.8 4.9 9.4 0.5 0H133V132.5Z" fill="#FF0000"/>
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" width="531" height="531" viewBox="0 0 531 531" fill="none" className="absolute left-0 bottom-0">
            <path d="M0 0.899902C38.2 12.4999 76.5 23.9999 112.4 38.6999C148.3 53.2999 181.9 71.0999 211.3 92.1999C240.7 113.4 266 137.8 300.5 154.2C335.1 170.5 379 178.6 413.6 201.2C448.2 223.7 473.5 260.7 477.6 301C481.7 341.3 464.7 384.9 469.9 423.7C475.1 462.6 502.6 496.8 530.1 531H0V0.899902Z" fill="#381718"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="398" height="398" viewBox="0 0 398 398" fill="none" className="absolute left-0 bottom-0">
            <path d="M0 0.399902C28.7 9.0999 57.3 17.7999 84.3 28.6999C111.2 39.6999 136.4 53.0999 158.5 68.8999C180.5 84.7999 199.5 103.1 225.4 115.4C251.3 127.6 284.2 133.7 310.2 150.6C336.1 167.6 355.1 195.3 358.2 225.5C361.3 255.7 348.5 288.4 352.4 317.6C356.4 346.7 377 372.4 397.6 398H0V0.399902Z" fill="#86181F"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="265" height="265" viewBox="0 0 265 265" fill="none" className="absolute left-0 bottom-0">
            <path d="M0 -0.00012207C19.1 5.69988 38.2 11.4999 56.2 18.7999C74.1 26.1999 90.9 34.9999 105.7 45.5999C120.4 56.1999 133 68.3999 150.3 76.5999C167.5 84.6999 189.5 88.7999 206.8 100.1C224.1 111.4 236.7 129.9 238.8 150C240.9 170.1 232.3 191.9 235 211.4C237.6 230.8 251.3 247.9 265 265H0V-0.00012207Z" fill="#D70716"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="133" height="133" viewBox="0 0 133 133" fill="none" className="absolute left-0 bottom-0">
            <path d="M0 0.499878C9.6 3.39988 19.1 6.29988 28.1 9.89988C37.1 13.5999 45.5 17.9999 52.8 23.2999C60.2 28.5999 66.5 34.6999 75.1 38.7999C83.8 42.8999 94.7 44.8999 103.4 50.4999C112 56.1999 118.4 65.3999 119.4 75.4999C120.4 85.5999 116.2 96.4999 117.5 106.2C118.8 115.9 125.7 124.5 132.5 133H0V0.499878Z" fill="#FF0000"/>
        </svg>
      </div>
      
        <div className="z-10 w-[80%] lg:w-[60%] flex flex-col justify-center">
            <div className="flex flex-col gap-[1rem] justify-between bg-[#202020] py-[2rem] md:py-[4rem] px-[2rem] md:px-[3rem] mt-[1rem] rounded-lg">
                <h1 className="text-3xl lg:text-[35px] font-bold">{`All Set!`}</h1>
                <p className="text-lg sm:text-xl lg:text-2xl leading-tight">{`You have completed the application form for QHacks 2024. You have been sent an email with confirmation of your completion. Our team will be reviewing applications after the dashboard closes, so keep an eye out for your status of admission. At any point in time until December 9th, you are able to edit the submission of each page separately by making changes and clicking the "Save and Submit" button. Thank you for applying to QHacks 2024!`}</p>
                
                <div className="flex justify-center md:justify-end">
                    <button onClick={() => {
                        window.location.href = "/dashboard"
                    }} className="rounded-[5px] w-[150px] bg-[#EE4036] py-[0.5rem] text-[22px] font-medium self-end">Your Dashboard</button>
                </div>
            </div>
        </div>
    </div>
  );
};
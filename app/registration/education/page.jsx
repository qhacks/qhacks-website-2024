"use client"

import React, { useState } from "react";
import Dropdown from "../../../components/dropDown";
import "./page.css"

export default function About() {
  const [selectedOption, setSelectedOption] = useState("");
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const [lvlOfStudySelect, setlvlOfStudySelect] = useState(null);
  const handlelvlOfStudySelect = (selectedOption) => {
    setAgeSelect(selectedOption);
  };

  const textBoxStyle = "rounded px-4 py-1 mt-[2px] text-sm border border-white bg-[#2D2D2D]"

  const programOptions = [
    "Bachelor of Engineering",
    "Bachelor of Commerce/Buisness",
    "Bachelor of Arts",
    "Bachelor of Science",
    "Bachelor of Computing",
    "Masters Program/Graduate School"
  ]

  return (
    <div className="flex justify-center text-white">

      {/* BACKGROUND */}
      <div className="absolute z-[-1] w-full h-full bg-[#111010]">
        <svg xmlns="http://www.w3.org/2000/svg" width="914" height="1050" viewBox="0 0 914 1050" fill="none" className="absolute right-0">
          <g filter="url(#filter0_f_179_250)">
            <path d="M795.733 43.0597C838.033 70.5597 879.933 95.5597 906.133 132.56C932.333 169.46 942.733 218.36 940.833 266.06C938.933 313.86 924.833 360.46 906.933 411.86C889.133 463.26 867.633 519.36 827.233 581.36C786.833 643.36 727.433 711.26 668.533 710.56C609.633 709.86 551.133 640.46 500.633 584.26C450.133 528.16 407.533 485.16 377.833 434.46C348.033 383.86 331.133 325.46 342.633 273.86C354.233 222.16 394.233 177.16 420.433 120.26C446.533 63.4597 458.833 -5.34028 497.833 -34.6403C536.833 -63.9403 602.433 -53.9403 656.633 -34.0403C710.833 -14.0403 753.433 15.6597 795.733 43.0597Z" fill="#EE4036"/>
          </g>
          <defs>
            <filter id="filter0_f_179_250" x="0" y="-392" width="1280.05" height="1441.57" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="169.5" result="effect1_foregroundBlur_179_250"/>
            </filter>
          </defs>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="987" height="1265" viewBox="0 0 987 1265" fill="none" className="absolute left-0 mt-[-200px]">
          <g filter="url(#filter0_f_179_247)">
          <path d="M484.354 390.804C561.154 444.404 649.554 509.704 647.054 572.504C644.654 635.304 551.354 695.704 474.454 755.704C397.654 815.704 337.254 875.304 246.754 905.504C156.254 935.704 35.5542 936.404 -26.9458 876.404C-89.4458 816.404 -93.7458 695.704 -81.5458 587.104C-69.4458 478.604 -40.8458 382.204 21.6542 328.504C84.1542 274.904 180.554 263.904 261.354 279.504C342.254 295.004 407.554 337.104 484.354 390.804Z" fill="#262261"/>
          </g>
          <defs>
            <filter id="filter0_f_179_247" x="-426" y="-66" width="1412.11" height="1330.63" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="169.5" result="effect1_foregroundBlur_179_247"/>
            </filter>
          </defs>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="979" height="1551" viewBox="0 0 979 1000" fill="none" className="absolute right-0 mt-[-200px]">
          <g filter="url(#filter0_f_179_256)">
            <path d="M795.389 1204.42C724.665 1218.87 648.441 1211.45 570.682 1192.05C492.923 1172.66 413.631 1141.28 382.16 1081.14C350.767 1020.94 367.258 932.05 361.663 850.63C356.208 769.225 328.604 695.211 343.293 631.875C358.044 568.617 415.027 515.958 474.853 464.607C534.68 413.255 597.507 363.086 668.789 346.137C740.149 329.126 820.027 345.413 865.479 398.049C910.994 450.764 922.146 539.906 962.582 600.671C1003.08 661.515 1072.94 693.919 1079.41 736.17C1085.9 778.279 1028.99 830.235 1004.78 895.445C980.427 960.64 988.829 1039.17 960.215 1096.5C931.664 1153.9 866.254 1189.99 795.389 1204.42Z" fill="#FAAF40"/>
          </g>
          <defs>
            <filter id="filter0_f_179_256" x="0.0358887" y="0.669312" width="1418.89" height="1550.32" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="169.5" result="effect1_foregroundBlur_179_256"/>
            </filter>
          </defs>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="877" height="1279" viewBox="0 0 877 1279" fill="none" className="absolute left-0 mt-[100px]">
          <g filter="url(#filter0_f_179_255)">
            <path d="M449.762 785.914C423.887 829.227 400.495 872.045 364.515 899.631C328.636 927.212 280.166 939.46 232.428 939.371C184.591 939.287 137.489 926.965 85.4469 911.028C33.4085 895.192 -23.467 875.836 -86.9554 837.818C-150.444 799.799 -220.549 743.019 -222.084 684.135C-223.62 625.25 -156.49 564.159 -102.246 511.563C-48.1032 458.97 -6.75067 414.769 42.7858 383.167C92.2186 351.468 149.935 332.364 201.934 341.898C254.037 351.528 300.523 389.792 358.376 413.814C416.126 437.739 485.343 447.42 516.102 485.28C546.86 523.14 539.357 589.072 521.528 643.988C503.599 698.908 475.537 742.605 449.762 785.914Z" fill="#EE4036"/>
          </g>
          <defs>
            <filter id="filter0_f_179_255" x="-561.11" y="0.43811" width="1437.15" height="1277.93" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="169.5" result="effect1_foregroundBlur_179_255"/>
            </filter>
          </defs>
        </svg>
        {/* <svg xmlns="http://www.w3.org/2000/svg" width="1060" height="1280" viewBox="0 0 1060 1280" fill="none" className="absolute left-0 mt-[500px]">
          <g filter="url(#filter0_f_179_253)">
            <path d="M472.496 372.538C536.696 405.538 591.496 459.038 639.996 522.838C688.496 586.638 730.696 660.738 717.596 727.338C704.396 793.938 635.896 852.938 589.296 919.938C542.596 986.838 517.796 1061.84 466.696 1102.04C415.596 1142.14 338.196 1147.54 259.396 1150.14C180.596 1152.74 100.196 1152.54 33.9959 1121.14C-32.3041 1089.74 -84.4041 1027.04 -86.9041 957.538C-89.4041 887.938 -42.3041 811.438 -35.8041 738.738C-29.3041 665.938 -63.5041 596.938 -42.1041 559.938C-20.8041 523.038 56.0959 518.138 115.796 482.438C175.596 446.838 218.196 380.338 276.396 353.538C334.596 326.638 408.196 339.438 472.496 372.538Z" fill="#FAAF40"/>
          </g>
          <defs>
            <filter id="filter0_f_179_253" x="-426" y="0" width="1485.01" height="1490.14" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="169.5" result="effect1_foregroundBlur_179_253"/>
            </filter>
          </defs>
        </svg> */}
        {/* <svg xmlns="http://www.w3.org/2000/svg" width="955" height="901" viewBox="0 0 955 901" fill="none" className="absolute right-0 mt-[700px]">
          <g filter="url(#filter0_f_179_257)">
            <path d="M536.702 942.546C450.713 905.436 351.014 859.191 340.869 797.166C330.626 735.16 409.918 657.276 473.223 583.073C536.43 508.891 583.65 438.388 666.255 390.653C748.86 342.917 866.968 318.026 940.231 364.273C1013.49 410.52 1041.91 527.905 1051.74 636.746C1061.64 745.468 1052.96 845.645 1002.5 910.788C952.015 975.833 859.78 1005.94 777.493 1006.86C695.128 1007.9 622.711 979.753 536.702 942.546Z" fill="#262261"/>
          </g>
          <defs>
            <filter id="filter0_f_179_257" x="0.968994" y="0.708008" width="1393.37" height="1345.18" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="169.5" result="effect1_foregroundBlur_179_257"/>
            </filter>
          </defs>
        </svg> */}
      </div>


      <div className="z-[10] w-[60%] flex flex-col justify-start mt-[6rem]">
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold">Tell us about yourself</h1>
          <button
            className="cursor-pointer font-light text-sm px-5 py-2 rounded-xl"
            style={{
              background: "rgba(38, 34, 97, 1)",
            }}
          >
            Save & Quit
          </button>
        </div>

        <div className="flex flex-col bg-[#202020] py-[4rem] px-[3rem] mt-[1rem] rounded-lg">
          <div className="flex flex-col mb-[1rem]">
            <label htmlFor="school">School</label>
            <input
              type="text"
              name="school"
              id="school"
              placeholder="School"
              className={`w-[35%] ${textBoxStyle}`}
            />
          </div>

          <div className="flex flex-col mb-[2rem]">
            <label htmlFor="pronouns">Program:</label>
            {programOptions.map(option => {
              return (
                <label className="inline-flex items-center">
                <input
                  type="radio"
                  value={option}
                  checked={selectedOption === `${option}`}
                  onChange={handleOptionChange}
                  className="form-radio text-indigo-600 h-4 w-4"
                />
                <span className="ml-2">{option}</span>
                </label>
              )
            })}
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="other"
                checked={selectedOption === "other"}
                onChange={handleOptionChange}
                className="form-radio text-indigo-600 h-4 w-4"
              />
              <span className="ml-2">Other: </span>
              <input type="text" className="ml-2 bg-transparent border-b-[1px] text-sm outline-none"></input>
            </label>
          </div>

          <div className="flex flex-col mb-[2rem]">
            <label htmlFor="country">Level of Study:</label>
            <Dropdown
              options={[
                { label: "Undergraduate" },
                { label: "Masters" },
                { label: "PhD" }
              ]}
              value={lvlOfStudySelect}
              onChange={handlelvlOfStudySelect}
              placeholder="-- Select a Country --"
            />
          </div>

          <div className="flex flex-col gap-5 mb-[2rem]">
            <label htmlFor="studyyear">{`Year of Study:`}</label>
            <input
            type="range"
            min="1" max="5" defaultValue="3" step="1"
            className="slider" // needed to use external stylesheet
            />
            <div className="flex flex-row justify-between">
              <p>1</p>
              <p>2</p>
              <p>3</p>
              <p>4</p>
              <p>5</p>
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="gradyear">{`Graduation Year`}</label>
            <input
              type="text"
              id="gradyear"
              name="gradyear"
              placeholder="2023"
              pattern="[0-9]{4}"
              className={`w-[25%] ${textBoxStyle}`}
              required
            />
          </div>
          
        </div>

        <div className="flex flex-row justify-center bg-[#202020] py-[1rem] mt-[1rem] mb-[6rem] rounded-lg">
          <div className="w-[25%] flex justify-center items-center text-center bg-[#FAAF40] rounded-lg py-3">Previous Page</div>
          <div className="h-full w-[2px] bg-white mx-[1rem]"></div>
          <div className="w-[25%] flex justify-center items-center text-center bg-[#EE4036] rounded-lg py-3">Next Page</div>
        </div>
      </div>
    </div>
  );
};
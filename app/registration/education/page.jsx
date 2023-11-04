"use client"

import React, { useEffect, useState } from "react";
import Dropdown from "../../../components/dropDown";
import "./page.css"
import { useAuth } from "../../../contexts/AuthContext";
import retrieveUserData from "../../../firebase/firestore/retrieveUserData";
import updateUser from "../../../firebase/firestore/updateUser";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import MLHSchoolList from "../../../data/mlhApprovedSchools.json"
import LevelOfStudyList from "../../../data/levelOfStudy.json"

import blob1 from "../../../assets/registration/Vector-1.png"
import blob2 from "../../../assets/registration/Vector-2.png"
import blob3 from "../../../assets/registration/Vector-3.png"
import blob4 from "../../../assets/registration/Vector-4.png"
import blob5 from "../../../assets/registration/Vector-5.png"
import blob6 from "../../../assets/registration/Vector-6.png"

export default function About() {
  const [selectedOption, setSelectedOption] = useState("");
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const [lvlOfStudySelect, setlvlOfStudySelect] = useState(null);
  const handlelvlOfStudySelect = (selectedOption) => {
    setlvlOfStudySelect(selectedOption);
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

  const { currentUser } = useAuth();
  const [appData, setAppData] = useState(null);

  useEffect(async () => {
    if (currentUser === null)
    {
      window.location.href = '/login';
      return;
    }
    setAppData((await retrieveUserData(currentUser.uid)).result);
  }, []);

  async function saveApplicationData(forceRedirect, path, checkCompletion)
  {
    if (appData === null) return;
    
    if (forceRedirect)
    {
      toast('Application saved!', {
        theme: 'dark',
        pauseOnHover: false,
        type: 'success' 
      });
      setAppData({...appData});
      await updateUser(currentUser.uid, appData);
      setTimeout(() => { window.location.href = path; }, 3000);
    }
    else
    {
      if (checkCompletion)
      {
        if (areFieldsCompleted() == false)
        {
          toast('Please fill out all fields to continue.', {
            theme: 'dark',
            pauseOnHover: false,
            type: 'error'
          });
          let dup = appData;
          dup.educationComplete = false;
          setAppData(dup);
          await updateUser(currentUser.uid, appData);
          return;
        }
        else
        {
          toast('Education information saved!', {
            theme: 'dark',
            pauseOnHover: false,
            type: 'success'
          });
    
          let dup = appData;
          dup.educationComplete = true;
          setAppData(dup);
          await updateUser(currentUser.uid, appData);
          setTimeout(() => { window.location.href = path; }, 3000);
        }
      }
      else
      {
        if (areFieldsCompleted() == false)
        {
          let dup = appData;
          dup.educationComplete = true;
          setAppData(dup);
          await updateUser(currentUser.uid, appData);
          setTimeout(() => { window.location.href = path; }, 500);
        }
        else
        {
          toast('Education information saved!', {
            theme: 'dark',
            pauseOnHover: false,
            type: 'success'
          });
    
          let dup = appData;
          dup.educationComplete = true;
          setAppData(dup);
          await updateUser(currentUser.uid, appData);
          setTimeout(() => { window.location.href = path; }, 3000);
        }
      }
    }
  }

  function areFieldsCompleted()
  {
    if (appData.studyYear == undefined) appData.studyYear = "3";
    return (
      appData.school != undefined &&
      appData.program != undefined &&
      appData.lvlOfStudy != undefined &&
      appData.studyYear != undefined &&
      appData.gradYear != undefined
    )
  }
  
  return (
    <div className="w-screen min-h-screen h-fit m-0 p-0 relative text-white bg-[#111010]">
      {/* BACKGROUND */}
      <div className="hidden md:block absolute inset-0 h-auto w-full bg-transparent overflow-hidden">
        <img src={blob1.src} className="absolute bottom-0 right-0 w-[800px]"></img>
        <img src={blob2.src} className="absolute top-0 right-0 w-[800px]"></img>
        {/* <img src={blob3.src} className="absolute top-[350px] left-0 h-[900px]"></img> */}
        <img src={blob4.src} className="absolute bottom-0 left-0 w-[800px]"></img>
        {/* <img src={blob5.src} className="absolute top-[450px] right-0 h-[1000px]"></img> */}
        <img src={blob6.src} className="absolute top-[-200px] left-0 w-[800px]"></img>
      </div>
      <div className="flex justify-center">
        <div className="z-[10] md:w-[60%] flex flex-col justify-start md:mt-[6rem]">
          <div className="md:flex justify-between hidden">
            <h1 className="text-3xl font-bold">Education</h1>
            <button
              className="font-bold cursor-pointer text-sm px-5 py-2 rounded-xl bg-[#262261]"
              onClick={() => saveApplicationData(true, '/dashboard', false)}
            >
              Save & Quit
            </button>
          </div>

          <div className="flex flex-col bg-[#202020] py-[4rem] px-[3rem] md:mt-[1rem] md:rounded-lg">
            <div className="flex justify-between md:hidden mb-[2rem]">
              <h1 className="text-2xl font-bold">Education</h1>
              <button
                className="cursor-pointer font-light text-sm px-5 py-2 rounded-xl"
                style={{
                  background: "rgba(38, 34, 97, 1)",
                }}
                onClick={() => saveApplicationData(true, '/dashboard', false)}
              >
                Save & Quit
              </button>
            </div>

            <div className="flex flex-col mb-[1rem]">
              <label htmlFor="school">School<span className="text-red-500"> *</span></label>
              <select 
                required
                id="school"
                name="school"
                value={appData?.school}
                onChange={e => setAppData({...appData, school: e.target.value})}
                className="rounded px-4 py-1 mt-[2px] text-sm border border-white bg-[#2D2D2D] block w-full p-2.5 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500">
                <option className="placeholder-gray-400" value="">Choose a School</option>
                {
                  MLHSchoolList.map(school => {
                    return (
                      <option value={school}>{school}</option>
                    )
                  })
                }
              </select>
            </div>

            <div className="flex flex-col mb-[2rem]">
              <label htmlFor="pronouns">Program: <span className="text-red-500">*</span></label>
              {programOptions.map(option => {
                return (
                  <label key={option} className="inline-flex items-center">
                  <input
                    type="radio"
                    value={option}
                    checked={appData?.program === `${option}`}
                    onChange={(e) => { handleOptionChange(e); setAppData({...appData, program: e.target.value}); }}
                    className="form-radio text-indigo-600 h-4 w-4"
                    required
                  />
                  <span className="ml-2">{option}</span>
                  </label>
                )
              })}
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  value="other"
                  checked={appData?.program === "other"}
                  onChange={(e) => { handleOptionChange(e); setAppData({...appData, program: e.target.value}); }}
                  className="form-radio text-indigo-600 h-4 w-4"
                  required
                />
                <span className="ml-2">Other: </span>
                <input type="text" className="ml-2 bg-transparent border-b-[1px] text-sm outline-none"></input>
              </label>
            </div>

            <div className="flex flex-col mb-[2rem]">
              <label htmlFor="country">Level of Study:<span className="text-red-500"> *</span></label>
              <select 
                className="rounded px-4 py-1 mt-[2px] text-sm border border-white bg-[#2D2D2D] block w-full p-2.5 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                id="lvlOfStudy"
                name="lvlOfStudy"
                value={appData?.lvlOfStudy}
                onChange={e => setAppData({...appData, lvlOfStudy: e.target.value})}
                required
              >
                <option className="placeholder-gray-400" value="">Choose a level of study</option>
                {
                  LevelOfStudyList.map(levelOfStudy => {
                    return (
                      <option value={levelOfStudy} key={levelOfStudy} >{levelOfStudy}</option>
                    )
                  })
                }
              </select>
            </div>

            <div className="flex flex-col gap-5 mb-[2rem]">
              <label htmlFor="studyyear">Year of Study:<span className="text-red-500"> *</span></label>
              <input
              type="range"
              min="1" max="5" defaultValue="3" step="1"
              className="slider" // needed to use external stylesheet
              required
              value={appData?.studyYear || 3}
              onChange={(e) => { setAppData({...appData, studyYear: e.target.value}); }}
              />
              <div className="flex flex-row justify-between">
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <p>5+</p>
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="gradyear">Graduation Year<span className="text-red-500"> *</span></label>
              <input
                type="text"
                id="gradyear"
                name="gradyear"
                placeholder="2023"
                pattern="[0-9]{4}"
                className={`w-[25%] ${textBoxStyle}`}
                value={appData?.gradYear}
                onChange={(e) => { setAppData({...appData, gradYear: e.target.value}); }}
                required
              />
            </div>
            
          </div>

          <div className="flex flex-row justify-center bg-[#202020] py-[1rem] mt-[1rem] mb-[6rem] rounded-lg">
              <button 
                className="w-[25%] flex justify-center items-center text-center bg-[#FAAF40] rounded-lg py-3 font-bold"
                onClick={() => { saveApplicationData(false, '/registration/about'); }}
              >Previous Page</button>
            <div className="h-full w-[2px] bg-white mx-[1rem]"></div>
              <button 
                className="w-[25%] flex justify-center items-center text-center bg-[#EE4036] rounded-lg py-3 font-bold"
                onClick={() => {
                  saveApplicationData(false, '/registration/application', true); 
                }}
              >Next Page</button>
          </div>
        </div>
      </div>
      <ToastContainer />
      </div>
  );
};
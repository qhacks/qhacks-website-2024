"use client"

import React, { useEffect, useState } from "react";
import Dropdown from "../../../components/dropDown";
import { useAuth } from "../../../contexts/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import updateUser from "../../../firebase/firestore/updateUser";
import retrieveUserData from "../../../firebase/firestore/retrieveUserData";
import 'react-toastify/dist/ReactToastify.css'
import uploadResume from "../../../firebase/storage/uploadResume";
import checkIfFileExists from "../../../firebase/storage/checkIfFileExists";
import CountryList from "../../../data/countryList.json"

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

  const [selectedOption2, setSelectedOption2] = useState("");
  const handleOptionChange2 = (event) => {
    setSelectedOption2(event.target.value);
  };

  const [ageSelect, setAgeSelect] = useState(null);
  const handleAgeSelect = (selectedOption) => {
    setAgeSelect(selectedOption);
  };



  const [resumeOK, setResumeOK] = useState(false);

  const pronounOptions = [
    "She/Her",
    "He/Him",
    "They/Them",
  ]

  const genderOptions = [
    "Female",
    "Male",
    "Non-Binary/Non-Conforming",
    "Transgender",
    "Intersex",
  ]

  const {currentUser} = useAuth();
  const [appData, setAppData] = useState(null);

  // 
  useEffect(async () => {
    if (currentUser === null)
    {
      window.location.href = '/login';
      return;
    }
    setAppData((await retrieveUserData(currentUser.uid)).result);
    console.log("App data: "+appData) // printing the data
  }, []);

  // SAVE APPLICATION DATA
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
          // Don't ask why I did this - for some reason the commented line of code below doesn't work... but works everywhere else? Stupid. 
          // OLD: setAppData({...appData, aboutComplete: false});
          let dup = appData;
          dup.aboutComplete = false;
          setAppData(dup);
          await updateUser(currentUser.uid, appData);
          return;
        }
        else
        {
          toast('Information saved!', {
            theme: 'dark',
            pauseOnHover: false,
            type: 'success'
          });
    
          let dup = appData;
          dup.aboutComplete = true;
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
          dup.aboutComplete = false;
          setAppData(dup);
          await updateUser(currentUser.uid, appData);
          setTimeout(() => { window.location.href = path; }, 500);
        }
        else
        {
          toast('Information saved!', {
            theme: 'dark',
            pauseOnHover: false,
            type: 'success'
          });
    
          let dup = appData;
          dup.aboutComplete = true;
          setAppData(dup);
          await updateUser(currentUser.uid, appData);
          setTimeout(() => { window.location.href = path; }, 3000);
        }
      }
    }
  }

  function areFieldsCompleted()
  {
    return (
      appData.firstName !== undefined &&
      appData.lastName !== undefined &&
      appData.pronouns !== undefined &&
      appData.gender !== undefined &&
      appData.age !== undefined &&
      appData.country !== undefined &&
      // appData.phone !== undefined &&
    //   appData.resumeOK !== false
    resumeOK !== false
    )
  }

  async function upload(e)
  {
    const file = e.target.files[0];
    if (file.size > 4 * 1024 * 1024)
    {
      toast('File size too large! Please upload a file less than 4MB.', {
        theme: 'dark',
        pauseOnHover: false,
        type: 'error'
      });
      return;
    }
    else
    {
      await uploadResume(currentUser.uid, file).then(() => { setResumeOK(true); }).catch(() => { setResumeOK(false); });
      toast('File uploaded!', {
        theme: 'dark',
        pauseOnHover: false,
        type: 'success'
      });
      // appData.resumeOK = true;
    }
  }

  return (
    <>
    <div className="w-screen flex justify-center text-white bg-[#111010]">
      {/* BACKGROUND */}
      <div className="hidden md:block absolute w-full h-[1585px] bg-transparent overflow-hidden">
        <img src={blob1.src} className="absolute bottom-0 right-0 w-[800px]"></img>
        <img src={blob2.src} className="absolute top-0 right-0 w-[800px]"></img>
        <img src={blob3.src} className="absolute top-[350px] left-0 h-[900px]"></img>
        <img src={blob4.src} className="absolute bottom-0 left-0 w-[800px]"></img>
        <img src={blob5.src} className="absolute top-[450px] right-0 h-[1000px]"></img>
        <img src={blob6.src} className="absolute top-[-200px] left-0 w-[800px]"></img>
      </div>


      <div className="z-[10] md:w-[60%] flex flex-col justify-start md:mt-[6rem]">
        <div className="md:flex justify-between hidden">
          <h1 className="text-3xl font-bold">Tell us about yourself</h1>
          <button
            className="font-bold cursor-pointer text-sm px-5 py-2 rounded-xl bg-[#262261]"
            onClick={() => saveApplicationData(true, '/dashboard', false)}
          >
            Save & Quit
          </button>
        </div>

        <div className="flex flex-col bg-[#202020] py-[4rem] px-[3rem] md:mt-[1rem] md:rounded-lg">
          <div className="flex justify-between md:hidden mb-[2rem]">
            <h1 className="text-2xl font-bold">Tell us about yourself</h1>
            <button
              className="cursor-pointer font-light text-sm px-5 py-2 rounded-xl"
              style={{
                background: "rgba(38, 34, 97, 1)",
              }}
            >
              Save & Quit
            </button>
          </div>

          {/* THIS IS WHERE THE FORM BEGINS */}
          <div className="flex flex-col mb-[1rem]">
            <label htmlFor="firstName">First Name<span className="text-red-500"> *</span></label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="First Name"
              value={appData?.firstName}
              className={`w-[80%] md:w-[35%] rounded px-4 py-1 mt-[2px] text-sm border border-white bg-[#2D2D2D]`}
              required
              onChange={(e) => {
                setAppData({...appData, firstName: e.target.value})
              }}
            />
          </div>
          {console.log("App data: "+appData) }
          <div className="flex flex-col mb-[3rem]">
            <label htmlFor="lastName">Last Name<span className="text-red-500"> *</span></label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Last Name"
              value={appData?.lastName}
              required
              className={`w-[80%] md:w-[35%] rounded px-4 py-1 mt-[2px] text-sm border border-white bg-[#2D2D2D]`}
              onChange={(e) => {
                setAppData({...appData, lastName: e.target.value})
              }}
            />
          </div>

          {/* PRONOUNS */}
          <div className="flex flex-col mb-[3rem]">
            <label htmlFor="pronouns">Preferred Pronouns<span className="text-red-500"> *</span></label>
            {pronounOptions.map(option => {
              return (
                <label className="inline-flex items-center" key={option}>
                <input
                  type="radio"
                  value={option}
                  checked={appData?.pronouns === `${option}`}
                  onChange={(e) => {
                    handleOptionChange(e); 
                    setAppData({...appData, pronouns: e.target.value})
                  }}
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
                checked={appData?.pronouns === "other"}
                onChange={(e) => {
                  handleOptionChange(e); 
                  setAppData({...appData, pronouns: e.target.value})
                }}
                className="form-radio text-indigo-600 h-4 w-4"
              />
              <span className="ml-2">Other: </span>
              <input type="text" className="ml-2 bg-transparent border-b-[1px] text-sm outline-none"></input>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="no_prefer"
                checked={appData?.pronouns === "no_prefer"}
                onChange={(e) => {
                  handleOptionChange(e); 
                  setAppData({...appData, pronouns: e.target.value})
                }}
                className="form-radio text-indigo-600 h-4 w-4"
              />
              <span className="ml-2">Prefer not to answer</span>
            </label>
          </div>
          
          {/* GENDER */}
          <div className="flex flex-col mb-[3rem]">
            <label htmlFor="pronouns">What is your Gender?<span className="text-red-500"> *</span></label>
            {genderOptions.map(option => {
              return (
                <label key={option} className="inline-flex items-center">
                <input
                  type="radio"
                  value={option}
                  checked={appData?.gender === `${option}`}
                  onChange={(e) => {
                    handleOptionChange2(e); 
                    setAppData({...appData, gender: e.target.value})
                  }}
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
                checked={appData?.gender === "other"}
                onChange={(e) => {handleOptionChange2(e); setAppData({...appData, gender: e.target.value})}}
                className="form-radio text-indigo-600 h-4 w-4"
              />
              <span className="ml-2">Other: </span>
              <input type="text" className="ml-2 bg-transparent border-b-[1px] text-sm outline-none"></input>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="no_prefer"
                checked={appData?.gender === "no_prefer"}
                onChange={(e) => {handleOptionChange2(e); setAppData({...appData, gender: e.target.value})}}
                className="form-radio text-indigo-600 h-4 w-4"
              />
              <span className="ml-2">Prefer not to answer</span>
            </label>
          </div>
          
          {/* AGE */}
          <div className="flex flex-col mb-[2rem]">
            <label htmlFor="age">What is your age?<span className="text-red-500"> *</span></label>
            <input
                type="text"
                name="age"
                id="age"
                placeholder="Age"
                value={appData?.age}
                required
                className={`w-[25%] rounded px-4 py-1 mt-[2px] text-sm border border-white bg-[#2D2D2D]`}
                onChange={e => setAppData({...appData, age: e.target.value})}
              />
          </div>
          
          {/* COUNTRY */}
          <div className="flex flex-col mb-[2rem]">
            <label htmlFor="country">Country of Residence<span className="text-red-500"> *</span></label>
            <select
              required
              id="country"
              name="country"
              value={appData?.country}
              onChange={e => setAppData({...appData, country: e.target.value})}
              className="rounded px-4 py-1 mt-[2px] text-sm border border-white bg-[#2D2D2D] block w-full p-2.5 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
            >
              <option className="placeholder-gray-400" value="">Choose a country</option>
              {
                CountryList.map(country => {
                  return (
                    <option key={country} value={country}>{country}</option>
                  )
                })
              }
            </select>
          </div>

          {/* PHONE NUMBER */}
          <div className="flex flex-col mb-[2rem]">
            <label htmlFor="phone">{`Phone Number (Format as "xxx-xxx-xxxx")`}<span className="text-red-500"> *</span></label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="123-456-7890"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              className={`rounded px-4 py-1 mt-[2px] text-sm border border-white bg-[#2D2D2D]`}
              value={appData?.phone}
              onChange={e => setAppData({...appData, phone: e.target.value})}
              required
            />
          </div>

          {/* RESUME */}
          <div className="">
            <label className="text-white" for="resume">Resume <span className="text-xs text-gray-500">Max file size: 4mb</span></label>
            {/* {appData.resumeOK ? <p className="text-xs text-green-500">Resume uploaded!</p> : <p className="text-xs text-red-500">Resume not uploaded.</p>} */}
            <input className="block w-full mb-5 text-lg text-grey-500 rounded cursor-pointer border border-white bg-[#2D2D2D]" id="resume" type="file" onChange={upload}/>
          </div>

          {/* GITHUB */}
          <div className="flex flex-col mb-[2rem]">
            <label htmlFor="github">GitHub Link</label>
            <input type="url" id="github" name="github" placeholder="GitHub" className={`rounded px-4 py-1 mt-[2px] text-sm border border-white bg-[#2D2D2D]`} onChange={e => setAppData({...appData, githubLink: e.target.value})} value={appData?.githubLink} />
          </div>

          {/* LINKEDIN */}
          <div className="flex flex-col mb-[2rem]">
            <label htmlFor="linkedin">LinkedIn Link</label>
            <input type="url" id="linkedin" name="linkedin" placeholder="LinkedIn" className={`rounded px-4 py-1 mt-[2px] text-sm border border-white bg-[#2D2D2D]`} onChange={e => setAppData({...appData, linkedinLink: e.target.value})} value={appData?.linkedinLink} />
          </div>

          {/* PORTFOLIO */}
          <div className="flex flex-col">
            <label htmlFor="portfolio">Website</label>
            <input type="url" id="portfolio" name="portfolio" placeholder="Personal Site" className={`rounded px-4 py-1 mt-[2px] text-sm border border-white bg-[#2D2D2D]`} onChange={e => setAppData({ ...appData, portfolioLink: e.target.value})} value={appData?.portfolioLink} />
          </div>
          
        </div>

        <div className="flex flex-row justify-center bg-[#202020] py-[1rem] mt-[1rem] mb-[6rem] rounded-lg">
          <button 
            className="w-[25%] flex justify-center items-center text-center bg-[#FAAF40] font-bold rounded-lg py-3"
            href="/registration/education"
            onClick={() => {saveApplicationData(false, '/registration/education', true)}}
          >Next Page</button>
        </div>
      </div>
    </div>
    <ToastContainer />
    </>
  );
};
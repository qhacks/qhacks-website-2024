"use client"

import React, { useEffect, useState } from "react";
import Dropdown from "../../../components/dropDown";
import { toast, ToastContainer } from "react-toastify";
import { useAuth } from "../../../contexts/AuthContext";
import 'react-toastify/dist/ReactToastify.css';
import retrieveUserData from "../../../firebase/firestore/retrieveUserData";
import updateUser from "../../../firebase/firestore/updateUser";

import blob1 from "../../../assets/registration/Vector-1.png"
import blob2 from "../../../assets/registration/Vector-2.png"
import blob3 from "../../../assets/registration/Vector-3.png"
import blob4 from "../../../assets/registration/Vector-4.png"
import blob5 from "../../../assets/registration/Vector-5.png"
import blob6 from "../../../assets/registration/Vector-6.png"
import { setRevalidateHeaders } from "next/dist/server/send-payload";

export default function Info() {
  const textBoxStyle = "rounded px-4 py-1 mt-[2px] text-sm border border-white bg-[#2D2D2D]"

  const travelOptions = [
    "Waterloo",
    "Hamilton",
    "London",
    "Toronto",
    "No I will not"
  ]

  
  const [travelOption, setTravelOption] = useState("");
  const handleOptionChange = (event) => {
    setTravelOption(event.target.value);
  };

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
          dup.appQsComplete = false;
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
          dup.appQsComplete = true;
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
          dup.appQsComplete = false;
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
          dup.appQsComplete = true;
          setAppData(dup);
          await updateUser(currentUser.uid, appData);
          setTimeout(() => { window.location.href = path; }, 3000);
        }
      }
    }
  }

  function areFieldsCompleted()
  {
    /* note: first teammate, second teammate, third teammate, dietary restriction and bus options are not required */
    return (
    //   appData.firstTeammate != null &&
    //   appData.secondTeammate != null &&
    //   appData.thirdTeammate != null &&
      appData.reasonForParticipating != null &&
      appData.projectIdea != null &&
      appData.previousHackathons != null &&
    //   appData.dietaryRestrictions != null &&
      appData.travelOption != null
    //   && appData.busOption != null
    )
  }

  let initialWordCount = appData?.reasonForParticipating?.trim().split(" ").length;
  const [{ content, wordCount }, setContent] = useState({
    content: appData?.reasonForParticipating, // sets the initialy conent
    wordCount: initialWordCount
  });

  let initialWordCount2 = appData?.reasonForParticipating?.trim().split(" ").length;
  const [{ content2, wordCount2 }, setContent2] = useState({
    content2: appData?.projectIdea, // sets the initial conent
    wordCount2: initialWordCount2
  });

  function handleWordCounter2(e)
  {
    let text = e.target.value;
    const words = text.split(' ').filter((word) => word.length > 0);

    if(words.length <= 200)
    {
      setAppData({...appData, projectIdea: text})
    }
    else
    {
      toast('You have exceeded the word limit!', {
        theme: 'dark',
        pauseOnHover: false,
        type: 'error'
      });
    }
    setContent2({
      content2: words,
      wordCount2: words.length
    });
  }

  function handleWordCounter(e) {
    let text = e.target.value;
    const words = text.split(' ').filter((word) => word.length > 0);

    if(words.length <= 300) {
      setAppData({...appData, reasonForParticipating: text})
    } else {
      toast('You have exceeded the word limit!', {
        theme: 'dark',
        pauseOnHover: false,
        type: 'error'
      });
    }
    setContent({
      content: words,
      wordCount: words.length
    });
  }


  return (
    <div className="w-screen min-h-screen h-fit m-0 p-0 flex justify-center text-white bg-[#111010]">

      {/* BACKGROUND */}
      <div className="hidden md:block absolute w-full min-h-screen h-[2000px] bg-transparent overflow-hidden">
        <img src={blob1.src} className="absolute bottom-0 right-0 w-[800px]"></img>
        <img src={blob2.src} className="absolute top-0 right-0 w-[800px]"></img>
        <img src={blob3.src} className="absolute top-[350px] left-0 h-[900px]"></img>
        <img src={blob4.src} className="absolute bottom-0 left-0 w-[800px]"></img>
        <img src={blob5.src} className="absolute top-[450px] right-0 h-[1000px]"></img>
        <img src={blob6.src} className="absolute top-[-200px] left-0 w-[800px]"></img>
      </div>


      <div className="z-[10] md:w-[60%] flex flex-col justify-start md:mt-[6rem]">
        <div className="md:flex justify-between hidden">
          <h1 className="text-3xl font-bold">More Info</h1>
          <button
            className="font-bold cursor-pointer text-sm px-5 py-2 rounded-xl bg-[#262261]"
            onClick={() => saveApplicationData(true, '/dashboard')}
          >
            Save & Quit
          </button>
        </div>

        <div className="flex flex-col bg-[#202020] py-[4rem] px-[3rem] md:mt-[1rem] md:rounded-lg">
          <div className="flex justify-between md:hidden mb-[2rem]">
            <h1 className="text-2xl md:text-3xl font-bold">More Info</h1>
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

          <div className="flex flex-col mb-[3rem]">
            <label htmlFor="teammates">{`Let us know if you have a team! Enter the names of your teammates.`}<br></br>{`(Maximum of 4 people per team. This can be changed at any point until the event weekend. EACH INDIVIDUAL TEAMMATE MUST APPLY)`}</label>
            <div name="teammates" id="teammates" className="flex flex-col md:flex-row gap-[10px] md:gap-0 justify-between">
              <input
                type="text"
                name="firstTeammate"
                id="firstTeammate"
                placeholder="Teammate 1"
                onChange={e => setAppData({...appData, firstTeammate: e.target.value})}
                value={appData?.firstTeammate}
                className={`w-[100%] md:w-[32%] ${textBoxStyle}`}
              />
              <input
                type="text"
                name="secondTeammate"
                id="secondTeammate"
                placeholder="Teammate 2"
                onChange={e => setAppData({...appData, secondTeammate: e.target.value})}
                value={appData?.secondTeammate}
                className={`w-[100%] md:w-[32%] ${textBoxStyle}`}
              />
              <input
                type="text"
                name="thirdTeammate"
                id="thirdTeammate"
                placeholder="Teammate 3"
                onChange={e => setAppData({...appData, thirdTeammate: e.target.value})}
                value={appData?.thirdTeammate}
                className={`w-[100%] md:w-[32%] ${textBoxStyle}`}
              />
            </div>
          </div>

          {/* Long Question 1 */}
          <div className="flex flex-col mb-[3rem]">
            <label htmlFor="reasonForParticipating">Why do you want to participate in QHacks? (Please limit your response to less than 300 words) <span className="text-red-500"> *</span></label>
            <textarea
              name="reasonForParticipating"
              id="reasonForParticipating"
              placeholder="Answer"
              rows="10"
              onChange={(e) => {
                handleWordCounter(e)
              }}
              value={appData?.reasonForParticipating}
              className={`w-full resize-none !pt-[0.75rem] ${textBoxStyle}`}
              required
            />
            <p className="">{wordCount}/300</p>
          </div>

          {/* Long Question 2 */}
          <div className="flex flex-col mb-[3rem]">
            <label htmlFor="projectIdea">Please tell us about a project that you would like to build at QHacks! (Please limit your response to less than 200 words.) <span className="text-red-500"> *</span></label>
            <textarea
              name="projectIdea"
              id="projectIdea"
              placeholder="Answer"
              rows="10"
              onChange={e => {handleWordCounter2(e)}}
              value={appData?.projectIdea}
              className={`w-full resize-none !pt-[0.75rem] ${textBoxStyle}`}
              required
            />
            <p className="">{wordCount2}/200</p>
          </div>

          <div className="flex flex-col mb-[2rem]">
            <label htmlFor="previousHackathons">How many hackathons have you previously attended? <span className="text-red-500"> *</span></label>
            <input
                type="text"
                name="previousHackathons"
                id="previousHackathons"
                placeholder="0"
                onChange={e => setAppData({...appData, previousHackathons: e.target.value})}
                value={appData?.previousHackathons}
                className={`w-[25%] ${textBoxStyle}`}
              />
          </div>

          <div className="flex flex-col mb-[2rem]">
            <label htmlFor="dietaryRestrictions">Do you have any dietary restrictions we should know of?</label>
            <input
                type="text"
                name="dietaryRestrictions"
                id="dietaryRestrictions"
                placeholder="intolerance, vegan, allergies, etc."
                onChange={e => setAppData({...appData, dietaryRestrictions: e.target.value})}
                value={appData?.dietaryRestrictions}
                className={`w-[70%] ${textBoxStyle}`}
              />
          </div>

          <div className="flex flex-col mb-[3rem]">
            <label htmlFor="pronouns">Will you be travelling from any of these cities?<span className="text-red-500"> *</span></label>
            {travelOptions.map(option => {
              return (
                <label key={option} className="inline-flex items-center">
                <input
                  type="radio"
                  value={option}
                  checked={appData?.travelOption === `${option}`}
                  onChange={(e) => { handleOptionChange(e); setAppData({...appData, travelOption: e.target.value}) }}
                  className="form-radio text-indigo-600 h-4 w-4"
                />
                <span className="ml-2">{option}</span>
                </label>
              )
            })}
          </div>

          <div className="flex flex-col mb-[3rem]">
            <label htmlFor="busOption">Will you be needing bussing from any of the above locations?</label>
            <div className="flex flex-row flex-start items-center">
              <input type="checkbox" id="busOption" name="busOption" checked={appData?.busOption} className="w-5 h-5 rounded border border-white bg-[#2D2D2D]" onChange={e => setAppData({...appData, busOption: e.target.checked})}></input>
              <label for="busOption" className="pl-[0.5rem]">Yes</label>
            </div>
          </div>
          
        </div>

        <div className="flex flex-row justify-center bg-[#202020] py-[1rem] mt-[1rem] mb-[6rem] rounded-lg">
          <button 
            className="w-[25%] flex justify-center items-center text-center bg-[#FAAF40] rounded-lg py-3 font-bold"
            onClick={() => { saveApplicationData(false, '/registration/education'); }}
          >Previous Page</button>
          <div className="h-full w-[2px] bg-white mx-[1rem]"></div>
          <button 
            className="w-[25%] flex justify-center items-center text-center bg-[#EE4036] rounded-lg py-3 font-bold"
            onClick={() => { saveApplicationData(false, '/registration/policies', true); }}
          >Next Page</button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};
"use client";
import '../../css/background.css';
import ApplicationLinkButton from '../../components/dashboard/ApplicationLinkButton';
import ApplicationStatusTracker from '../../components/dashboard/ApplicationStatusTracker';
import { useAuth } from '../../contexts/AuthContext';
import checkIfApplicationStarted from '../../firebase/firestore/checkIfApplicationStarted';
import { useEffect, useState } from 'react';
import logout from '../../firebase/auth/logout';
import retrieveUserData from '../../firebase/firestore/retrieveUserData';
import { motion } from 'framer-motion';

export default function Dashboard() {
    const { currentUser } = useAuth();
    const [appStarted, setAppStarted] = useState(null);
    const [appData, setAppData] = useState(null);
    const [imageToUse, setImageToUse] = useState(0); // [0, 1, 2, 3, 4]


    useEffect(() => {
        async function checkApplicationOnStartup(){
            if (currentUser === null)
            {
                window.location.href = '/login';
                return;
            }
            setAppStarted((await checkIfApplicationStarted(currentUser.uid)).result);
            setAppData((await retrieveUserData(currentUser.uid)).result);
            await selectImageToUse();
        }
        checkApplicationOnStartup();
    }, []);

    async function signOut()
    {
        await logout();
        window.location.href = '/';
    }

    async function selectImageToUse()
    {
        let localAppData = await (await retrieveUserData(currentUser.uid)).result;
        if (localAppData == null)
        {
            return setImageToUse(0);
        }

        if(localAppData.aboutComplete && localAppData.educationComplete && localAppData.appQsComplete && localAppData.policiesComplete)
        {
            return setImageToUse(4);
        }
        else if (localAppData.aboutComplete && localAppData.educationComplete && localAppData.appQsComplete)
        {
            return setImageToUse(3);
        }
        else if(localAppData.aboutComplete && localAppData.educationComplete)
        {
            return setImageToUse(2);
        }
        else if(localAppData.aboutComplete)
        {
            return setImageToUse(1);
        }

        // if (localAppData.applicationComplete == true)
        // {
        //     return setImageToUse(4);
        // }
        // else if (localAppData.aboutComplete == true && localAppData.educationComplete == true && localAppData.appQsComplete && localAppData.additionalInfoComplete == true && localAppData.policiesComplete == true)
        // {
        //     return setImageToUse(3);
        // }
        // else if (localAppData.aboutComplete == true && localAppData.educationComplete == true && localAppData.appQsComplete  && localAppData.additionalInfoComplete == true && localAppData.policiesComplete == false)
        // {
        //     return setImageToUse(2);
        // }
        // else if (localAppData.aboutComplete && !localAppData.educationComplete && !localAppData.appQsComplete && !localAppData.additionalInfoComplete && !localAppData.policiesComplete)
        // {
        //     return setImageToUse(1);
        // }
    }


    function getLinkButtonStatus(baseIndex, currentIndex) {
        if (currentIndex === baseIndex)
            return 1
        else if (currentIndex > baseIndex)
            return 2
        else
            return 0
    }

    return (
        <div className='w-full min-h-screen bg-[#111010] bg-topogrophy-dark flex flex-col justify-start items-center'>
            {/* Home Button */}
            <div className='flex flex-row justify-between items-center mt-[3rem] w-[95%] 2xl:w-[75%]'>
                <div className='flex'>
                    <motion.a 
                        href='/' 
                        className='bg-[#FE0000] w-[160px] h-[50px] rounded-full flex justify-center items-center text-xl text-white font-bold mb-[10px]'
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >Home</motion.a>
                </div>
                <div className='flex'>
                    <motion.button 
                        href='/' 
                        className='bg-[#FE0000] w-[160px] h-[50px] rounded-full flex justify-center items-center text-xl text-white font-bold mb-[10px]' 
                        onClick={signOut}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >Log Out</motion.button>
                </div>
            </div>
            
            <div className="flex w-[95%] 2xl:w-[75%] lg:flex-row flex-col-reverse gap-4 justify-start items-start pt-[20px] mb-[3rem]">
                <div className='flex flex-col items-center justify-between h-full w-full lg:w-[25%] gap-4'>
                    {/* Application Tracker */}
                    <div className='w-full bg-[#202020] flex flex-col justify-center items-center rounded-2xl px-6 py-5'>
                        <h3 className='text-white font-bold text-xl mb-2 text-center'>Application Tracker</h3>
                        <div className='w-full flex flex-col'>
                            {/* Statuses
                            - 0: grey Go (incomplete but not available)
                            - 1: yellow Go (incomplete and available)
                            - 2: green Edit (complete and available)
                            */}
                            <ApplicationLinkButton title="About" status={getLinkButtonStatus(0, imageToUse)} dest={"/registration/about"}/>
                            <ApplicationLinkButton title="Education" status={getLinkButtonStatus(1, imageToUse)} dest={"/registration/education"}/>
                            <ApplicationLinkButton title="Additional Info" status={getLinkButtonStatus(2, imageToUse)} dest={"/registration/application"}/>
                            <ApplicationLinkButton title="Policies" status={getLinkButtonStatus(3, imageToUse)} dest={"/registration/policies"}/>
                        </div>
                    </div>
                    {/* Info Buttons */}
                    {/* <div className='w-full bg-[#202020] flex flex-col justify-center items-center rounded-2xl py-2 px-2'>
                        <h3 className='text-white font-bold text-xl mb-3'>Need a team?</h3>
                        <a href='javascript:void(0)' className='bg-[#3f3f46] w-1/2 lg:w-4/5 xl:1/2 h-[40px] rounded-full flex justify-center items-center lg:text-sm text-lg text-white font-bold'>Coming Soon</a>
                    </div>
                    <div className='w-full bg-[#202020] flex flex-col justify-center items-center rounded-2xl py-2 px-2'>
                        <h3 className='text-white font-bold text-xl mb-3'>Need a bus?</h3>
                        <a href='javascript:void(0)' className='bg-[#3f3f46] w-1/2 lg:w-4/5 xl:1/2 h-[40px] rounded-full flex justify-center items-center lg:text-sm text-lg text-white font-bold'>Coming Soon</a>
                    </div> */}
                </div>
                
                <div className='flex flex-col w-full lg:w-[85%] sm:h-full justify-start items-center'>
                    <div className='bg-[#202020] h-full rounded-2xl py-5 px-5'>
                        <ApplicationStatusTracker status={imageToUse} />
                        <div className='w-full rounded-2xl text-white mt-[40px]'>
                            <div className='text-2xl mb-2 font-bold'>QHacks Application</div>
                            <div>
                            We're super excited to see you're interested in participating at QHacks this year!
                            <br />
                            QHacks is Queen's University's largest Hackathon! This year we expect to welcome over 500 hackers, speakers and mentors to create, learn and share your ideas. At the event, you will have the opportunity to attend our workshops and meet industry professionals, innovators, and creatives from all faculties with varying skill levels.
                            <br />
                            We look forward to seeing you at the event.
                            <br />
                            <br />
                            Are you from out of town? No worries! QHacks offers a bus service from Toronto to Kingston, seats are limited and will be allotted on a first-come, first-serve basis. Additionally, we also have a limited amount of funds earmarked to reimburse costs of Megabus travel for participants. Reimbursement can be claimed at the front-desk during the event.
                            </div>
                            <br />
                            {appStarted == false ? <div>It looks like you haven't started your application now. Make sure to apply before the deadline!</div> : null}
                            <br />
                            <p>If you encounter any errors with your application, shoot us an email at:  <a target="_blank" href='mailto:hello@qhacks.io'className='hover:text-blue-400 font-bold' >hello@qhacks.io</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
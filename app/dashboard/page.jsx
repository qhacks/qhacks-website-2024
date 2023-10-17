"use client";
import '../../css/background.css';
import ApplicationLinkButton from '../../components/dashboard/ApplicationLinkButton';
import ApplicationStatusTracker from '../../components/dashboard/ApplicationStatusTracker';
import { useAuth } from '../../contexts/AuthContext';
import checkIfApplicationStarted from '../../firebase/firestore/checkIfApplicationStarted';
import { useEffect, useState } from 'react';
import logout from '../../firebase/auth/logout';

export default function Dashboard() {
    const { currentUser } = useAuth();
    const [appStarted, setAppStarted] = useState(null);

    useEffect(async () => {
        if (currentUser === null)
        {
            window.location.href = '/login';
            return;
        }
        setAppStarted((await checkIfApplicationStarted(currentUser.uid)).result);
    }, []);

    async function signOut()
    {
        await logout();
        window.location.href = '/';
    }

    return (
        <div className='w-full h-full bg-[#111010] bg-topogrophy-dark flex flex-col justify-start items-center'>
            {/* Home Button */}
            <div className='w-full flex flex-row justify-between items-center mt-[3rem] w-[95%] md:w-[75%]'>
                <div className=' h-50px flex'>
                    <a href='/' className='bg-[#FE0000] w-[160px] h-[50px] rounded-full flex justify-center items-center text-xl text-white font-bold mb-[10px]'>Home</a>
                </div>
                <div className=' h-50px flex'>
                    <button href='/' className='bg-[#FE0000] w-[160px] h-[50px] rounded-full flex justify-center items-center text-xl text-white font-bold mb-[10px]' onClick={signOut}>Log Out</button>
                </div>
            </div>
            
            <div className="flex w-[95%] md:w-[75%] md:h-[600px] sm:flex-row flex-col-reverse gap-4 sm:gap-0 justify-start items-center pt-[20px] mb-[3rem]">
                <div className='flex flex-col items-center justify-between h-[100%] w-full sm:w-[40%] md:w-[25%] gap-4 sm:gap-0'>
                    {/* Application Tracker */}
                    <div className='w-full bg-[#202020] flex flex-col justify-center items-center rounded-2xl px-6 py-5'>
                        <h3 className='text-white font-bold text-xl mb-2 text-center'>Application Tracker</h3>
                        <div className='w-full flex flex-col'>
                            {/* Statuses
                            - 0: grey Go (incomplete but not available)
                            - 1: yellow Go (incomplete and available)
                            - 2: green Edit (complete and available)
                            */}
                            <ApplicationLinkButton className title="About" status={2} dest={"/registration/about"}/>
                            <ApplicationLinkButton title="Education" status={2} dest={"/registration/education"}/>
                            <ApplicationLinkButton title="Additional Info" status={1} dest={"/registration/application"}/>
                            <ApplicationLinkButton title="Policies" status={0} dest={"/registration/policies"}/>
                        </div>
                    </div>
                    {/* Info Buttons */}
                    <div className='w-full bg-[#202020] flex flex-col justify-center items-center rounded-2xl py-2 px-2'>
                        <h3 className='text-white font-bold text-xl mb-3'>Need a team?</h3>
                        <a href='/' className='bg-[#FAAF40] w-[50%] h-[40px] rounded-full flex justify-center items-center text-lg text-white font-bold'>More Info</a>
                    </div>
                    <div className='w-full bg-[#202020] flex flex-col justify-center items-center rounded-2xl py-2 px-2'>
                        <h3 className='text-white font-bold text-xl mb-3'>Need a bus?</h3>
                        <a href='/' className='bg-[#FAAF40] w-[160px] h-[40px] rounded-full flex justify-center items-center text-lg text-white font-bold'>More Info</a>
                    </div>
                    {/* <div className='flex flex-col w-full'>
                        
                    </div> */}
                </div>
                
                <div className='flex flex-col w-full sm:w-[60%] md:w-[75%] sm:h-full justify-start items-center sm:ml-[20px]'>
                    <div className='bg-[#202020] h-full rounded-2xl py-5 px-5'>
                        <ApplicationStatusTracker status={0} />
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
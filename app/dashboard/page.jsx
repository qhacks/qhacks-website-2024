"use client";
import '../../css/background.css';
import ApplicationLinkButton from '../../components/dashboard/ApplicationLinkButton';
import ApplicationStatusTracker from '../../components/dashboard/ApplicationStatusTracker';
import { useAuth } from '../../contexts/AuthContext';
import checkIfApplicationStarted from '../../firebase/firestore/checkIfApplicationStarted';
import { useEffect, useState } from 'react';

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

    return (
        <div className='h-fit md:h-screen w-full bg-[#111010] bg-topogrophy-dark flex flex-col'>
            {/* Home Button */}
            <div className='w-full flex justify-center items-center mt-[3rem]'>
                <div className='w-[90%] md:w-[75%] h-50px flex'>
                    <a href='/' className='bg-[#FE0000] w-[160px] h-[50px] rounded-full flex justify-center items-center text-xl text-white font-bold mb-[10px]'>Home</a>
                </div>
            </div>
            

            <div className="h-full w-full flex md:flex-row flex-col-reverse justify-center items-center md:items-start">
                <div className='h-[90%] w-[90%] md:w-[30%] xl:w-[20%] flex justify-center items-center flex-col'>
                    <div className='flex flex-col sm:flex-row md:flex-col w-full h-full justify-between'>
                        {/* Application Tracker */}
                        <div className='m-2 bg-[#202020] w-auto sm:w-2/3 md:w-full min-w-fit h-[600px] md:h-3/5 flex flex-col justify-center items-center rounded-2xl'>
                            <h3 className='text-white font-bold text-2xl mb-2 text-center mx-7'>Application Tracker</h3>
                            <div className='w-full flex flex-col'>
                                {/* Statuses
                                - 0: grey Go (incomplete but not available)
                                - 1: yellow Go (incomplete and available)
                                - 2: green Edit (complete and available)
                                */}
                                <ApplicationLinkButton title="About" status={2} dest={"/registration/about"}/>
                                <ApplicationLinkButton title="Education" status={2} dest={"/registration/education"}/>
                                <ApplicationLinkButton title="Additional Info" status={1} dest={"/registration/application"}/>
                                <ApplicationLinkButton title="Policies" status={0} dest={"/registration/policies"}/>
                            </div>
                        </div>
                        {/* Info Buttons */}
                        <div className='w-full sm:w-1/3 md:w-auto h-fit sm:h-[600px] md:h-2/5 flex flex-col justify-between'>
                            <div className='m-2 bg-[#202020] w-auto h-44 sm:h-[48%] md:h-1/2 flex flex-col justify-center items-center rounded-2xl'>
                                <h3 className='text-white font-bold text-2xl mb-4'>Need a team?</h3>
                                <a href='/' className='bg-[#FAAF40] w-[160px] h-[50px] rounded-full flex justify-center items-center text-xl text-white font-bold'>More Info</a>
                            </div>
                            <div className='m-2 bg-[#202020] w-auto h-44 sm:h-[48%] md:h-1/2 flex flex-col justify-center items-center rounded-2xl'>
                                <h3 className='text-white font-bold text-2xl mb-4'>Need a bus?</h3>
                                <a href='/' className='bg-[#FAAF40] w-[160px] h-[50px] rounded-full flex justify-center items-center text-xl text-white font-bold'>More Info</a>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className='h-[90%] w-[90%] md:w-[55%] xl:w-[55%] flex flex-col justify-start items-center m-3'>
                    <div className='m-2 bg-[#202020] rounded-2xl h-full'>
                        <ApplicationStatusTracker status={0} />
                        <div className='w-full h-[500px] rounded-2xl text-white py-[3rem] px-[2rem]'>
                            <div className='text-2xl mb-2 font-bold'>Hi there, {currentUser?.email}!</div>

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
"use client";
import '../../css/background.css';
import ApplicationLinkButton from '../../components/dashboard/ApplicationLinkButton';
import ApplicationStatusTracker from '../../components/dashboard/ApplicationStatusTracker';

export default function Dashboard() {
    return(
        <div className='w-full h-full bg-[#111010] bg-topogrophy-dark flex flex-col justify-start items-center'>
            {/* Home Button */}
            <div className='w-full flex flex-row justify-between items-center mt-[3rem] w-[95%] md:w-[75%]'>
                <div className=' h-50px flex'>
                    <a href='/' className='bg-[#FE0000] w-[160px] h-[50px] rounded-full flex justify-center items-center text-xl text-white font-bold mb-[10px]'>Home</a>
                </div>
                <div className=' h-50px flex'>
                    <a href='/' className='bg-[#FE0000] w-[160px] h-[50px] rounded-full flex justify-center items-center text-xl text-white font-bold mb-[10px]'>Log Out</a>
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
                            QHacks is Queen's University's largest Hackathon! Join over 500 hackers, speakers and mentors to create, learn and share your ideas. Attend our workshops and hacker challenges and meet industry professionals, Innovators, and creatives from all faculties and skill levels are welcomed.
                            <br />
                            <br />
                            Are you from out of town? No worries! QHacks offers reimbursement for Mega bus tickets.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
}
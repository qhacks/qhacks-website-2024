"use client";
import '../../css/background.css';
import ApplicationLinkButton from '../../components/dashboard/ApplicationLinkButton';
import ApplicationStatusTracker from '../../components/dashboard/ApplicationStatusTracker';

export default function Dashboard() {
    return(
        <div className='h-screen w-full bg-[#111010] bg-topogrophy-dark flex flex-col'>
            <div className="h-full w-full flex flex-row justify-center items-start pt-[3rem]">
                <div className='h-[90%] w-[23%] flex justify-center items-center m-4 flex-col'>
                    <div className='w-full h-50px flex'>
                        <a 
                            className='bg-[#FE0000] w-[160px] h-[50px] rounded-full flex justify-center items-center text-xl text-white font-bold mb-[10px]'
                            href='/'
                        >Home</a>
                    </div>
                    <div className='bg-[#202020] w-full min-w-fit h-[600px] flex flex-col justify-center items-center rounded-2xl mx-4 my-2 py-3'>
                        <h3 className='text-white font-bold text-2xl mb-1 text-center'>Application Tracker</h3>
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
                    <div className='bg-[#202020] w-full h-96 flex flex-col justify-center items-center rounded-2xl mx-4 my-2'>
                        <h3 className='text-white font-bold text-2xl mb-8'>Need a team?</h3>
                        <a 
                            className='bg-[#FAAF40] w-[160px] h-[50px] rounded-full flex justify-center items-center text-xl text-white font-bold'
                            href='/'
                        >More Info</a>
                    </div>
                    <div className='bg-[#202020] w-full h-96 flex flex-col justify-center items-center rounded-2xl mx-4 my-2'>
                        <h3 className='text-white font-bold text-2xl mb-8'>Need a bus?</h3>
                        <a 
                            className='bg-[#FAAF40] w-[160px] h-[50px] rounded-full flex justify-center items-center text-xl text-white font-bold'
                            href='/'    
                        >More Info</a>
                    </div>
                </div>
                
                <div className='h-[calc(90%-50px-1rem)] w-[55%] flex flex-col justify-start items-center bg-[#202020] mt-[calc(60px+1.5rem)] rounded-2xl'>
                    <ApplicationStatusTracker status={2} />
                    <div className='w-full h-[500px] rounded-2xl text-white py-[3rem] px-[2rem]'>
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
        
    );
}
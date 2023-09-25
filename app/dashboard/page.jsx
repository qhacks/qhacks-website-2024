"use client";
import '../../css/background.css';


export default function Dashboard() {
    return(
        <div className='h-screen w-full bg-[#111010] bg-topogrophy-dark flex flex-col'>
            <div className="h-full w-full flex flex-row justify-center items-center">
                <div className='h-[90%] w-[23%] flex justify-center items-center m-4 flex-col'>
                    <div className='w-full h-20 flex'>
                        <a className='bg-[#FE0000] w-[160px] h-[50px] rounded-full flex justify-center items-center text-xl text-white font-bold'>Home</a>
                    </div>
                    <div className='bg-[#202020] w-full h-[600px] flex flex-col justify-center items-center rounded-2xl mx-4 my-2'>
                        <h3 className='text-white font-bold text-2xl mb-8'>Application Tracker</h3>
                        <div className='w-full flex flex-col'>
                            <div className='w-[90%] h-16 bg-[#474747] rounded-[15px] my-2 ml-4'>Test1</div>
                            <div className='w-[90%] h-16 bg-[#474747] rounded-[15px] my-2 ml-4'>Test1</div>
                            <div className='w-[90%] h-16 bg-[#474747] rounded-[15px] my-2 ml-4'>Test1</div>
                            <div className='w-[90%] h-16 bg-[#474747] rounded-[15px] my-2 ml-4'>Test1</div>
                        </div>
                    </div>
                    <div className='bg-[#202020] w-full h-96 flex flex-col justify-center items-center rounded-2xl mx-4 my-2'>
                        <h3 className='text-white font-bold text-2xl mb-8'>Need a team?</h3>
                        <a className='bg-[#FAAF40] w-[160px] h-[50px] rounded-full flex justify-center items-center text-xl text-white font-bold'>Home</a>
                    </div>
                    <div className='bg-[#202020] w-full h-96 flex flex-col justify-center items-center rounded-2xl mx-4 my-2'>
                        <h3 className='text-white font-bold text-2xl mb-8'>Need a bus?</h3>
                        <a className='bg-[#FAAF40] w-[160px] h-[50px] rounded-full flex justify-center items-center text-xl text-white font-bold'>Home</a>
                    </div>
                </div>
                
                <div className='h-[90%] w-[55%] flex flex-col justify-center items-start'>
                    <div className='w-full h-20 flex border'>
                        test
                    </div>
                    <div className='bg-[#202020] w-full h-[500px] rounded-2xl m-4'>
                        test
                    </div>
                </div>
            </div>
        </div>
        
    );
}
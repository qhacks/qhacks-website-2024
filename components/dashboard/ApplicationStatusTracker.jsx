import React from 'react'

function ApplicationStatusTracker(props) {
    return ( 
        <div className='bg-[#2D2D2D] w-[calc(100%-2rem)] flex flex-col justify-start items-center m-[1rem] rounded-xl'>
            <div className='text-white text-center text-4xl font-semibold py-[1.5rem]'>
                Application Status
            </div>
            <div className='hidden sm:flex w-[calc(100%-3rem)] h-[62px] mb-[20px]  justify-center'>
                <img src={`/application-status/${props.status}.svg`} alt="" srcset="" />
            </div>
            <div className='flex sm:hidden py-10 w-[calc(100%-3rem)] h-[500px] justify-center'>
                <img className=' w-full' src={`/application-status-vertical/${props.status}.svg`} alt="" srcset="" />
            </div>
        </div>
     );
}

export default ApplicationStatusTracker;
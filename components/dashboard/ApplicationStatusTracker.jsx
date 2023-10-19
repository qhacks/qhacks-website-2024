import React from 'react'

function ApplicationStatusTracker(props) {
    console.log("In component number: " + props.status)
    return (
        <div className='bg-[#2D2D2D] flex flex-col justify-start items-center rounded-xl'>
            <div className='text-white text-center text-4xl font-semibold py-[1.5rem]'>
                Application Status
            </div>
            <div className='hidden sm:flex h-[62px] mb-[20px]  justify-center'>
                <img src={`/application-status/${props.status}.svg`} alt=""/>
            </div>
            <div className='flex sm:hidden py-10 justify-center'>
                <img className=' w-full' src={`/application-status-vertical/${props.status}.svg`} alt=""/>
            </div>
        </div>
     );
}

export default ApplicationStatusTracker;
"use client"

import wavesSrc from '../../assets/waves-saturated.png';
import React, { useEffect } from 'react'
import { BsEyeSlash } from 'react-icons/bs';

export default function SignUp() {

    useEffect(() => {
        document.querySelector("footer").style.background = "#f8ba15";
    }, [])

    return ( 
        <div className='h-[800px] bg-gray-950'>
            <div id='signup-container' className='flex flex-col justify-center items-center w-full h-1/4 bg-repeat-x bg-bottom h-full' style={{
                backgroundImage: `url(${wavesSrc.src})`,
                backgroundSize: '1200px 300px'
            }}>

            {/* <div id="qhacks-banner" className='absolute top-[calc(50% - 100px)] -translate-y-1/2
            text-3xl font-yaro max-w-screen '>
                <div className='overflow-hidden whitespace-nowrap'>QHACKS QHACKS QHACKS QHACKS QHACKS QHACKS QHACKS</div>
                <div className='overflow-hidden whitespace-nowrap'>QHACKS QHACKS QHACKS QHACKS QHACKS QHACKS QHACKS</div>
                <div className='overflow-hidden whitespace-nowrap'>QHACKS QHACKS QHACKS QHACKS QHACKS QHACKS QHACKS</div>
            </div> */}

            <form id="signup-card" className='text-white z-[1] p-[50px] bg-zinc-900 rounded-[15px] flex flex-col justify-center items-center gap-[30px]'>
                <h2 className='text-3xl font-bold'>Welcome</h2>
                <input type='email' className='placeholder-white w-[280px] border-b border-solid border-[#717171] focus:outline-none' style={{
                    background: 'none',
                }} placeholder='Email' />
                <div className='relative'>
                    <input type='password' className='placeholder-white w-[280px] border-b border-solid border-[#717171] focus:outline-none' style={{
                        background: 'none',
                    }} placeholder='Password' />
                    <BsEyeSlash className='placeholder-white absolute right-[10px] top-[10px] text-white' />
                </div>
                <div className='relative'>
                    <input type='password' className='placeholder-white w-[280px] border-b border-solid border-[#717171] focus:outline-none' style={{
                        background: 'none',
                    }} placeholder='Confirm Password' />
                </div>
                <input type="submit" value="Create Account" className='cursor-pointer font-semibold w-[280px] text-xl px-5 py-3 rounded-xl' style={{
                    background: "linear-gradient(90deg, rgba(255, 0, 0, 0.72) -6.16%, rgba(255, 138, 0, 0.83) 60.41%)"
                }}/>
                
                <div className='text-xs font-light'>Already signed up? <a className='font-semibold hover:underline' href="#">Log In</a></div>
                <div className='text-xs font-light'>return <a className='font-semibold hover:underline' href="/">Home</a></div>
            </form>


            </div>
        </div>
     );
}
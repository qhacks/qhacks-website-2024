"use client"

import wavesSrc from '../../assets/waves.svg';
import React, { useEffect } from 'react'
import { FaEyeSlash, FaEye } from 'react-icons/fa';

export default function LogIn() {

    useEffect(() => {
        document.querySelector("footer").style.background = "#f8ba15";
    }, [])

    return ( 
        <div className='h-[800px] bg-gray-950'>
            <div id='login-container' className='flex flex-col justify-center items-center w-full bg-repeat-x bg-bottom h-full' style={{
                backgroundImage: `url(${wavesSrc.src})`,
                backgroundSize: 'cover'
            }}>

            <form id="login-card" className='text-white z-[1] bg-zinc-900 rounded-[15px] flex flex-col justify-center items-center gap-[30px] p-[30px] sm:p-[50px]'>
                <h2 className='text-3xl font-bold'>Welcome Back</h2>
                <input type='email' className='mt-[25px] w-[280px] border-b border-solid border-[#717171] focus:outline-none' style={{
                    background: 'none',
                }} placeholder='Email' />
                <div className='relative mb-[25px]'>
                    <input id='password-input' type='password' className='w-[280px] border-b border-solid border-[#717171] focus:outline-none' style={{
                        background: 'none',
                    }} placeholder='Password' />
                    <div id="password-icon-cont" onClick={(e) => {
                        const parent = 
                        [...document.querySelector("#password-icon-cont").children].forEach(child => child.classList.toggle('hidden'))

                        const passwordInput = document.querySelector("#password-input");
                        passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
                    }}>
                        <FaEyeSlash className='cursor-pointer absolute w-4 -translate-y-1/2 right-[10px] top-[10px] text-white font-bold' />
                        <FaEye className='hidden cursor-pointer absolute w-4 -translate-y-1/2 right-[10px] top-[10px] text-white font-bold' />
                    </div>
                </div>
                <input type="submit" value="Log In" className='cursor-pointer font-semibold w-[280px] text-xl px-5 py-3 rounded-xl' style={{
                    background: "linear-gradient(90deg, rgba(255, 0, 0, 0.72) -6.16%, rgba(255, 138, 0, 0.83) 60.41%)"
                }}/>
                
                <div className='text-center flex flex-col gap-[10px]'>
                <a href="/" className='text-xs font-regular text-blue-600 hover:underline'>Forgot your password?</a>
                <div className='text-xs font-light'>Don't have an account? <a className='font-semibold hover:underline' href="/signup">Sign Up</a></div>
                <div className='text-xs font-light'>return <a className='font-semibold hover:underline' href="/">Home</a></div>
                </div>
            </form>


            </div>
        </div>
     );
}
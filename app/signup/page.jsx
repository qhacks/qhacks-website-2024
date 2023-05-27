import wavesSrc from '../../assets/waves-saturated.png';
import React from 'react'

export default function SignUp() {
    return ( 
        <div className='h-[800px] bg-gray-950'>
            <form id='signup-container' className='flex flex-col justify-center items-center w-full h-1/4 bg-repeat-x bg-bottom h-full' style={{
                backgroundImage: `url(${wavesSrc.src})`,
                backgroundSize: '1200px 300px'
            }}>

            {/* <div id="qhacks-banner" className='absolute top-[calc(50% - 100px)] -translate-y-1/2
            text-3xl font-yaro max-w-screen '>
                <div className='overflow-hidden whitespace-nowrap'>QHACKS QHACKS QHACKS QHACKS QHACKS QHACKS QHACKS</div>
                <div className='overflow-hidden whitespace-nowrap'>QHACKS QHACKS QHACKS QHACKS QHACKS QHACKS QHACKS</div>
                <div className='overflow-hidden whitespace-nowrap'>QHACKS QHACKS QHACKS QHACKS QHACKS QHACKS QHACKS</div>
            </div> */}

            <div id="signup-card" className='text-white z-[1] p-[50px] bg-zinc-900 rounded-[15px] flex flex-col justify-center items-center gap-[30px]'>
                <h2 className='text-3xl font-bold'>Welcome</h2>
                <input type='email' className='w-[280px] border-b border-solid border-[#717171] focus:outline-none' style={{
                    background: 'none',
                }} placeholder='Email'></input>
                <input type='password' className='w-[280px] border-b border-solid border-[#717171] focus:outline-none' style={{
                    background: 'none',
                }} placeholder='Password'></input>
                <input type='password' className='w-[280px] border-b border-solid border-[#717171] focus:outline-none' style={{
                    background: 'none',
                }} placeholder='Confirm Password'></input>
                <input type="submit" value="Create Account" className='font-semibold w-[280px] text-xl px-5 py-3 rounded-xl' style={{
                    background: "linear-gradient(90deg, rgba(255, 0, 0, 0.72) -6.16%, rgba(255, 138, 0, 0.83) 60.41%)"
                }}/>
                
                <div className='text-xs font-light'>Already signed up? <a className='font-semibold hover:underline' href="#">Log In</a></div>
                <div className='text-xs font-light'>return <a className='font-semibold hover:underline' href="/">Home</a></div>
            </div>


            </form>
        </div>
     );
}
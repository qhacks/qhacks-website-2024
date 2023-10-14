"use client";
import wavesSrc from '../../assets/waves.svg';
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import { useState } from 'react';
import signUp from '../../firebase/auth/signup';

export default function SignUp() {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [confirm, setConfirm] = useState(null);

    async function handleSubmit(e)
    {
        e.preventDefault();
     
        if (email === null || password === null || confirm === null)
        {
            alert('Please fill out all fields');
            return;
        }

        if (password !== confirm)
        {
            alert('Passwords do not match');
            return;
        }

        const { result, error } = await signUp(email, password);
        if (error)
        {
            console.log(error.code, error.name);
            if (error.code == 'auth/weak-password')
            {
                // TODO: Add message saying minimum requirements not met. (Minimum is 6)
            }
            else if (error.code == 'auth/email-already-in-use')
            {
                // TODO: Add message saying email already in use.
            }
            else if (error.code == 'auth/invalid-email')
            {
                // TODO: Add message saying email is invalid.
            }
            alert(error);
            return;
        }
        else
        {
            console.log(result);
            alert('Account created!');
            window.location.href = '/login';
        }
    }

    return ( 
        <div className='h-screen bg-gray-950'>
            <div id='signup-container' className='flex flex-col justify-center items-center w-full h-full bg-repeat-x bg-bottom' style={{
                backgroundImage: `url(${wavesSrc.src})`,
                backgroundSize: 'cover'
            }}>
                <form id="signup-card" className='text-white z-[1] bg-zinc-900 rounded-[15px] flex flex-col justify-center items-center gap-[30px] p-[30px] sm:p-[50px]' onSubmit={handleSubmit}>
                    <h2 className='text-3xl font-bold'>Welcome</h2>
                    <input type='email' className='w-[280px] border-b border-solid border-[#717171] focus:outline-none' style={{
                        background: 'none',
                    }} placeholder='Email' onChange={e => setEmail(e.target.value)}/>
                    <div className='relative'>
                        <input id='password-input' type='password' className='w-[280px] border-b border-solid border-[#717171] focus:outline-none' style={{
                            background: 'none',
                        }} placeholder='Password' onChange={e => setPassword(e.target.value)}/>
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
                    <div className='relative'>
                        <input id='confirm-input' type='password' className='w-[280px] border-b border-solid border-[#717171] focus:outline-none' style={{
                            background: 'none',
                        }} placeholder='Confirm Password' onChange={e => setConfirm(e.target.value)}/>

                        <div id="confirm-icon-cont" onClick={(e) => {
                            const parent = 
                            [...document.querySelector("#confirm-icon-cont").children].forEach(child => child.classList.toggle('hidden'))

                            const confirmInput = document.querySelector("#confirm-input");
                            confirmInput.type = confirmInput.type === 'password' ? 'text' : 'password';
                        }}>
                            <FaEyeSlash className='cursor-pointer placeholder-white absolute w-4 -translate-y-1/2 right-[10px] top-[10px] text-white font-bold' />
                            <FaEye className='hidden cursor-pointer placeholder-white absolute w-4 -translate-y-1/2 right-[10px] top-[10px] text-white font-bold' />
                        </div>
                    </div>
                    <input type="submit" value="Create Account" className='cursor-pointer font-semibold w-[280px] text-xl px-5 py-3 rounded-xl' style={{
                        background: "linear-gradient(90deg, rgba(255, 0, 0, 0.72) -6.16%, rgba(255, 138, 0, 0.83) 60.41%)"
                    }}/>
                    
                    <div className='text-xs font-light'>Already signed up? <a className='font-semibold hover:underline' href="/login">Log In</a></div>
                    <div className='text-xs font-light'>return <a className='font-semibold hover:underline' href="/">Home</a></div>
                </form>
            </div>
        </div>
     );
}
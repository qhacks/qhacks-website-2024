"use client";
import wavesSrc from '../../assets/waves.svg';
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import { useState } from 'react';
import signUp from '../../firebase/auth/signup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion';

export default function SignUp() {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [confirm, setConfirm] = useState(null);
    const [visible1, setVisible1] = useState(false);
    const [visible2, setVisible2] = useState(false);

    async function handleSubmit(e)
    {
        e.preventDefault();
     
        if (email === null || password === null || confirm === null)
        {
            toast('Please fill out all fields', { theme: 'dark', type: 'error' });
            return;
        }

        if (password !== confirm)
        {
            toast('Passwords do not match', { theme: 'dark', type: 'error' });
            return;
        }

        const { error } = await signUp(email, password);
        if (error)
        {
            // console.log(error.code);
            if (error.code == 'auth/weak-password')
            {
                toast('Password must be at least 6 characters long!', {
                    theme: 'dark',
                    pauseOnHover: false,
                    type: 'error'
                });
            }
            else if (error.code == 'auth/email-already-in-use')
            {
                toast('Email already in use!', {
                    theme: 'dark',
                    pauseOnHover: false,
                    type: 'error'
                });
            }
            else if (error.code == 'auth/invalid-email')
            {
                toast('Invalid email!', {
                    theme: 'dark',
                    pauseOnHover: false,
                    type: 'error'
                });
            }
            return;
        }
        else
        {
            toast('Account created!', {
                theme: 'dark',
                pauseOnHover: false,
                type: 'success'
            });
            
            setTimeout(() => { window.location.href = '/login'; }, 1500);
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
                    
                    {/* PASSWORD FIELD */}
                    <div className='relative w-[280px]'>
                        <input 
                            id='password-input'
                            type={visible1 ? 'text' : 'password'}
                            placeholder='Password' 
                            onChange={e => setPassword(e.target.value)}
                            className='w-full border-b border-solid border-[#717171] focus:outline-none' 
                            style={{
                                background: 'none',
                            }}
                        />
                        <div 
                            onClick={() => setVisible1(!visible1)}
                        >   
                            {
                                visible1 ? 
                                <FaEye className='absolute cursor-pointer text-white font-bold right-[10px] top-[15px]' />
                                :
                                <FaEyeSlash className='absolute cursor-pointer text-white font-bold right-[10px] top-[15px]' />
                            }
                        </div>
                    </div>
                    
                    {/* PASSWORD FIELD */}
                    <div className='relative'>
                        <input 
                            id='confirm-input' 
                            type={visible2 ? 'text' : 'password'}
                            placeholder='Confirm Password' 
                            onChange={e => setConfirm(e.target.value)}
                            className='w-[280px] border-b border-solid border-[#717171] focus:outline-none' 
                            style={{
                                background: 'none',
                            }} 
                            
                        />

                        <div 
                            onClick={() => setVisible2(!visible2)}
                        >   
                            {
                                visible2 ? 
                                <FaEye className='absolute cursor-pointer text-white font-bold right-[10px] top-[15px]' />
                                :
                                <FaEyeSlash className='absolute cursor-pointer text-white font-bold right-[10px] top-[15px]' />
                            }
                        </div>
                    </div>
                    <motion.input 
                        type="submit" 
                        value="Create Account" 
                        className='cursor-pointer font-semibold w-[280px] text-xl px-5 py-3 rounded-xl' 
                        style={{
                            background: "linear-gradient(90deg, rgba(255, 0, 0, 0.72) -6.16%, rgba(255, 138, 0, 0.83) 60.41%)"
                        }}
                        whileHover={{scale: 1.05}}
                        whileTap={{scale: 0.95}}
                    />
                    
                    <div className='text-xs font-light'>Already signed up? <a className='font-semibold hover:underline' href="/login">Log In</a></div>
                    <div className='text-xs font-light'>Return <a className='font-semibold hover:underline' href="/">Home</a></div>
                </form>
            </div>
            <ToastContainer />
        </div>
     );
}
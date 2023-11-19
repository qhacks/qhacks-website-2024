"use client";
import { useState } from 'react';
import wavesSrc from '../../assets/waves.svg';
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import login from '../../firebase/auth/login';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import sendPasswordResetEmailToUser from '../../firebase/auth/sendPasswordResetEmail';
import { motion } from 'framer-motion';

export default function LogIn() {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [visible, setVisible] = useState(false);

    async function forgotPassword(e)
    {
        e.preventDefault();
        if (email === null)
        {
            toast('Please enter your email in the field and then click forgot password.', { theme: 'dark', type: 'error' });
            return;
        }

        await sendPasswordResetEmailToUser(email).then(() => {
            toast('Password reset email sent!', { theme: 'dark', type: 'success' });
        }).catch(() => {
            toast(error, { theme: 'dark', type: 'error' });
        });
    }

    async function handleSubmit(e)
    {
        e.preventDefault();

        if (email === null || password === null || confirm === null)
        {
            toast('Please fill out all fields', { theme: 'dark', type: 'error' });
            return;
        }

        const { result, error } = await login(email, password);
        if (error)
        {
            // console.log(error.code);
            if (error.code == 'auth/user-not-found')
            {
                toast('No user with that email exists', { theme: 'dark', type: 'error' });
                return;
            }
            else if (error.code == 'auth/wrong-password')
            {
                toast('Wrong password', { theme: 'dark', type: 'error' });
                
                return;
                
            }
            else if (error.code == 'auth/email-not-verified')
            {
                toast('Email not verified. Check your inbox and spam.', { theme: 'dark', type: 'error' });
                return;
            }
            else if (error.code == 'auth/invalid-login-credentials')
            {
                toast('Invalid login credentials', { theme: 'dark', type: 'error' });
                return;
            }
            else
            {
                toast(error, { theme: 'dark', type: 'error' });
                return;
            }
            
        }

        toast('Logged in successfully', { theme: 'dark', type: 'success' });
        window.location.href = '/dashboard';
    }

    return ( 
        <div className='h-screen bg-gray-950'>
            <div 
                id='login-container' 
                className='flex flex-col justify-center items-center w-full h-full bg-repeat-x bg-bottom ' 
                style={{
                    backgroundImage: `url(${wavesSrc.src})`,
                    backgroundSize: 'cover'
                }}
            >
                <form 
                    id="login-card" 
                    onSubmit={handleSubmit}
                    className='text-white z-[1] bg-zinc-900 rounded-[15px] flex flex-col justify-center items-center gap-[30px] p-[30px] sm:p-[50px]' 
                >
                    <h2 className='text-3xl font-bold'>Welcome Back</h2>
                    <input 
                        type='email'
                        placeholder='Email'
                        onChange={e => setEmail(e.target.value)}
                        className='mt-[25px] w-[280px] border-b border-solid border-[#717171] focus:outline-none' 
                        style={{
                            background: 'none',
                        }} 
                    />
                    <div className='mb-[25px] w-[280px] relative'>
                        {/* PASSWORD INPUT */}
                        <input 
                            id='password-input' 
                            type={visible ? 'text' : 'password'}
                            placeholder='Password'
                            onChange={e => setPassword(e.target.value)}
                            className='border border-[#717171] w-full' 
                            style={{
                                background: 'none',
                            }}  
                        />
                        <div 
                            onClick={() => setVisible(!visible)}
                        >   
                            {
                                visible ? 
                                <FaEye className='absolute cursor-pointer text-white font-bold right-[10px] top-[15px]' />
                                :
                                <FaEyeSlash className='absolute cursor-pointer text-white font-bold right-[10px] top-[15px]' />
                            }
                        </div>
                    </div>
                    <motion.input 
                        type="submit" 
                        value="Log In" 
                        className='cursor-pointer font-semibold w-[280px] text-xl px-5 py-3 rounded-xl' 
                        style={{
                            background: "linear-gradient(90deg, rgba(255, 0, 0, 0.72) -6.16%, rgba(255, 138, 0, 0.83) 60.41%)"
                        }}
                        whileHover={{scale: 1.05}}
                        whileTap={{scale: 0.95}}
                    />
                    <div className='text-center flex flex-col gap-[10px]'>
                    <button onClick={forgotPassword} className='text-xs font-regular text-blue-600 hover:underline'>Forgot your password?</button>
                    {/* <div className='text-xs font-light'>Don't have an account? <a className='font-semibold hover:underline' href="/signup">Sign Up</a></div> */}
                    <div className='text-xs font-light'>Return <a className='font-semibold hover:underline' href="/">Home</a></div>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </div>
     );
}
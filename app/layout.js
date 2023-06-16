"use client";
import './globals.css';
import { Inter } from 'next/font/google';
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'QHacks 2024 | Queens University',
  description: 'Queen’s University’s only annual hackathon. Join us for a weekend of innovation, creativity, and fun! February 2nd - 4th, 2024.',
}

export default function RootLayout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <html lang="en">
      <body className={inter.className + " flex min-h-screen flex-col"}>
        
        {/* Navbar */}
        <nav className="hidden flex-row justify-between py-8 bg-gray-950 z-3 xs:px-2 sm:px-8 md:px-12 lg:px-12 xl:px-80 2xl:px-96 md:flex">
          <div className="flex flex-row items-left justify-left fixed px-8 bg-gray-900 rounded-full z-3">
            <a href='#'         className="lg:text-2xl sm:p-2 lg:p-4 font-bold text-white z-3 ">Home</a>
            <a href='#about'    className="lg:text-2xl sm:p-2 lg:p-4 font-bold text-white z-3 ">About</a>
            <a href='#sponsors' className="lg:text-2xl sm:p-2 lg:p-4 font-bold text-white z-3 ">Sponsors</a>
            <a href='#contact'  className="lg:text-2xl sm:p-2 lg:p-4 font-bold text-white z-3 ">Contact</a>
            <a href='/Schedule' className="lg:text-2xl sm:p-2 lg:p-4 font-bold text-white z-3 ">Schedule</a>
          </div>
        </nav>

        {/* Mobile Navbar */}
        <nav className="justify-between p-4 bg-gray-900 text-white md:hidden">
          <div className="flex items-center md:hidden">
          <button
            className="block md:hidden text-white hover:text-gray-400 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20 6H4V4H20V6ZM20 12H4V10H20V12ZM20 18H4V16H20V18Z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 6H20V8H4V6ZM4 12H20V14H4V12ZM4 18H20V20H4V18Z"
                />
              )}
            </svg>
          </button>
            {/* <button
              className="text-white hover:text-gray-400 focus:outline-none"
              onClick={toggleMenu}
            >
              Click me
            </button> */}
          </div>

          <div className={`md:flex ${isMenuOpen ? 'block' : 'hidden'}`}>
            <a href="#" className="block mx-4 py-2">Home</a>
            <a href="#" className="block mx-4 py-2">About</a>
            <a href="#" className="block mx-4 py-2">Services</a>
            <a href="#" className="block mx-4 py-2">Contact</a>
          </div>
        </nav>

        {children}
        
        {/* footer */}
        <footer className='pb-8 pt-48 bg-gradient-to-b from-gray-950 to-blue-900'>
          <div className='flex justify-center items-center py-5'>
            <a className='px-[3%] z-2 ' href='https://www.instagram.com/qhacks24/'><span className='text-5xl'><i class="fab fa-instagram text-white"></i></span></a>
            <a className='px-[3%] z-2 ' href='https://twitter.com/QHacks23'><span className='text-5xl'><i class="fab fa-twitter text-white"></i></span></a>
            <a className='px-[3%] z-2 ' href='mailto:hello@qhacks.io'><span className='text-5xl'><i class="far fa-envelope text-white"></i></span></a>
            <a className='px-[3%] z-2 ' href='https://www.facebook.com/QHacks/'><span className='text-5xl'><i class="fab fa-facebook text-white"></i></span></a>
            <a className='px-[3%] z-2 ' href='https://www.linkedin.com/company/qhacks/'><span className='text-5xl'><i class="fab fa-linkedin text-white"></i></span></a>
          </div>
          <div className='flex justify-center items-center py-2'>
            <a href='https://qhacks.io/' className='text-white hover:text-blue-400 px-[3%]'>QHacks 2023</a>
            <a href='https://ghw.mlh.io/' className='text-white hover:text-blue-400 px-[3%]'>Local Hack Day</a>
            <a href='https://medium.com/@qhacks' className='text-white hover:text-blue-400 px-[3%]'>QHacks Blog</a>
            <a href='https://www.youtube.com/watch?v=a3Z7zEc7AXQ' className='text-white hover:text-blue-400 px-[3%]'>Hack Day Tips</a>
            <a href='https://static.mlh.io/docs/mlh-code-of-conduct.pdf' className='text-white hover:text-blue-400 px-[3%]'>MLH Code of Conduct</a>
          </div>
          <div>

          </div>
          <div className='flex justify-center items-center pb-2'>
            <p className='text-white px-2'>Queen's University</p>
            <p className='text-white px-2'>99 University Ave, Kingston ON</p>
            <p className='text-white px-2'>Copyright © 2023 QHACKS</p>
          </div>
        </footer>
      </body>
    </html>
  )
}

import React from 'react'

function Header() {
    return (  <nav className="flex flex-row justify-between bg-gray-950">
          <div className="flex flex-row items-left justify-left">
            <a href='#' className="text-2xl p-4 font-bold text-white">Home</a>
            <a href='#about' className="text-2xl p-4 font-bold text-white">About</a>
            <a href='#' className="text-2xl p-4 font-bold text-white">Sponsors</a>
            <a href='#' className="text-2xl p-4 font-bold text-white">Contact</a>
            <a href='/Schedule' className="text-2xl p-4 font-bold text-white">Schedule</a>
          </div>
        </nav> );
}

export default Header;
import React from 'react'

function LoadingScreen(props) {
    return ( 
        <div id="loading-screen" className={`${props.className} bg-black flex flex-col justify-center align-center transition-opacity ${props.showLoadingScreen ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
            <div id='loading-animation-container' className='text-white text-center'>this is where loading animations go :)</div>
        </div>
     );
}

export default LoadingScreen;
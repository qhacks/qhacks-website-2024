import React from 'react'; 
import loader from '../public/loader.gif'

function LoadingScreen(props) {
    return ( 
        <div id="loading-screen" className={`${props.className} bg-black flex flex-col justify-center align-center transition-opacity ${props.showLoadingScreen ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
            <div id='loading-animation-container' className='text-white text-center'>
                <div>
                    <div class="flex justify-center items-center h-screen">
                        {/* <div class="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div> */}
                        <img src={loader.src} className='max-w-[250px]' alt="" srcset="" />
                    </div>
                </div>
                
            </div>
        </div>
     );
}

export default LoadingScreen;
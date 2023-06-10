'use client';
import 'tailwindcss/tailwind.css';

const StatsSection = () => {

    return(
        <div className='flex justify-center items-center'>
          <div className='bg-blue-900 flex flex-col items-center justify-center rounded-full w-32 h-32 border-2 text-white font-bold'>
            <h1 className='text-4xl'>10</h1>
            <h5 className='text-center'>Workshops</h5>
          </div>

          <div className='bg-yellow-600 flex flex-col items-center justify-center rounded-full w-32 h-32 text-white font-bold'>
            <h1 className='text-4xl'>1</h1>
            <h5 className='text-center'>Hackathon</h5>
          </div>

          <div className='bg-red-600 flex flex-col items-center justify-center rounded-full w-32 h-32 text-white font-bold'>
            <h1 className='text-4xl'>11</h1>
            <h5 className='text-center'>Schools</h5>
          </div>

          <div className='bg-yellow-600 flex flex-col items-center justify-center rounded-full w-32 h-32 text-white font-bold'>
            <h1 className='text-4xl'>500+</h1>
            <h5 className='text-center'>Hackers</h5>
          </div>

          <div className='bg-blue-900 flex flex-col items-center justify-center rounded-full w-32 h-32 text-white font-bold'>
            <h1 className='text-4xl'>25+</h1>
            <h5 className='text-center'>Mentors</h5>
          </div>

          <div className='bg-red-600 flex flex-col items-center justify-center rounded-full w-32 h-32 text-white font-bold'>
            <h1 className='text-4xl'>200</h1>
            <h5 className='text-center'>Projects Sumbitted</h5>
          </div>

          <div className='bg-blue-900 flex flex-col items-center justify-center rounded-full w-32 h-32 text-white font-bold'>
            <h1 className='text-4xl'>10</h1>
            <h5 className='text-center'>Workshops</h5>
          </div>
        </div>
    );
};

export default StatsSection;
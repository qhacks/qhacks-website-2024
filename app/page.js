import Image from 'next/image'
import 'tailwindcss/tailwind.css';
import Head from 'next/head';


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-left p-14 bg-gray-950 ">
      <div className="fixed top-0 right-20">
        <Image src="/MLH.svg" alt="Major Hacking Leaguge Logo" width={127} height={222}/>
      </div>
      <nav className="flex flex-row justify-between ">
        <div className="flex flex-row items-left justify-left">
          <a href='#' className="text-2xl p-4 font-bold text-white">Home</a>
          <a href='#' className="text-2xl p-4 font-bold text-white">About</a>
          <a href='#' className="text-2xl p-4 font-bold text-white">Sponsors</a>
          <a href='#' className="text-2xl p-4 font-bold text-white">Contact</a>
          <a href='/Schedule' className="text-2xl p-4 font-bold text-white">Schedule</a>
        </div>
      </nav>
      <section className='flex items-center justify-center'>
        <div className=' flex flex-row justify-between'>
          <div className='flex items-center'>
            <div className='flex-None flex-colitems-center justify-center'>
              <h1 className="m-5 text-6xl font-bold text-white font-Arial ">QHACKS</h1>
              <p className='text-2xl text-white m-5 w-96 p-2'>Get ready to innovate and make a difference! Join QHacks, the ultimate hackathon experience.</p>
              <p className='m-5 font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-red-500 to-orange-600'>In-person!  •  February 2nd - 4th    </p>
              <a href="#" className='text-white bg-green-500 px-5 py-3 m-5 rounded-xl'>Register Here</a>
            </div>
          </div>
          <div className='flex-None'>
            <Image src="/Qhacks Crown.svg" alt="QHacks Logo" width={650} height={650}/>
          </div>
        </div>
      </section>
    </main>
  )
}

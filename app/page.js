import Image from 'next/image'
import 'tailwindcss/tailwind.css';
import Head from 'next/head';


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-left  bg-gray-950 ">
      <Image className="absolute top-0 right-20" src="/MLH.svg" alt="Major Hacking Leaguge Logo" width={127} height={222}/>
      
      <nav className="flex flex-row justify-between">
        <div className="flex flex-row items-left justify-left">
          <a href='#' className="text-2xl p-4 font-bold text-white">Home</a>
          <a href='#about' className="text-2xl p-4 font-bold text-white">About</a>
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
            <Image src="/Qhacks Crown.svg" alt="QHacks Logo" width={800} height={800}/>
          </div>
        </div>
      </section>

      <section id="about" className='relative mb-96'>
        <Image className='pointer-events-none absolute -top-32 right-0 z-0' src="/Goodwin Drawing.svg" alt="QHacks Logo" width={650} height={650}/>
        <div className='mx-32 items-left justify-left'>
          <h1 className='text-white text-5xl font-bold'>Join Us<span className='text-transparent text-5xl bg-clip-text bg-gradient-to-r from-red-500 to-orange-600'> In Person!</span></h1>
            <p className='text-white text-xl w-96'> 
              Join over 500 hackers, speakers and mentors 
              to create, learn and share your ideas. Attend
              our workshops and hacker challenges and
              meet industry professionals
            </p>
            <br></br>
            <p className='text-white text-xl w-96'>
              Innovators and creatives from all faculties and skill levels are encouraged to attend!
            </p>
        </div>
      </section>

      <section>
        <div className='flex justify-center items-center'>
          <div className='bg-blue-900 flex flex-col items-center justify-center rounded-full w-32 h-32 text-white font-bold'>
            <h1 className='text-4xl'>10</h1>
            <h5 className='text-center'>Workshops</h5>
          </div>

          <div className='bg-yellow-600 flex flex-col items-center justify-center rounded-full w-32 h-32 text-white font-bold'>
            <h1 className='text-4xl'></h1>
            <h5 className='text-center'></h5>
          </div>

          <div className='bg-red-600 flex flex-col items-center justify-center rounded-full w-32 h-32 text-white font-bold'>
            <h1 className='text-4xl'>11</h1>
            <h5 className='text-center'>Schools</h5>
          </div>

          <div className='bg-yellow-600 flex flex-col items-center justify-center rounded-full w-32 h-32 text-white font-bold'>
            <h1 className='text-4xl'>500</h1>
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
      </section>

      <section>

      </section>


      <footer className='pt-48'>
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
          <p className='text-white px-[2%]'>Queen's University</p>
          <p className='text-white px-[2%]'>99 University Ave, Kingston ON</p>
          <p className='text-white px-[2%]'>Copyright © 2023 QHACKS</p>
        </div>
      </footer>
    </main>
  )
}

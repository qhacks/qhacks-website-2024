import 'tailwindcss/tailwind.css';
import Image from 'next/image'

import TestimonialsCard from '../components/TestimonialCard';
import SpeakerCarousel from '../components/SpeakerCarousel';
import TestimonialsCarousel from '../components/TestimonialsCarousel';
import ThreeDCrown from '../components/ThreeDCrown';

// Sections
import StatsSection from '../components/sections/StatsSection';
import SponsorSection from '../components/sections/SponsorSection';
import FAQSection from '../components/sections/FAQSection';
import TeamSection from '../components/sections/TeamSection';

export default function Home() {

  return (
    <main className="bg-gray-950">
      <Image className="absolute top-0 right-20" src="/MLH.svg" alt="Major Hacking Leaguge Logo" width={127} height={222}/>

      <section className=' flex items-center justify-center'>
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
            {/* <ThreeDCrown/> */}
          </div>
        </div>
      </section>

      <section id="about" className=' relative pb-96'>
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

      <section className='mx-32 my-32'>
        <div className='flex justify-center items-center'>
          <div className='bg-blue-900 flex flex-col items-center justify-center rounded-full w-32 h-32 border-2 text-white font-bold'>
            <h1 className='text-4xl'>10</h1>
            <h5 className='text-center'>Workshops</h5>
          </div>

          {/* <div className='bg-yellow-600 flex flex-col items-center justify-center rounded-full w-32 h-32 text-white font-bold'>
            <h1 className='text-4xl'>1</h1>
            <h5 className='text-center'>Hackathon</h5>
          </div> */}

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
      </section>

      <section className=' relative my-32 mx-32'>
        <div className='flex flex-row justify-between'>
          <Image className=' pointer-events-none ' src="\NetworkingGraphic.svg" alt="" width={350} height={350}/>
          <div className='flex flex-col w-7/12 justify-center'>
            <h1 className='text-white text-5xl font-bold'>Grow your <span className='text-transparent text-5xl bg-clip-text bg-gradient-to-r from-red-500 to-orange-600' >Network.</span></h1>
            <p className='text-white text-xl auto'>
              With hundreds of talented, ambitious, and like-minded individuals all in one place, 
              QHacks is the perfect playground for any tech enthusiast! Over the weekend, 
              immerse yourself in the community, meet new people and talk shop with other 
              students and companies
            </p>
          </div>
        </div>
      </section>

      <section className=' relative mx-32'>
        <div className='flex flex-col w-7/12 justify-center'>
          <h1 className='text-white text-5xl font-bold'>Showcase To <span className='text-transparent text-5xl bg-clip-text bg-gradient-to-r from-red-500 to-orange-600' >Experts.</span></h1>
          <p className='text-white text-xl auto'>
          This year, we're bringing together a diverse group of mentors, speakers, sponsors and other industry professionals. Chat one-on-one, learn about current tech trends and opportunities
          </p>
        </div>
      </section>

      <section className=' relative my-32 mx-32 h-96'>
        <h1 className='text-white text-center text-5xl font-bold mb-4'>Thanks To <span className='text-transparent text-5xl bg-clip-text bg-gradient-to-r from-red-500 to-orange-600' >Our Sponsors.</span></h1>
        <SponsorSection/>
        <div className='flex justify-center items-center mt-4'>
          <div className='border-2 rounded-2xl w-2/3 p-4 flex flex-row'>
            <div className='text-white text-3xl font-bold'>
              <Image className='' src="/Handshake.svg" alt="Handshake image" width={122} height={122} />
            </div>
            <div className='flex justify-center'>
              <div className='text-center'>
                <h4 className='text-white font-bold'>Interested in Partnering?</h4>
                <p className='text-white'>Contact us at:</p><a href='mailto:partnerships@qhacks.io' className='text-white hover:text-gray-500'>partnerships@qhacks.io</a>
                <a href='https://qhacks.io/static/media/QHacks2023PartnershipPackage.997d0440621386f825c1.pdf' className='text-white hover:text-sky-500'>
                  <p>
                    Partnerships Package
                  </p>
                </a>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      <section className=' my-96 mx-32'>
        <h1 className='text-white text-5xl font-bold'>With our <span className='text-transparent text-5xl bg-clip-text bg-gradient-to-r from-red-500 to-orange-600' >Amazing Speakers</span></h1>
        <div className='flex flex-row '>
          <SpeakerCarousel/>
        </div>
      </section>
      <section className=' my-32 mx-32'>
        <div className='flex flex-row '>
          <TestimonialsCarousel/>
        </div>
      </section>

      
      <section className=' flex-col justify-center my-32 mx-32'>
        <div className='w-full max-w-screen-lg'>
          <h1 className='text-white text-5xl font-bold'>FAQ's</h1>
          <div>
            <FAQSection/>
            <div className="flex flex-row ">
                <div className="flex flex-col">
                    <Image width={300} height={300} src="/Qhacks Crown.svg"></Image>
                    <div className="flex justify-center">
                        <h3 className="text-white font-bold text-center">More Questions?<br/>Send us a message!</h3>
                    </div>
                </div>
                <div className="flex flex-col justify-center">
                    <form className="flex flex-col">
                        <input placeholder="Name" className="placeholder:text-gray-500 pl-[14px] focus:outline-none border border-gray-500 w-80 mx-4 my-1 h-12 rounded-md bg-slate-800"></input>
                        <input placeholder="Email" className="placeholder:text-gray-500 pl-[14px] focus:outline-none border border-gray-500 w-80 mx-4 my-1 h-12 rounded-md bg-slate-800"></input>
                        <input placeholder="Message" className="placeholder:text-gray-500 pl-[14px] focus:outline-none border border-gray-500 w-80 mx-4 my-1 h-12 rounded-md bg-slate-800"></input>
                        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 mx-4 my-1 w-24 rounded">Submit</button>
                    </form>
                </div>
            </div>
          </div>
        </div>
      </section>

      <section className=' my-32 mx-32 '>
        <TeamSection/>
      </section>


    </main>
  )
}

import Image from 'next/image'
import 'tailwindcss/tailwind.css';
import Head from 'next/head';
import SponsorCard from '../components/SponsorCard';

export default function Home() {
  const amazon = {
    name: 'Amazon',
    logo: '/sponsors/Amazon.svg',
    link: 'https://www.amazon.jobs/en/',
  };
  const redbull = {
    name: 'Redbull',
    logo: '/sponsors/Redbull.svg',
    link: 'https://www.amazon.jobs/en/',
  };
  const dominoes = {
    name: 'Dominoes',
    logo: '/sponsors/Dominoes.svg',
    link: 'https://www.amazon.jobs/en/',
  };
  const otpp = {
    name: 'Ontario Teachers Pension Plan',
    logo: '/sponsors/OTPP.svg',
    link: 'https://www.amazon.jobs/en/',
  };
  const kingstonutilities = {
    name: 'Kingston Utilities',
    logo: '/sponsors/KingstonUtilities.svg',
    link: 'https://www.amazon.jobs/en/',
  };
  const ece = {
    name: 'Queence Engineering',
    logo: '/sponsors/ECE.svg',
    link: 'https://www.amazon.jobs/en/',
  };
  const queensComputing = {
    name: 'Queens Computing',
    logo: '/sponsors/QueensComputing.svg',
    link: 'https://www.amazon.jobs/en/',
  };
  const voiceflow = {
    name: 'Voiceflow',
    logo: '/sponsors/Voiceflow.svg',
    link: 'https://www.amazon.jobs/en/',
  };



  return (
    <main className="bg-gray-950">
      <Image className="absolute top-0 right-20" src="/MLH.svg" alt="Major Hacking Leaguge Logo" width={127} height={222}/>


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

      <section className='relative my-32 mx-32'>
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

      <section className='relative mx-32'>
        <div className='flex flex-col w-7/12 justify-center'>
          <h1 className='text-white text-5xl font-bold'>Showcase To <span className='text-transparent text-5xl bg-clip-text bg-gradient-to-r from-red-500 to-orange-600' >Experts.</span></h1>
          <p className='text-white text-xl auto'>
          This year, we’re bringing together a diverse group of mentors, speakers, sponsors and other industry professionals. Chat one-on-one, learn about current tech trends and opportunities
          </p>
        </div>
      </section>

      <section className='relative my-32 mx-32'>
        <div className='flex flex-row p-8 border'>
          <SponsorCard sponsor={redbull} />  
          <SponsorCard sponsor={amazon} />
          <SponsorCard sponsor={otpp} />
          <SponsorCard sponsor={kingstonutilities} />
          <SponsorCard sponsor={ece} />
          <SponsorCard sponsor={queensComputing} />
          <SponsorCard sponsor={voiceflow} />
        </div>
      </section>
    </main>
  )
}

"use client";
// Dependencies
import { motion } from "framer-motion";

// Styling and Tailwind Components
import 'tailwindcss/tailwind.css';
import Image from 'next/image';

// Custom Components
import TestimonialsCard from '../components/TestimonialCard';
import SpeakerCarousel from '../components/SpeakerCarousel';
import TestimonialsCarousel from '../components/TestimonialsCarousel';
import ThreeDCrown from '../components/ThreeDCrown';
import TeamBubble from '../components/TeamBubble';
import FAQDropdown from "../components/FAQDropdown";
import SponsorCard from '../components/SponsorCard';

// JSON Data
import sponsors from '../data/sponsors.json';
import team from '../data/team.json';
import faq from '../data/faq.json';

export default function Home() {

  return (
    <main className="bg-gray-950 -z-1">
      <Image className="absolute top-0 right-20" src="/MLH.svg" alt="Major Hacking Leaguge Logo" width={127} height={222}/>

      <section className=' flex items-center justify-center'>
        <div className=' flex flex-row justify-between'>
          <div className='flex items-center'>
            <div className='flex-None flex-colitems-center justify-center'>
              <h1 className="m-5 text-6xl font-bold text-white font-Arial ">QHACKS</h1>
              <p className='text-2xl text-white m-5 w-96 p-2'>Get ready to innovate and make a difference! Join QHacks, the ultimate hackathon experience.</p>
              <p className='m-5 font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-red-500 to-orange-600'>In-person!  •  February 2nd - 4th    </p>
              <motion.a 
                href="#" 
                className='text-white bg-green-500 px-5 py-3 m-5 rounded-xl'
                whileHover={{scale: 1.5, margin: 14}}
              >
                Register Here
              </motion.a>
            </div>
          </div>
          <div className='flex-None'>
            <Image src="/Qhacks Crown.svg" alt="QHacks Logo" width={800} height={800}/>
            {/* <ThreeDCrown/> */}
          </div>
        </div>
      </section>

      {/* ABOUT US */}
      <section id="about" className='pt-32 relative pb-96'>
        <motion.div
          initial={{ opacity: 0, x: 500 }}  
          whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
        >
          <Image 
            className='pointer-events-none absolute -top-32 right-0' 
            src="/Goodwin Drawing.svg" 
            alt="QHacks Logo" 
            width={800}
            height={800}
          />
        </motion.div>
        
        <div className='mx-48 items-left justify-left'>
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

      <section className='mx-48 my-32'>
        <div className='flex justify-center items-center'>
          <motion.div 
            className='bg-blue-900 
            flex 
            flex-col 
            items-center 
            justify-center 
            rounded-full 
            w-32 
            h-32 
            text-white 
            font-bold
            '
            whileHover={{scale: 1.2, margin: 14}}
          >
            <h1 className='text-4xl'>10</h1>
            <h5 className='text-center'>Workshops</h5>
          </motion.div>

          {/* <motion.div className='bg-yellow-600 flex flex-col items-center justify-center rounded-full w-32 h-32 text-white font-bold
        '>
            <h1 className='text-4xl'>1</h1>
            <h5 className='text-center'>Hackathon</h5>
          </motion.div> */}

          <motion.div 
            className='
              bg-red-600 
              flex 
              flex-col 
              items-center 
              justify-center 
              rounded-full 
              w-40 
              h-40 
              text-white 
              font-bold
            '
            whileHover={{scale: 1.2, margin: 14}}
          >
            <h1 className='text-4xl'>11</h1>
            <h5 className='text-center'>Schools</h5>
          </motion.div>

          <motion.div 
            className='
              bg-yellow-600 
              flex 
              flex-col 
              items-center 
              justify-center 
              rounded-full 
              w-32 
              h-32 
              text-white 
              font-bold
            '
            whileHover={{scale: 1.2, margin: 14}}
          >
            <h1 className='text-4xl'>500+</h1>
            <h5 className='text-center'>Hackers</h5>
          </motion.div>

          <motion.div 
            className='
              bg-blue-900 
              flex 
              flex-col 
              items-center 
              justify-center 
              rounded-full 
              w-32 
              h-32 
              text-white 
              font-bold
            '
            whileHover={{scale: 1.2, margin: 14}}
          >
            <h1 className='text-4xl'>25+</h1>
            <h5 className='text-center'>Mentors</h5>
          </motion.div>

          <motion.div 
            className='
              bg-red-600 
              flex 
              flex-col 
              items-center 
              justify-center 
              rounded-full 
              w-32 
              h-32 
              text-white 
              font-bold
            '
            whileHover={{scale: 1.2, margin: 14}}
          >
            <h1 className='text-4xl'>200</h1>
            <h5 className='text-center'>Projects Sumbitted</h5>
          </motion.div>

          <motion.div 
            className='
              bg-blue-900 
              flex 
              flex-col 
              items-center 
              justify-center 
              rounded-full 
              w-32 
              h-32 
              text-white 
              font-bold'
              whileHover={{scale: 1.2, margin: 14}}
          >
            <h1 className='text-4xl'>10</h1>
            <h5 className='text-center'>Workshops</h5>
          </motion.div>
        </div>
      </section>

      <section className=' relative my-32 mx-48'>
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

      <section className=' relative mx-48'>
        <div className='flex flex-col w-7/12 justify-center'>
          <h1 className='text-white text-5xl font-bold'>Showcase To <span className='text-transparent text-5xl bg-clip-text bg-gradient-to-r from-red-500 to-orange-600' >Experts.</span></h1>
          <p className='text-white text-xl auto'>
          This year, we're bringing together a diverse group of mentors, speakers, sponsors and other industry professionals. Chat one-on-one, learn about current tech trends and opportunities
          </p>
        </div>
      </section>

      <section id="sponsors" className=' relative pt-32 mx-48 h-96'>
        <h1 className='text-white text-center text-5xl font-bold mb-4'>Thanks To <span className='text-transparent text-5xl bg-clip-text bg-gradient-to-r from-red-500 to-orange-600' >Our Sponsors.</span></h1>
        <div className='flex justify-center'>
          <div className='flex flex-row flex-wrap items-center justify-center w-2/3 p-0 space-x-4 space-y-4 '>
            <SponsorCard sponsor={sponsors.redbull}/>
            <SponsorCard sponsor={sponsors.amazon}/>
            <SponsorCard sponsor={sponsors.otpp}/>
            <SponsorCard sponsor={sponsors.kingstonutilities}/>
            <SponsorCard sponsor={sponsors.ece}/>
            <SponsorCard sponsor={sponsors.queensComputing}/>
            <SponsorCard sponsor={sponsors.voiceflow}/>
          </div>
        </div>
        <div className='flex justify-center items-center mt-4'>
          <div className='border-2 rounded-2xl w-96 p-4 flex flex-row'>
            <div className='text-white text-3xl font-bold'>
              <Image className='' src="/Handshake.svg" alt="Handshake image" width={122} height={122} />
            </div>
            <div className='flex justify-center'>
              <div className='text-center'>
                <h4 className='text-white font-bold'>Interested in Partnering?</h4>
                <p className='text-white'>Contact us at:</p><a href='mailto:partnerships@qhacks.io' className='text-white hover:text-gray-500'>partnerships@qhacks.io</a>
                <a href='https://qhacks.io/static/media/QHacks2023PartnershipPackage.997d0440621386f825c1.pdf' className='text-white hover:text-sky-500'>
                  <p>Partnerships Package</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Speaker Section */}
      <section className='my-96 mx-48 py-32'>
        <h1 className='text-white text-5xl font-bold mb-8'>With our <span className='text-transparent text-5xl bg-clip-text bg-gradient-to-r from-red-500 to-orange-600' >Amazing Speakers</span></h1>
        <SpeakerCarousel/>
      </section>

      {/* Testimonials Section */}
      <section className=' my-32 mx-48'>
        <TestimonialsCarousel/>
      </section>

      {/* FAQ Section */}
      <section id="contact" className=' flex-col justify-center pt-32 mx-48'>
        <div className='w-full max-w-screen-lg '>
          <h1 className='text-white text-5xl font-bold'>FAQ's</h1>
          
          {/*  */}
          <div>
            <div className="flex flex-col text-left">
              <div className="flex flex-row text-left mb-24 ">
                <div className=" w-3/4 ">
                  <FAQDropdown faq={faq.faq1}/>
                  <FAQDropdown faq={faq.faq2}/>
                  <FAQDropdown faq={faq.faq3}/>
                  <FAQDropdown faq={faq.faq4}/>
                  <FAQDropdown faq={faq.faq5}/>
                </div>
                <div className=" w-3/4">
                  <FAQDropdown faq={faq.faq1}/>
                  <FAQDropdown faq={faq.faq2}/>
                  <FAQDropdown faq={faq.faq3}/>
                  <FAQDropdown faq={faq.faq4}/>
                  <FAQDropdown faq={faq.faq5}/>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <div className="flex flex-col">
                  <Image className='border-2' width={300} height={300} src="/Qhacks Crown.svg"></Image>
                  <div className="flex justify-center">
                      <h3 className="text-white font-bold text-center text-2xl">More Questions?<br/>Send us a message!</h3>
                  </div>
              </div>
              <div className="flex flex-col justify-center">
                  <form className="flex flex-col">
                      <input placeholder="Name" className="placeholder:text-gray-500 pl-[14px] focus:outline-none border border-gray-500 w-80 mx-4 my-1 h-12 rounded-md bg-slate-800"></input>
                      <input placeholder="Email" className="placeholder:text-gray-500 pl-[14px] focus:outline-none border border-gray-500 w-80 mx-4 my-1 h-12 rounded-md bg-slate-800"></input>
                      <input placeholder="Message" className="placeholder:text-gray-500 pl-[14px] focus:outline-none border border-gray-500 w-80 mx-4 my-1 h-12 rounded-md bg-slate-800"></input>
                      <div className='flex justify-center'>
                        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 mx-4 my-1 w-24 rounded">Submit</button>
                      </div>
                  </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className=' my-32 mx-48 '>
        <div className='flex flex-row flex-wrap justify-center'>
          <TeamBubble teamMember={team.EricMedina}/>
          <TeamBubble teamMember={team.DominiqueMercier}/>
          {/* <TeamBubble teamMember={team.JeremySelwin}/> */}
          <TeamBubble teamMember={team.MonicaStef}/>
          <TeamBubble teamMember={team.EthanWang}/>
          {/* <TeamBubble teamMember={team.LacshmiGaneshananda}/> */}
          {/* <TeamBubble teamMember={team.EricaFry}/> */}
          {/* <TeamBubble teamMember={team.MichaelaLi}/> */}
          {/* <TeamBubble teamMember={team.MayaGoodman}/> */}
          {/* <TeamBubble teamMember={team.NicholasLykopoulos}/> */}
          <TeamBubble teamMember={team.LeejaeKim}/>
          {/* <TeamBubble teamMember={team.EthanChin}/> */}
          <TeamBubble teamMember={team.JoashMathew}/>
          <TeamBubble teamMember={team.SchuylerGood}/>
          {/* <TeamBubble teamMember={team.StefanPitigoi}/> */}
          {/* <TeamBubble teamMember={team.JacobTepperman}/> */}
          {/* <TeamBubble teamMember={team.AkshayDesale}/> */}
          <TeamBubble teamMember={team.CalvinZheng}/>
          {/* <TeamBubble teamMember={team.EricLam}/> */}
          {/* <TeamBubble teamMember={team.MatangyKanesamoorthy}/> */}
          {/* <TeamBubble teamMember={team.AdamRaco}/> */}
          {/* <TeamBubble teamMember={team.OliviaStewart}/> */}
          {/* <TeamBubble teamMember={team.NoahSerhan}/> */}
          {/* <TeamBubble teamMember={team.AdiGroumoutis}/> */}
          <TeamBubble teamMember={team.IlyasErdogan}/>
          <TeamBubble teamMember={team.AlexanderZhao}/>
          <TeamBubble teamMember={team.AndrewTerry}/>
          {/* <TeamBubble teamMember={team.MichaelKwon}/> */}
        </div>
      </section>

      <section className='my-32 mx-32'>
        
      </section>


    </main>
  )
}

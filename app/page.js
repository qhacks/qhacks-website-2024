"use client";

// Dependencies
import { motion } from "framer-motion";
import Image from 'next/image'

// Styling and Tailwind Components
import "tailwindcss/tailwind.css";
import '../css/background.css';
import '../css/ScrollBar.css';
import '../css/home.css';

// Custom Components
import Crown from "../components/Crown";
import CrownV2 from "../components/CrownV2";
import LoadingScreen from "../components/LoadingScreen";
import WarmWaves from '../components/WarmWaves';

// Carousel Components
import SpeakerCarousel from '../components/SpeakerCarousel';
import MentorCarousel from '../components/MentorsCarousel';
import TestimonialsCarousel from '../components/TestimonialsCarousel';

// Navbar and Footer
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Cards
import PartneringCard from "../components/PartneringCard";
import FAQAccordion from "../components/FAQAccordion";
import HacktoberfestCard from "../components/HacktoberfestCard";

// Sections
import StatsSection from "../components/StatsSection";
import TeamSection from "../components/TeamSection";
import SponsorSection from "../components/SponsorSection";

// JSON Data
import faq from "../data/faq.json";
import judges from 'data/judges.json'
import panel1 from 'data/panel1.json';
import panel2 from 'data/panel2.json';
import mentors1 from 'data/mentors.json';
// React Hooks
import { useEffect, useState } from 'react';

// Pinnacle Banner
import Pinnacle_Banner from '../public/Pinnacle_Banner_White.png';


// DIFFERENT CUSTOM BACKGROUNDS FROM background.css
// bg-dots: puts a series of dots onto the background
// bg-topogrophy: displays an image of topogrophy on the background

export default function Home() {
	const [showLoadingScreen, setShowLoadingScreen] = useState(true);

	useEffect(() => {
		const crownElement = document.querySelector("#crown-container")
		if (crownElement.classList.contains('hidden')) {
			setShowLoadingScreen(false)
		}
	})

	return (
		<main className="bg-gray-950 w-screen overflow-hidden">
			
			{/* Waves Feature */}
			<WarmWaves />
			


			{/* Navbar */}
			<Navbar />



			{/* Loading Screen */}
			<LoadingScreen showLoadingScreen={showLoadingScreen} className="fixed top-0 left-0 w-full h-full z-50"/>




			{/* MLH Banner */}
			{/* <img
				className="absolute top-0 right-2 md:right-20 w-[75px] h-[125px] lg:w-[127px] lg:h-[222px]"
				src="/MLH.svg"
				alt="Major Hacking Leaguge Logo"
			/> */}



			{/* Splash Screen Section */}
			<section id="home" className=" flex items-center justify-center px-1 w-full h-screen bg-topogrophy-dark">

				<a id="mlh-trust-badge" STYLE="display:block;max-width:100px;min-width:60px;position:fixed;right:40px;top:0;width:10%;z-index:10000" href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2024-season&utm_content=red" target="_blank"><img src="https://s3.amazonaws.com/logged-assets/trust-badge/2024/mlh-trust-badge-2024-blue.svg" alt="Major League Hacking 2024 Hackathon Season" STYLE="width:100%"/></a>
				<a 
					STYLE="display:block;max-width:100px;min-width:60px;position:fixed;right:150px;top:0;width:10%;z-index:10000" 
					href="https://pinnacle.us.org/" 
					target="_blank">
					<Image src={Pinnacle_Banner}
						alt="" STYLE="width:100%"/>
				</a>
				{/* Add this for a cool feature down below: " p-40 bg-gray-950 rounded-[50px] bg-opacity-80" */}
				<div className=" flex flex-row justify-between">
					<div className="flex items-center text-center lg:text-left">
						<div className="flex-None flex-col items-center justify-center">
							<motion.h1 
								className="text-white mx-5 text-[70px] lg:text-[100px] font-bold font-Yaro"
							>
								QHACKS
							</motion.h1>
							<motion.p 
								className="text-white mx-5 text-center lg:text-left text-[20px] lg:text-[24px] lg:w-96 p-2"  
							>
								Get ready to innovate and make a difference!
								Join QHacks, the ultimate hackathon experience.
							</motion.p>
							<motion.p 
								className="m-5 text-center lg:text-left text-lg  lg:text-2xl  bg-clip-text font-extrabold text-transparent  bg-gradient-to-r from-red-500 to-orange-600"
							>
								In-person! • February 2nd - 4th
							</motion.p>
							<p className="text-white text-center font-bold">Applications have closed</p>
							<div className="flex justify-center items-center w-full">
								<motion.a
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.9 }}
									href="/login"
									className="flex w-56 lg:w-full text-white justify-center  bg-green-500 px-5 py-3 mx-5 mt-5 mb-3 z-5 rounded-xl font-bold opacity-100"
								>
									Check Application Status
								</motion.a>
							</div>
							
							
							{/* <a href="/login" className="text-blue-400 hover:text-blue-100">log in</a>					 */}
						</div>
					</div>
					<div id="crown-container" className="w-[750px] h-[500px] hidden xl:flex justify-center items-center ">
						{/* <Crown setShowLoadingScreen={setShowLoadingScreen} />  This is the deprecated crown that took 5 seconds to load */}
						<CrownV2 setShowLoadingScreen={setShowLoadingScreen}/>
					</div>
				</div>
			</section>



			{/* Quick info section */}
			<section className="my-20 md:my-12 flex items-center justify-center">
				<div className="flex items-center justify-center flex-col md:flex-row">
					<PartneringCard />
				</div>
                {/* <div className="flex items-center justify-center flex-col md:flex-row">
					<HacktoberfestCard />
				</div> */}
			</section>



			{/* About Us Section 1 */}
			<img className="w-full transform scaleX(-1)" src="/grayWaves.svg" alt="a graphic of some gray waves"/>
			<section
				id="about"
				className=" bg-[#181717] h-full flex flex-row justify-between pt-2 lg:pb-24 px-8 sm:px-8 md:px-12 lg:px-12 xl:px-80 2xl:px-96"
			>
				<div className="flex-auto flex-col flex justify-center items-center w-96">
				<div>
					<h1 className="align-left text-white text-3xl md:text-5xl mb-2 md:mb-0 font-bold ">
						Join Us
						<span className="text-transparent text-3xl md:text-5xl bg-clip-text bg-gradient-to-r from-red-500 to-orange-600">
							{" "}
							In Person!
						</span>
					</h1>
					<p className="text-white text-lg md:text-xl mb-4 ">
						Join over 500 hackers, speakers and mentors to create,
						learn and share your ideas. Attend our workshops and
						hacker challenges and meet industry professionals
					</p>
					<p className="text-white text-lg md:text-xl ">
						Innovators and creatives from all faculties and skill
						levels are encouraged to attend!
					</p>
				</div>
					
				</div>
				<div className="flex-auto hidden md:flex justify-center">
					<Image
						width={500}
						height={500}
						className="w-[500px] h-[500px]"
						src="/Goodwin Drawing.svg"
						alt="QHacks Logo"
					/>
				</div>
			</section>
			<img className="w-full transform rotate-180" src="/grayWaves.svg" alt="a graphic of some gray waves"/>



      		{/* Stats Section */}
			<section className="my-4 lg:my-32 mx-2 sm:mx-8 md:mx-12 lg:mx-12 xl:mx-80 2xl:mx-96">
				<StatsSection />
			</section>



			{/* About Us Section 2 */}
			<section className=" relative my-32 mx-2 sm:mx-8 md:mx-12 lg:mx-32 xl:mx-80 2xl:mx-[25%]">
				<div className="flex flex-col-reverse md:flex-row justify-between ">
					<div className="flex justify-center items-center">
						<Image width={350} height={350} className="w-[350px] h-[350px]" src="/NetworkingGraphic.svg" alt="" />
					</div>
					<div className="flex flex-col md:w-7/12 justify-center">
						<h1 className="mb-3 text-white mx-5 text-3xl md:text-5xl font-bold">
							Grow your{" "}
							<span className="text-transparent text-3xl md:text-5xl bg-clip-text bg-gradient-to-r from-red-500 to-orange-600">
								Network.
							</span>
						</h1>
						<p className="text-white mx-5 text-xl">
							With hundreds of talented, ambitious, and
							like-minded individuals all in one place, QHacks is
							the perfect playground for any tech enthusiast! Over
							the weekend, immerse yourself in the community, meet
							new people and talk shop with other students and
							companies
						</p>
					</div>
				</div>
			</section>
			<section className=" relative my-32 mx-2 sm:mx-8 md:mx-12 lg:mx-32 xl:mx-80 2xl:mx-[25%]">
				<div className="flex flex-col md:w-7/12 justify-center">
					<h1 className="mb-3 text-white  mx-5 text-3xl md:text-5xl font-bold">
						Showcase To{" "}
						<span className="text-transparent text-3xl md:text-5xl bg-clip-text bg-gradient-to-r from-red-500 to-orange-600">
							Experts.
						</span>
					</h1>
					<p className="text-white  mx-5 text-xl auto">
						This year, we're bringing together a diverse group of
						mentors, speakers, sponsors and other industry
						professionals. Chat one-on-one, learn about current tech
						trends and opportunities
					</p>
				</div>
			</section>


			{/* Speaker Section */}
			<section className="mt-12 pt-16 mb-8 mx-2 sm:mx-8 md:mx-12 lg:mx-12 xl:mx-80 2xl:mx-96">
				<h1 className="text-center text-white text-3xl md:text-5xl font-bold mb-8">
					Our{" "}
					<span className="text-3xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-600">
						Hackathon Judges
					</span>{" "}
				</h1>
				<SpeakerCarousel speakers = {judges}/>
			</section>

			<section className="mt-4 pt-16 mb-8 mx-2 sm:mx-8 md:mx-12 lg:mx-12 xl:mx-80 2xl:mx-96">
				<h1 className="text-center text-white text-3xl md:text-5xl font-bold mb-8">
					Our{" "}
					<span className="text-3xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-600">
						Artificial Intelligence
					</span>{" "}
					Panel Speakers
				</h1>
				<SpeakerCarousel speakers = {panel1}/>
			</section>

			<section className="mt-4 pt-16 mb-8 mx-2 sm:mx-8 md:mx-12 lg:mx-12 xl:mx-80 2xl:mx-96">
				<h1 className="text-center text-white text-3xl md:text-5xl font-bold mb-8">
					Our{" "}
					<span className="text-3xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-600">
						Cloud Computing
					</span>{" "}
					Panel Speakers
				</h1>
				<SpeakerCarousel speakers = {panel2}/>
			</section>

			{/* Mentor Section */}
			<section className="mt-12 pt-16 mb-8 mx-2 sm:mx-8 md:mx-12 lg:mx-12 xl:mx-44">
				<h1 className="text-center text-white text-3xl md:text-5xl font-bold mb-8">
					Our{" "}
					<span className="text-3xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-600">
						Mentors
					</span>
				</h1>
				<MentorCarousel/>
			</section>



			{/* Testimonials Section */}
			<section className="mt-24 mx-2 sm:mx-8 md:mx-12 lg:mx-12 xl:mx-44 2xl:mx-64">
				<h1 className="text-center text-white text-3xl md:text-5xl font-bold ">
					Words From Our{" "}
					<span className="text-3xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-600">
						Previous Hackers
					</span>
				</h1>
				<TestimonialsCarousel />
			</section>



			{/* Sponsors Section */}
			<section
				id="sponsors"
				className="relative pt-16 mx-2 sm:mx-8 md:mx-12 lg:mx-12 xl:mx-64 2xl:mx-80 my-24"
			>
				<SponsorSection></SponsorSection>
			</section>



			{/* FAQ Section */}
			<section
				id="contact"
				className="flex h-auto items-center justify-center pt-32 xs:mx-4 sm:mx-8 md:mx-12 lg:mx-12 xl:mx-80 2xl:mx-96"
			>
				<div className=" w-full flex flex-col items-center justify-center max-w-screen-lg ">
					<h1 className="text-white text-3xl md:text-5xl font-bold">
						FAQ's
					</h1>
					<div>
						<div className="flex flex-col text-left">
							<div className="flex flex-col md:flex-row text-left mb-24">
								<div className="lg:w-1/2 md:p-4 ">
									<FAQAccordion faq={faq.faq1} />
									<FAQAccordion faq={faq.faq2} />
									<FAQAccordion faq={faq.faq3} />
									<FAQAccordion faq={faq.faq4} />
								</div>
								<div className="lg:w-1/2 md:p-4">
									<FAQAccordion faq={faq.faq5} />
									<FAQAccordion faq={faq.faq6} />
									<FAQAccordion faq={faq.faq7} />
									<FAQAccordion faq={faq.faq8} />
								</div>
							</div>
						</div>
						<div className="flex flex-col md:flex-row justify-center">
							<div className="flex flex-col justify-center items-center p-3">
								<motion.img whileHover={{scale:1.1}} src="/QCrown.svg" alt="" className="w-1/2 h-2/3 md:w-[300px] md:h-[300px]"/>
							</div>
							<div className="flex flex-col justify-center ">
								<h3 className="text-white font-bold text-center text-2xl">
									More Questions?
								</h3>
								<h3 className="text-white font-bold text-center text-2xl pb-6">
									Send us a message!
								</h3>
								<form className="flex flex-col justify-center items-center" data-netlify="true" name="contact" method="POST">
									<input type="hidden" name="form-name" value="contact" />
									<input
										placeholder="Name"
										className="text-white placeholder:text-gray-500 pl-[14px] focus:outline-none border border-gray-500 w-80 mx-4 my-1 h-12 rounded-md bg-slate-800"
										name="name"
									></input>
									<input
										placeholder="Email"
										className="text-white placeholder:text-gray-500 pl-[14px] focus:outline-none border border-gray-500 w-80 mx-4 my-1 h-12 rounded-md bg-slate-800"
										name="email"
									></input>
									<textarea
										rows="4"
										placeholder="Message"
										className="text-white placeholder:text-gray-500 pl-[14px] focus:outline-none border border-gray-500 w-80 md:w-80 mx-4 my-1 h-12 rounded-md bg-slate-800"
										name="message"
									></textarea>
									<div className="flex justify-center py-6">
										<motion.button whileHover={{scale:1.1, backgroundColor:"#16A34A"}} className="bg-green-500 text-white font-bold py-2 px-4 mx-4 my-1 w-24 rounded" type="submit">
											Submit
										</motion.button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>



			{/* Team Section */}
			<section className=" my-32 mx-2 md:mx-48">
				<TeamSection/>
			</section>



			{/* Footer */}
			<Footer />
		</main>
	);
}

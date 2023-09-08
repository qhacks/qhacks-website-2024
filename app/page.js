"use client";
// Dependencies
import { motion } from "framer-motion";

// Styling and Tailwind Components
import "tailwindcss/tailwind.css";
import Image from "next/image";
import { Inter } from 'next/font/google';

// Custom Components
import SpeakerCarousel from '../components/SpeakerCarousel';
import TestimonialsCarousel from '../components/TestimonialsCarousel';
import Crown from "../components/Crown";
import Qhacks3DText from "../components/Qhacks3DText";
import Scene from "../components/Scene";
import TeamBubble from "../components/TeamBubble";
import FAQDropdown from "../components/FAQDropdown";
import SponsorCard from "../components/SponsorCard";

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Sections
import StatsSection from "../components/StatsSection";

// JSON Data
import pastSponsors from "../data/pastSponsors.json";
import team from "../data/team.json";
import faq from "../data/faq.json";
import { useEffect, useState } from "react";
import LoadingScreen from "../components/LoadingScreen";

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	const [showLoadingScreen, setShowLoadingScreen] = useState(true);

	const [windowWidth, setWindowWidth] = useState(0);
	useEffect(() => {
		// Function to update window width
		const updateWindowWidth = () => {
		setWindowWidth(window.innerWidth);
		};

		// Initial update
		updateWindowWidth();

		// Add a resize event listener to update width when the window is resized
		window.addEventListener("resize", updateWindowWidth);

		// Clean up the event listener when the component unmounts
		return () => {
		window.removeEventListener("resize", updateWindowWidth);
		};
	}, []);

	console.log(windowWidth);


	return (
		<main className="bg-gray-950 w-screen">
			<a href="#" className="fixed bottom-4 left-4">
				Back to top
			</a>
			<div className="absolute top-0 w-full h-64 overflow-hidden">
				{/* <motion.div
					className="w-full overflow-hidden border h-48"
					initial={{ x: '0%' }}
					animate={{ x: '100%' }}
					transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
				>
					<img className="w-[5000px] absolute top-0 -z-1" src="/warmWaves.svg" alt="a graphic of some warm colred waves" width={4000}/>
				</motion.div> */}
				
				<motion.div
					className="absolute w-[2200px] h-full overflow-hidden top-0 "
					initial={{ x: "0%" }} 
					animate={{ x: "-18%" }} 
					exit={{ x: "18%" }} 
					transition={{ duration: 14, repeat: Infinity, ease: "easeOut", repeatType: "reverse"  }} // Animation duration and easing

				>
					<img className="w-full absolute top-0 rotate-180 transform" src="/wave1.svg" alt=""></img>
				</motion.div>
				<motion.div
					className="absolute w-[2200px] h-full overflow-hidden top-0"
					initial={{ x: "0%" }} 
					animate={{ x: "-18%" }} 
					exit={{ x: "18%" }} 
					transition={{ duration: 16, repeat: Infinity, ease: "easeOut", repeatType: "reverse"  }} // Animation duration and easing

				>
					<img className="w-full absolute top-0 rotate-180 transform" src="/wave2.svg" alt=""></img>
				</motion.div>
				<motion.div
					className="absolute w-[2200px] h-full overflow-hidden top-0"
					initial={{ x: "0%" }} 
					animate={{ x: "18%" }} 
					exit={{ x: "-18%" }} 
					transition={{ duration: 13, repeat: Infinity, ease: "easeOut", repeatType: "reverse"  }} // Animation duration and easing

				>
					<img className="w-full absolute top-0 rotate-180 transform" src="/wave3.svg" alt=""></img>
				</motion.div>
				<motion.div
					className="absolute w-[2200px] h-full overflow-hidden top-0"
					initial={{ x: "0%" }} 
					animate={{ x: "-18%" }} 
					exit={{ x: "18%" }} 
					transition={{ duration: 17, repeat: Infinity, ease: "easeOut", repeatType: "reverse"  }} // Animation duration and easing

				>
					<img className="w-full absolute top-0 rotate-180 transform" src="/wave4.svg" alt=""></img>
				</motion.div>
				<motion.div
					className="absolute w-[2200px] h-full overflow-hidden top-0"
					initial={{ x: "0%" }} 
					animate={{ x: "18%" }} 
					exit={{ x: "-18%" }} 
					transition={{ duration: 18, repeat: Infinity, ease: "easeOut", repeatType: "reverse"  }} // Animation duration and easing

				>
					<img className="w-full absolute top-0 rotate-180 transform" src="/wave5.svg" alt=""></img>
				</motion.div>
			</div>

			<Navbar />
			{/* Loader */}
			<LoadingScreen
				showLoadingScreen={showLoadingScreen}
				className="fixed top-0 left-0 w-full h-full z-50"
			/>
			{/* This is the MLH Banner */}
			<motion.img
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 1 }}
				className="absolute top-0 right-2 md:right-20 w-[75px] h-[125px] lg:w-[127px] lg:h-[222px]"
				src="/MLH.svg"
				alt="Major Hacking Leaguge Logo"
			/>
			<section className="flex items-center justify-center mt-24 lg:my-48 px-1">
				
				
				<div className=" flex flex-row justify-between">
					<div className="flex items-center">
						<div className="flex-None flex-col items-center justify-center">
							<motion.h1 
								className="text-white m-5 text-[100px] lg:[140px] font-bold font-Yaro "
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
							>
								QHACKS
							</motion.h1>
							<motion.p 
								className="text-white m-5 text-[24px]  lg:[100px] lg:w-96 p-2" 
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								transition={{ duration: 2 }}
							>
								Get ready to innovate and make a difference!
								Join QHacks, the ultimate hackathon experience.
							</motion.p>
							<motion.p 
								className="m-5 text-lg  lg:text-2xl  bg-clip-text font-extrabold text-transparent  bg-gradient-to-r from-red-500 to-orange-600"
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								transition={{ duration: 2 }}
							>
								In-person! • February 2nd - 4th
							</motion.p>
							<motion.a
								whileHover={{ scale: 1.2 }}
								whileTap={{ scale: 0.8 }}
								href="/signup"
								className="text-white bg-green-500 px-5 py-3 m-5 z-5 rounded-xl font-bold"
							>
								Register Here
							</motion.a>
						</div>
					</div>
					<div className=" w-[750px] h-[500px] hidden xl:flex">
						<Crown setShowLoadingScreen={setShowLoadingScreen} />
					</div>
				</div>
			</section>



			{/* ABOUT US */}
			<img className="w-full -z-1" src="/grayWarm.svg" alt="a graphic of some gray waves"/>
			<section
				id="about"
				className="bg-[#181717] h-full flex flex-row justify-between pt-2 md:pt-32 lg:pb-24 px-2 sm:px-8 pd:px-12 lg:px-12 xl:px-64 2xl:px-64"
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
					<img
						className="w-[500px] h-[500px]"
						src="/Goodwin Drawing.svg"
						alt="QHacks Logo"
					/>
				</div>
			</section>
			<img className="w-full -z-1 transform rotate-180" src="/grayWarm.svg" alt="a graphic of some gray waves"/>



      {/* Stats Section */}
			<motion.section className="my-4 lg:my-32 mx-2 sm:mx-8 md:mx-12 lg:mx-12 xl:mx-80 2xl:mx-96">
				<StatsSection />
			</motion.section>



			<section className=" relative my-32 mx-2 sm:mx-8 md:mx-12 lg:mx-12 xl:mx-80 2xl:mx-96">
				<div className="flex flex-col-reverse md:flex-row justify-between ">
					<Image
						className=" pointer-events-none "
						src="\NetworkingGraphic.svg"
						alt=""
						width={350}
						height={350}
					/>
					<div className="flex flex-col md:w-7/12 justify-center">
						<h1 className="text-white mx-5 text-3xl md:text-5xl font-bold">
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



			<section className=" relative mx-2 sm:mx-8 md:mx-12 lg:mx-12 xl:mx-80 2xl:mx-96">
				<div className="flex flex-col md:w-7/12 justify-center">
					<h1 className="text-white  mx-5 text-3xl md:text-5xl font-bold">
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



      {/* Sponsors Section */}
			<section
				id="sponsors"
				className="relative pt-32 mx-2 sm:mx-8 md:mx-12 lg:mx-12 xl:mx-64 2xl:mx-80 my-24"
		  	>
				<h1 className="text-white text-center text-3xl md:text-5xl font-bold mb-4">
					Thanks To{" "}
					<span className="text-transparent text-3xl md:text-5xl bg-clip-text bg-gradient-to-r from-red-500 to-orange-600">
						Our Past Sponsors.
					</span>
				</h1>
				<div className="flex justify-center">
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						className="flex flex-row flex-wrap items-center justify-center w-full p-0 space-x-4 space-y-4"
					>
						<SponsorCard sponsor={pastSponsors.assemblyAI} />
						<SponsorCard sponsor={pastSponsors.axure} />
						<SponsorCard sponsor={pastSponsors.bounce} />
						<SponsorCard sponsor={pastSponsors.centered} />
						<SponsorCard sponsor={pastSponsors.codology} />
						<SponsorCard sponsor={pastSponsors.convictional} />
						<SponsorCard sponsor={pastSponsors.gameloft} />
						<SponsorCard sponsor={pastSponsors.github} />
						<SponsorCard sponsor={pastSponsors.kingston} />
						<SponsorCard sponsor={pastSponsors.leadingLearners} />
						<SponsorCard sponsor={pastSponsors.mosaic} />
						<SponsorCard sponsor={pastSponsors.pwc} />
						<SponsorCard sponsor={pastSponsors.sleek} />
						<SponsorCard sponsor={pastSponsors.taskade} />
						<SponsorCard sponsor={pastSponsors.whoosh} />
						<SponsorCard sponsor={pastSponsors.wolfram} />
						<SponsorCard sponsor={pastSponsors.amazon} />
						<SponsorCard sponsor={pastSponsors.redbull} />
						<SponsorCard sponsor={pastSponsors.dominoes} />
						<SponsorCard sponsor={pastSponsors.otpp} />
						<SponsorCard sponsor={pastSponsors.kingstonUtilities} />
						<SponsorCard sponsor={pastSponsors.ece} />
						<SponsorCard sponsor={pastSponsors.queensComputing} />
						<SponsorCard sponsor={pastSponsors.voiceflow} />
						<SponsorCard sponsor={pastSponsors.amd} />
						<SponsorCard sponsor={pastSponsors.bmo} />
						<SponsorCard sponsor={pastSponsors.echo} />
						<SponsorCard sponsor={pastSponsors.ibm} />
						<SponsorCard sponsor={pastSponsors.kbc} />
						<SponsorCard sponsor={pastSponsors.kenworth} />
						<SponsorCard sponsor={pastSponsors.mapbox} />
						<SponsorCard sponsor={pastSponsors.mars} />
						<SponsorCard sponsor={pastSponsors.scotiabank} />
						<SponsorCard sponsor={pastSponsors.smileCDR} />
						<SponsorCard sponsor={pastSponsors.stanAI} />
						<SponsorCard sponsor={pastSponsors.standOutStickers} />
						<SponsorCard sponsor={pastSponsors.xyz} />
					</motion.div>
				</div>
				<div className="flex justify-center items-center mt-4">
					<div className="border-2 rounded-2xl w-96 p-4 flex flex-row">
						<div className="text-white text-3xl font-bold">
							<Image
								className=""
								src="/Handshake.svg"
								alt="Handshake image"
								width={122}
								height={122}
							/>
						</div>
						<div className="flex justify-center">
							<div className="text-center">
								<h4 className="text-white font-bold">
									Interested in Partnering?
								</h4>
								<p className="text-white">Contact us at:</p>
								<a
									href="mailto:partnerships@qhacks.io"
									className="text-white hover:text-gray-500"
								>
									partnerships@qhacks.io
								</a>
								<a
									href="https://qhacks.io/static/media/QHacks2023PartnershipPackage.997d0440621386f825c1.pdf"
									className="text-white hover:text-sky-500"
								>
									<p>Partnerships Package</p>
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>



			{/* Speaker Section */}
			<section className="my-24 py-32 mx-2 sm:mx-8 md:mx-12 lg:mx-12 xl:mx-80 2xl:mx-96">
				<h1 className="text-white text-3xl md:text-5xl font-bold mb-8">
					With our{" "}
					<span className="text-transparent text-3xl md:text-5xl bg-clip-text bg-gradient-to-r from-red-500 to-orange-600">
						Amazing Speakers
					</span>
				</h1>
				<SpeakerCarousel />
			</section>



			{/* Testimonials Section */}
			<section className="mx-2 sm:mx-8 md:mx-12 lg:mx-12 xl:mx-80 2xl:mx-96">
				<TestimonialsCarousel />
			</section>



			{/* FAQ Section */}
			<section
				id="contact"
				className="flex-col justify-center pt-32 xs:mx-4 sm:mx-8 md:mx-12 lg:mx-12 xl:mx-80 2xl:mx-96"
			>
				<div className="w-full max-w-screen-lg ">
					<h1 className="text-white text-3xl md:text-5xl font-bold">
						FAQ's
					</h1>
					<div>
						<div className="flex flex-col text-left">
							<div className="flex flex-col md:flex-row text-left mb-24">
								<div className="md:w-1/2">
									<FAQDropdown faq={faq.faq1} />
									<FAQDropdown faq={faq.faq2} />
									<FAQDropdown faq={faq.faq3} />
									<FAQDropdown faq={faq.faq4} />
									<FAQDropdown faq={faq.faq5} />
								</div>
								<div className="md:w-1/2">
									<FAQDropdown faq={faq.faq1} />
									<FAQDropdown faq={faq.faq2} />
									<FAQDropdown faq={faq.faq3} />
									<FAQDropdown faq={faq.faq4} />
									<FAQDropdown faq={faq.faq5} />
								</div>
							</div>
						</div>
						<div className="flex flex-col md:flex-row justify-center">
							<div className="flex flex-col justify-center items-center p-3">
								<Image
									width={300}
									height={300}
									src="/QCrown.svg"
								></Image>
							</div>
							<div className="flex flex-col justify-center ">
								<h3 className="text-white font-bold text-center text-2xl">
									More Questions?
								</h3>
								<h3 className="text-white font-bold text-center text-2xl pb-6">
									Send us a message!
								</h3>
								<form className="flex flex-col justify-center items-center">
									<input
										placeholder="Name"
										className="text-white placeholder:text-gray-500 pl-[14px] focus:outline-none border border-gray-500 w-80 mx-4 my-1 h-12 rounded-md bg-slate-800"
									></input>
									<input
										placeholder="Email"
										className="text-white placeholder:text-gray-500 pl-[14px] focus:outline-none border border-gray-500 w-80 mx-4 my-1 h-12 rounded-md bg-slate-800"
									></input>
									<textarea
										rows="4"
										placeholder="Message"
										className="text-white placeholder:text-gray-500 pl-[14px] focus:outline-none border border-gray-500 w-80 mx-4 my-1 h-12 rounded-md bg-slate-800"
									></textarea>
									<div className="flex justify-center py-6">
										<button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 mx-4 my-1 w-24 rounded">
											Submit
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>



			{/* Team Section */}
			<section className=" my-32 mx-2 md:mx-48">
				<div className="flex flex-row flex-wrap justify-center">
					<TeamBubble teamMember={team.EricMedina} />
					<TeamBubble teamMember={team.DominiqueMercier} />
					{/* <TeamBubble teamMember={team.JeremySelwin}/> */}
					<TeamBubble teamMember={team.MonicaStef} />
					<TeamBubble teamMember={team.EthanWang} />
					{/* <TeamBubble teamMember={team.LacshmiGaneshananda}/> */}
					{/* <TeamBubble teamMember={team.EricaFry}/> */}
					{/* <TeamBubble teamMember={team.MichaelaLi}/> */}
					{/* <TeamBubble teamMember={team.MayaGoodman}/> */}
					{/* <TeamBubble teamMember={team.NicholasLykopoulos}/> */}
					<TeamBubble teamMember={team.LeejaeKim} />
					{/* <TeamBubble teamMember={team.EthanChin}/> */}
					<TeamBubble teamMember={team.JoashMathew} />
					<TeamBubble teamMember={team.SchuylerGood} />
					{/* <TeamBubble teamMember={team.StefanPitigoi}/> */}
					{/* <TeamBubble teamMember={team.JacobTepperman}/> */}
					{/* <TeamBubble teamMember={team.AkshayDesale}/> */}
					<TeamBubble teamMember={team.CalvinZheng} />
					{/* <TeamBubble teamMember={team.EricLam}/> */}
					{/* <TeamBubble teamMember={team.MatangyKanesamoorthy}/> */}
					{/* <TeamBubble teamMember={team.AdamRaco}/> */}
					{/* <TeamBubble teamMember={team.OliviaStewart}/> */}
					{/* <TeamBubble teamMember={team.NoahSerhan}/> */}
					{/* <TeamBubble teamMember={team.AdiGroumoutis}/> */}
					<TeamBubble teamMember={team.IlyasErdogan} />
					<TeamBubble teamMember={team.AlexanderZhao} />
					<TeamBubble teamMember={team.AndrewTerry} />
					{/* <TeamBubble teamMember={team.MichaelKwon}/> */}
				</div>
			</section>
			<Footer />
		</main>
	);
}

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
import sponsors from "../data/sponsors.json";
import team from "../data/team.json";
import faq from "../data/faq.json";
import { useEffect, useState } from "react";
import LoadingScreen from "../components/LoadingScreen";

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	const [showLoadingScreen, setShowLoadingScreen] = useState(true);
	// useEffect(() => {
	// 	setShowLoadingScreen(false);
	// }, [setShowLoadingScreen]);

	return (
		<main className="bg-gray-950 w-screen">
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
					<div className=" w-[750px] h-[500px] hidden xl:block">
						<Crown setShowLoadingScreen={setShowLoadingScreen} />
					</div>
				</div>
			</section>



			{/* ABOUT US */}
			<motion.section
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 2 }}
				id="about"
				className="h-full flex flex-row justify-between pt-2 md:pt-32 lg:pb-24 mx-2 sm:mx-8 md:mx-12 lg:mx-12 xl:mx-64 2xl:mx-64"
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
			</motion.section>



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
				className=" 
        relative 
        pt-32 
        mx-2 sm:mx-8 md:mx-12 lg:mx-12 xl:mx-80 2xl:mx-96
        my-24
      "
			>
				<h1 className="text-white text-center text-3xl md:text-5xl font-bold mb-4">
					Thanks To{" "}
					<span className="text-transparent text-3xl md:text-5xl bg-clip-text bg-gradient-to-r from-red-500 to-orange-600">
						Our Sponsors.
					</span>
				</h1>
				<div className="flex justify-center">
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						className="flex flex-row flex-wrap items-center justify-center w-2/3 p-0 space-x-4 space-y-4 "
					>
						<SponsorCard sponsor={sponsors.redbull} />
						<SponsorCard sponsor={sponsors.amazon} />
						<SponsorCard sponsor={sponsors.otpp} />
						<SponsorCard sponsor={sponsors.kingstonutilities} />
						<SponsorCard sponsor={sponsors.ece} />
						<SponsorCard sponsor={sponsors.queensComputing} />
						<SponsorCard sponsor={sponsors.voiceflow} />
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

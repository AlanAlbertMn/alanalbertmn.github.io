import React from 'react';
import alanPicture from '../assets/alanPicture.jpeg';

import logo1 from '../assets/htmlLogo.png';
import logo2 from '../assets/cssLogo.png';
import logo4 from '../assets/mongoLogo.png';
import logo5 from '../assets/reactLogo.png';
import logo6 from '../assets/nodeLogo.png';
import logo7 from '../assets/aws_Logo.png';
import logo8 from '../assets/python-logo.png';

import { FaAddressCard } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { VscPreview } from "react-icons/vsc";

import rawgScreenshot from '../assets/rawgscreenshot.png';
import dcolorScreenshot from '../assets/dcolorscreenshot.png';
import spotifyScreenshot from '../assets/spotifyss.png';

import polygonSvg from '../assets/low-poly-grid2.svg';
import { goToContact } from '../helpers/goToContact';

export const Home = () => {
	return (
		<>
			<section className='fluid-section' style={{ backgroundImage: `url(${polygonSvg})` }}>
				<div className='two-divider'>
					<div className='col animate__animated animate__fadeInLeft' id='bio'>
						<h1 className='title'>Welcome to my portfolio!</h1>
						<p className='paragraph'>
							My name is Alan Albert and I am a Full Stack Software Engineer with 4 years of experience building scalable, high-performance web applications. Specialized in React.js, TypeScript, and modern UI development, with proven ability to optimize performance, improve user experience, and deliver features at scale in agile teams.
						</p>
						{/* <p className='paragraph'>
							Worked with agile methodologies within projects that required sudden
							changes along my career. Team-player but responsible and capable of delivering tasks by himself.
						</p> */}
						<p className='paragraph'>
							Travel ahead to find some of my projects!
						</p>
					</div>
					<div className='col'>
						<img id='alanImg' className='animate__animated animate__fadeInRight logoHome' src={alanPicture} alt="Alan Albert's logo" />
					</div>
				</div>
			</section>
			<section id='three-cols' className='flex fluid-section-alt'>
				<div className='box' onClick={goToContact}>
					<div className='two-divider'>
						<FaAddressCard className='icon'/>
						<h1 className='subtitle bold'>CONTACT</h1>
					</div>
					<p>
						Feel free to give me a call to ask more about my expertise and abilities
					</p>
				</div>
				<div className='box'>
				<div className='two-divider'>
					<GrProjects className='icon'/>
					<h1 className='subtitle bold'>PROJECTS</h1>
				</div>
					<p>
						Click on the "Live demo" buttons to see the projects working
					</p>
				</div>
				<div className='box'>
				<div className='two-divider'>
					<VscPreview className='icon'/>
					<h1 className='subtitle bold'>BACKGROUND</h1>
				</div>
					<p>
						Explore more of my career, where I display my experience and the projects I have been involved in
					</p>
				</div>
			</section>
			<section className='projects flex'>
				<div className='two-divider' id='spotifyDiv'>
					<div className='col'>
						<h1 className='bold'>Spotify App</h1>
						<p className='paragraph'>
						The Spotify application was developed utilizing a third-party API that delivers authentic Spotify data. A personal token was incorporated into the environment variables to facilitate API access. Additionally, the front-end was entirely built from the ground up.
						</p>
						<div className='repoDivider'>
							<a className='bold' target="_blank" href='https://github.com/AlanAlbertMn/spotify-app' rel="noreferrer">Repository</a>
							<a className='bold' href='spotify' rel="noreferrer">Live demo</a>
						</div>
					</div>
					<div className='col'>
						<img className='screenshot' alt='spotify Screenshot' src={spotifyScreenshot} />
					</div>
				</div>
			</section>
			<section className='projects flex'>
				<div className='two-divider' id='videogameDiv'>
					<div className='col'>
						<img className='screenshot' alt='Rawg site screenshot' src={rawgScreenshot} />
					</div>
					<div className='col'>
						<h1 className='bold'>RAWG App</h1>
						<p className='paragraph'>
						The RAWG application is a front-end platform that integrates the third-party RAWG API. 
						It features filters for genres and platforms, providing access to video games across all systems, 
						including Xbox, PlayStation 5, and PC. Developed from the ground up, the application utilizes Redux 
						for state management, incorporating authentication for user registration and login.
						</p>
						<div className='repoDivider'>
							<a className='bold' target="_blank" href='http://www.github.com/SpotifyApp' rel="noreferrer">Repository</a>
							<a className='bold' target="_blank" href='http://www.github.com/spotifyrunningpage' rel="noreferrer">Live demo</a>
						</div>
					</div>
				</div>
			</section>
			<section className='projects flex'>
				<div className='two-divider' id='dcolorDiv'>
					<div className='col'>
						<h1 className='bold'>D-Color (e-catalog)</h1>
						<p className='paragraph'>
						The D-Color project is a website designed to showcase and sell makeup products online. 
						It features a shopping cart functionality and integrates with a third-party database known as the “Makeup API.” 
						Currently, efforts are underway to implement a payment processing system and utilize MongoDB for storing orders, 
						invoices, and other related data.
						</p>
						<div className='repoDivider'>
							<a className='bold' target="_blank" href='http://www.github.com/SpotifyApp' rel="noreferrer">Repository</a>
							<a className='bold' target="_blank" href='http://www.github.com/spotifyrunningpage' rel="noreferrer">Live demo</a>
						</div>
					</div>
					<div className='col'>
						<img className='screenshot' alt='D-color project screenshot' src={dcolorScreenshot} />
					</div>
				</div>
			</section>
			<section className='fluid-section-alt'>
				<h1 className='topTechs'>Technical skills</h1>
				<div className='logosDiv'>
					<img src={logo1} alt='logo' className='animate__animated animate__repeat-3 animate__slow animate__pulse codeLogo' />
					<img src={logo2} alt='logo' className='animate__animated animate__repeat-3 animate__slow animate__pulse animate__delay-1s codeLogo-alt' />
					<img src={logo4} alt='logo' className='animate__animated animate__repeat-3 animate__slow animate__pulse animate__delay-2s codeLogo' />
					<img src={logo5} alt='logo' className='animate__animated animate__repeat-3 animate__slow animate__pulse animate__delay-3s codeLogo-alt' />
					<img src={logo6} alt='logo' className='animate__animated animate__repeat-3 animate__slow animate__pulse animate__delay-4s codeLogo' />
					<img src={logo7} alt='logo' className='animate__animated animate__repeat-3 animate__slow animate__pulse animate__delay-5s codeLogo-alt' />
					<img src={logo8} alt='logo' className='animate__animated animate__repeat-3 animate__slow animate__pulse animate__delay-5s codeLogo' />
				</div>
			</section>
		</>
	);
};

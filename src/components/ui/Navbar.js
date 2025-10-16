import React, { useState } from 'react';
import { FaHome } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import whiteLogo from '../../assets/LogoAASF.png'
import goToContact from '../../helpers/goToContact';

export const Navbar = () => {
	const [linksDisplay, setLinksDisplay] = useState(false);

	const linksDisplayClick = () => {
		setLinksDisplay(!linksDisplay);
	};

	const desactivarlinksDisplay = () => {
		setLinksDisplay(false);
	};

	return (
		<div className='nav-container'>
			<div className='options flex center'>
				<GiHamburgerMenu
					className='pointer nav-item'
					size={35}
					onClick={linksDisplayClick}
				/>
				<Link id='home' to='/home'>
					<FaHome className='nav-item' size={35} onClick={desactivarlinksDisplay} />
				</Link>
			</div>
			{linksDisplay && (
				<div id='links'>
					<Link className='nav-text-link' to='/spotify' onClick={desactivarlinksDisplay}>
						Spotify
					</Link>
					<Link className='nav-text-link' to='/pendientes' onClick={desactivarlinksDisplay}>
						Checklist
					</Link>
					{/* <Link className='nav-text-link' to='/proyectos' onClick={desactivarlinksDisplay}>
						Random
					</Link> */}
				</div>
			)}
			<div>
				<Link to='/home'>
					<img id='logo' src={whiteLogo} alt='Portfolio Logo' onClick={desactivarlinksDisplay} />
				</Link>
			</div>
			<div className='options flex center'>
				<button className='nav-text-link btn'
					onClick={goToContact}
				>
					CONTACT
				</button>
			</div>
		</div>
	);
};

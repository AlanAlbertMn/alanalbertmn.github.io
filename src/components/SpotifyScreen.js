import axios from 'axios';
import React, { useRef, useState } from 'react';
import { Album } from './spotify/Album';
import { Artist } from './spotify/Artist';
import { FaSpotify } from 'react-icons/fa';

export const SpotifyScreen = () => {
	const [albums, setAlbums] = useState([]);
	const [artists, setArtists] = useState([]);
	const input = useRef();
	const search = e => {
		e.preventDefault();
		const url = `https://spotify23.p.rapidapi.com/search/?q=${input.current.value}`;
		console.log(url);
		axios
			.get(url, {
				headers: {
					'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
					'X-RapidAPI-Host': process.env.REACT_APP_RAPIDAPI_HOST,
				},
			})
			.then(response => {
				setAlbums(response.data.albums.items);
				setArtists(response.data.artists.items);
			});
	};

	console.log(albums);
	console.log(artists);


	return (
		<form onSubmit={search}>
			<div className='container'>
				<div className='flex center' style={{ gap: 15 }}>
					<FaSpotify size={80} />
					<h1 style={{ fontSize: 60, fontWeight: 'bolder' }}>Spotify Service</h1>
				</div>
				<div id='div-busqueda'>
					<input
						id='busqueda'
						placeholder='Introduzca su búsqueda'
						formAction='submit'
						ref={input}
						autoComplete="off"
					/>
				</div>
				{albums.length > 0 && (
					<>
						<h1 style={{ textAlign: 'center', fontSize: 40, fontWeight: 'bolder' }}>Albums</h1>
						<div className='albums'>
							{albums && albums.map(el => <Album data={el.data} />)}
						</div>
						<hr />
						<br />
						<h1 style={{ textAlign: 'center', fontSize: 40, fontWeight: 'bolder' }}>Artists</h1>
						<div className='albums'>
							{artists && artists.map(el => <Artist data={el.data} />)}
						</div>
					</>
				)}
			</div>
		</form>
	);
};

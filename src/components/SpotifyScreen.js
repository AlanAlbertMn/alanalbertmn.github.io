import axios from 'axios';
import React, { useState } from 'react';
import { Album } from './spotify/Album';
import { Artist } from './spotify/Artist';
import { FaSpotify } from 'react-icons/fa';
import { CircularProgress, TextField } from '@mui/material';

export const SpotifyScreen = () => {
    const [searchValue, setSearchValue] = useState('')
    const [albums, setAlbums] = useState([]);
    const [artists, setArtists] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

    const search = e => {
        e.preventDefault();
        const url = `https://spotify23.p.rapidapi.com/search/?q=${searchValue}`;
        setAlbums([]);
        setIsLoading(true);
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
                setIsLoading(false)
            });
    };

    return (
        <form onSubmit={search}>
            <div className='container'>
                <div className='flex center mt-5' style={{ gap: 15 }}>
                    <FaSpotify color='1DB954' size={80} />
                    <h1 style={{ fontSize: 60, fontWeight: 'bolder' }}>Spotify Service</h1>
                </div>
                <div id='div-busqueda'>
                    <TextField
                        autoComplete='off'
                        id="busqueda"
                        color='info'
                        fullWidth={true}
                        label="Search..."
                        variant="standard"
                        onChange={(event) => setSearchValue(event.target.value)}
                    />
                </div>
                {isLoading && <div className="flex center"><CircularProgress /></div>}
                {albums.length > 0 && (
                    <>
                        <h1 style={{ textAlign: 'center', fontSize: 40, fontWeight: 'bolder' }}>Albums</h1>
                        <div className='albums'>
                            {albums && albums.map(el => <Album key={el.data.uri} data={el.data} />)}
                        </div>
                        <hr />
                        <br />
                        <h1 style={{ textAlign: 'center', fontSize: 40, fontWeight: 'bolder' }}>Artists</h1>
                        <div className='albums'>
                            {artists && artists.map(el => <Artist key={el.data.uri} data={el.data} />)}
                        </div>
                    </>
                )}
            </div>
        </form>
    );
};

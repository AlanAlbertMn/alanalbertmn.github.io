import React from 'react'
import { MdOutlineImageNotSupported } from "react-icons/md";

export const Artist = ({ data }) => {
    const { profile, visuals, uri } = data;

    return (
        <div className='album-container hoverable'>
            <a href={uri} target='_blank' rel="noreferrer">
                {visuals.avatarImage != null
                    ? <img src={visuals?.avatarImage.sources[0].url} alt={profile.name} />
                    : <MdOutlineImageNotSupported color='1DB954' size='300px' />}
            </a>
            <h2>{profile?.name}</h2>
        </div>
    )
}

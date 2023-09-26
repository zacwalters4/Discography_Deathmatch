import React from 'react'
import './AlbumCard.css'
import { formatURL } from '../Utilities/Helper'
import { AlbumData } from '../Utilities/Interfaces'
import { useNavigate } from 'react-router-dom'
import { getAlbums } from '../Utilities/APICalls'

const AlbumCard = ({album} : AlbumData) => {
    console.log(album)
    return (
        <div className="album-card">
            <div className="album-card-inner">
                <div className="album-card-front">
                    <img 
                        className="album-image"
                        src={album['image'][3]['#text']}
                        alt={`${album.name} Cover Art`}
                    />
                </div>
                <div className='album-card-back'>
                    <h1>hi</h1>
                    <img
                        className="album-image"
                        src={album['image'][3]['#text']}
                        alt={`${album.name} Cover Art`}
                    />
                </div>
            </div>
        </div>
    )
}

export default AlbumCard
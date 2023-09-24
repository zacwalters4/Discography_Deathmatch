import React from 'react'
import './ArtistButton.css'
import { formatURL } from '../Utilities/Helper'
import { Artist } from '../Utilities/Interfaces'
import { Link } from 'react-router-dom'

interface ArtistData {
    artist: Artist
}

const ArtistButton = ({ artist } : ArtistData) => {

    // const [searchInput, getSearchInput] = React.useState('')
    console.log(artist)
    return (
        <Link to={{
            pathname: '/battle',
            search: `${formatURL(artist.name)}`
            }}>
            <div 
            className="artist-button"
            style={{ 
                backgroundImage: `url(${artist.image[0]})` 
              }}>
            
            {artist.name}
            </div>
        </Link>
    )
}

export default ArtistButton
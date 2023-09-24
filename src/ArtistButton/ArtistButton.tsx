import React from 'react'
import './ArtistButton.css'
import { formatURL } from '../Utilities/Helper'
import { Artist, ArtistData } from '../Utilities/Interfaces'
import { Link, useNavigate } from 'react-router-dom'
import { getAlbums } from '../Utilities/APICalls'

const ArtistButton = ({ artist } : ArtistData) => {

    const [albumCovers, getAlbumCovers] = React.useState([])
    const navigate = useNavigate()

    const clickArtist = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        navigate({
            pathname: '/battle',
            search: `${formatURL(artist.name)}`
        })
    }
    const searchAlbums = () => {
        getAlbums(artist.name)
            .then(data => {
                console.log(data)
                if(data.topalbums.album.length > 10) {
                    getAlbumCovers(data.topalbums.album.splice(0, 10))
                } else {
                    getAlbumCovers(data.topalbums.album)
                }
            })   
    }
    React.useEffect(() => {
        searchAlbums()
      }, [])

    return (
            <div>
                {(albumCovers.length > 1) &&
                <button 
                onClick={clickArtist}
                className="artist-button"
                style={{ 
                    backgroundImage: `url(${albumCovers[0]['image'][0]['#text']})` 
                }}>
                
                {artist.name}
                </button>}
            </div>
        
    )
}

export default ArtistButton
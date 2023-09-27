import React from 'react'
import './AlbumCard.css'
import { formatURL } from '../Utilities/Helper'
import { AlbumData, Track } from '../Utilities/Interfaces'
import { useNavigate } from 'react-router-dom'
import { getAlbums, getTrackList } from '../Utilities/APICalls'
import SingleTrack from '../Track/SingleTrack'

const AlbumCard = ({album} : AlbumData) => {
    const [trackList, setTrackList] = React.useState([])
    const fetchTrackList = () => {
        getTrackList(album.artist.name, album.name) 
            .then(data => {
                setTrackList(data.album.tracks.track)
            })
        }
    
    React.useEffect(() =>{
        fetchTrackList()
    }, [])

    return (
        <div className="album-card" >
            <div className="album-card-inner">
                <div className="album-card-front">
                    <img 
                        className="album-image"
                        src={album['image'][3]['#text']}
                        alt={`${album.name} Cover Art`}
                    />
                </div>
                <div className='album-card-back'>
                        <div className="track-list">
                            <h2>{album.name}</h2>
                            {(!!trackList.length) && 
                                trackList.map((track: Track, index: number) => {
                                    return (
                                        <SingleTrack track={track} key={index} />
                                    )})
                            }
                        </div>
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


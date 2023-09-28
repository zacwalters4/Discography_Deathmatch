import React, { Dispatch, SetStateAction } from 'react'
import './BattlePage.css'
import { useLocation } from "react-router-dom"
import { formatName } from '../Utilities/Helper'
import { getAlbums } from '../Utilities/APICalls'
import AlbumCard from '../AlbumCard/AlbumCard'
import { topAlbumsState } from '../Utilities/Interfaces'





const BattlePage = ({setTopAlbums}: topAlbumsState) => {
    console.log(setTopAlbums)
    const [battleAlbums, getBattleAlbums] = React.useState([])
    const locationData = useLocation()
    const artistName = formatName(locationData.search)
    const [drop, setDrop] = React.useState(0)

    
    const searchAlbums = () => {
        getAlbums(artistName)
            .then(data => {
                if(data.topalbums.album.length > 10) {
                    getBattleAlbums(data.topalbums.album.splice(0, 10))
                    console.log(data.topalbums.album[0])
                } else {
                    getBattleAlbums(data.topalbums.album)
                }
            })   
    }

    React.useEffect(() => {
        searchAlbums()
      }, [])


    const handleAlbumClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        let target = event.currentTarget.id
        if(target === 'left') {
            getBattleAlbums(battleAlbums.filter((album, index) => index !== 1 ))
        } else if(target === 'right') {
            getBattleAlbums(battleAlbums.filter((album, index) => index !== 0 ))
        }
    }

    return ( 
        <div className="battle-page">
            {(battleAlbums.length > 1) && 
            <h1>{battleAlbums[0]["artist"]["name"]}</h1>
            }
            {(battleAlbums.length == 0) &&
            <h1>Loading...</h1>
            }
            {(battleAlbums.length > 1) && 
            <div className="battle-box">
                <button 
                    className="album-button"
                    id="left"
                    onClick={handleAlbumClick}
                    >
                    <AlbumCard 
                        album={battleAlbums[0]}
                    />
                </button>
                <button 
                    className="album-button"
                    id="right"
                    onClick={handleAlbumClick}
                    >
                    <AlbumCard
                        album={battleAlbums[1]}
                    />
                </button>
            </div>}
            {(battleAlbums.length == 1) &&
            <div className="winner-box">
                <h1>WINNER!</h1>
                <AlbumCard 
                    album={battleAlbums[0]}
                />
            </div>
            }
        </div>
    )
}

export default BattlePage
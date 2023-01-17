import React from 'react'
import './BattlePage.css'
import Header from '../Header/Header'
import { useLocation } from "react-router-dom"
import { formatName } from '../Utilities/Helper'
import { getAlbums } from '../Utilities/APICalls'

const BattlePage = () => {

    const [battleAlbums, getBattleAlbums] = React.useState([])
    const locationData = useLocation()
    const artistName = formatName(locationData.search)

    const searchAlbums = () => {
        getAlbums(artistName)
            .then(data => {
                getBattleAlbums(data.topalbums.album.splice(0, 10))
            })
        
    }
    const startMatch = () => {
        searchAlbums()
        console.log(battleAlbums)
    }


    return ( 
        <div className="battle-page">
            <Header />
            <button 
                className="start-button"
                onClick={startMatch}
            >
                Start!
            </button>
            <div className="battle-box">
            {(!!battleAlbums.length) && 
                <div className="album-left">
                    <img src={battleAlbums[0].image[3]["#text"]}></img>
                </div>}
            </div>
        </div>
    )
}

export default BattlePage
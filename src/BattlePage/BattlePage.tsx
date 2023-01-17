import React from 'react'
import './BattlePage.css'
import Search from '../SearchForm/SearchForm'
import Header from '../Header/Header'
import { useLocation } from "react-router-dom"
import { formatName } from '../Utilities/Helper'
import { getAlbums } from '../Utilities/APICalls'

const BattlePage = () => {
    
    const locationData = useLocation()
    const artistName = formatName(locationData.search)

    const searchAlbums = () => {
        getAlbums(artistName)
            .then(data => {
                const albumResults: [] = data.topalbums.album.splice(0, 10)
            })
        
    }
    searchAlbums()

    return (
        <div className="battle-page">
            <Header />

        </div>
    )
}

export default BattlePage
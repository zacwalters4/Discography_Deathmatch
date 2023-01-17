import React from 'react'
import './BattlePage.css'
import Search from '../SearchForm/SearchForm'
import Header from '../Header/Header'
import { useLocation } from "react-router-dom"
import { formatName } from '../Utilities/Helper'

const BattlePage = () => {
    const locationData = useLocation()
    const artistName = formatName(locationData.search)
    console.log(artistName)
    return (
        <div className="battle-page">
            <Header />

        </div>
    )
}

export default BattlePage
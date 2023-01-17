import React from 'react'
import './BattlePage.css'
import Search from '../SearchForm/SearchForm'
import Header from '../Header/Header'
import { useLocation } from "react-router-dom"

const BattlePage = () => {
    const location = useLocation()
    console.log(location)
    return (
        <div className="battle-page">
            <h1>hi</h1>

        </div>
    )
}

export default BattlePage
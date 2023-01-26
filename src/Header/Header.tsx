import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { useLocation } from "react-router-dom"

function Header() {
    const locationData = useLocation()
    const activePage = locationData.pathname

    return (
        <div className="header-container">

            <Link to={`/`}>
            {(activePage == '/') &&
                <button 
                 
                className="header-button home-button active"
                >Home</button>}
            {(activePage !== '/') &&
                <button 
                 
                className="header-button home-button"
                >Home</button>}
            </Link>
            <h1>Discography Deathmatch</h1>
            <Link to={`/collection`}>
                <button className="header-button collection-button">Collection</button>
            </Link>
        </div>
    )
  }
  
  export default Header
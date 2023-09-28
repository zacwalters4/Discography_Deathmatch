import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { useLocation } from "react-router-dom"
import compactDisc from '../Icons/compact-disc-solid.svg'
import trophy from '../Icons/trophy-solid.svg'
import SearchForm from '../SearchForm/SearchForm'

function Header() {
    const locationData = useLocation()
    const activePage = locationData.pathname

    return (
        <div className="header-container">

            <Link to={`/`}>
            {(activePage == '/') &&
                <button 
                className="header-button home-button">
                <img
                    className={"header-image active"} 
                    src={compactDisc}
                    alt="compact disc"
                />
                <h1>Discography Deathmatch</h1>
                </button>}
            {(activePage !== '/') &&
                <button className="header-button home-button">
                    <img
                    className={"header-image"} 
                    src={compactDisc}
                    alt="compact disc"
                />
                <h1>Discography Deathmatch</h1>
                </button>}
            </Link>
            <div className="header-right">
                <Link to={`/collection`}>
                {(activePage == '/collection') &&
                    <button className="header-button collection-button">
                            <img
                            className={"header-image trophy-image active"} 
                            src={trophy}
                            alt="trophy"
                        />  
                    </button>}
                {(activePage !== '/collection') &&
                    <button className="header-button collection-button">
                            <img
                            className={"header-image trophy-image"} 
                            src={trophy}
                            alt="trophy"
                        />  
                    </button>}
                </Link>
                <SearchForm />
            </div>
        </div>
    )
  }
  
  export default Header
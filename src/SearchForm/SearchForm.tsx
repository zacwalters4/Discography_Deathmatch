import React from 'react'
import './SearchForm.css'
import { Link } from 'react-router-dom'
import { formatURL } from '../Utilities/Helper'
import getArtists from "../Utilities/APICalls"
import Header from "../Header/Header"


const Search = () => {

    const [searchInput, getSearchInput] = React.useState('')
    const [searchResults, getSearchResults] = React.useState([])
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        getSearchInput(event.target.value)
    }

    const clearSearchInput = () => {
        getSearchInput('')
    }

    const searchArtist = () => {
        getArtists(searchInput)
        .then(data => {   
            getSearchResults({...data.results.artistmatches.artist})
          })
        clearSearchInput()
    }

    return (
        <div className="search-form">
            <input
                className="search-input"
                type="text"
                placeholder="Search an Artist..."
                value={searchInput}
                onChange={handleChange}
            />
                <button
                    className="search-button"
                    onClick={searchArtist}
                >
                    Search
                </button>
        </div>

    )
}

export default Search
import React from 'react'
import './SearchForm.css'
import { Link } from 'react-router-dom'
import { formatURL } from '../Utilities/Helper'
import getArtists from "../Utilities/APICalls"
import Header from "../Header/Header"
import SearchResults from '../SearchResults/SearchResults'

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
                getSearchResults(data)
                // return data.results.artistmatches.artist
            })
        clearSearchInput()
    }
    return (
        <div className="search-container">
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
            {(!!searchResults.length) && <SearchResults searchResults={searchResults}/>}
        </div>
    )
}

export default Search
import React from 'react'
import './SearchForm.css'
import { Link } from 'react-router-dom'
import { formatURL } from '../Utilities/Helper'
import  { getArtists }  from "../Utilities/APICalls"
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

    const searchArtist = (event) => {
        event.preventDefault()
        getArtists(searchInput)
            .then(data => {
                getSearchResults(data)
            })
        clearSearchInput()
    }
    return (
        <div className="search-container">
            <form className="search-form" onSubmit={searchArtist}>
                <input
                    className="search-input"
                    type="text"
                    placeholder="Search an Artist..."
                    value={searchInput}
                    onChange={handleChange}
                />
                <button
                    type="submit"
                    className="search-button"
                    
                >
                    Search
                </button>
            </form>
            {(!!searchResults.length) && <SearchResults searchArray={searchResults}/>}
        </div>
    )
}

export default Search
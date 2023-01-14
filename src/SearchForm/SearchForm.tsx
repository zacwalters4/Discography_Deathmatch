import React from 'react'
import './SearchForm.css'
import { Link } from 'react-router-dom'
import { formatURL } from '../Utilities/Helper'
import getArtists from "../Utilities/APICalls"


const Search = () => {
    const [searchInput, getSearchInput] = React.useState('')
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        getSearchInput(event.target.value)
    }

    const clearSearchInput = () => {
        getSearchInput('')
    }

    const searchArtist = () => {
        getArtists(searchInput)
        .then(data => {   
            console.log(data.results.artistmatches.artist);
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
            <Link to={`/search/${formatURL(searchInput)}`}>
                <button
                    className="search-button"
                    onClick={searchArtist}
                >
                    Search
                </button>
            </Link>
        </div>

    )
}

export default Search
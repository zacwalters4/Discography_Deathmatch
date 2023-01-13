import React from 'react'
import './Search.css'
import {formatSearch} from '../Utilities/Helper'


const Search = () => {
    const [searchInput, getSearchInput] = React.useState("")
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        getSearchInput(event.target.value)
    }

    const searchArtist = () => {
        console.log(formatSearch(searchInput))
    }

    return (
        <div className="search-form">
            <input
                type="text"
                placeholder="Search an Artist..."
                value={searchInput}
                onChange={handleChange}
            />
            <button
                className="search-button"
                onClick={searchArtist}
            >
                Press
            </button>
        </div>

    )
}

export default Search
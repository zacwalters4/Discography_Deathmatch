import React from 'react'
import './SearchForm.css'
import { formatSearch } from '../Utilities/Helper'
import getArtists from "../Utilities/APICalls"


const Search = () => {
    const [searchInput, getSearchInput] = React.useState('')
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        getSearchInput(event.target.value)
    }

    const searchArtist = () => {
        getArtists(searchInput)
        .then(data => {   
            console.log(data.results.artistmatches.artist);

          })
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
                Search
            </button>
        </div>

    )
}

export default Search
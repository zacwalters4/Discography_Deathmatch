import React from 'react'
import './SearchForm.css'
import { formatURL } from '../Utilities/Helper'
import { useNavigate } from "react-router-dom"

const SearchForm = () => {

    const [searchInput, getSearchInput] = React.useState('')
    const navigate = useNavigate();
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        getSearchInput(event.target.value)
    }

    const clearSearchInput = () => {
        getSearchInput('')
    }

    const searchArtist = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        navigate({  pathname: '/search',
                    search: `${formatURL(searchInput)}`
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
        </div>
    )
}

export default SearchForm
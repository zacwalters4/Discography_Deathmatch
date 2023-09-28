import React from 'react'
import './SearchForm.css'
import { formatURL } from '../Utilities/Helper'
import { useNavigate } from "react-router-dom"
import magnifyingGlass from '../Icons/magnifying-glass-solid.svg'

const SearchForm = () => {

    const [searchInput, getSearchInput] = React.useState('')
    const navigate = useNavigate()
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        getSearchInput(event.target.value)
    }

    const clearSearchInput = () => {
        getSearchInput('')
    }

    const searchArtist = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if(searchInput) {
            navigate({  pathname: '/search',
            search: `${formatURL(searchInput)}`
            })
            clearSearchInput()
        }
    }
    return (
        <div className="search-container">
            <form className="search-form" onSubmit={searchArtist}>
                <button
                    type="submit"
                    className="search-button"   
                >
                    <img 
                        className={"magnifying-glass-image"} 
                        src={magnifyingGlass}
                        alt="magnifying-glass"
                        />
                       
                </button>
                <input
                    className="search-input"
                    type="text"
                    placeholder="Search an Artist..."
                    value={searchInput}
                    onChange={handleChange}
                />
            </form>
        </div>
    )
}

export default SearchForm
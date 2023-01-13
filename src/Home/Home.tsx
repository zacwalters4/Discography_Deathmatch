import React from 'react'
import './Home.css'

const Home = () => {
    const [searchInput, getSearchInput] = React.useState("")
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        getSearchInput(event.target.value)
    }

    return (
        <div className="home-page">
            <h1>hello</h1>
            <input
                type="text"
                placeholder="Search an Artist..."
                value={searchInput}
                onChange={handleChange}
            />
            <button
                className="search-button"
                onClick={() => console.log(searchInput)}
            >
                Press
            </button>
        </div>

    )
}

export default Home


import React from 'react'
import './SearchPage.css'
import Search from '../SearchForm/SearchForm'
import Header from '../Header/Header'

const SearchPage = () => {
    return (
        <div className="search-page">
            <Header />
            <Search />
        </div>
    )
}

export default SearchPage
import React from 'react'
import './SearchPage.css'
import Search from '../SearchForm/SearchForm'
import Header from '../Header/Header'
import SearchResults from '../SearchResults/SearchResults'
import { formatName } from '../Utilities/Helper'
import { useLocation } from "react-router-dom"
import { getArtists } from '../Utilities/APICalls'

const SearchPage = () => {
    const locationData = useLocation()
    const searchInput = formatName(locationData.search)
    const [searchResults, getSearchResults] = React.useState([])

    const searchAPI = () => {

        getArtists(searchInput)
        .then(data => {
            getSearchResults(data)
        })
    }

    React.useEffect(() => {
        searchAPI()
      }, [])

    return (
        <div className="search-page">
            <Header />
            <Search />
            
            {(!!searchResults.length) && <SearchResults searchArray={searchResults}/>}
        </div>
    )
}

export default SearchPage
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
    const [artistName, getArtistName] = React.useState('')

    const searchAPI = () => {
        getArtists(searchInput)
        .then(data => {
            getSearchResults(data)
        })
        getArtistName(searchInput)
    }

    React.useEffect(() => {
        console.log(locationData)
        searchAPI()
      }, [locationData])

    return (
        <div className="search-page">
            <Search />
            
            {(!!searchResults.length) && 
            <div className="search-results">
                <h2>Search results for {`"${artistName}"`}</h2> 
                <SearchResults searchArray={searchResults} />
            </div>}
        </div>
    )
}

export default SearchPage
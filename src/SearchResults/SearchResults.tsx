import './SearchResults.css'
import Search from '../SearchForm/SearchForm'
import { SearchInterface, Artist } from '../Utilities/Interfaces'
import { Link } from 'react-router-dom'
import { formatURL } from '../Utilities/Helper'

const SearchResults = ( { searchResults } ) => {
    console.log(searchResults)
    return (
        <div className="search-results">    
            {searchResults.map((artist: Artist, index: number) => {
                return (
                    <Link to={{
                        pathname: '/battle',
                        search: `?${formatURL(artist.name)}`
                        }} 
                        key={index}>
                        <div 
                        className="artist-container" 
                        >
                        {artist.name}
                        </div>
                    </Link>
            )
        })}
        </div>
    )
}

export default SearchResults
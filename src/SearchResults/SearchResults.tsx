import './SearchResults.css'
// import { SearchInterface, Artist } from '../Utilities/Interfaces'
import { Link } from 'react-router-dom'
import { formatURL } from '../Utilities/Helper'
import { Artist } from '../Utilities/Interfaces'

const SearchResults = (   { searchArray } ) => {
    console.log(searchArray)
    return (
        <div className="search-results">    
            {searchArray.map((artist: Artist, index: number) => {
                return (
                    <Link to={{
                        pathname: '/battle',
                        search: `${formatURL(artist.name)}`
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
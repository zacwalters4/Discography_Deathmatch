import './SearchResults.css'
import { Link } from 'react-router-dom'
import { formatURL } from '../Utilities/Helper'
import { Artist } from '../Utilities/Interfaces'

interface ArtistArray {
    searchArray: Array<Artist>
}

const SearchResults = ({ searchArray }: ArtistArray) => {
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
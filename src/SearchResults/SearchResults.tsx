import './SearchResults.css'
import { formatURL } from '../Utilities/Helper'
import { Artist } from '../Utilities/Interfaces'
import ArtistButton from '../ArtistButton/ArtistButton'

interface ArtistArray {
    searchArray: Array<Artist>
}

const SearchResults = ({ searchArray }: ArtistArray) => {
    // console.log(searchArray)
    return (
        <div className="search-results">    
            {searchArray.map((artist: Artist, index: number) => {
                return (
                    <ArtistButton artist={artist} key={index} />
            )
        })}
        </div>
    )
}

export default SearchResults
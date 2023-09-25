import './SearchResults.css'
import { formatURL } from '../Utilities/Helper'
import { Artist, ArtistArray } from '../Utilities/Interfaces'
import ArtistButton from '../ArtistButton/ArtistButton'

const SearchResults = ({ searchArray }: ArtistArray) => {
    return (            
            <div className="search-results-artists">
                {searchArray.map((artist: Artist, index: number) => {
                    return (
                        <ArtistButton artist={artist} key={index} />
                )})}
            </div>
    )
}

export default SearchResults
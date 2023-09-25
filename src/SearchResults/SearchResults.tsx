import './SearchResults.css'
import { formatURL } from '../Utilities/Helper'
import { Artist } from '../Utilities/Interfaces'
import ArtistButton from '../ArtistButton/ArtistButton'

interface ArtistArray {
    searchArray: Array<Artist>
}

interface ArtistName {
    artistName: string
}

const SearchResults = ({ searchArray }: ArtistArray, { artistName }: ArtistName) => {
    // console.log(searchArray)
    return (
        
               
            <div className="search-results-artists">
                {searchArray.map((artist: Artist, index: number) => {
                    return (
                        <ArtistButton artist={artist} key={index} />
                )
            })}
            </div>
    )
}

export default SearchResults
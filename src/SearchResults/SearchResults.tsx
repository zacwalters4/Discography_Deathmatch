import './SearchResults.css'
import Search from '../SearchForm/SearchForm'

interface searchData {
    name: string,
    image: string
}

const SearchResults = ({ searchResults }) => {
    console.log(searchResults)
    return (
        <div className="search-results">
            {searchResults.map((artist, index: number) => {
                return (
              <div key={index}>{artist.name}</div>
            )
        })}
        </div>
    )
}

export default SearchResults
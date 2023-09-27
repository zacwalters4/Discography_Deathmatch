import React from 'react'
import './Home.css'
import SearchForm from '../SearchForm/SearchForm'
import Header from '../Header/Header'
import { getUserAlbums } from '../Utilities/APICalls'

const Home = () => {
    const [homeAlbums, setHomeAlbums] = React.useState([])
    
    const searchUserAlbums = () => {
        getUserAlbums()
            .then(data => {
                setHomeAlbums(data.topalbums.album)
            })
    }

    React.useEffect(() => {
        searchUserAlbums()
    }, [])

    return (
        <div className="home-page">
            <SearchForm />
            
            {/* {(homeAlbums.length > 1) && 
            <div className='battle-zone'>
                <img
                    className='image-left' 
                    src={homeAlbums[0]['image'][3]['#text']}
                    alt={`${homeAlbums[0]['name']} cover art`}
                />
                <img 
                    className='image-right' 
                    src={homeAlbums[1]['image'][3]['#text']}
                    alt={`${homeAlbums[1]['name']} cover art`}
                />
            </div>
            } */}
            </div>
        
    )
}

export default Home


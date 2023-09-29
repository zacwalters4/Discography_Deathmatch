import React from 'react'
import './Home.css'
import SearchForm from '../SearchForm/SearchForm'
import { getUserAlbums } from '../Utilities/APICalls'
import goof1 from '../Icons/goof1.png'
import goof2 from '../Icons/goof2.png'
import goof3 from '../Icons/goof3.png'

const Home = () => {
    return (
        <div className="home-page">
            <SearchForm />
                <div className="goof-comic">
                    <img 
                        className="comic-image"
                        src={goof1}
                        alt="goofy comic panel one"
                    />
                    <img 
                        className="comic-image"
                        src={goof2}
                        alt="goofy comic panel two"
                    />
                    <img 
                        className="comic-image"
                        src={goof3}
                        alt="goofy comic panel three"
                    />
                </div>
            </div>
        
    )
}

export default Home


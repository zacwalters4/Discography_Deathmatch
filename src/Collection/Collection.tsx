import React from 'react'
import './Collection.css'
import { topAlbumsArray, Album } from '../Utilities/Interfaces'
import AlbumCard from '../AlbumCard/AlbumCard'
import trophy from '../Icons/trophy-solid.svg'

const Collection = ({topAlbums}: topAlbumsArray ) => {

    return (
        <div className="collection-page">
            <img
                className={"collection-trophy"} 
                src={trophy}
                alt="trophy"
            /> 
            {(!topAlbums.length) && 
                <h2>There's nothing here yet..</h2>
            }
            <div className="winning-albums">
                {topAlbums.map((album: Album, index: number) => {
                    return (
                        <AlbumCard album={album} key={index}/>
                    )
                })}
            </div>
        </div>
        
    )
}

export default Collection
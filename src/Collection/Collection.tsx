import React from 'react'
import './Collection.css'
import { topAlbumsArray, Album } from '../Utilities/Interfaces'
import AlbumCard from '../AlbumCard/AlbumCard'


const Collection = ({topAlbums}: topAlbumsArray ) => {

    return (
        <div className="collection-page">
            {(!topAlbums.length) && 
                <h1>There's nothing here yet..</h1>
            }
            {topAlbums.map((album: Album, index: number) => {
                return (
                    <AlbumCard album={album} key={index}/>
                )
            })}
        </div>
        
    )
}

export default Collection
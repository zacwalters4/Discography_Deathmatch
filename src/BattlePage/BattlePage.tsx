import React from 'react'
import './BattlePage.css'
import { useLocation } from "react-router-dom"
import { formatName } from '../Utilities/Helper'
import { getAlbums } from '../Utilities/APICalls'

const BattlePage = () => {

    const [battleAlbums, getBattleAlbums] = React.useState([])
    const locationData = useLocation()
    const artistName = formatName(locationData.search)
    const [drop, setDrop] = React.useState(0)


    const searchAlbums = () => {
        getAlbums(artistName)
            .then(data => {
                // console.log(data.topalbums.album)
                if(data.topalbums.album.length > 10) {
                    getBattleAlbums(data.topalbums.album.splice(0, 10))
                } else {
                    getBattleAlbums(data.topalbums.album)
                }
            })   
    }

    React.useEffect(() => {
        searchAlbums()
      }, [])

    const clickAlbum = (event: React.MouseEvent<HTMLImageElement>) => {
        setDrop(1)
        console.log(event)
        const target = event.target as HTMLImageElement
        const name = target.id

        setTimeout(() => {
            getBattleAlbums(battleAlbums.filter(album=> album["name"] !== name));
        }, 500)
    }

    return ( 
        <div className="battle-page">
            {(battleAlbums.length == 0) &&
            <h1>Loading...</h1>
            }
            {(battleAlbums.length > 1) && 
            <div className="battle-box">
                <div className="album left"
                    // onAnimationEnd={() => setDrop(0)}
                    // drop={drop}
                >
                    <img
                        id={battleAlbums[1]['name']}
                        onClick={clickAlbum}
                        src={battleAlbums[0]['image'][3]["#text"]}
                    />
                    <p
                        className="album-text"
                    >{battleAlbums[0]['name']}</p>
                    <p
                        className="artist-text"
                    >{battleAlbums[0]['artist']['name']}</p>
                </div>
                <p className="versus-text">Vs.</p>
                <div className="album right"
                    // onAnimationEnd={() => setDrop(0)}
                    // drop={drop}
                >
                    <img
                        id={battleAlbums[0]['name']}
                        onClick={clickAlbum}
                        src={battleAlbums[1]['image'][3]["#text"]}
                    />
                    <p>{battleAlbums[1]['name']}</p>
                </div>
            </div>}
            {(battleAlbums.length == 1) &&
            <div className="winner-box">
                <h1>WINNER!</h1>
                <div className="album">
                    <img
                        id={battleAlbums[0]['name']}
                        src={battleAlbums[0]['image'][3]["#text"]}
                    />
                    <p>{battleAlbums[0]['name']}</p>
                </div>
            </div>
            }
        </div>
    )
}

export default BattlePage
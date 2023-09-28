import React from "react"
import './App.css'
import Home from "../Home/Home"
import { Routes, Route } from "react-router-dom"
import SearchPage from "../SearchPage/SearchPage"
import BattlePage from "../BattlePage/BattlePage"
import Header from "../Header/Header"
import { Album } from '../Utilities/Interfaces'
function App() {
  // let test = [{
  //   "name": "evermore",
  //   "playcount": 83762967,
  //   "url": "https://www.last.fm/music/Taylor+Swift/evermore",
  //   "artist": {
  //     "name": "Taylor Swift",
  //     "mbid": "20244d07-534f-4eff-b4d4-930878889970",
  //     "url": "https://www.last.fm/music/Taylor+Swift"
  //   },
  //   "image": [
  //     {
  //       "#text": "https://lastfm.freetls.fastly.net/i/u/34s/3fc71aa25ab1242571c841c75f764d10.png",
  //       "size": "small"
  //     },
  //     {
  //       "#text": "https://lastfm.freetls.fastly.net/i/u/64s/3fc71aa25ab1242571c841c75f764d10.png",
  //       "size": "medium"
  //     },
  //     {
  //       "#text": "https://lastfm.freetls.fastly.net/i/u/174s/3fc71aa25ab1242571c841c75f764d10.png",
  //       "size": "large"
  //     },
  //     {
  //       "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/3fc71aa25ab1242571c841c75f764d10.png",
  //       "size": "extralarge"
  //     }
  //   ]
  // }]
  const albumArray : Album[] = []
  const [topAlbums, setTopAlbums] = React.useState(albumArray)
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchPage />}>
          <Route index element={<SearchPage />} />
          <Route path=":searchName" element={<SearchPage />} />
        </Route>
        <Route path="/battle" element={<BattlePage setTopAlbums={setTopAlbums} />} />
      </Routes>
    </div>
  )
}

export default App
import React from "react"
import './App.css'
import Home from "../Home/Home"
import { Routes, Route } from "react-router-dom"
import SearchPage from "../SearchPage/SearchPage"
import BattlePage from "../BattlePage/BattlePage"
import Header from "../Header/Header"
import { Album } from '../Utilities/Interfaces'
function App() {

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
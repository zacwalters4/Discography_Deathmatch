import { useState } from "react"
import './App.css'
import Home from "../Home/Home"
import { Routes, Route } from "react-router-dom"
import SearchPage from "../SearchPage/SearchPage"
import BattlePage from "../BattlePage/BattlePage"
import Header from "../Header/Header"

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchPage />}>
          <Route index element={<SearchPage />} />
          <Route path=":searchName" element={<SearchPage />} />
        </Route>
        <Route path="/battle" element={<BattlePage />} />
      </Routes>
    </div>
  )
}

export default App
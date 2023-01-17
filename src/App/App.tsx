import { useState } from "react"
import './App.css'
import Home from "../Home/Home"
import { Routes, Route } from "react-router-dom"
import SearchPage from "../SearchPage/SearchPage"
import BattlePage from "../BattlePage/BattlePage"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<SearchPage />}>
        <Route index element={<SearchPage />} />
        <Route path=":searchName" element={<SearchPage />} />
      </Route>
      <Route path="/battle" element={<BattlePage />} />
    </Routes>
  )
}

export default App
import { useState } from "react"
import './App.css'
import Home from "../Home/Home"
import { Routes, Route } from "react-router-dom"
import SearchPage from "../SearchPage/SearchPage"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<SearchPage />}>
        <Route index element={<SearchPage />} />
        <Route path=":searchName" element={<SearchPage />} />
      </Route>
    </Routes>
  )
}

export default App
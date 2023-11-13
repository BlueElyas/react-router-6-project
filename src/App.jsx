import React from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Vans from "./Pages/Vans"
import VanDetails from "./Pages/VanDetails"

import "./server"

export default function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Vans" element={<Vans/>}/>
        <Route path="/Vans/:id" element={<VanDetails/>}/>
      </Routes>
    </BrowserRouter>
  )
}
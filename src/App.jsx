import React from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./Components/Home"
import About from "./Components/About"
import Vans from "./Components/Vans"

import "./server"

export default function App() {
  return (
    <BrowserRouter>
      <header>
        <Link className="site-logo" to="/">#VanLife</Link>
        <nav>
          <Link to="/about">About</Link>
          <Link to="/Vans">Vans</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Vans" element={<Vans/>}/>
      </Routes>
    </BrowserRouter>
  )
}
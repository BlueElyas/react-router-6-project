import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Vans from "./Pages/Vans"
import VanDetails from "./Pages/VanDetails"
import Layout from "./Components/Layout"

import "./server"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Vans" element={<Vans/>}/>
          <Route path="/Vans/:id" element={<VanDetails/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
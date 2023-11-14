import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Vans from "./Pages/Vans/Vans"
import VanDetails from "./Pages/Vans/VanDetails"
import Layout from "./Components/Layout"
import "./server"
import Dashboard from "./Pages/Host/Dashboard"
import Income from "./Pages/Host/Income"
import Reviews from "./Pages/Host/Reviews"
import HostLayout from "./Components/HostLayout"
import HostVans from "./Pages/Host/HostVans"
import HostVanDetails from "./Pages/Host/HostVanDetails"
import HostVanInfo from "./Pages/Host/HostVanInfo"
import HostVanPricing from "./Pages/Host/HostVanPricing"
import HostVanPhotos from "./Pages/Host/HostVanPhotos"
import NotFound from "./Pages/NotFound"


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="Vans" element={<Vans/>}/>
          <Route path="Vans/:id" element={<VanDetails/>}/>
        
        <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} /> 
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="vans/:id" element={<HostVanDetails />}>
              <Route index element={<HostVanInfo />}/>
              <Route path="pricing" element={<HostVanPricing />}/>
              <Route path="photos" element={<HostVanPhotos />}/>
            </Route>
        </Route>
        <Route path="*" element={<NotFound/>}/>

        </Route>
      </Routes>
    </BrowserRouter>
  )
}
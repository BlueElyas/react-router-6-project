import React from "react";
import { Outlet, Link } from "react-router-dom";
import Header from "./Header";

export default function HostLayout() {
    return(
        <>
            <Header/>
          
            <nav className="host-nav">
                <Link to="/host">Dashboard</Link>
                <Link to="/host/income">Income</Link>
                <Link to="/host/reviews">Reviews</Link>
            </nav>
            <Outlet/>
        </>
    )
}
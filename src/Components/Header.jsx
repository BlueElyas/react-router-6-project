import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return(
        <header>
            <Link className="site-logo" to="/">#VanLife</Link>
            <nav>
                <Link to="/about">About</Link>
                <Link to="/Vans">Vans</Link>
            </nav>
        </header>
    )
}
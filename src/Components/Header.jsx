import React from "react"
import { Link, NavLink } from "react-router-dom"

export default function Header() {

    const styles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616",
    }
    return (
        <header>
            <Link className="site-logo" to="/">#VanLife</Link>
            <nav>
                <NavLink style={({isActive}) => isActive ? styles : null} to="/host">Host</NavLink>
                <NavLink style={({isActive}) => isActive ? styles : null} to="/about">About</NavLink>
                <NavLink style={({isActive}) => isActive ? styles : null} to="/vans">Vans</NavLink>
            </nav>
        </header>
    )
}
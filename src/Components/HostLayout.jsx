import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function HostLayout() {
    return(
        <>
            <Header/>
            <Outlet/>
        </>
    )
}
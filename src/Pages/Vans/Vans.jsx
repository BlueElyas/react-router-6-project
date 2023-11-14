import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

export default function() {
    const [vanData, setVanData] = useState([])
    const [searchParams, setSearchParams] = useSearchParams()
    const typeFilter = searchParams.get('type')

    useEffect(() =>{
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => {
                setVanData(data.vans)
            })
    } ,[])

    const vanElFilter = typeFilter ? vanData.filter(van => typeFilter === van.type) : vanData

    const vanEl = vanElFilter.map(data => {
        return(
            <div key={data.id} className="van-tile">
                <Link to={`/vans/${data.id}`}>
                    <img src={data.imageUrl}  />
                    <div className="van-info">
                        <p>{data.name}</p>
                        <p>{data.price}<span>/day</span></p>
                    </div>
                    <i className={`van-type ${data.type} selected`}>{data.type}</i>
                </Link>
            </div>
        )
    })

    return(
        <>
            <div className="van-list-container">
                <h1>Explore our van options</h1>
                <div className="van-list">
                <nav>
                    <button onClick={() => setSearchParams( { type:"simple" } )}className="van-type simple">Simple</button>
                    <button onClick={() => setSearchParams( { type:"luxury" } )} className="van-type rugged">Rugged</button>
                    <button onClick={() => setSearchParams( { type:"rugged" } )} className="van-type luxury">Luxury</button>
                    <button onClick={() => setSearchParams( {  } )} className="van-type clear-filters">Clear</button>
                </nav>
                    {vanEl}
                </div>
            </div>
        </>
    )
}
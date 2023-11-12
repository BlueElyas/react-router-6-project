import React, { useEffect, useState } from "react";

export default function() {
    const [vanData, setVanData] = useState([])

    useEffect(() =>{
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => {
                setVanData(data.vans)
            })
    } ,[])
    console.log(vanData)

    const vanEl = vanData.map(data => {
        return(
            <div key={data.id} className="van-tile">
                <img src={data.imageUrl}  />
                <div className="van-info">
                    <p>{data.name}</p>
                    <p>{data.price}<span>/day</span></p>
                </div>
                <i className={`van-type ${data.type} selected`}>{data.type}</i>
            </div>
        )
    })

    return(
        <>
            <div className="van-list-container">
                <h1>Explore our van options</h1>
                <div className="van-list">
                    {vanEl}
                </div>
            </div>
        </>
    )
}
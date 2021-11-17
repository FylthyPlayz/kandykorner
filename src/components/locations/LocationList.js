import React, { useEffect, useState } from "react";

export const LocationList = () => {
    const [locations, changeLocations] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/locations")
                .then(res => res.json())
                .then((locationArray) => {
                    changeLocations(locationArray)
                })
        },
        []
    )

    return (
        <>
        
            {
                locations.map(
                    (locationObj) => {
                        return <h3 key={`location--${locationObj.id}`}>{locationObj.location}</h3>
                    }
                )
            }
        </>
    )
}
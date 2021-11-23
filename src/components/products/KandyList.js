import React, { useEffect, useState } from "react";


export const KandyList = () => {
    const [kandies, changeKandies] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/kandies?_expand=kandyType&_sort=kandyTypeId")
                .then(res => res.json())
                .then((kandyArray) => {
                    changeKandies(kandyArray)
                })
        },
        []
    )


    
    return (
        <>
            
            {
                kandies.map(
                    (kandyObj) => {
                        return <div key={`kandy--${kandyObj.id}`}>
                            {kandyObj.name} costs ${kandyObj.price} and is a {kandyObj.kandyType.category}
                            
                            </div>
                    }
                )
            }
        </>
    )
}
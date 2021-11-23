import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

export const ProductLocationList = () => {
    const [products, changeProducts] = useState([])
    const history = useHistory() 
    const { locationId } = useParams()

    useEffect(
        () => {
            fetch(`http://localhost:8088/productLocation?locationId=${locationId}&_expand=kandy`)
                .then(res => res.json())
                .then((productArray) => {
                    changeProducts(productArray)
                })
        },
        [locationId]
    )

    const submitPurchase = (event) => {
        event.preventDefault()
        
        const newPurchase = {
            customerId: parseInt(localStorage.getItem("kandy_customer")),
            productLocationId: event.target.value,
            dateCompleted: Date.now()
        }
        const fetchOption = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPurchase)
        }
        return fetch("http://localhost:8088/purchases", fetchOption)
        .then(response => response.json())
        .then(() => {
            history.push("/purchases")
        })
    }

    return (
        <>
            
            {
                products.map(
                    (productObj) => {
                        return <h3 value={productObj.id} key={`product--${productObj.id}`}>{productObj.kandy?.name} and is {productObj.kandy?.price}</h3>
                    }
                )
            }
            <div>
                <button onClick={submitPurchase} className="btn btn-primary">
                            Purchase
                </button>
           
            </div>
        </>
    )
}

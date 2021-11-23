import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom"


export const PurchaseList = () => {
    const { customerId }  = useParams()  
    
    const [purchases, setPurchases] = useState([]);

    useEffect(
        () => {
            // fetch(`http://localhost:8088/purchases/${customerId}?_expand=location&_expand=kandy&_expand=employee`)
            fetch(`http://localhost:8088/purchases`)
            .then(res => res.json())
            .then((purchaseArray) => {
                setPurchases(purchaseArray)
            })
        },
        []
        )
        
        const history = useHistory()
        
        return (
            <>
            {
               purchases.map(
                   (purchaseObj) => {
                       return <div key={`kandy--${purchaseObj.id}`}>
                           A list of your orders...
                          {purchaseObj.customerId}
                       </div>
                   }
               ) 
            }
            </>
        )
        }
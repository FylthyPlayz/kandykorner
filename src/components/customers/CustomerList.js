import React, { useEffect, useState } from "react";

export const CustomerList = () => {
    const [customers, changeCustomers] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/customers")
                .then(res => res.json())
                .then((customerArray) => {
                    changeCustomers(customerArray)
                })
        },
        []
    )
    return (
        <>

            {
                customers.map(
                    (customerObj) => {
                        return <h3 key={`customer--${customerObj.id}`}>{customerObj.name}</h3>
                    }
                )
            }
        </>
    )
}
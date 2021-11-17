import React, { useEffect, useState } from "react";
import { LocationList } from "./locations/LocationList";
import { CustomerList } from "./customers/CustomerList"
import { KandyList} from "./products/KandyList"
export const KandyKorner = () => {
    return (
        <>
            <h1>Kandy Korner's Tasty Treats</h1>
            <h2>Location List</h2>
                <LocationList />
            <h2>Customer List</h2>
                <CustomerList />
            <h2>Product List</h2>
                <KandyList />
        </>
    )
}
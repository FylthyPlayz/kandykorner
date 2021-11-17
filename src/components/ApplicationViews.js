import React from "react"
import { Route } from "react-router-dom"
import { LocationList } from "./locations/LocationList"
import { KandyList } from "./products/KandyList"

export const ApplicationViews = () => {
    return (
        <>
            <Route path="/locations">
                <LocationList />
            </Route>
            <Route path="/kandies">
                <KandyList />
            </Route>
        </>
    )
}
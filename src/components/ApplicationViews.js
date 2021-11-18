import React from "react"
import { Route } from "react-router-dom"
import { LocationList } from "./locations/LocationList"
import { KandyList } from "./products/KandyList"
import {EmployeeList} from "./employees/EmployeeList"
import { EmployeeForm } from "./employees/EmployeeForm"


export const ApplicationViews = () => { // still need to import the employees above
    return (
        <>
            <Route path="/locations">
                <LocationList />
            </Route>
            <Route path="/kandies">
                <KandyList />
            </Route>
            <Route exact path="/employees"> 
                <EmployeeList />
            </Route>
            <Route exact path="/employees/create">
                <EmployeeForm />
            </Route>
        </>
    )
}
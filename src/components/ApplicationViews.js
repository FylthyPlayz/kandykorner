import React from "react"
import { Route } from "react-router-dom"
import { LocationList } from "./locations/LocationList"
import { KandyList } from "./products/KandyList"
import {EmployeeList} from "./employees/EmployeeList"
import { EmployeeForm } from "./employees/EmployeeForm"
import {CustomerList} from "./customers/CustomerList"
import {PurchaseList} from "./products/MyOrders"
import {ProductLocationList} from "./products/ProductLocationList"

export const ApplicationViews = () => { // still need to import the employees above
    return (
        <>
            <Route exact path="/locations">
                <LocationList />
            </Route>
            <Route exact path="/locations/:locationId(\d+)">
                <ProductLocationList />
            </Route>
            <Route path="/kandies">
                <KandyList />
            </Route>
            <Route path="/customers">
                <CustomerList />
            </Route>
            <Route exact path="/employees"> 
                <EmployeeList />
            </Route>
            <Route exact path="/purchases"> 
                <PurchaseList />
            </Route>
            <Route exact path="/employees/create">
                <EmployeeForm />
            </Route>
        </>
    )
}
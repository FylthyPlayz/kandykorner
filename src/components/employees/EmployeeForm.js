import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom";


export const EmployeeForm = () => {
    const [employee, updateEmployee] = useState({
        name: "",
        locationId: 0,
        manager: false,
        fullTime: false,
        hourlyRate: 0
    });
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

    const history = useHistory()
    const submitEmployee = (event) => {
        event.preventDefault()

        const newemployee = {
            name: employee.name,
            locationId: employee.locationId,
            manager: employee.manager,
            fullTime: employee.fullTime,
            hourlyRate: employee.hourlyRate
        }
        const fetchOption = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newemployee)
        }
        return fetch("http://localhost:8088/employees", fetchOption)
            .then(response => response.json())
            .then(() => {
                history.push("/employees")
            })
    }
    return (
        <form className="employeeForm">
            <h2 className="employeeForm__title">New Hire Employee</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Full Name:</label>
                    <input
                        onChange={
                            (evt) => {
                                const copy = { ...employee }
                                copy.name = evt.target.value
                                updateEmployee(copy)
                            }}
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Full Name of hired Employee..."
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Location:</label>
                    <select
                        onChange={
                            (evt) => {
                                const copy = { ...employee }
                                copy.locationId = parseInt(evt.target.value)
                                updateEmployee(copy)
                            }}
                        className="form-control"


                    >
                        <option value="0">Select a Location </option>
                        {
                            locations.map(
                                (locationObj) => {
                                    return <option value={locationObj.id}>
                                        {locationObj.location}
                                    </option>
                                })
                        }
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Manager:</label>
                    <input type="checkbox"
                        onChange={
                            (evt) => {
                                const copy = { ...employee }
                                copy.manager = evt.target.checked
                                updateEmployee(copy)
                            }} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="fullTime">Is this Employee Full Time?:</label>
                    <input type="checkbox"
                        onChange={
                            (evt) => {
                                const copy = { ...employee }
                                copy.fullTime = evt.target.checked
                                updateEmployee(copy)
                            }} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="hourlyRate">Hourly Rate:</label>
                    <input
                        onChange={
                            (evt) => {
                                const copy = { ...employee }
                                copy.hourlyRate = parseInt(evt.target.value)
                                updateEmployee(copy)
                            }}
                        required autoFocus
                        type="number"
                        className="form-control"
                        placeholder="How much you paying?"
                    />
                </div>
            </fieldset>
            <button onClick={submitEmployee} className="btn btn-primary">
                Finish Hiring
            </button>
        </form>
    )
}
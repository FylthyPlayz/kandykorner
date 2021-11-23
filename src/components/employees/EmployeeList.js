import React, { useEffect, useState } from "react";
import { useHistory } from "react-router"

export const EmployeeList = () => {
    const [employees, changeEmployees] = useState([])
    const history = useHistory() 
   

    useEffect(
        () => {
            fetch("http://localhost:8088/employees?_expand=location")
                .then(res => res.json())
                .then((employeeArray) => {
                    changeEmployees(employeeArray)
                })
        },
        []
    )

    return (
        <>
            
            {
                employees.map(
                    (employeeObj) => {
                        return <h3 key={`employee--${employeeObj.id}`}>{employeeObj.name} works at {employeeObj.location.location}</h3>
                    }
                )
            }
            <div>
            <button onClick={() => history.push("/employees/create")}>Hire Employee</button>
            </div>
        </>
    )
}
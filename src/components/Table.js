import React from "react";
// import users from "../users.json";
import "../assets/table.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from "@fortawesome/free-solid-svg-icons";

function Table({employees, sortName}) {
    return (

<table className="table">
  <thead>
    <tr>
      <th scope="col">Image</th>
      <th scope="col">Name <FontAwesomeIcon icon={faSort} onClick={() => sortName()}/></th>
      <th scope="col">Phone</th>
      <th scope="col">Email</th>
      <th scope="col">DOB</th>
    </tr>
  </thead>
  
  <tbody>
      {employees.map(employee => (
    <tr key={employee.id} >     
      <td>{<img src={employee.picture} alt={employee.name} />}</td>
      <td>{employee.name}</td>
      <td>{employee.phone}</td>
      <td>{employee.email}</td>
      <td>{employee.dob}</td>
    </tr>
      ))}
   
  </tbody>
</table>
    )
}

export default Table;
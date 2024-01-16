import React, { useEffect, useState } from "react";
/* http://localhost:5288/api/Employees */

const FetchEmployee = () => {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5288/api/Employees")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setEmployees(data);
      })
      .catch((error) => console.log(error.message));
  }, []);
  return (
    <div>
      <h2>List of Employees</h2>
      <table className="table table-striped text-primary">
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Employee Name</th>
            <th>Employee City</th>
            <th>Employee Department</th>
            <th>Employee Gender</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.city}</td>
              <td>{employee.department}</td>
              <td>{employee.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FetchEmployee;

import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Friends = () => {
  const employees = useLoaderData();

  return (
    <div>
      <h3>Employees List</h3>
      {employees.length === 0 && "loading.."}
      {employees.map(employee => (
        <Link to={`/friends/${employee.id}`}>
          <li key={employee.id}>{employee.name}</li>
        </Link>
      ))}
    </div>
  );
};

export default Friends;

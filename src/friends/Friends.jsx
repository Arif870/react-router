import React from "react";
import { useLoaderData } from "react-router-dom";

const Friends = () => {
  const employees = useLoaderData();

  return (
    <div>
      <h3>Employees List</h3>
      {employees.length === 0 && "loading.."}
      {employees.map(employee => (
        <li key={employee.id}>{employee.name}</li>
      ))}
    </div>
  );
};

export default Friends;

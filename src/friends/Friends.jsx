import React from "react";
import { Link, useLoaderData, useNavigation } from "react-router-dom";

const Friends = () => {
  const employees = useLoaderData();
  const navigation = useNavigation();

  return (
    <div>
      {navigation.state === "loading" ? "loading" : ""}
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

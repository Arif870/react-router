import "./App.css";
import { Link, Outlet } from "react-router-dom";
import ActiveLink from "./activeLink/ActiveLink";

function App() {
  return (
    <>
      <ul style={{ listStyle: "none", display: "flex", gap: "10px" }}>
        <li>
          <ActiveLink to="/">app</ActiveLink>
        </li>
        <li>
          <ActiveLink to="/home">home</ActiveLink>
        </li>
        <li>
          <ActiveLink to="/friends">friends</ActiveLink>
        </li>
        <li>
          <ActiveLink to="/about">about</ActiveLink>
        </li>
      </ul>

      <div style={{ border: "1px solid gray", padding: "10px" }}>
        <Outlet />
      </div>
    </>
  );
}

export default App;

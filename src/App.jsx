import "./App.css";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <ul style={{ listStyle: "none", display: "flex", gap: "10px" }}>
        <li>
          <Link to="/">app</Link>
        </li>
        <li>
          <Link to="/home">home</Link>
        </li>
        <li>
          <Link to="/friends">friends</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
      </ul>

      <div style={{ border: "1px solid gray", padding: "10px" }}>
        <Outlet />
      </div>
    </>
  );
}

export default App;

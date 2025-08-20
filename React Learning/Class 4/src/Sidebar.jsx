import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div style={{
      width: "200px",
      height: "100vh",
      background: "#f0f0f0",
      padding: "20px",
      position: "fixed"
    }}>
      <h3>MyApp</h3>
      <nav>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;

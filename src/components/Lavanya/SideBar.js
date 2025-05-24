import React from "react";
import "./SideBar.css"; // optional

function SideBar() {
  return (
    <div className="sidebar">
      <h2>Dashboard</h2>
      <ul>
        <li>
          <a href="#">Overview</a>
        </li>
        <li>
          <a href="#">Reports</a>
        </li>
        <li>
          <a href="#">Settings</a>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;

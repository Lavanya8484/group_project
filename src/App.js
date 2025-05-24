import React from "react";
import NavBar from "./components/sindhu/NavBar";
import SideBar from "./components/Lavanya/SideBar";

function App() {
  return (
    <div>
      <NavBar />
      <div style={{ display: "flex" }}>
        <SideBar />
        <div style={{ marginLeft: "200px", padding: "1rem" }}>
          <h2>Main Content Area</h2>
          <p>Welcome to the app!</p>
        </div>
      </div>
    </div>
  );
}

export default App;

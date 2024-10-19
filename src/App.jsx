import React from "react";
import NavBar from "./components/NavBar"; 
import { Outlet } from "react-router-dom";
import "./assets/otrosComponentes.css"

export default function App() {
  return (
    <div className="app-container">
      <NavBar /> 
    </div>
  );
}


import { NavLink, Outlet } from "react-router-dom";
import '../index.css';
import React, { useState } from "react";
import logoCoffecode from '../assets/logo.svg';

export default function NavBar() {
  // Estado para controlar el menú desplegable
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isSalesDropdownOpen, setSalesDropdownOpen] = useState(false);


  // Función para alternar el menú desplegable
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const toggleSalesDropdown = () => {
    setSalesDropdownOpen(!isSalesDropdownOpen);
  };




  return (
    <>
      <div id="sidebar">
        <h1 style={{ color: "#823a6f" }}>
          <img className="logocfc" src={logoCoffecode} alt="logo" />
          DashBoard
        </h1>
        <div className="nav-item active">
          <NavLink className="nav-link" to="/">
            <img className="logocfc" src={logoCoffecode} alt="logo" />
          </NavLink>
          <form method="post">
            <button style={{ color: "#823a6f" }} type="submit">Nuevo Producto</button>
          </form>
        </div>
        <nav>
          <span className="span2">CoffeCode -- DashBoard</span>
          <hr />
          <div className="drop-panel">
            <button onClick={toggleDropdown} className="drop-btn" >
              Total
            </button>
            {isDropdownOpen && (
              <ul className="menu-drop">
                <li>
                  <NavLink
                    to="/total-products"
                    className={({ isActive }) => isActive ? "active" : ""}
                  >Total de Productos</NavLink>
                </li>
                <li>
                  <NavLink
                    to="/total-users"
                    className={({ isActive }) => isActive ? "active" : ""}
                  >Total de Usuarios</NavLink>
                </li>
                <li>
                  <NavLink
                    to="/total-categories"
                    className={({ isActive }) => isActive ? "active" : ""}
                  >Total de Categorías</NavLink>
                </li>
              </ul>
            )}
          </div>
          <div className="drop-panel">
            <button onClick={toggleSalesDropdown} className="drop-btn">
              Ventas
            </button>

            {isSalesDropdownOpen && (
              <ul className="drop-menu">
                <li>
                  <NavLink
                    to="/total-products-sold"
                    className={({ isActive }) => isActive ? "active" : ""}
                  >Total de Productos Vendidos</NavLink>
                </li>
                <li>
                  <NavLink
                    to="/total-sales"
                    className={({ isActive }) => isActive ? "active" : ""}
                  >Total de Ventas</NavLink>
                </li>
                <li>
                  <NavLink
                    to="/last-5-sales"
                    className={({ isActive }) => isActive ? "active" : ""}
                  >Últimos 5 Productos Vendidos</NavLink>
                </li>
                <li>
                  <NavLink
                    to="/top-5-sales"
                    className={({ isActive }) => isActive ? "active" : ""}
                  >Top 5 Productos Más Vendidos</NavLink>
                </li>
              </ul>
            )}
          </div>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) => isActive ? "active" : "nav-link"}
              to="/last-product-in-db"
            >
              <i className="fas fa-coffee"></i>
              <p className="span1">Detalle ultimo Producto en BD</p></NavLink>
          </li>
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}

import { Link, Outlet } from "react-router-dom";
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
          <Link className="nav-link" to="/">
            <img className="logocfc" src={logoCoffecode} alt="logo" />
          </Link>
          <form method="post">
            <button style={{color:"#823a6f"}} type="submit">Nuevo Producto</button>
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
                <Link to="/total-products">Total de Productos</Link>
              </li>
              <li>
                <Link to="/total-users">Total de Usuarios</Link>
              </li>
              <li>
                <Link to="/total-categories">Total de Categorías</Link>
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
                <Link to="/total-sales">Total de Productos Vendidos</Link>
              </li>
              <li>
                <Link to="/total-sales">Total de Ventas</Link>
              </li>
              <li>
                <Link to="/last-5-sales">Últimos 5 Productos Vendidos</Link>
              </li>
              <li>
                <Link to="/top-5-sales">Top 5 Productos Más Vendidos</Link>
              </li>
            </ul>
          )}
        </div>
        <li className="nav-item">
                    <Link className="nav-link" to="/last-product-in-db">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <p className="span1">Detalle ultimo Producto en BD</p></Link>
                </li>
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}

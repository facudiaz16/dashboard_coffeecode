import { NavLink, Outlet } from "react-router-dom";
import '../index.css';
import { useState } from "react";
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
          <img className="logocfc" src={logoCoffecode} alt="logo" style={{width: "250px", height: "80px" }} />
          
        </h1>
        <div className="nav-item active">
          <NavLink className="nav-link" to="/">
            <img className="logocfc" src={logoCoffecode} alt="logo" style={{width: "250px", height: "80px" }} />
           <hr /> 
            <span className="span2">COFFEECODE - DASHBOARD</span>
          </NavLink>
          
        </div>
        <nav>
        <li className="nav-item">
            <NavLink
              className={({ isActive }) => isActive ? "" : "nav-link"}
              to="/"
            >
              <i className="fas fa-home" ></i>
              <p className="span1">Home</p>
              </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) => isActive ? "active" : "nav-link"}
              to="/last-product-in-db"
            >
              <i className="fas fa-coffee"></i>
              <p className="span1">Detalle ultimo Producto en BD</p></NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) => isActive ? "active" : "nav-link"}
              to="/total"
            >
              <i className="fas fa-box"></i>
              <p className="span1">Total</p></NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) => isActive ? "active" : "nav-link"}
              to="/tipos-cafes">
              <i className="fas fa-coffee"></i>
              <p className="span1">Tipos de cafes</p></NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) => isActive ? "active" : "nav-link"}
              to="/lista-productos">
              <i className="fas fa-coffee"></i>
              <p className="span1">Lista de productos</p></NavLink>
          </li>
          <form method="post">
            <button className="drop-btn" type="submit">+ Nuevo Producto</button>
          </form>
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
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}

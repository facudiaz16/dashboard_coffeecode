import React, { useState } from "react";
import Modal from "react-modal"; 
import { NavLink, Outlet } from "react-router-dom";
import logoCoffecode from '../assets/logo.svg';

Modal.setAppElement('#root'); 

export default function NavBar() {
  const [isSalesDropdownOpen, setSalesDropdownOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false); 

  const toggleSalesDropdown = () => {
    setSalesDropdownOpen(!isSalesDropdownOpen);
  };

  const openModal = () => {
    setModalOpen(true); 
  };

  const closeModal = () => {
    setModalOpen(false); 
  };

  return (
    <>
      <div id="sidebar">
        <h1 style={{ color: "#823a6f" }}>
          <img className="logocfc" src={logoCoffecode} alt="logo" style={{ width: "250px", height: "80px" }} />
        </h1>
        <div className="nav-item active">
          <NavLink className="nav-link" to="/">
            <img className="logocfc" src={logoCoffecode} alt="logo" style={{ width: "250px", height: "80px" }} />
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
              <i className="fas fa-home"></i>
              <p className="span1">Home</p>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) => isActive ? "active" : "nav-link"}
              to="/last-product-in-db"
            >
              <i className="fas fa-coffee"></i>
              <p className="span1">Detalle último Producto en BD</p>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) => isActive ? "active" : "nav-link"}
              to="/total"
            >
              <i className="fas fa-box"></i>
              <p className="span1">Total</p>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) => isActive ? "active" : "nav-link"}
              to="/tipos-cafes">
              <i className="fas fa-coffee"></i>
              <p className="span1">Tipos de cafés</p>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) => isActive ? "active" : "nav-link"}
              to="/lista-productos">
              <i className="fas fa-coffee"></i>
              <p className="span1">Lista de productos</p>
            </NavLink>
          </li>
          <button onClick={openModal} className="drop-btn">
            + Nuevo Producto
          </button>
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
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Formulario de Creación de Producto"
        className="Modal" 
        overlayClassName="Overlay" 
      >
        
        <iframe
          src="http://localhost:3000/admin/create" 
          style={{
            width: "100%",
            height: "90vh",
            border: "none",
          }}
          title="Formulario de creación de producto"
        ></iframe>
        <button onClick={closeModal}>Cerrar</button>
      </Modal>
      <div id="detail">
        <Outlet /> 
      </div>
    </>
  );
}

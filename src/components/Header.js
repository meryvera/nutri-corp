import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Nav,
} from "react-bootstrap";


export const Header = () => {
  
  return (
    <>
      <Navbar bg="light" expand="lg" id="bri-containerNav" variant="light">
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Brand id="bri-BrandNav"> Nutrimarket </Navbar.Brand>
        <Navbar.Brand href="/compras"> 🛒 </Navbar.Brand>
        <Navbar.Collapse>
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: "155px" }}
            navbarScroll
          >
            <h3>Hola! Usuario</h3>
            <Link to="/productos">
              🏠 Inicio
            </Link>
            <Link exact to="/compras">
              🛒 Carrito de compras
            </Link>
            <Link exact to="/">
              ↩ Cerra sesión
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};


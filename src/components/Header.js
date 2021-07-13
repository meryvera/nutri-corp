import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Nav,
} from "react-bootstrap";
import { useHistory } from "react-router";

export const Header = (props) => {

  let history = useHistory()
  const goShoppingView= () => {
    history.push({pathname:'/compras', state: props.state})
  }

  return (
    <>
      <Navbar bg="light" expand="lg" id="bri-containerNav" variant="light">
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Brand id="bri-BrandNav"><b>Nutrimarket</b></Navbar.Brand>
        <button onClick={goShoppingView}>
          🛒
        </button>
        <Link exact to="/compras">🛒</Link>            
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
              ↩ Cerrar sesión
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};


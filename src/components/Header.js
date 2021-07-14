import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { useHistory } from "react-router";
import { logOut } from "../firebase/auth.js"

export const Header = (props) => {

  // const qtys = props.state.listProducts.length;
  // console.log(qtys)
  const { setUser } = props;


  let history = useHistory();

  const goShoppingView = () => {
    history.push({ pathname: "/compras", state: props.state });
  };

  const logOutUser = () => {
    logOut().then(()=> {
      setUser(null)
    }).catch((err)=> {console.log(err)})
    history.push("/")
  }

  return (
    <>
      <Navbar bg="light" expand="lg" id="bri-containerNav" variant="light">
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Brand id="bri-BrandNav">
          <b>Nutrimarket</b>
        </Navbar.Brand>
        <div className="pe-4">
          <button onClick={goShoppingView} className="bri-btnShopping">
            🛒
          </button>
          {/* <b className="showContador">{qtys >= 0 ? qtys : null}</b> */}
        </div>
        <Navbar.Collapse>
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: "155px" }}
            navbarScroll
          >
            <h3>Hola! Colaborador</h3>
            <Link to="/productos">
              <b className="ms-1"> 🏠 Inicio</b>
            </Link>
            <button onClick={goShoppingView} className="bri-btnShoppingHbg">
              <b className="ms-1"> 🛒 Carrito de compras</b>
            </button>
            <button onClick={logOutUser} className="bri-btnShoppingHbg">
              <b className="ms-1"> ↩ Cerrar sesión</b>
            </button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

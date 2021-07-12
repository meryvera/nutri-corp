import React, {useState} from "react";
/* import { NavLink, Switch, Route, useRouteMatch } from "react-router-dom"; */
import { Navbar, Nav, Button, Form, FormControl } from "react-bootstrap";
import ModalLogin from './home/ModalLogin';
//import { Accordion } from "react-bootstrap";
//import ShoppingCart from "./home/ShoppingCart";
//import ShoppingCart from './home/ShoppingCart'
/* import ModalRegister from './register/ModalRegister'; */


const Header = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
    <nav>
      <Navbar bg="dark"
        fixed="top"
        id="merynav"
        className="px-4 py-2 d-flex justify-content-beetwen"
      >
        <section>
          <Navbar.Brand href="#home">
            <img
              /* src={logo} */
              width="50"
              height="40"
              /* className="d-inline-block align-top" */
              alt=""
            />
          </Navbar.Brand>
        </section>
        <section>
          <Form className="d-flex ">
            <FormControl
              type="search"
              placeholder="Search"
              size="xsm"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </section>
        <section>
          <Nav className="">
          <Button variant="primary" onClick={handleShow}>
            Login
          </Button>
          <button >
            <Nav.Link
                to='/carrito-de-compra'
                /* style={{fontSize: 25}} */ 
              >
                🛒
            </Nav.Link>
          </button>
          </Nav>
        </section>
      </Navbar>
    </nav>
    <ModalLogin show={show} handleClose={handleClose}/>
  </>
  );
};

export default Header;

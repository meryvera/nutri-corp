import React, {useEffect} from "react";
import { Link,/* useLocation, */useHistory } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { logOut } from "../firebase/auth.js";
import { readAllItems } from '../firebase/firestore'


export const Header = (props) => {

  const[qtys, setQtys] = React.useState(0)
  // console.log(qtys)
  const { setUser } = props;

  // let location = useLocation();

  let history = useHistory();

  // const goShoppingView = () => {
  //   console.log(props.state)
  //   if(location.pathname !== '/compras'){
  //     history.push({ pathname: "/compras", state: props.state });
  //   } else {
  //     history.push('/compras')
  //   }    
  // };

  const logOutUser = () => {
    logOut().then(()=> {
      setUser(null);
      history.push("/");
    }).catch((err)=> {console.log(err)})
  }
  useEffect(() => {
    const cb = (items) => {
      const arr = items.map(elem => elem.qty)
      const reducer = (accumulator, currentValue) => accumulator + currentValue;
      const cant = arr.reduce(reducer, 0)
      setQtys(cant);
    }
    readAllItems(cb)
  }, [])

  return (
    <>
      <Navbar bg="light" expand="lg" id="bri-containerNav" variant="light">
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Brand id="bri-BrandNav">
          <b>Nutrimarket</b>
        </Navbar.Brand>
        <div className="pe-4">
          <Link className="bri-btnShopping"  to='/compras'>🛒</Link>
          <b className="showContador">{qtys >= 0 ? qtys : null}</b>
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
            <Link className="bri-btnShoppingHbg"  to='/compras'> 
              <b className="ms-1">🛒 Carrito de compras</b>
            </Link>
            <button onClick={()=>logOutUser()} className="bri-btnShoppingHbg">
              <b className="ms-1"> ↩ Cerrar sesión</b>
            </button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { Header } from "../Header";
import { Card, Container, Row, Col } from "react-bootstrap";
import { readAllItems, deleteItem  } from '../../firebase/firestore'

export const ShoppingCart = (/* { location } */) => {

  // const arr = [];
  // arr.push(location);

  const [arrProducts, setArrProducts] = useState([]);

  useEffect(() => {
    const cb = (items) => {
      setArrProducts(items)
    }
    readAllItems(cb)
  }, [])

  const totalProduct = arrProducts.map(
    (product) => product.price * product.qty
  );
  const total = totalProduct.reduce((a, b) => a + b, 0);
  const descuento = parseInt(parseInt(total) * 0.2);
  const montoTotal = total - parseInt(descuento);
  // console.log(totalProduct);
  // console.log(total);
  // console.log(descuento);
  // console.log(montoTotal);
  return (
    <>
      <Header />
      <section className="bri-containerSaldo">
        <i>⬅</i>
        <p>
          <b>Saldo disponible: S/{parseInt(300 - total)}</b>
        </p>
      </section>
      <section className="bri-containerDescription">
        <h6>Cantidad</h6>
        <h6>Producto/Descripción</h6>
      </section>

      <section className="bri-containerCards">
        {arrProducts.map((product) => (
          <Card style={{ width: "18rem" }} key={product.id}>
            <div className="bri-left">
              <Card.Img
                variant="top"
                src={product.img}
              />
              <div className="bri-leftBtn">
                <button className="btn-bri">-</button>
                <p>{product.qty}</p>
                <button className="btn-bri">+</button>
              </div>
            </div>
            <div className="bricard-body">
              <div className="bri-right">
                <h4 className="fw-bold text-center h-2">{product.title}</h4>
                <p className="mb-0">{product.name}</p>
                <p>{product.quantity}</p>
                <p>Precio: s/ {parseInt(product.price * product.qty)}</p>
                <p>
                  Precio Sugerido: s/{" "}
                  {parseInt(product.dsctoPrice * product.qty)}
                </p>
              </div>
              <i
                class="far fa-trash-alt fa-2x"
                onClick={() => deleteItem(product.orderId)
                  // setArrProducts(
                  //   arrProducts.filter((el) => el.id !== product.id)
                  // )
                }
              ></i>
            </div>
          </Card>
        ))}
      </section>
      <Container fluid>
        <section className="border-top border-bottom border-dark p-15">
          <div>
            <Row>
              <Col>
                <b text="dark">Monto total</b>
              </Col>
              <Col>
                {" "}
                <b text="dark">$/ {parseInt(total)}</b>
              </Col>
            </Row>
            <Row>
              <Col>
                <b className="text-danger">Descuento de colaborador</b>
              </Col>
              <Col>
                <b className="text-danger">- $/ {descuento}</b>
              </Col>
            </Row>
          </div>
        </section>
        <Row>
          <Col>
            <b text="dark">Total a pagar</b>
          </Col>
          <Col>
            <b text="dark">$/ {montoTotal}</b>
          </Col>
        </Row>
      </Container>
      <button className="bri-btnNext ">
        <Link className="text-white " to="/usuario">
          <strong>Continuar </strong>
        </Link>
      </button>
    </>
  );
};

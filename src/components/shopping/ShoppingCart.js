import React from 'react';
import { Header } from '../Header'
import { Card } from "react-bootstrap";


export const ShoppingCart = ({location}) => {

  const arr = [];
  arr.push(location);
  const arrProducts = arr[0].state.listProducts
  console.log(arrProducts);

  return (
    <>
      <Header />
      <section className="bri-containerSaldo">
        <i>⬅</i>
        <p>
          Saldo disponible: <b>S/50.00</b>
        </p>
      </section>
      <section className="bri-containerDescription">
        <h6>Cantidad</h6>
        <h6>Producto/Descripción</h6>
      </section>

      <section className="bri-containerCards">
        {
          arrProducts.map(product => (
            <Card style={{ width: "18rem" }}>
              <div className="bri-left">
                <Card.Img
                  variant="top"
                  src="https://i.ibb.co/TKXm2Jm/1849267.png"
                />
                <div className="bri-leftBtn">
                  <button className="btn-bri">-</button>
                  <p>1</p>
                  <button className="btn-bri">+</button>
                </div>
              </div>
              <div className="bricard-body">
                <div className="bri-right">
                  <h4 className="fw-bold text-center h-2">{product.title}</h4>
                  <p className="mb-0">{product.name}</p>
                  <p>{product.quantity}</p>
                  <p>Precio: s/ {product.price}</p>
                  <p>Precio Sugerido: s/ {product.dsctoPrice}</p>
                </div>
                <button variant="primary" className="bri-btnDelete">🗑️
                  {/* <i class="fas fa-trash-alt"></i> */}
                </button>
              </div>
            </Card>
          ))
        }
      </section>
    </>
  );
}



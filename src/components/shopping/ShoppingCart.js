import React from 'react';
import { Header } from '../Header'
import { Card } from "react-bootstrap";

export const ShoppingCart = () => {

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
              <h4 className="fw-bold text-center h-2">Aceite</h4>
              <p className="mb-0">Filete atún primor.170 gr</p>
              <p>Cantidad: 48 ltas</p>
              <p>Precio: s/ 10</p>
              <p>Precio Sugerido: s/ 5</p>
            </div>
            <button variant="primary" className="bri-btnDelete">
              <i class="fas fa-trash-alt"></i>
            </button>
          </div>
        </Card>
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
              <h4 className="fw-bold text-center h-2">Aceite</h4>
              <p className="mb-0">Filete atún primor.170 gr</p>
              <p>Cantidad: 48 ltas</p>
              <p>Precio: s/ 10</p>
              <p>Precio Sugerido: s/ 5</p>
            </div>
            <button variant="primary" className="bri-btnDelete">
              🎞
            </button>
          </div>
        </Card>
      </section>
    </>
  );
}



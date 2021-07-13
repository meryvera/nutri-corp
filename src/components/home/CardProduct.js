import React from "react";
import { Card, Button } from "react-bootstrap";

export const CardProduct = (props) => {
  return (
    <div
      key={props.product.id}
      id="merycards"
      className="border border-secondary m-3 p-4"
      style={{ width: "30rem" }}
    >
      <div className="w-50 me-3">
        <Card.Img className="py-4" variant="top" src={props.product.img} />
        <div className="m-auto d-flex justify-content-around my-4">
          <button
            id="merybutton"
            className="w-15 text-light rounded-circle border-white merybutton"
          >
            -
          </button>
          <p className="fw-bold">20</p>
          <button
            id="merybutton"
            className="w-10 text-light rounded-circle border-white merybutton"
          >
            +
          </button>
        </div>
      </div>
      <div>
        <h4 className="fw-bold text-center h-2">{props.product.name}</h4>
        <p className="mb-0">Filete atún primor.170 gr</p>
        <p>Cantidad: 48 ltas</p>
        <p>Precio: s/ {props.product.price}</p>
        <p>Precio Sugerido: s/ {props.product.price}</p>
        <Button id="merybutton2" className="d-block m-auto px-4">
          AGREGAR 🛒
        </Button>
        <Button id="merybutton3" className="d-block m-auto px-4">
          AGREGAR 🛒
        </Button>
      </div>
    </div>
  );
};


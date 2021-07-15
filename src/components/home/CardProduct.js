import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import check from "../../images/check.png";
import { createItems } from "../../firebase/firestore";


export const CardProduct = (props) => {
  const [number, setNumber] = useState(1);
  const [addPdt, SetAddPdto] = useState(false);

  const deleteProduct = (id) => {
    SetAddPdto(false);
  };

  const fnChosenProduct = (objProduct, number) => {
    SetAddPdto(true);
    const objectChosenProduct = {
      id: objProduct.id,
      name: objProduct.name,
      price: objProduct.price,
      dsctoPrice: objProduct.dsctoPrice,
      title: objProduct.title,
      quantity: objProduct.quantity,
      type: objProduct.type,
      img: objProduct.img,
      qty: number,
    };
    createItems(objectChosenProduct)
    //props.dispatch({ type: "addProduct", newState: objectChosenProduct });
  };

  
  return (
    <div
      key={props.product.id}
      id="merycards"
      className="border border-secondary m-4 p-3"
      style={{ width: "30rem" }}
    >
      <div className="w-50 me-3" id="meryHeight">
        <Card.Img className="py-1" id="meryImg" variant="top" src={props.product.img} />
        <div className="m-auto d-flex justify-content-around my-4">
          <button
            onClick={() => (number > 1 ? setNumber(number - 1) : 1)}
            id="merybutton"
            className="w-15 text-light rounded-circle border-white merybutton"
          >
            -
          </button>
          <p className="fw-bold">{number}</p>
          {/* Cantidad */}
          <button
            onClick={() => setNumber(number + 1)}
            id="merybutton"
            className="w-10 text-light rounded-circle border-white merybutton"
          >
            +
          </button>
        </div>
      </div>
      <div>
        <div className="d-flex justify-content-beetwen">
          <h4 className="d-inline-flex fw-bold text-center h-2">
            {props.product.title}
          </h4>
          {addPdt ? <img className="float-left" src={check} alt="" /> : <></>}
        </div>
        <p className="mb-0">{props.product.name}</p>
        <p>Cantidad: {props.product.quantity}</p>
        <p>Precio: s/ {props.product.price}</p>
        <p>Precio Sugerido: s/ {props.product.dsctoPrice}</p>
        {addPdt ? (
          <Button
            id="merybutton3"
            className="d-block m-auto px-4"
            onClick={() => deleteProduct(props.product.id)}
          >
            <b>AGREGADO ✅</b>
          </Button>
        ) : (
          <Button
            id="merybutton2"
            className="d-block m-auto px-3"
            onClick={() => fnChosenProduct(props.product, number)}
          >
            <b>AGREGAR 🛒</b>
          </Button>
        )}
      </div>
    </div>
  );
};

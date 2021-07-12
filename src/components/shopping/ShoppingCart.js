import React from 'react';
import { Header } from '../Header'
export const ShoppingCart = () => {

  return (
    <>
      <Header />
      <section className="bri-containerSaldo">
        <i>⬅</i>
        <p>Saldo disponible</p>
      </section>
      <section className="bri-containerDescription">
        <h6>Cantidad</h6>
        <h6>Producto/Descripción</h6>
      </section>
      <section>
        <p>productos</p>
      </section>
    </>
  );
}



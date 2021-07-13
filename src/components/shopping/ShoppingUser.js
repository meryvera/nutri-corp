import React from "react";
import { Header } from "../Header";
import { Form, InputGroup } from "react-bootstrap";

export const ShoppingUser = () => {
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
        <h6>Cliente</h6>
      </section>
      <Form>
        {["radio"].map((type) => (
          <div key={`inline-${type}`} className="check-radio">
            <Form.Check
              inline
              label="Para Mi"
              name="group1"
              type={type}
              id={`inline-${type}-1`}
            />
            <Form.Check
              inline
              label="Otro Cliente"
              name="group1"
              type={type}
              id={`inline-${type}-2`}
            />
          </div>
        ))}
      </Form>
      <Form>
        <section className="inputNombre">
          <Form.Group controlId="formGroupName">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
        </section>
        <section className="inputCodeNumber">
          <Form.Group controlId="formGroupNumber">
            <Form.Label>Código de trabajador</Form.Label>
            <Form.Control type="number" />
          </Form.Group>
        </section>
        <section className="inputZoneNumber">
          <Form.Group controlId="formGroupNumber">
            <Form.Label>Código de zona</Form.Label>
            <Form.Control type="number" />
          </Form.Group>
        </section>
        <section className="paula-consultaCodigo">
          <InputGroup className="mb-3 input-group m-auto">
            <p className="mb-0">Consulta el código de zona</p>
            <InputGroup.Text className="border-0 bg-transparent text-danger">
              <i class="fas fa-search"></i>
            </InputGroup.Text>
          </InputGroup>
        </section>
        <section className="btnAgregar">
          <button type="submit" className="btn btn-primary btn-block">
            Agregar cliente
          </button>
        </section>
      </Form>
    </>
  );
};

import React, { useState } from "react";
import dataJson from "../../data.json";
import { CardProduct } from "./CardProduct";
//Imagenes menu
import aceites from '../../images/aceites.svg';
import conservas from '../../images/conservas.svg';
import detergentes from '../../images/detergentes.svg';
import jabones from '../../images/jabones.svg';
import pastas from '../../images/pastas.svg';
//React-bootstrap
import { FormControl, InputGroup } from "react-bootstrap";

export const ProductContainer = () => {
  const data = dataJson.products;

  const firstView = data.filter((elem) => elem.type === "Promociones");
  const [products, setProducts] = useState(firstView);

  const productsType = (option) => {
    // eslint-disable-next-line default-case
    switch (option) {
      case "aceites":
        const aceites = data.filter((elem) => elem.type === option);
        setProducts(aceites);
        break;
      case "conservas":
        const conservas = data.filter((elem) => elem.type === option);
        setProducts(conservas);
        break;
      case "pastas":
        const pastas = data.filter((elem) => elem.type === option);
        setProducts(pastas);
        break;
      case "Detergentes":
        const detergentes = data.filter((elem) => elem.type === option);
        setProducts(detergentes);
        break;
      case "Jabones":
        const jabones = data.filter((elem) => elem.type === option);
        setProducts(jabones);
      break;
    }
  };
  return (
    <section className="w-100 mt-4">
      <InputGroup className="mb-3 input-group m-auto" id="searchNancy">
        <FormControl
          className="border-0 bg-transparent"
          placeholder="Encuentra tu producto aquí..."
          aria-label="Encuentra tu producto aquí..."
          aria-describedby="basic-addon2"
        />
        <InputGroup.Text className="border-0 bg-transparent text-danger">
          <i class="fas fa-search"></i>
        </InputGroup.Text>
      </InputGroup>
      <section className="menuArea">
        <button className="btnMenu">
          <img
            className="menuImg"
            alt="aceites"
            src={aceites}
            onClick={() => productsType("aceites")}
          />
          <p>Aceites</p>
        </button>
        <button className="btnMenu">
          <img
            className="menuImg"
            alt="conservas"
            src={conservas}
            onClick={() => productsType("conservas")}
          />
          <p>Conservas</p>
        </button>
        <button className="btnMenu">
          <img
            className="menuImg"
            alt="pastas"
            src={pastas}
            onClick={() => productsType("pastas")}
          />
          <p>Pastas</p>
        </button>
        <button className="btnMenu">
          <img
            className="menuImg"
            alt="Detergentes"
            src={detergentes}
            onClick={() => productsType("Detergentes")}
          />
          <p>Detergentes</p>
        </button>
        <button className="btnMenu">
          <img
            className="menuImg"
            alt="Jabones"
            src={jabones}
            onClick={() => productsType("Jabones")}
          />
          <p>Jabones</p>
        </button>
      </section>
      <article id="merywrap" className="w-100 d-flex ">
        {products.map((product) => (
          <CardProduct product={product} />
        ))}
      </article>
    </section>
  );
};



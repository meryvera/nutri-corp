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
      case "Promociones":
        const promotions = data.filter((elem) => elem.type === option);
        setProducts(promotions);
        break;
      case "Abarrotes":
        const abarrotes = data.filter((elem) => elem.type === option);
        setProducts(abarrotes);
        break;
      case "Frutas y verduras":
        const fruitsVeggie = data.filter((elem) => elem.type === option);
        setProducts(fruitsVeggie);
        break;
      case "Congelados":
        const frozen = data.filter((elem) => elem.type === option);
        setProducts(frozen);
        break;
      case "Conservas":
        const preserved = data.filter((elem) => elem.type === option);
        setProducts(preserved);
        break;
      case "Higiene":
        const hygiene = data.filter((elem) => elem.type === option);
        setProducts(hygiene);
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



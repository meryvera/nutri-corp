import React, { useState, useEffect } from "react";
//import dataJson from "../../data.json";
import { CardProduct } from "./CardProduct";
//Imagenes menu
import aceites from '../../images/aceites.svg';
import conservas from '../../images/conservas.svg';
import detergentes from '../../images/detergentes.svg';
import jabones from '../../images/jabones.svg';
import pastas from '../../images/pastas.svg';
//React-bootstrap
import { FormControl, InputGroup } from "react-bootstrap";
import { readAllProducts } from '../../firebase/firestore'

export const ProductContainer = () => {
  // const data = dataJson.products;
  const [products, setProducts] = useState([])
  console.log(products);

  // const [list, setList] = React.useState([]);


  useEffect(() => {
    readAllProducts(setProducts);
  }, []);

  // const firstView = products.filter((elem) => elem.type === "Aceites");
  // console.log(firstView)
  // setList(firstView)

  //const firstView = products.filter((elem) => elem.type === "Aceites");
  // const [products, setProducts] = useState(firstView);

  const productsType = (option) => {
    // eslint-disable-next-line default-case
    switch (option) {
      case "Aceites":
        const aceites = products.filter((elem) => elem.type === option);
        setProducts(aceites);
        break;
      case "Conservas":
        const conservas = products.filter((elem) => elem.type === option);
        setProducts(conservas);
        break;
      case "Pastas":
        const pastas = products.filter((elem) => elem.type === option);
        setProducts(pastas);
        break;
      case "Detergentes":
        const detergentes = products.filter((elem) => elem.type === option);
        setProducts(detergentes);
        break;
      case "Jabones":
        const jabones = products.filter((elem) => elem.type === option);
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
            onClick={() => productsType("Aceites")}
          />
          <p>Aceites</p>
        </button>
        <button className="btnMenu">
          <img
            className="menuImg"
            alt="conservas"
            src={conservas}
            onClick={() => productsType("Conservas")}
          />
          <p>Conservas</p>
        </button>
        <button className="btnMenu">
          <img
            className="menuImg"
            alt="pastas"
            src={pastas}
            onClick={() => productsType("Pastas")}
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

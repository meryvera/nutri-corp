import React, { useEffect } from "react";
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

export const ProductContainer = ({dispatch}) => {

  const [productCategory, setProductCategory] = React.useState([]);

  const [type, setType] = React.useState("Aceites")

  useEffect(() => {
    const cb = (products) => {
      const firstView = products.filter((elem) => elem.type === type);
      setProductCategory(firstView)
    };   
    readAllProducts(cb);
  }, [type]);


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
            alt="Aceites"
            src={aceites}
            onClick={() => setType("Aceites")}
          />
          <p>Aceites</p>
        </button>
        <button className="btnMenu">
          <img
            className="menuImg"
            alt="Conservas"
            src={conservas}
            onClick={() => setType("Conservas")}
          />
          <p>Conservas</p>
        </button>
        <button className="btnMenu">
          <img
            className="menuImg"
            alt="Pastas"
            src={pastas}
            onClick={() => setType("Pastas")}
          />
          <p>Pastas</p>
        </button>
        <button className="btnMenu">
          <img
            className="menuImg"
            alt="Detergentes"
            src={detergentes}
            onClick={() => setType("Detergentes")}
          />
          <p>Detergentes</p>
        </button>
        <button className="btnMenu">
          <img
            className="menuImg"
            alt="Jabones"
            src={jabones}
            onClick={() => setType("Jabones")}
          />
          <p>Jabones</p>
        </button>
      </section>
      <article id="merywrap" className="w-100 d-flex ">
        {productCategory.map((product) => (
          <CardProduct dispatch={dispatch} product={product} />
        ))}
      </article>
    </section>
  );
};

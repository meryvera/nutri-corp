import React, {useState} from "react";
import dataJson from "../../data.json";
import { Card, Button } from "react-bootstrap";

const ProductContainer = () => {
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
  return( 
    <section className='w-100 pt-5 mt-5'>
      <article className='w-30'>
      <nav>
        <ul>
            <div>
              <li onClick={() => productsType("Promociones")}>Promociones</li>
              <li onClick={() => productsType("Abarrotes")}>Abarrotes</li>
              <li onClick={() => productsType("Frutas y verduras")}>
                Frutas y verduras
              </li>
              <li onClick={() => productsType("Congelados")}>Congelados</li>
              <li onClick={() => productsType("Conservas")}>Conservas</li>
              <li onClick={() => productsType("Higiene")}>Higiene</li>
            </div>
          </ul>
        </nav>
      </article>
      <article className='w-60'>
          {products.map((product) => (
            <Card key={product.id} style={{ width: '18rem' }}>
              <Card.Img variant="top" src={product.img} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.price}</Card.Text>
                <Button variant="primary">Agregar</Button>
              </Card.Body>
            </Card>
          ))}
      </article>
    </section>
  );
};

export default ProductContainer;

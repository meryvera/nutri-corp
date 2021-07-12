import React, {useState} from "react";
import dataJson from "../../data.json";
import { Card, Button, FormControl, InputGroup } from "react-bootstrap";


// Imagenes menu
import aceites from '../../images/aceites.svg';
import conservas from '../../images/conservas.svg';
import detergentes from '../../images/detergentes.svg';
import jabones from '../../images/jabones.svg';
import pastas from '../../images/pastas.svg';

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
      <article className='w-30 abs-center'>
      <nav>

      <InputGroup className="mb-3 input-group m-auto" id='searchNancy'>
        <FormControl
          
          className='border-0 bg-transparent'
          placeholder="Encuentra tu producto aquí..."
          aria-label="Encuentra tu producto aquí..."
          aria-describedby="basic-addon2"
        />
        <InputGroup.Text className='border-0 bg-transparent text-danger' >
        🔍︎
        </InputGroup.Text>
      </InputGroup>

        <section className='menuArea'>
          <button className='btnMenu'>
            <img className="menuImg" alt="aceites" src={aceites}
            onClick={() => productsType("aceites")}/>
            <p>Aceites</p>
          </button>
          <button className='btnMenu'>
            <img className="menuImg" alt="conservas" src={conservas}
            onClick={() => productsType("conservas")}/>
            <p>Conservas</p>
          </button>
          <button className='btnMenu'>
            <img className="menuImg" alt="pastas" src={pastas}
            onClick={() => productsType("pastas")}/>
            <p>Pastas</p>
          </button>
          <button className='btnMenu'>
            <img className="menuImg" alt="Detergentes" src={detergentes}
            onClick={() => productsType("Detergentes")}/>
            <p>Detergentes</p>
          </button>
          <button className='btnMenu'>
            <img className="menuImg" alt="Jabones" src={jabones}
            onClick={() => productsType("Jabones")}/>
            <p>Jabones</p>
          </button>
        </section>
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

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
 return (
   <section className="w-100 pt-5 mt-5">
     <article className="w-30">
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
     <article id="merywrap" className="w-100 d-flex ">
       {products.map((product) => (
         <div
           key={product.id}
           id="merycards"
           className="border border-secondary m-3 p-4"
           style={{ width: "30rem" }}
         >
           <div className="w-50 me-3">
             <Card.Img className="py-4" variant="top" src={product.img} />
             {/* <figure className='w-2 py-4'>
                  <img src={product.img} />
                </figure> */}
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
             <h4 className="fw-bold text-center h-2">{product.name}</h4>
             <p className="mb-0">Filete atún primor.170 gr</p>
             <p>Cantidad: 48 ltas</p>
             <p>Precio: s/ {product.price}</p>
             <p>Precio Sugerido: s/ {product.price}</p>
             <Button id="merybutton2" className="d-block m-auto px-4">
               AGREGAR 🛒
             </Button>
             <Button id="merybutton3" className="d-block m-auto px-4">
               AGREGAR 🛒
             </Button>
           </div>
         </div>
       ))}
     </article>
   </section>
 );
};

export default ProductContainer;

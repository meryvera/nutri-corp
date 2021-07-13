import React, {useReducer} from 'react';
import { Header } from '../Header';
import { ProductContainer } from "./ProductsContainer";
import { reducer, initialState } from "../../reducer/reducer";

const Home = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <Header state={state}/>
      <ProductContainer dispatch={dispatch}/>
    </>
  );
}

export default Home;



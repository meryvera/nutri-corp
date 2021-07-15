import React, { useReducer } from "react";
import { Header } from "../Header";
import { ProductContainer } from "./ProductsContainer";
import { reducer, initialState } from "../../reducer/reducer";

const Home = ({ user, setUser }) => {
console.log(":(", user)
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <Header
        className="sticky-top"
        state={state}
        user={user}
        setUser={setUser}
      />
      <ProductContainer dispatch={dispatch} />
      <footer className="bri-footer"> Saldo disponible S/ 300.00 </footer>;
    </>
  );
};

export default Home;

import "./App.css";
import "./styles/briceyda.css";
import "./styles/brighit.css";
import "./styles/mery.css";
import "./styles/nancy.css";
import "./styles/paula.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./components/home/Home";
import { ShoppingCart } from "./components/shopping/ShoppingCart";
import { Login } from "./components/home/Login.js";
import { fb } from "./firebase/firebase";
import React, { useState } from "react";
import { ShoppingUser } from "./components/shopping/ShoppingUser"
import { ShoppingClient } from "./components/shopping/ShoppingClient"

function App() {
  const [user, setUser] = useState(null);

  fb.auth().onAuthStateChanged((user) => {
    if (user) setUser(user);
  });

  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (user ? <Redirect to="/productos" /> : <Login />)}
        />
        <Route exact path="/productos">
          <Home user={user} setUser={setUser} />
        </Route>
        <Route path="/compras" component={ShoppingCart} />
        <Route path="/usuario" component={ShoppingUser} />
        <Route path="/cliente" component={ShoppingClient} />
      </Switch>
    </Router>
  );
}

export default App;

import './App.css';
import './styles/briceyda.css';
import './styles/brighit.css';
import './styles/mery.css';
import './styles/nancy.css';
import './styles/paula.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/home/Home';
import { ShoppingCart } from './components/shopping/ShoppingCart';
import { Login } from "./components/home/Login.js";

function App() {
  return (
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/productos" component={Home} />
          <Route path="/compras" component={ShoppingCart} />
        </Switch>
      </Router>
  );
}

export default App;

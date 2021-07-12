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

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;

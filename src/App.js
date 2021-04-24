
import './App.css';
import Menu from './components/menu';
import Inicio from './components/Inicio';
import Nosotros from './components/nosotros';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div class="container">
      <Menu />        
        <Switch>
          <Route path="/nosotros">
            <Nosotros />            
          </Route>
          <Route path="/" exact>
            <Inicio />
          </Route>
        </Switch> 
      </div>
    </Router>
  );
}

export default App;

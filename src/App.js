import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import './App.scss';
import Foooter from './components/Foooter';
import Menu from './pages/Menu';
import Store from './pages/Store.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Header />
            <Home />
            <Foooter />
          </Route>
          <Route path="/menu">
            <Header />
            <Menu />
            <Foooter />
          </Route>
          <Route path="/store/strawberries">
            <Header />
            <Store />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import './App.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route>
            <Header />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

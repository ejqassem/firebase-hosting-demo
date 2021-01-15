import Login from './Login';
import Home from './Home';
import './App.css';
import {Switch, Route} from 'react-router';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route component={Login} path="/login"></Route>
        <Route component={Home} exact path="/"></Route>
      </Switch>
    </div>
  );
}

export default App;

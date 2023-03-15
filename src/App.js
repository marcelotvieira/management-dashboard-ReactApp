import React from 'react';
import Login from './pages/Login';
import Home from './pages/Home';
import './style/index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return <div>
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/" component={Home}/>
      </Switch>
    </BrowserRouter>
  </div>;
}

export default App;
import React from 'react';
import Login from './pages/Login';
import Home from './pages/Home';
import './style/index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import ProjectsProvider from './context/ProjectsProvider';

function App() {
  return <div>
    <BrowserRouter>
      <div className="container">
        <div className="box">
          <Header />
          <Switch>
            <ProjectsProvider>
              <Route exact path="/login" component={Login}/>
              <Route exact path="/" component={Home}/>
            </ProjectsProvider>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  </div>;
}

export default App;
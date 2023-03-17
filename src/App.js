import React from 'react';
import Login from './pages/Login';
import Home from './pages/Home';
import './style/index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ProjectsProvider from './context/ProjectsProvider';
import ClientsProvider from './context/ClientsProvider';
import ProjectPage from './pages/Projects.page';
import ClientPage from './pages/Clients.page';
import DataPage from './pages/Data.page';


function App() {

  return <div>
    <BrowserRouter>
      <div className="container">
        <div className="box">
          <Switch>
            <ProjectsProvider>
              <ClientsProvider>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/" component={Home}/>
                <Route exact path="/projects" component={ProjectPage}/>
                <Route exact path="/clients" component={ClientPage}/>
                <Route exact path="/data" component={DataPage}/>
              </ClientsProvider>
            </ProjectsProvider>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  </div>;
}

export default App;
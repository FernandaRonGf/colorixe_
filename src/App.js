import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css';
import  AppLayout  from "./app.layout";
import Login from "./components/auth/Login";
import Likes from './components/Likes';
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/css/bootstrap.min.css"
import Navigator from './components/Navigator'

function App() {
  return (
    <div className="App">
      <BrowserRouter >
      <Navigator />
      <Switch>
    
      <Route 
      exact path="/"
      component={Login}/>
      <Route 
       exact path="/colorixe"
      component={AppLayout}/> 
      <Route 
        exact path="/colorixe/favorites"
      component={Likes}/>
      </Switch>
      </BrowserRouter>
    
    </div>
  );
}

export default App;

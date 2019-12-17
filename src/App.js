import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css';
import  AppLayout  from "./app.layout";
import Login from "./components/auth/Login";
import Likes from './components/Likes'


function App() {
  return (
    <div className="App">
      <BrowserRouter >
      <Route 
      exact path="/"
      component={Login}/>
      <Route 
       exact path="/colorixe"
      component={AppLayout}/> 
      <Route 
        exact path="/colorixe/likes"
      component={Likes}/>
      </BrowserRouter>
    </div>
  );
}

export default App;

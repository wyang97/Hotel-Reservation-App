import React from 'react';
import './App.css';


import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";

import {Route, Switch} from "react-router-dom";

import Navbar from "./components/Navbar";


function App() {
  //Use switch to make sure error component doesnt show up with other pages
  return (
    <>
    <Navbar/>
    <Switch> 
      <Route path="/" component={Home}/>
      <Route path="/rooms" component={Rooms}/>
      <Route path="/single-room/:slug" component={SingleRoom}/>
      <Route component={Error}/>
    </Switch>
    
    
    </>
  );
}

export default App;

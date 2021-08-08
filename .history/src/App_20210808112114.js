import "./App.css";
import { produce } from "immer";
import React, { useState, useReducer, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Checkout from "./components/Checkout";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/checkout" exact component={Checkout} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

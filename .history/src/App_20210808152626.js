import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Buy from "./components/buy";
function App() {
  return (
    <Router>
      <div className="App">
        <Nav />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/checkout" exact component={Checkout} />
          <Route path="/buy" exact component={Buy} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

import React from "react";

import "./App.css";
import { Header } from "./components/Header";
import HomePage from "./components/HomePage";
import { Router } from "@reach/router";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <HomePage path="/" />
      </Router>
    </div>
  );
}

export default App;

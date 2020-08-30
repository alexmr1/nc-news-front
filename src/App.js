import React from "react";

import "./App.css";
import { Header } from "./components/Header";
import HomePage from "./components/HomePage";
import { Router } from "@reach/router";
import AllArticles from "./components/AllArticles";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <HomePage path="/" />
        <AllArticles path="/articles" />
        <AllArticles path="/articles/:topic" />
        <AllArticles path="/articles/topic/:sort_by" />
        {/* <AllArticles path="/articles/:sort_by" /> */}
      </Router>
    </div>
  );
}

export default App;

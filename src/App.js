import React from "react";

import "./App.css";
import { Header } from "./components/Header";
import HomePage from "./components/HomePage";
import { Router } from "@reach/router";
import AllArticles from "./components/AllArticles";
import SingleArticle from "./components/SingleArticle";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <HomePage path="/" />
        <AllArticles path="/articles" />
        <AllArticles path="/articles/:topic" />
        <AllArticles path="/articles/:topic/:sort_by" />
        <SingleArticle path="/articles/article/:id" />
      </Router>
    </div>
  );
}

export default App;

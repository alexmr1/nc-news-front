import React from "react";

import "./App.css";
import { Header } from "./components/Header";
import HomePage from "./components/HomePage";
import { Router } from "@reach/router";
import AllArticles from "./components/AllArticles";
import SingleArticle from "./components/SingleArticle";
import ArticleComments from "./components/ArticleComments";

class App extends React.Component {
  state = {
    user: "grumpy19",
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <HomePage path="/" />
          <AllArticles path="/articles" />
          <AllArticles path="/articles/:topic" />
          <SingleArticle path="/article/:id" user={this.state.user}>
            <ArticleComments path="/comments" user={this.state.user} />
          </SingleArticle>
        </Router>
      </div>
    );
  }
}

export default App;

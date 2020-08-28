import React, { Component } from "react";
import * as api from "../utils/api";
import ArticlesList from "./ArticlesList";
import { Link } from "@reach/router";

class AllArticles extends Component {
  state = { articles: [] };

  componentDidMount() {
    this.getArticles().then((articles) => {
      this.setState({ articles: articles.parsedArticles });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.topic !== this.props.topic) {
      this.getArticles(this.props.topic).then((articles) => {
        this.setState({ articles: articles.parsedArticles });
      });
    }
  }

  getArticles = (topic) => {
    return api.getArticles(topic);
  };

  render() {
    const { articles } = this.state;

    return (
      <main>
        <section>
          Sort by: <Link to="/articles/:author">Author</Link>{" "}
          <Link to="/articles/:sort_by">Date Created</Link>
        </section>
        <ArticlesList articles={articles} />
      </main>
    );
  }
}

export default AllArticles;

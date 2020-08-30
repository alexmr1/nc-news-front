import React, { Component } from "react";
import * as api from "../utils/api";
import ArticlesList from "./ArticlesList";
import { Link } from "@reach/router";

class AllArticles extends Component {
  state = { articles: [], isLoading: true, topic: "" };

  componentDidMount() {
    this.getArticles().then((articles) => {
      this.setState({ articles: articles.parsedArticles });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevState);
    console.log(prevProps);
    if (
      prevProps.topic !== this.props.topic ||
      prevState.topic !== this.props.topic ||
      prevProps.sort_by !== this.props.sort_by
    ) {
      this.getArticles(this.props.topic).then((articles) => {
        this.setState({
          articles: articles.parsedArticles,
          isLoading: false,
          topic: this.props.topic,
        });
      });
    }
  }

  getArticles = (props) => {
    // console.log(this.props);
    const { sort_by, topic } = this.props;
    return api.getArticles(sort_by, topic);
  };

  render() {
    const { articles, isLoading } = this.state;

    if (isLoading) return <h3> Articles fetching in progress!</h3>;
    return (
      <main>
        <section>
          Sort by: <Link to="/articles/topic/author">Author</Link>{" "}
          <Link to="/articles/topic/created_at">Date-Created</Link>{" "}
          <Link to="/articles/topic/comment_count"> Comments No.</Link>{" "}
          <Link to="/articles/topic/votes"> Votes</Link>{" "}
        </section>
        <ArticlesList articles={articles} />
      </main>
    );
  }
}

export default AllArticles;

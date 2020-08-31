import React, { Component } from "react";
import * as api from "../utils/api";
import ArticlesListCard from "./ArticlesListCard";

import { Link } from "@reach/router";

class AllArticles extends Component {
  state = { articles: [], isLoading: true, topic: "" };

  componentDidMount() {
    this.getArticles().then((articles) => {
      this.setState({ articles: articles.parsedArticles, isLoading: false });
    });
  }

  componentDidUpdate(prevProps, prevState) {
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
    const { topic, sort_by } = this.props;
    return api.getArticles(topic, sort_by);
  };

  render() {
    const { articles, isLoading } = this.state;

    if (isLoading) return <h3> Articles fetching in progress!</h3>;

    return (
      <main>
        <section>
          Sort by:{" "}
          <Link to={`/articles/${this.props.topic}/author`}>Author</Link>{" "}
          <Link to={`/articles/${this.props.topic}/created_at`}>
            Date-Created
          </Link>{" "}
          <Link to={`/articles/${this.props.topic}/comment_count`}>
            {" "}
            Comments No.
          </Link>{" "}
          <Link to={`/articles/${this.props.topic}/votes`}> Votes</Link>{" "}
        </section>
        {/* {this.props.children} */}
        <ArticlesListCard articles={articles} />
      </main>
    );
  }
}

export default AllArticles;

import React, { Component } from "react";
import * as api from "../utils/api";
import ArticlesListCard from "./ArticlesListCard";
import ErrorPage from "./ErrorPage";

class AllArticles extends Component {
  state = { articles: [], isLoading: true, sort_by: "created_at", err: null };

  componentDidMount() {
    this.getArticles()
      .then((articles) => {
        this.setState({ articles: articles.parsedArticles, isLoading: false });
      })
      .catch(({ response }) =>
        this.setState(
          {
            isLoading: false,
            err: { msg: response.data.msg, status: response.status },
          },
          () => console.log(response)
        )
      );
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.topic !== this.props.topic ||
      prevState.sort_by !== this.state.sort_by
    ) {
      this.getArticles(this.props.topic).then((articles) => {
        this.setState({
          articles: articles.parsedArticles,
          isLoading: false,
        });
      });
    }
  }

  getArticles = (props) => {
    const { topic } = this.props;
    const { sort_by } = this.state;
    return api.getArticles(topic, sort_by);
  };

  render() {
    const { articles, isLoading, err } = this.state;

    if (isLoading) return <h3> Articles fetching in progress!</h3>;
    if (err) return <ErrorPage {...err} />;
    return (
      <main>
        <section>
          Sort by:{" "}
          <button
            className="sortButton"
            onClick={() => this.handleClick("created_at")}
          >
            {" "}
            Published Date{" "}
          </button>
          <button
            className="sortButton"
            onClick={() => this.handleClick("comment_count")}
          >
            {" "}
            Comment No.{" "}
          </button>
          <button
            className="sortButton"
            onClick={() => this.handleClick("votes")}
          >
            {" "}
            Vote{" "}
          </button>
        </section>
        <ArticlesListCard articles={articles} />
      </main>
    );
  }

  handleClick = (sort_by) => {
    this.setState({ sort_by });
  };
}

export default AllArticles;

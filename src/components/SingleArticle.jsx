import React, { Component } from "react";
import * as api from "../utils/api";
import { Link } from "@reach/router";
import Voter from "./Voter";
import ErrorPage from "./ErrorPage";

class SingleArticle extends Component {
  state = { article: [], isLoading: true, err: null };

  componentDidMount() {
    this.getArticleById();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.id !== this.props.id ||
      prevState.article.votes !== this.state.article.votes
    ) {
      this.getArticleById();
    }
  }

  getArticleById = (props) => {
    const { id } = this.props;
    return api
      .getArticleById(id)
      .then((article) => {
        this.setState({ article, isLoading: false });
      })
      .catch(({ response }) =>
        this.setState({
          isLoading: false,
          err: { msg: response.data.msg, status: response.status },
        })
      );
  };
  render() {
    const { article, isLoading, err } = this.state;
    if (isLoading) return <h3> Article details are gathered!</h3>;
    if (err) return <ErrorPage {...err} />;
    return (
      <div>
        <section className="indArticle">
          <h3>{article.title}</h3>
          <h4>Author: {article.author}</h4>
          <p>{article.body}</p>
          <React.Fragment>
            {this.props.user ? (
              <Voter
                id={article.article_id}
                votes={article.votes}
                type={"articles"}
              />
            ) : (
              <h5>Login to vote!</h5>
            )}
          </React.Fragment>
          <h5>
            {" "}
            Comments: {article.comments_count}{" "}
            <Link to={`/article/${article.article_id}/comments`}>
              <button>View Comments</button>
            </Link>
          </h5>{" "}
        </section>
        {this.props.children}
      </div>
    );
  }
}

export default SingleArticle;

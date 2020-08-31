import React, { Component } from "react";
import * as api from "../utils/api";
import { Link } from "@reach/router";

class SingleArticle extends Component {
  state = { article: [], isLoading: true, id: "" };

  componentDidMount() {
    console.log(this.props);
    this.getArticleById(this.props.id).then((article) => {
      this.setState({ article, isLoading: false, id: this.props.id });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.id !== this.props.id || prevState.id !== this.props.id) {
      this.getArticleById(this.props.id).then((article) => {
        this.setState({ article, isLoading: false, id: this.props.id });
      });
    }
  }

  render() {
    const { article, isLoading } = this.state;
    if (isLoading) return <h3> Article details are gathered!</h3>;
    return (
      <div>
        <h3>{article.title}</h3>
        <h4>Author: {article.author}</h4>
        <p>{article.body}</p>
        <h4>Votes: {article.votes}</h4>
        <h5>
          {" "}
          Comments: {article.comments_count}{" "}
          <Link to={`/articles/article/${article.article_id}/comments`}>
            <button>View Comments</button>
          </Link>
        </h5>{" "}
      </div>
    );
  }

  getArticleById = (props) => {
    const { id } = this.props;
    return api.getArticleById(id);
  };
}

export default SingleArticle;

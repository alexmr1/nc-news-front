import React, { Component } from "react";
import * as api from "../utils/api";
import CommentsCard from "./CommentsCard";
import PostComment from "./PostComment";

class ArticleComments extends Component {
  state = { comments: [], isLoading: true };

  componentDidMount() {
    this.getArticleCommentsById(this.props.id).then((comments) => {
      this.setState({ comments, isLoading: false });
    });
  }

  getArticleCommentsById = (props) => {
    const { id } = this.props;
    return api.getArticleCommentsById(id);
  };

  render() {
    const { comments, isLoading } = this.state;
    if (isLoading) return <h4>Comments are loading!</h4>;
    console.log(comments);
    return (
      <div>
        <React.Fragment>
          <PostComment />
        </React.Fragment>
        <CommentsCard comments={this.state.comments} />
      </div>
    );
  }
}

export default ArticleComments;

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

  addComment = (newComment) => {
    this.setState((currentState) => {
      return { comments: [newComment, ...currentState.comments] };
    });
  };

  removeComment = (removedComment) => {
    this.setState((currentState) => {
      const updatedCommentsList = currentState.comments.filter(
        (comment) => comment.comment_id !== removedComment.comment_id
      );
      return { comments: updatedCommentsList };
    });
  };

  render() {
    const { comments, isLoading } = this.state;
    if (isLoading) return <h4>Comments are loading!</h4>;
    // console.log(this.props.id);
    return (
      <div>
        <React.Fragment>
          <PostComment
            addComment={this.addComment}
            article_id={this.props.id}
            user={this.props.user}
          ></PostComment>
        </React.Fragment>
        <CommentsCard
          comments={comments}
          article_id={this.props.id}
          user={this.props.user}
          removeComment={this.removeComment}
        />
      </div>
    );
  }
}

export default ArticleComments;

import React, { Component } from "react";
import * as api from "../utils/api";
import CommentsCard from "./CommentsCard";
import PostComment from "./PostComment";
import ErrorPage from "./ErrorPage";

class ArticleComments extends Component {
  state = {
    comments: [],
    isLoading: true,
    commentStatus: true,
    err: null,
  };

  componentDidMount() {
    this.getArticleCommentsById(this.props.id)
      .then((comments) => {
        this.setState({ comments, isLoading: false });
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
      return { comments: updatedCommentsList, commentStatus: false };
    });
    this.focusMethod();
    this.commentTimer();
  };

  commentTimer = () => {
    setTimeout(() => {
      this.setState(() => {
        return { commentStatus: true };
      });
    }, 2000);
  };

  focusMethod = () => {
    document.getElementById("postButton").focus();
  };

  render() {
    const { comments, isLoading, commentStatus, err } = this.state;
    if (isLoading) return <h4>Comments are loading!</h4>;
    if (err) return <ErrorPage {...err} />;
    return (
      <div>
        <React.Fragment>
          <PostComment
            addComment={this.addComment}
            article_id={this.props.id}
            user={this.props.user}
          ></PostComment>
        </React.Fragment>
        {commentStatus === false && <h4>Comment has been removed!</h4>}
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

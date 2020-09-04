import React, { Component } from "react";
import * as api from "../utils/api";

class PostComment extends Component {
  state = {
    bodyInput: "",
    bodyError: "",
  };

  render() {
    return (
      <div>
        <h5> Want to post a new comment?</h5>
        {this.props.user ? (
          <>
            <p className="loginText">
              {" "}
              You are currently logged in as: <b>{this.props.user}</b>. Please
              write your comment below!
            </p>
            <form onSubmit={this.handleSubmit}>
              <label className="commentBody" htmlFor="bodyInput">
                Comment:
              </label>
              <input
                onChange={this.handleChange}
                type="text"
                id="bodyInput"
                name="bodyInput"
                value={this.state.bodyInput}
              />
              <p style={{ fontSize: 12, color: "red" }}>
                {this.state.bodyError}
              </p>
              <button type="submit" id="postButton">
                {" "}
                Post Comment{" "}
              </button>
            </form>
          </>
        ) : (
          <p> Please login to add a comment! </p>
        )}
      </div>
    );
  }
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  validate = () => {
    let bodyError = "";
    if (!this.state.bodyInput) {
      bodyError = "Comment cannot be blank";
    }
    if (bodyError) {
      this.setState({ bodyError });
      return false;
    }
    return true;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { bodyInput } = event.target;
    const { article_id, user } = this.props;
    const isValid = this.validate();
    if (isValid) {
      api.postComment(bodyInput, article_id, user).then((comment) => {
        this.props.addComment(comment);
      });
      this.setState({
        bodyInput: "",
        bodyError: "",
      });
    }
  };
}

export default PostComment;

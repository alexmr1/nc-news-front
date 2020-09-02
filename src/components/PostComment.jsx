import React, { Component } from "react";
import * as api from "../utils/api";

class PostComment extends Component {
  state = {
    bodyInput: "",
  };

  render() {
    return (
      <div>
        <h5> Want to post a new comment?</h5>
        {this.props.user ? (
          <>
            <p>
              {" "}
              You are currently logged in as: {this.props.users}. Please write
              your comment below!
            </p>
            <form onSubmit={this.handleSubmit}>
              <label className="commentBody" htmlFor="bodyInput">
                Body:
              </label>
              <input
                onChange={this.handleChange}
                type="text"
                id="bodyInput"
                name="bodyInput"
              />
              <button type="submit"> Post Comment </button>
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
  handleSubmit = (event) => {
    event.preventDefault();
    const { bodyInput } = event.target;
    const { article_id } = this.props;

    api.postComment(bodyInput, article_id).then((comment) => {
      this.props.addComment(comment);
      this.setState({ bodyInput: "" });
    });
  };
}

export default PostComment;

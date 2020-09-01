import React, { Component } from "react";

class PostComment extends Component {
  state = {
    usernameInput: "",
    bodyInput: "",
  };

  render() {
    return (
      <div>
        <h5> Post a new comment!</h5>
        <form onSubmit={this.handleOnSubmit}>
          <label htmlFor="usernameInput">Username:</label>
          <input
            onChange={this.handleChange}
            type="text"
            id="usernameInput"
            name="usernameInput"
          />
          <label htmlFor="bodyInput">Body:</label>
          <input
            onChange={this.handleChange}
            type="text"
            id="bodyInput"
            name="bodyInput"
          />
          <button type="submit"> Post Comment </button>
        </form>
      </div>
    );
  }
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    console.log(this.state);
  };
}

export default PostComment;

import React, { Component } from "react";
import * as api from "../utils/api";

class Voter extends Component {
  state = { optimisticVotes: 0, status: "" };

  handleVote = (vote) => {
    api.patchVotes(this.props.article_id, vote, this.props.type);
    this.setState((currentState) => {
      return { optimisticVotes: currentState.optimisticVotes + vote };
    });
  };
  render() {
    const { votes } = this.props;
    const { optimisticVotes, status } = this.state;
    return (
      <section>
        <button
          onClick={
            (() => {
              this.handleVote(1);
            },
            () => {
              this.setState({ status: "Liked" });
            })
          }
          disabled={status === "Liked"}
        >
          {" "}
          <span role="img" aria-label="smiley face">
            😃
          </span>{" "}
          Like!
        </button>
        <button
          onClick={
            (() => {
              this.handleVote(-1);
            },
            () => {
              this.setState({ status: "Nah!" });
            })
          }
          disabled={status === "Nah!"}
        >
          {" "}
          <span role="img" aria-label="hand with finger pointing down">
            👇{" "}
          </span>
          Dislike!
        </button>
        Liked/Disliked: {this.state.status}
      </section>
    );
  }
}

export default Voter;

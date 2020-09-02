import React, { Component } from "react";
import * as api from "../utils/api";

class Voter extends Component {
  state = { optimisticVotes: 0, status: "" };

  handleVote = (vote) => {
    api.patchVotes(this.props.id, vote, this.props.type);
    this.setState((currentState) => {
      return { optimisticVotes: currentState.optimisticVotes + vote };
    });
  };
  render() {
    const { votes } = this.props;
    const { status } = this.state;
    return (
      <section>
        <h4>Votes: {votes + this.state.optimisticVotes}</h4>
        <button
          onClick={(event) => {
            this.handleVote(1);
            this.setState({ status: "Liked" });
          }}
          // this.setState({ status: "Liked" });

          disabled={status === "Liked"}
        >
          {" "}
          <span role="img" aria-label="smiley face">
            😃
          </span>{" "}
          Like!
        </button>
        <button
          onClick={() => {
            this.handleVote(-1);
            this.setState({ status: "Nah!" });
          }}
          disabled={status === "Nah!"}
        >
          {" "}
          <span role="img" aria-label="hand with finger pointing down">
            👇{" "}
          </span>
          Nah!
        </button>
      </section>
    );
  }
}

export default Voter;

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
    const { optimisticVotes } = this.state;
    return (
      <section>
        <h4>Votes: {votes + this.state.optimisticVotes}</h4>
        <button
          onClick={(event) => {
            this.handleVote(1);
          }}
          disabled={optimisticVotes === 1}
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
          }}
          disabled={optimisticVotes === -1}
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

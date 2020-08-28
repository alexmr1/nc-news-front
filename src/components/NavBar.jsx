import React, { Component } from "react";
import * as api from "../utils/api";
import { Link } from "@reach/router";

class NavBar extends Component {
  state = { topics: [] };

  componentDidMount() {
    this.getTopics().then((topics) => {
      this.setState({ topics });
    });
  }

  getTopics = () => {
    return api.getTopics();
  };

  render() {
    const { topics } = this.state;
    return (
      <nav>
        {topics.map((topic) => {
          return (
            <Link to="/topics/:topic">
              <button>{topic.slug}</button>
            </Link>
          );
        })}
      </nav>
    );
  }
}

export default NavBar;

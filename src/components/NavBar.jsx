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
      <nav className="navBar">
        <p> Select from the topics below</p>
        {topics.map((topic) => {
          console.log(topic);
          return (
            <Link to={`/articles/${topic.slug}`}>
              <button>{topic.slug}</button>
            </Link>
          );
        })}
      </nav>
    );
  }
}

export default NavBar;

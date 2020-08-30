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
        <Link key="Home page" to={"/"}>
          <button>Home</button>
        </Link>
        {topics.map((topic) => {
          return (
            <Link key={topic.slug} to={`/articles/${topic.slug}`}>
              <button>{topic.slug}</button>
            </Link>
          );
        })}
      </nav>
    );
  }
}

export default NavBar;

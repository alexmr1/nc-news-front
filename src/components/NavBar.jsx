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
          <button className="topicButton">Home</button>
        </Link>
        <Link key="Latest articles" to={"/articles"}>
          <button className="topicButton">Latest Articles</button>
        </Link>
        {topics.map((topic) => {
          return (
            <Link key={topic.slug} to={`/articles/${topic.slug}`}>
              <button className="topicButton">{topic.slug}</button>
            </Link>
          );
        })}
      </nav>
    );
  }
}

export default NavBar;

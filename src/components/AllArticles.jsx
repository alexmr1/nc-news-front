import React, { Component } from "react";
import * as api from "../utils/api";
import ArticlesListCard from "./ArticlesListCard";
import ReactPaginate from "react-paginate";
import ErrorPage from "./ErrorPage";

class AllArticles extends Component {
  state = {
    articles: [],
    isLoading: true,
    sort_by: "created_at",
    err: null,
    offset: 0,
    perPage: 3,
    currentPage: 0,
  };

  // this.handlePageClick=this.handlePageClick.bind(this);

  componentDidMount() {
    this.getArticles();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.topic !== this.props.topic ||
      prevState.sort_by !== this.state.sort_by
    )
      this.getArticles();
  }

  getArticles = (props) => {
    const { topic } = this.props;
    const { sort_by, offset, perPage } = this.state;
    return api
      .getArticles(topic, sort_by)
      .then((articles) => {
        const articlesData = articles.parsedArticles;
        const slicedArticles = articlesData.slice(offset, offset + perPage);

        this.setState({
          articles: slicedArticles,
          isLoading: false,
          pageCount: Math.ceil(articlesData.length / perPage),
        });
      })
      .catch(({ response }) =>
        this.setState({
          isLoading: false,
          err: { msg: response.data.msg, status: response.status },
        })
      );
  };

  handlePageClick = (clickEvent) => {
    const selectedPage = clickEvent.selected;
    const offset = selectedPage * this.state.perPage;

    this.setState(
      {
        currentPage: selectedPage,
        offset: offset,
      },
      () => this.getArticles()
    );
  };

  render() {
    const { articles, isLoading, err } = this.state;

    if (isLoading) return <h3> Articles fetching in progress!</h3>;
    if (err) return <ErrorPage {...err} />;
    return (
      <main>
        <section className="sortButtonsList">
          Sort by:{" "}
          <button
            className="sortButton"
            onClick={() => this.handleClick("created_at")}
          >
            {" "}
            Published Date{" "}
          </button>
          <button
            className="sortButton"
            onClick={() => this.handleClick("comment_count")}
          >
            {" "}
            Comment No.{" "}
          </button>
          <button
            className="sortButton"
            onClick={() => this.handleClick("votes")}
          >
            {" "}
            Votes{" "}
          </button>
        </section>
        <ArticlesListCard articles={articles} />
        <div>
          <ReactPaginate
            previousLabel={"prev"}
            nextLabel={"next"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={this.state.pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={this.handlePageClick}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
          />
        </div>
      </main>
    );
  }

  handleClick = (sort_by) => {
    this.setState({ sort_by });
  };
}

export default AllArticles;

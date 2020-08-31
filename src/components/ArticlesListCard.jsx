import React from "react";
import { Link } from "@reach/router";

const ArticlesListCard = ({ articles }) => {
  return (
    <section>
      <ul key="articlesList" className="articlesList">
        {articles.map((article) => {
          return (
            <li key={article.title} className="indArticle">
              <Link to={`/article/${article.article_id}`}>
                <h3>Title: {article.title} </h3>
              </Link>
              <h3>Author: {article.author}</h3>
              <h4>Topic: {article.topic}</h4>
              <h5>Votes: {article.votes}</h5>
              <h5>Comment Count:{article.comment_count}</h5>
              <h5>Created: {article.created_at}</h5>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default ArticlesListCard;

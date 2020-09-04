import React from "react";
import { Link } from "@reach/router";

const ArticlesListCard = ({ articles }) => {
  return (
    <section>
      <ul className="articlesList">
        {articles.map((article) => {
          const {
            title,
            article_id,
            author,
            topic,
            votes,
            comment_count,
            created_at,
          } = article;
          return (
            <li key={title} className="indArticle">
              <Link to={`/article/${article_id}`}>
                <h3>Title: {title} </h3>
              </Link>
              <h3>Author: {author}</h3>
              <h4>Topic: {topic}</h4>
              <h5>Votes: {votes}</h5>
              <h5>Comment Count:{comment_count}</h5>
              <h5>Created: {created_at}</h5>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default ArticlesListCard;

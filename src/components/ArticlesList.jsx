import React from "react";

const ArticlesList = ({ articles }) => {
  return (
    <section>
      <ul className="articlesList">
        {articles.map((article) => {
          return (
            <li key={article.title} className="articlesList">
              <h3>Title: {article.title}</h3>
              <h3>Author: {article.author}</h3>
              <h4>Topic: {article.topic}</h4>
              <h5>Created: {article.created_at}</h5>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default ArticlesList;

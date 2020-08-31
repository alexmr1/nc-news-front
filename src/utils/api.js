import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://alex-nc-news-app.herokuapp.com/api/",
});

export const getTopics = () => {
  return axiosInstance.get("/topics").then((topics) => {
    return topics.data.topics;
  });
};

export const getArticles = (topic, sort_by) => {
  return axiosInstance
    .get("/articles", { params: { sort_by, topic } })
    .then((articles) => {
      return articles.data.articles;
    });
};

export const getArticleById = (id) => {
  return axiosInstance.get(`articles/${id}`).then((article) => {
    return article.data.article;
  });
};

export const getArticleCommentsById = (id) => {
  return axiosInstance.get(`articles/${id}/comments`).then((comments) => {
    return comments.data.comments;
  });
};

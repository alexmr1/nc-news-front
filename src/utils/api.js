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

export const postComment = (bodyInput, article_id) => {
  console.log(bodyInput.value);
  return axiosInstance
    .post(`articles/${article_id}/comments`, {
      username: "grumpy19",
      body: bodyInput.value,
    })
    .then(({ data: { comment } }) => {
      console.log(comment);
      return comment;
    });
};

export const patchVotes = (article_id, vote, type) => {
  console.log(vote);
  return axiosInstance
    .patch(`/${type}/${article_id}`, { inc_votes: vote })
    .then(({ data }) => console.log(data));
};

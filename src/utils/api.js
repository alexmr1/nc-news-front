import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://alex-nc-news-app.herokuapp.com/api/",
});

export const getTopics = () => {
  return axiosInstance.get("/topics").then((topics) => {
    return topics.data.topics;
  });
};

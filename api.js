import axios from "axios";

const api = axios.create({
  baseURL: "https://my-nc-news-t13l.onrender.com/api",
});

const getArticles = () => {
  const url = "/articles";
  return api.get(url).then(({ data }) => {
    return data.articles;
  });
};

const getArticleById = (article_id) => {
  const url = `/articles/${article_id}`;
  return api.get(url).then(({ data }) => {
    return data.article;
  });
};

export { getArticles, getArticleById };

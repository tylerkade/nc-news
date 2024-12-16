import axios from "axios";

const api = axios.create({
  baseURL: "https://my-nc-news-t13l.onrender.com/api",
});

const getArticles = () => {
  let url = "/articles";
  return api.get(url).then(({ data }) => {
    return data.articles;
  });
};

export { getArticles };

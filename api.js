import axios from "axios";

const api = axios.create({
  baseURL: "https://my-nc-news-t13l.onrender.com/api",
});

const getArticles = () => {
  const endpoint = "/articles";
  return api.get(endpoint).then(({ data }) => {
    return data.articles;
  });
};

const getArticleById = (article_id) => {
  const endpoint = `/articles/${article_id}`;
  return api.get(endpoint).then(({ data }) => {
    return data.article;
  });
};

const getCommentsByArticleId = (article_id) => {
  const endpoint = `/articles/${article_id}/comments`;
  return api.get(endpoint).then(({ data }) => {
    return data.comments;
  });
};

const patchArticleVotes = (article_id, vote) => {
  const endpoint = `/articles/${article_id}`;
  return api.patch(endpoint, { inc_votes: vote }).then(({ data }) => {
    return data.article.votes;
  });
};

const addAComment = (article_id, comment) => {
  const endpoint = `/articles/${article_id}/comments`;

  return api
    .post(endpoint, comment)
    .then(({ data }) => {
      return data.comment;
    })
    .catch((err) => {
      return err;
    });
};

export {
  getArticles,
  getArticleById,
  getCommentsByArticleId,
  patchArticleVotes,
  addAComment,
};
